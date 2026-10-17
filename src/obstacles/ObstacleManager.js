import * as THREE from "three";
import { pidginPopup } from "../ui/PidginPopup.js";
import { audioManager } from "../audio/AudioManager.js";

export class ObstacleManager {
  constructor(scene) {
    this.scene = scene;
    this.activeItems = [];
    this.pools = {};
    this.laneWidth = 3.6;

    // Spawn timing & beat sync
    this.spawnTimer = 0;
    this.spawnInterval = 1.6; // Seconds between spawns, decreases with speed
    this.lastSpawnZ = 0;
    this.beatPulsePending = false;

    // Beat clock listener
    audioManager.onBeat((beatInfo) => {
      if (beatInfo.isBar) {
        this.beatPulsePending = true;
      }
    });

    this.initPools();
  }

  initPools() {
    this.types = [
      "pothole",
      "flood",
      "traffic_jam",
      "police_checkpoint",
      "fuel_scarcity",
      "nepa_outage",
      "okada",
      "conductor_drama",
      "market_hawker",
      "broken_truck",
      // Power-ups
      "power_fuel",
      "power_generator",
      "power_purewater",
      "power_jollof",
      "power_naira",
      "power_siren",
      // Bus stop passenger pickup
      "passenger_stop"
    ];

    this.types.forEach((type) => {
      this.pools[type] = [];
    });
  }

  // Object pooling: get from pool or build new
  getItem(type) {
    if (this.pools[type] && this.pools[type].length > 0) {
      const item = this.pools[type].pop();
      item.mesh.visible = true;
      return item;
    }
    return this.createItem(type);
  }

  recycleItem(item) {
    item.mesh.visible = false;
    item.collected = false;
    item.hit = false;
    item.dodged = false;
    if (this.pools[item.type] && !this.pools[item.type].includes(item)) {
      this.pools[item.type].push(item);
    }
  }

