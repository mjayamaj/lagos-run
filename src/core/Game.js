import * as THREE from "three";
import { RendererManager } from "./Renderer.js";
import { World } from "./World.js";
import { DanfoBus } from "../entities/DanfoBus.js";
import { ObstacleManager } from "../obstacles/ObstacleManager.js";
import { inputManager } from "./Input.js";
import { audioManager } from "../audio/AudioManager.js";
import { danfoRadio } from "../audio/radio.js";
import { pidginPopup } from "../ui/PidginPopup.js";
import { HUD } from "../ui/HUD.js";
import { startNGAuth } from "../auth/startng.js";
import confetti from "canvas-confetti";

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new RendererManager(canvas);
    this.world = new World(this.renderer.scene);
    this.danfoBus = new DanfoBus();
    this.renderer.scene.add(this.danfoBus.mesh);

    this.obstacleManager = new ObstacleManager(this.renderer.scene);
    this.hud = new HUD();
    this.screens = null; // Injected by ScreensManager

    // Game state
    this.isRunning = false;
    this.isPaused = false;
    this.isGameOver = false;

    this.difficulty = localStorage.getItem("lagos_driving_mode_pref") || "normal";
    this.setDifficulty(this.difficulty);
    this.distance = 0; // Metres travelled
    this.score = 0;
    this.naira = 0;
    this.passengers = 0;
    this.health = 100;
    this.fuel = 100;

    // Route checkpoints
    this.checkpoints = [
      { name: "Oshodi Terminal", distance: 0 },
      { name: "Ojuelegba Flyover", distance: 450 },
      { name: "Maryland Bustop", distance: 1000 },
      { name: "Ikeja Under Bridge", distance: 1700 },
      { name: "Third Mainland Bridge", distance: 2600 },
      { name: "Victoria Island", distance: 3600 }
    ];
    this.checkpointIndex = 0;

    // Active Mission
    this.missions = [
      { id: "passengers", title: "Carry 8 passengers to Ikeja", current: 0, target: 8, reward: 5000 },
      { id: "dodge", title: "Dodge 15 Lagos obstacles", current: 0, target: 15, reward: 6000 },
      { id: "checkpoint", title: "Reach Maryland Bus Stop", current: 0, target: 1000, reward: 8000 }
    ];
    this.missionIndex = 0;
    this.dodgedCount = 0;

    // Timers & Power-up durations
    this.powerUpTimers = {
      generator: 0,
      jollof: 0,
      siren: 0,
      nairaMultiplier: 0,
      nepaBlackout: 0
    };

    this.lastTime = 0;
    this.lastSummary = null;

    this.setupInput();
  }

  setScreens(screens) {
    this.screens = screens;
  }

  setupInput() {
    inputManager.setHandlers({
      onLeft: () => {
        if (!this.isRunning || this.isPaused) return;
        this.danfoBus.shiftLeft();
      },
      onRight: () => {
        if (!this.isRunning || this.isPaused) return;
        this.danfoBus.shiftRight();
      },
      onBoost: (active) => {
        if (!this.isRunning || this.isPaused) return;
        if (active) {
          this.targetSpeed = this.speed + 14;
        } else {
          this.targetSpeed = Math.max(22, this.speed - 14);
        }
      },
      onBrake: (active) => {
        if (!this.isRunning || this.isPaused) return;
        if (active) {
          this.targetSpeed = Math.max(12, this.speed - 10);
        } else {
          this.targetSpeed = Math.max(22, this.speed + 5);
        }
      },
      onHorn: () => {
        audioManager.playHorn();
        this.renderer.triggerScreenShake(0.1);
      },
      onRadioToggle: () => {
        danfoRadio.nextStation();
      },
      onPauseToggle: () => {
        if (this.isRunning && !this.isGameOver) {
          this.togglePause();
        }
      }
    });

    danfoRadio.onChange((info) => {
      this.hud.updateRadioTicker(info.tickerText);
    });
  }

  setDifficulty(mode) {
    this.difficulty = mode || "normal";
    localStorage.setItem("lagos_driving_mode_pref", this.difficulty);
    if (this.difficulty === "relaxed") {
      this.baseSpeed = 16;
      this.maxSpeed = 44;
      this.maxDistanceRamp = 14;
      this.speedAccelRate = 0.005;
      this.scoreMult = 1.0;
    } else if (this.difficulty === "hardcore") {
      this.baseSpeed = 28;
      this.maxSpeed = 80;
      this.maxDistanceRamp = 35;
      this.speedAccelRate = 0.018;
      this.scoreMult = 2.0;
    } else {
      // Normal
      this.baseSpeed = 22;
      this.maxSpeed = 64;
      this.maxDistanceRamp = 22;
      this.speedAccelRate = 0.010;
      this.scoreMult = 1.3;
    }
    if (!this.isRunning) {
      this.speed = this.baseSpeed;
      this.targetSpeed = this.baseSpeed;
    }
  }

  start() {
    this.isRunning = true;
    this.isPaused = false;
    this.isGameOver = false;

    this.speed = this.baseSpeed;
    this.targetSpeed = this.baseSpeed;
    this.distance = 0;
    this.score = 0;
    this.naira = 0;
    this.passengers = 0;
    this.health = 100;
    this.fuel = 100;
    this.checkpointIndex = 0;
    this.missionIndex = 0;
    this.missions[0].current = 0;
    this.dodgedCount = 0;

    this.danfoBus.mesh.position.set(0, 0, 0);
    this.danfoBus.setLane(0);
    this.danfoBus.updateLuggage(0);
    this.danfoBus.setShield(false);
    this.danfoBus.setSiren(false);

    this.obstacleManager.clearAll();
    this.renderer.setNepaBlackout(false);

    const user = startNGAuth.getUser();
    this.hud.setPlayer(user);
    if (user && user.style) {
      this.danfoBus.applyCharacterStyle(user.style);
    }
    this.hud.show();
    this.screens.hideAllScreens();

    // Start Danfo Radio music
    danfoRadio.play();

    // Game start Pidgin toast
    pidginPopup.show("game_start", `Driver: ${user ? user.name : "Agba Driver"}`);

    this.lastTime = performance.now();
    requestAnimationFrame((t) => this.loop(t));
  }

  stop() {
    this.isRunning = false;
    this.isPaused = false;
    danfoRadio.stop();
    this.hud.hide();
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      this.screens.showScreen("pause");
    } else {
      this.screens.hideAllScreens();
      this.lastTime = performance.now();
      requestAnimationFrame((t) => this.loop(t));
    }
    return this.isPaused;
  }

  loop(currentTime) {
    if (!this.isRunning || this.isPaused) return;

    const delta = Math.min((currentTime - this.lastTime) / 1000, 0.1);
    this.lastTime = currentTime;

    this.update(delta);
    this.renderer.render();

    if (this.isRunning && !this.isGameOver) {
      requestAnimationFrame((t) => this.loop(t));
    }
  }

  update(delta) {
    // 1. Natural speed ramp-up over distance based on difficulty mode
    const distanceRamp = Math.min(this.maxDistanceRamp, this.distance * this.speedAccelRate);
    const effectiveTargetSpeed = this.targetSpeed + distanceRamp;
    this.speed += (effectiveTargetSpeed - this.speed) * Math.min(1, 1.5 * delta);

    // 2. Forward movement
    const stepZ = this.speed * delta;
    this.danfoBus.mesh.position.z += stepZ;
    this.distance += stepZ;
    this.score += stepZ * 1.5 * this.scoreMult;

    // 3. Relaxed fuel drain (lasts ~4.5 minutes on full tank)
    const fuelRate = (this.powerUpTimers.jollof > 0 ? 0.7 : 0.35);
    this.fuel = Math.max(0, this.fuel - fuelRate * delta);

    if (this.fuel < 20 && Math.random() < 0.008) {
      pidginPopup.show("fuel_low");
    }

    // Check game over
    if (this.fuel <= 0) {
      this.triggerGameOver("Fuel Finished! Tank Empty ⛽");
      return;
    }
    if (this.health <= 0) {
      this.triggerGameOver("Bus Health Depleted 💥");
      return;
    }

    // 4. Update power-up timers
    this.updatePowerUpTimers(delta);

    // 5. Update Danfo Bus physics & animation
    this.danfoBus.update(delta, this.speed);

    // 6. Update World scrolling
    this.world.update(this.danfoBus.mesh.position.z, this.speed, delta);

    // 7. Update Obstacles & Collisions
    this.obstacleManager.update(
      delta,
      this.danfoBus.mesh.position.z,
      this.speed,
      this.danfoBus,
      {
        onObstacleHit: (type) => this.handleObstacleHit(type),
        onObstacleBash: (type) => this.handleObstacleBash(type),
        onPowerUp: (type) => this.handlePowerUp(type),
        onPassengerPickup: () => this.handlePassengerPickup(),
        onDodge: (type) => this.handleDodge(type)
      }
    );

    // 8. Update Camera with screen shake
    this.renderer.updateCamera(this.danfoBus.mesh.position, delta);

    // 9. Checkpoint Progress
    this.updateCheckpoints();

    // 10. Update HUD
    const curCp = this.checkpoints[this.checkpointIndex];
    const nxtCp = this.checkpoints[Math.min(this.checkpoints.length - 1, this.checkpointIndex + 1)];
    const segmentLen = Math.max(1, nxtCp.distance - curCp.distance);
    const cpProgress = (this.distance - curCp.distance) / segmentLen;

    this.hud.update({
      speed: this.speed,
      health: this.health,
      fuel: this.fuel,
      score: this.score,
      naira: this.naira,
      passengers: this.passengers,
      dodgedCount: this.dodgedCount,
      checkpointCurrent: curCp.name,
      checkpointNext: nxtCp.name,
      checkpointProgress: cpProgress,
      activeMission: this.missions[this.missionIndex]
    });
  }

  updatePowerUpTimers(delta) {
    // Generator Invincibility Boost
    if (this.powerUpTimers.generator > 0) {
      this.powerUpTimers.generator -= delta;
      if (this.powerUpTimers.generator <= 0) {
        this.danfoBus.setShield(false);
      }
    }

    // Jollof Turbo Boost
    if (this.powerUpTimers.jollof > 0) {
      this.powerUpTimers.jollof -= delta;
      if (this.powerUpTimers.jollof <= 0) {
        this.targetSpeed = 22;
      }
    }

    // Siren Escort Convoy
    if (this.powerUpTimers.siren > 0) {
      this.powerUpTimers.siren -= delta;
      if (this.powerUpTimers.siren <= 0) {
        this.danfoBus.setSiren(false);
      }
    }

    // 2x Naira multiplier
    if (this.powerUpTimers.nairaMultiplier > 0) {
      this.powerUpTimers.nairaMultiplier -= delta;
    }

    // NEPA Blackout
    if (this.powerUpTimers.nepaBlackout > 0) {
      this.powerUpTimers.nepaBlackout -= delta;
      if (this.powerUpTimers.nepaBlackout <= 0) {
        this.renderer.setNepaBlackout(false);
      }
    }
  }

  handleObstacleHit(type) {
    // 1. FATAL ROAD BLOCKS: Stop the game immediately and prompt to start again
    const isFatalRoadBlock = (type === "broken_truck" || type === "police_checkpoint" || type === "traffic_jam");

    if (isFatalRoadBlock) {
      this.renderer.triggerScreenShake(0.85);
      this.speed = 0;
      this.health = 0;
      audioManager.playPothole();

      let crashReason = "YOU HIT A ROAD BLOCK! 🚧";
      if (type === "broken_truck") {
        crashReason = "Slammed into Stalled Broken Trailer! 🚛";
        pidginPopup.show("pothole", "Direct collision with broken-down truck!");
      } else if (type === "police_checkpoint") {
        crashReason = "Crashed into Police Barricade! 👮🏾‍♂️";
        audioManager.playSiren();
        pidginPopup.show("police_checkpoint", "You hit police checkpoint barricade!");
      } else if (type === "traffic_jam") {
        crashReason = "Slammed into Go-Slow Traffic Jam! 🚗";
        pidginPopup.show("traffic_jam", "Direct collision with go-slow cars!");
      }

      setTimeout(() => {
        this.triggerGameOver(crashReason);
      }, 250);
      return;
    }

    // 2. NON-FATAL ROAD HAZARDS: Deduct health, shake camera, and play audio — but KEEP DRIVING!
    let damage = 25;
    let toastMsg = "Road hazard impact!";
    let fatalMsg = "Bus Health Depleted 💥";

    if (type === "pothole") {
      damage = 25;
      toastMsg = "Oshodi pothole! -25% Health 🕳️";
      fatalMsg = "Engine Smashed by Oshodi Pothole! 🕳️";
      audioManager.playPothole();
      this.renderer.triggerScreenShake(0.35);
      this.speed = Math.max(14, this.speed - 6);
    } else if (type === "flood") {
      damage = 20;
      toastMsg = "Kuramo flood splash! -20% Health 🌊";
      fatalMsg = "Engine Drowned by Flood Waters! 🌊";
      audioManager.playSplash();
      this.danfoBus.triggerSpin();
      this.renderer.triggerScreenShake(0.3);
    } else if (type === "okada") {
      damage = 25;
      toastMsg = "Okada bike scrape! -25% Health 🏍️";
      fatalMsg = "Wrecked by Okada Collision! 🏍️";
      audioManager.playHorn();
      this.renderer.triggerScreenShake(0.35);
    } else if (type === "market_hawker") {
      damage = 20;
      toastMsg = "Market hawker bump! -20% Health 🧺";
      fatalMsg = "Crashed into Market Stalls! 🧺";
      audioManager.playPothole();
      this.renderer.triggerScreenShake(0.3);
    } else if (type === "fuel_scarcity") {
      damage = 25;
      toastMsg = "Jerrycan barricade bump! -25% Health ⛽";
      fatalMsg = "Smashed into Fuel Queue! ⛽";
      audioManager.playPothole();
      this.renderer.triggerScreenShake(0.35);
    } else if (type === "nepa_outage") {
      damage = 20;
      toastMsg = "NEPA pole bump! -20% Health 💡";
      fatalMsg = "Crashed in NEPA Total Darkness! 💡";
      audioManager.playNepa();
      this.renderer.triggerScreenShake(0.3);
    }

    this.health = Math.max(0, this.health - damage);
    pidginPopup.show("pothole", `${toastMsg} (${this.health}% Health Left)`);

    // Only stop game if bus health reaches 0%
    if (this.health <= 0) {
      this.speed = 0;
      setTimeout(() => {
        this.triggerGameOver(fatalMsg);
      }, 250);
    }
  }

  handleDodge(type) {
    this.dodgedCount++;
    // Dodging blocks directly increases score and builds high scores
    this.score += 250;

    const activeM = this.missions[this.missionIndex];
    if (activeM && activeM.id === "dodge") {
      activeM.current = this.dodgedCount;
      if (activeM.current >= activeM.target) {
        this.completeMission(activeM);
      }
    }
  }

  handleObstacleBash(type) {
    // When powered up with Tiger generator or VIP siren pass!
    this.renderer.triggerScreenShake(0.2);
    this.score += 400;
    pidginPopup.show("power_up_generator", `Bashed through ${type}!`);
    this.onDodgeOrBash();
  }

  handlePowerUp(type) {
    audioManager.playPowerUp();

    switch (type) {
      case "power_fuel":
        this.fuel = Math.min(100, this.fuel + 45);
        pidginPopup.show("power_up_fuel", "+45% Fuel Tank!");
        break;

      case "power_generator":
        this.powerUpTimers.generator = 8.0;
        this.danfoBus.setShield(true);
        pidginPopup.show("power_up_generator", "Tiger Generator Shield (8s)!");
        break;

      case "power_purewater":
        this.health = Math.min(100, this.health + 35);
        pidginPopup.show("power_up_purewater", "+35% Bus Health Restored!");
        break;

      case "power_jollof":
        this.powerUpTimers.jollof = 6.0;
        this.targetSpeed = this.speed + 22;
        pidginPopup.show("power_up_jollof", "Party Jollof Turbo Boost!");
        break;

      case "power_naira":
        this.powerUpTimers.nairaMultiplier = 12.0;
        const instantBonus = 3000;
        this.naira += instantBonus;
        pidginPopup.show("power_up_naira", `+₦${instantBonus} & 2x Multiplier Active!`);
        break;

      case "conductor_drama":
        this.naira += 1000;
        this.score += 500;
        audioManager.playCoin();
        pidginPopup.show("naira_collected", "+₦1,000 Conductor change picked! 🪙");
        break;

      case "power_siren":
        this.powerUpTimers.siren = 9.0;
        this.danfoBus.setSiren(true);
        pidginPopup.show("power_up_siren", "VIP Siren Escort Active!");
        break;
    }
  }

  handlePassengerPickup() {
    this.passengers++;
    const mult = this.powerUpTimers.nairaMultiplier > 0 ? 2 : 1;
    const fare = 1500 * mult;
    this.naira += fare;
    this.score += 500 * mult;

    audioManager.playPassengerOwa();
    this.danfoBus.updateLuggage(this.passengers);
    pidginPopup.show("passenger_pickup", `+${fare} Naira fare collected!`);

    // Check mission progress
    const activeM = this.missions[this.missionIndex];
    if (activeM && activeM.id === "passengers") {
      activeM.current = this.passengers;
      if (activeM.current >= activeM.target) {
        this.completeMission(activeM);
      }
    }
  }

  onDodgeOrBash() {
    this.dodgedCount++;
    const activeM = this.missions[this.missionIndex];
    if (activeM && activeM.id === "dodge") {
      activeM.current = this.dodgedCount;
      if (activeM.current >= activeM.target) {
        this.completeMission(activeM);
      }
    }
  }

  updateCheckpoints() {
    const nextCpIdx = this.checkpointIndex + 1;
    if (nextCpIdx < this.checkpoints.length) {
      const nextCp = this.checkpoints[nextCpIdx];
      if (this.distance >= nextCp.distance) {
        this.checkpointIndex = nextCpIdx;
        this.fuel = Math.min(100, this.fuel + 30);
        this.naira += 5000;
        this.score += 2500;

        audioManager.playCoin();
        pidginPopup.show("checkpoint_reached", `${nextCp.name} Reached! +₦5,000 Bonus!`);

        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });

        // Check mission
        const activeM = this.missions[this.missionIndex];
        if (activeM && activeM.id === "checkpoint") {
          activeM.current = this.distance;
          if (activeM.current >= activeM.target) {
            this.completeMission(activeM);
          }
        }
      }
    }
  }

  completeMission(mission) {
    this.naira += mission.reward;
    this.score += mission.reward;
    pidginPopup.show("high_score", `Mission Complete: ${mission.title}! +₦${mission.reward}`);
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.5 }
    });

    this.missionIndex = (this.missionIndex + 1) % this.missions.length;
    this.missions[this.missionIndex].current = 0;
  }

  checkHealthAndFuel() {
    if (this.health <= 0 || this.fuel <= 0) {
      this.triggerGameOver();
    }
  }

  async triggerGameOver(reason = "Lagos Obstacle Collision 💥") {
    if (this.isGameOver) return;
    this.isGameOver = true;
    this.isRunning = false;

    danfoRadio.stop();
    this.hud.hide();

    const curCp = this.checkpoints[this.checkpointIndex];
    const summary = {
      score: this.score,
      naira: this.naira,
      passengers: this.passengers,
      bestRoute: curCp.name,
      dodgedCount: this.dodgedCount,
      dodges: this.dodgedCount,
      distance: this.distance,
      crashReason: reason
    };

    // Save score with Start.ng authentication system
    const result = await startNGAuth.saveScore(summary);
    summary.isNewHigh = result ? result.isNewHigh : false;

    this.lastSummary = summary;
    this.screens.showGameOver(summary);
  }
}