  createItem(type) {
    let mesh = new THREE.Group();
    let colliderSize = { w: 2.2, h: 2.0, d: 2.5 };
    let isPowerUp = false;
    let isPassenger = false;

    switch (type) {
      case "pothole": {
        // Dark cracked road depression
        const potGeo = new THREE.CylinderGeometry(1.0, 1.1, 0.08, 10);
        const potMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
        const pot = new THREE.Mesh(potGeo, potMat);
        pot.position.y = 0.04;
        mesh.add(pot);

        // Warning cone next to pothole
        const coneGeo = new THREE.ConeGeometry(0.25, 0.7, 8);
        const coneMat = new THREE.MeshLambertMaterial({ color: 0xff5722 });
        const cone = new THREE.Mesh(coneGeo, coneMat);
        cone.position.set(0.75, 0.35, 0);
        mesh.add(cone);
        colliderSize = { w: 1.8, h: 0.8, d: 1.8 };
        break;
      }

      case "flood": {
        // Reflective water surface
        const floodGeo = new THREE.PlaneGeometry(2.4, 4.0);
        floodGeo.rotateX(-Math.PI / 2);
        const floodMat = new THREE.MeshStandardMaterial({
          color: 0x1976d2,
          roughness: 0.1,
          metalness: 0.7,
          transparent: true,
          opacity: 0.8
        });
        const flood = new THREE.Mesh(floodGeo, floodMat);
        flood.position.y = 0.05;
        mesh.add(flood);
        colliderSize = { w: 2.1, h: 0.8, d: 3.5 };
        break;
      }

      case "traffic_jam": {
        // Civilian car blocking lane (Peugeot 504 / Sedan)
        const carColors = [0x1565c0, 0xd32f2f, 0x455a64, 0xf57c00];
        const carGeo = new THREE.BoxGeometry(1.8, 1.2, 4.0);
        const carMat = new THREE.MeshLambertMaterial({
          color: carColors[Math.floor(Math.random() * carColors.length)]
        });
        const car = new THREE.Mesh(carGeo, carMat);
        car.position.y = 0.7;
        car.castShadow = true;
        mesh.add(car);

        // Cabin
        const cabinGeo = new THREE.BoxGeometry(1.6, 0.75, 2.0);
        const glassMat = new THREE.MeshStandardMaterial({ color: 0x222222, opacity: 0.8 });
        const cabin = new THREE.Mesh(cabinGeo, glassMat);
        cabin.position.set(0, 1.4, -0.2);
        mesh.add(cabin);

        colliderSize = { w: 1.9, h: 1.8, d: 4.0 };
        break;
      }

      case "police_checkpoint": {
        // Police barricade with Stop sign
        const barGeo = new THREE.BoxGeometry(2.2, 0.3, 0.2);
        const barMat = new THREE.MeshLambertMaterial({ color: 0xd32f2f });
        const bar = new THREE.Mesh(barGeo, barMat);
        bar.position.y = 1.0;
        mesh.add(bar);

        // Legs
        [-0.9, 0.9].forEach(lx => {
          const leg = new THREE.Mesh(
            new THREE.CylinderGeometry(0.07, 0.07, 1.2, 6),
            new THREE.MeshLambertMaterial({ color: 0x222222 })
          );
          leg.position.set(lx, 0.6, 0);
          mesh.add(leg);
        });

        // Police officer standing by
        const offGroup = new THREE.Group();
        offGroup.position.set(0.95, 0, 0);
        const body = new THREE.Mesh(
          new THREE.BoxGeometry(0.4, 0.8, 0.28),
          new THREE.MeshLambertMaterial({ color: 0x1a237e }) // Black/Navy uniform
        );
        body.position.y = 0.9;
        offGroup.add(body);

        const head = new THREE.Mesh(
          new THREE.BoxGeometry(0.28, 0.28, 0.28),
          new THREE.MeshLambertMaterial({ color: 0x4a2e1b })
        );
        head.position.y = 1.45;
        offGroup.add(head);

        const beret = new THREE.Mesh(
          new THREE.BoxGeometry(0.32, 0.12, 0.32),
          new THREE.MeshLambertMaterial({ color: 0x111111 })
        );
        beret.position.y = 1.62;
        offGroup.add(beret);
        mesh.add(offGroup);

        colliderSize = { w: 2.1, h: 1.8, d: 1.2 };
        break;
      }

      case "fuel_scarcity": {
        // Queue of yellow & black jerrycans narrowing lane
        for (let j = 0; j < 3; j++) {
          const canGeo = new THREE.BoxGeometry(0.45, 0.6, 0.35);
          const canMat = new THREE.MeshLambertMaterial({ color: 0xfbc02d });
          const can = new THREE.Mesh(canGeo, canMat);
          can.position.set(-0.55 + j * 0.55, 0.3, 0);
          mesh.add(can);
        }
        colliderSize = { w: 1.9, h: 1.0, d: 1.2 };
        break;
      }

      case "nepa_outage": {
        // Trigger totem for NEPA light blackout
        const poleGeo = new THREE.CylinderGeometry(0.12, 0.12, 3.8, 6);
        const pole = new THREE.Mesh(poleGeo, new THREE.MeshLambertMaterial({ color: 0x3e2723 }));
        pole.position.y = 1.9;
        mesh.add(pole);

        const lightBulb = new THREE.Mesh(
          new THREE.SphereGeometry(0.25, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0xffeb3b })
        );
        lightBulb.position.y = 3.9;
        mesh.add(lightBulb);
        colliderSize = { w: 1.6, h: 2.0, d: 1.5 };
        break;
      }

      case "okada": {
        // Fast motorcycle with rider
        const bikeGeo = new THREE.BoxGeometry(0.4, 0.7, 2.0);
        const bikeMat = new THREE.MeshLambertMaterial({ color: 0xd32f2f });
        const bike = new THREE.Mesh(bikeGeo, bikeMat);
        bike.position.y = 0.5;
        mesh.add(bike);

        // Wheels
        [-0.6, 0.6].forEach(wz => {
          const wheel = new THREE.Mesh(
            new THREE.CylinderGeometry(0.32, 0.32, 0.12, 10),
            new THREE.MeshLambertMaterial({ color: 0x111111 })
          );
          wheel.rotation.z = Math.PI / 2;
          wheel.position.set(0, 0.32, wz);
          mesh.add(wheel);
        });

        // Rider with helmet
        const riderTorso = new THREE.Mesh(
          new THREE.BoxGeometry(0.38, 0.6, 0.28),
          new THREE.MeshLambertMaterial({ color: 0xfbc02d })
        );
        riderTorso.position.set(0, 1.05, -0.2);
        mesh.add(riderTorso);

        const helmet = new THREE.Mesh(
          new THREE.SphereGeometry(0.22, 8, 8),
          new THREE.MeshLambertMaterial({ color: 0x000000 })
        );
        helmet.position.set(0, 1.5, -0.2);
        mesh.add(helmet);

        colliderSize = { w: 1.2, h: 1.8, d: 2.0 };
        break;
      }

      case "conductor_drama": {
        // Floating large golden coin / change dropped by conductor (Reward Pickup!)
        isPowerUp = true;
        const coinGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.12, 16);
        coinGeo.rotateX(Math.PI / 2);
        const coinMat = new THREE.MeshStandardMaterial({
          color: 0xffd700,
          metalness: 0.8,
          roughness: 0.2
        });
        const coin = new THREE.Mesh(coinGeo, coinMat);
        coin.position.y = 1.3;
        mesh.add(coin);
        colliderSize = { w: 1.8, h: 1.8, d: 1.8 };
        break;
      }

      case "market_hawker": {
        // Pedestrian with tray on head crossing
        const pBody = new THREE.Mesh(
          new THREE.BoxGeometry(0.38, 0.85, 0.28),
          new THREE.MeshLambertMaterial({ color: 0x7b1fa2 })
        );
        pBody.position.y = 0.85;
        mesh.add(pBody);

        const pHead = new THREE.Mesh(
          new THREE.BoxGeometry(0.24, 0.26, 0.24),
          new THREE.MeshLambertMaterial({ color: 0x5d4037 })
        );
        pHead.position.y = 1.4;
        mesh.add(pHead);

        // Hawkers tray on head with plantain/oranges
        const tray = new THREE.Mesh(
          new THREE.CylinderGeometry(0.5, 0.4, 0.1, 10),
          new THREE.MeshLambertMaterial({ color: 0xef6c00 })
        );
        tray.position.y = 1.65;
        mesh.add(tray);

        colliderSize = { w: 1.4, h: 1.8, d: 1.4 };
        break;
      }

      case "broken_truck": {
        // Stalled lorry with leaves/hazard branches at rear (fits within 2.0m width)
        const truckBody = new THREE.Mesh(
          new THREE.BoxGeometry(2.0, 2.2, 5.0),
          new THREE.MeshLambertMaterial({ color: 0x2e7d32 })
        );
        truckBody.position.y = 1.4;
        truckBody.castShadow = true;
        mesh.add(truckBody);

        // Leaves / hazard branches at back
        const leafGeo = new THREE.DodecahedronGeometry(0.5);
        const leafMat = new THREE.MeshLambertMaterial({ color: 0x4caf50 });
        const leaves = new THREE.Mesh(leafGeo, leafMat);
        leaves.position.set(0, 0.5, -2.8);
        mesh.add(leaves);

        colliderSize = { w: 2.0, h: 2.2, d: 5.0 };
        break;
      }

      // POWER-UPS
      case "power_fuel": {
        isPowerUp = true;
        const canGeo = new THREE.BoxGeometry(0.8, 1.0, 0.5);
        const canMat = new THREE.MeshLambertMaterial({ color: 0xffeb3b });
        const can = new THREE.Mesh(canGeo, canMat);
        can.position.y = 1.2;
        mesh.add(can);
        colliderSize = { w: 1.8, h: 2.0, d: 1.8 };
        break;
      }

      case "power_generator": {
        isPowerUp = true;
        // Tiger generator (mini "I better pass my neighbor")
        const genGeo = new THREE.BoxGeometry(0.9, 0.75, 0.75);
        const genMat = new THREE.MeshLambertMaterial({ color: 0xd32f2f });
        const gen = new THREE.Mesh(genGeo, genMat);
        gen.position.y = 1.2;
        mesh.add(gen);
        colliderSize = { w: 1.8, h: 2.0, d: 1.8 };
        break;
      }

      case "power_purewater": {
        isPowerUp = true;
        // Water sachet
        const watGeo = new THREE.BoxGeometry(0.7, 0.9, 0.35);
        const watMat = new THREE.MeshStandardMaterial({
          color: 0x00e5ff,
          transparent: true,
          opacity: 0.85
        });
        const sachet = new THREE.Mesh(watGeo, watMat);
        sachet.position.y = 1.2;
        mesh.add(sachet);
        colliderSize = { w: 1.8, h: 2.0, d: 1.8 };
        break;
      }

      case "power_jollof": {
        isPowerUp = true;
        // Takeaway pack
        const jolGeo = new THREE.BoxGeometry(0.9, 0.45, 0.9);
        const jolMat = new THREE.MeshLambertMaterial({ color: 0xff5722 });
        const pack = new THREE.Mesh(jolGeo, jolMat);
        pack.position.y = 1.2;
        mesh.add(pack);
        colliderSize = { w: 1.8, h: 2.0, d: 1.8 };
        break;
      }

      case "power_naira": {
        isPowerUp = true;
        // Floating bundle of ₦1000 notes
        const nGeo = new THREE.BoxGeometry(1.0, 0.4, 0.6);
        const nMat = new THREE.MeshLambertMaterial({ color: 0x2e7d32 });
        const stack = new THREE.Mesh(nGeo, nMat);
        stack.position.y = 1.2;
        mesh.add(stack);
        colliderSize = { w: 1.8, h: 2.0, d: 1.8 };
        break;
      }

      case "power_siren": {
        isPowerUp = true;
        // Flashing VIP convoy beacon
        const sirenGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.6, 12);
        const sirenMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
        const siren = new THREE.Mesh(sirenGeo, sirenMat);
        siren.position.y = 1.2;
        mesh.add(siren);
        colliderSize = { w: 1.8, h: 2.0, d: 1.8 };
        break;
      }

      case "passenger_stop": {
        isPassenger = true;
        // Yellow Bus Stop Shelter on the road edge
        const shelterGeo = new THREE.BoxGeometry(2.5, 2.6, 4.0);
        const shelterMat = new THREE.MeshLambertMaterial({ color: 0xfbc02d });
        const shelter = new THREE.Mesh(shelterGeo, shelterMat);
        shelter.position.set(0, 1.3, 0);
        mesh.add(shelter);

        // Passengers waiting
        for (let p = 0; p < 2; p++) {
          const pass = new THREE.Mesh(
            new THREE.BoxGeometry(0.35, 0.9, 0.35),
            new THREE.MeshLambertMaterial({ color: p === 0 ? 0xe91e63 : 0x00bcd4 })
          );
          pass.position.set(-0.3 + p * 0.6, 0.9, -0.6 + p * 1.2);
          mesh.add(pass);
        }
        colliderSize = { w: 2.2, h: 2.6, d: 3.8 };
        break;
      }
    }

    this.scene.add(mesh);

    return {
      type,
      mesh,
      colliderSize,
      isPowerUp,
      isPassenger,
      lane: 0,
      collected: false,
      hit: false,
      dodged: false,
      speedX: type === "okada" ? (Math.random() > 0.5 ? 2.5 : -2.5) : 0
    };
  }

  spawnAt(type, lane, zPos) {
    const item = this.getItem(type);
    item.lane = lane;
    item.mesh.position.set(lane * this.laneWidth, 0, zPos);
    item.collected = false;
    item.hit = false;
    item.dodged = false;

    // Special lane offset for roadside passenger bus stop
    if (type === "passenger_stop") {
      // Place on right side edge of lane 1
      item.mesh.position.x = 1 * this.laneWidth + 1.6;
      item.lane = 1;
    }

    this.activeItems.push(item);
    return item;
  }

  update(delta, busZ, busSpeed, danfoBus, gameCallbacks) {
    this.spawnTimer += delta;

    // Pulse spawn on music beat or interval
    const effectiveInterval = Math.max(0.9, this.spawnInterval - (busSpeed / 50) * 0.5);
    if (this.spawnTimer >= effectiveInterval || (this.beatPulsePending && this.spawnTimer > 0.6)) {
      this.spawnTimer = 0;
      this.beatPulsePending = false;

      // Spawn ahead of the bus with plenty of sight distance (>85m)
      const spawnZ = busZ + 85 + Math.random() * 25;

      // Decide what to spawn
      const rand = Math.random();
      const lanes = [-1, 0, 1];
      const primaryLane = lanes[Math.floor(Math.random() * lanes.length)];

      // 1. WARMUP RUNWAY: First 180m is 100% safe! (Allows player to steer, test keys, and pick up commuters)
      if (busZ < 180) {
        if (rand < 0.45) {
          this.spawnAt("passenger_stop", 1, spawnZ);
        } else {
          const warmUpRewards = ["power_fuel", "conductor_drama", "power_naira", "power_purewater"];
          const rType = warmUpRewards[Math.floor(Math.random() * warmUpRewards.length)];
          this.spawnAt(rType, primaryLane, spawnZ);
        }
      } else {
        // 2. MAIN GAMEPLAY
        if (rand < 0.22) {
          // Roadside Bus Stop Passenger Pickup
          this.spawnAt("passenger_stop", 1, spawnZ);
        } else if (rand < 0.45) {
          // Rewarding Power-up or Dropped Conductor Change
          const powerTypes = [
            "power_fuel",
            "power_generator",
            "power_purewater",
            "power_jollof",
            "power_naira",
            "power_siren",
            "conductor_drama"
          ];
          const pType = powerTypes[Math.floor(Math.random() * powerTypes.length)];
          this.spawnAt(pType, primaryLane, spawnZ);
        } else {
          // Nigerian Problem Obstacles (Dodgeable)
          const obstacleTypes = [
            "broken_truck",        // Fatal Road Block
            "police_checkpoint",   // Fatal Road Block
            "traffic_jam",         // Fatal Road Block
            "pothole",             // Hazard (-25% health)
            "flood",               // Hazard (-20% health + spin)
            "okada",               // Hazard (-25% health)
            "market_hawker",       // Hazard (-20% health)
            "fuel_scarcity",       // Hazard (-25% health)
            "nepa_outage"          // Hazard (-20% health)
          ];
          const oType = obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)];

          if (oType === "traffic_jam") {
            // Go-slow: blocks at most 2 lanes, leaves 1 lane 100% open
            const openLane = lanes[Math.floor(Math.random() * lanes.length)];
            lanes.forEach((l) => {
              if (l !== openLane) {
                this.spawnAt("traffic_jam", l, spawnZ);
              }
            });
          } else {
            this.spawnAt(oType, primaryLane, spawnZ);
          }
        }
      }
    }

    // Update active items (animations, okada weave, recycling, collision detection)
    const busBox = danfoBus.getBoundingBox();

    for (let i = this.activeItems.length - 1; i >= 0; i--) {
      const item = this.activeItems[i];

      // Recycle if far behind bus
      if (item.mesh.position.z < busZ - 20) {
        this.activeItems.splice(i, 1);
        this.recycleItem(item);
        continue;
      }

      // Okada lateral weaving across lanes
      if (item.type === "okada") {
        item.mesh.position.x += item.speedX * delta;
        if (item.mesh.position.x > this.laneWidth * 1.3) {
          item.speedX = -Math.abs(item.speedX);
        } else if (item.mesh.position.x < -this.laneWidth * 1.3) {
          item.speedX = Math.abs(item.speedX);
        }
      }

      // Power-up / Coin float and spin animation
      if (item.isPowerUp || item.type === "conductor_drama") {
        item.mesh.rotation.y += delta * 3.5;
        item.mesh.position.y = Math.sin(Date.now() * 0.005 + item.mesh.position.z) * 0.25;
      }

      // Detect when Danfo successfully dodges a block/obstacle
      if (!item.hit && !item.collected && !item.dodged && !item.isPowerUp && !item.isPassenger) {
        if (item.mesh.position.z < busZ - 1.5) {
          item.dodged = true;
          if (gameCallbacks && gameCallbacks.onDodge) {
            gameCallbacks.onDodge(item.type);
          }
        }
      }

      // Check collision with Danfo Bus
      if (!item.hit && !item.collected) {
        const itemBox = new THREE.Box3();
        itemBox.setFromCenterAndSize(
          new THREE.Vector3(
            item.mesh.position.x,
            item.mesh.position.y + item.colliderSize.h * 0.5,
            item.mesh.position.z
          ),
          new THREE.Vector3(
            item.colliderSize.w,
            item.colliderSize.h,
            item.colliderSize.d
          )
        );

        if (busBox.intersectsBox(itemBox)) {
          this.handleCollision(item, danfoBus, gameCallbacks);
        }
      }
    }
  }

  handleCollision(item, danfoBus, callbacks) {
    if (!callbacks) return;
    if (item.isPowerUp) {
      item.collected = true;
      item.mesh.visible = false;
      if (callbacks.onPowerUp) callbacks.onPowerUp(item.type);
      return;
    }

    if (item.isPassenger) {
      item.collected = true;
      item.mesh.visible = false;
      if (callbacks.onPassengerPickup) callbacks.onPassengerPickup();
      return;
    }

    // Obstacle hit
    item.hit = true;

    // If Danfo has generator shield or siren active, bash through obstacle without damage!
    if (danfoBus.isShielded || danfoBus.isSirenActive) {
      audioManager.playCoin();
      if (callbacks.onObstacleBash) callbacks.onObstacleBash(item.type);
      item.mesh.visible = false;
      return;
    }

    if (callbacks.onObstacleHit) callbacks.onObstacleHit(item.type);
  }

  clearAll() {
    this.activeItems.forEach(item => this.recycleItem(item));
    this.activeItems = [];
    this.spawnTimer = 0;
    this.beatPulsePending = false;
  }
}
