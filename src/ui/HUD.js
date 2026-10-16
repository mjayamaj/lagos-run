import { themeManager } from "../theme/theme.js";

export class HUD {
  constructor() {
    this.container = document.getElementById("hud-container");
    this.elements = {};
    this.initElements();
  }

  initElements() {
    this.elements.playerName = document.getElementById("hud-player-name");
    this.elements.playerAvatar = document.getElementById("hud-player-avatar");
    this.elements.speedValue = document.getElementById("hud-speed-value");
    this.elements.healthBar = document.getElementById("hud-health-fill");
    this.elements.healthValue = document.getElementById("hud-health-text");
    this.elements.fuelBar = document.getElementById("hud-fuel-fill");
    this.elements.fuelValue = document.getElementById("hud-fuel-text");
    this.elements.nairaValue = document.getElementById("hud-naira-value");
    this.elements.passengerValue = document.getElementById("hud-passenger-value");
    this.elements.scoreValue = document.getElementById("hud-score-value");
    this.elements.dodgedValue = document.getElementById("hud-dodged-value");
    this.elements.routeCurrent = document.getElementById("hud-route-current");
    this.elements.routeNext = document.getElementById("hud-route-next");
    this.elements.routeProgress = document.getElementById("hud-route-fill");
    this.elements.missionText = document.getElementById("hud-mission-text");
    this.elements.radioTicker = document.getElementById("hud-radio-ticker");
    this.elements.luggageStatus = document.getElementById("hud-luggage-status");
    this.elements.playerFace = document.getElementById("hud-player-face");
    this.elements.playerAccount = document.getElementById("hud-player-account");
    this.elements.btnSignIn = document.getElementById("btn-startng-signin");
  }

  setPlayer(player) {
    if (!player) return;
    if (this.elements.playerName) {
      this.elements.playerName.textContent = player.name;
    }
    if (this.elements.playerAccount) {
      this.elements.playerAccount.textContent = player.account ? `@${player.account}` : "Driver";
    }
    if (this.elements.playerFace && player.face) {
      this.elements.playerFace.src = player.face;
      this.elements.playerFace.classList.remove("hidden");
      if (this.elements.playerAvatar) this.elements.playerAvatar.classList.add("hidden");
    } else if (this.elements.playerAvatar) {
      this.elements.playerAvatar.textContent = player.avatar || "🧢";
      this.elements.playerAvatar.classList.remove("hidden");
      if (this.elements.playerFace) this.elements.playerFace.classList.add("hidden");
    }
    if (this.elements.btnSignIn) {
      const isSignedOut = !player.id || player.id === "guest";
      this.elements.btnSignIn.classList.toggle("hidden", !isSignedOut);
      this.elements.btnSignIn.onclick = () => {
        window.location.href = `https://start.ng/?return_to=${encodeURIComponent(window.location.origin + window.location.pathname)}`;
      };
    }
  }

  updateRadioTicker(text) {
    if (this.elements.radioTicker) {
      this.elements.radioTicker.textContent = text;
    }
  }

  update(state) {
    // Speed (km/h)
    const kmh = Math.floor(state.speed * 2.2);
    if (this.elements.speedValue) {
      this.elements.speedValue.textContent = `${kmh} KM/H`;
    }

    // Health
    const healthPct = Math.max(0, Math.min(100, Math.floor(state.health)));
    if (this.elements.healthBar) {
      this.elements.healthBar.style.width = `${healthPct}%`;
      if (healthPct < 25) {
        this.elements.healthBar.style.backgroundColor = "#d50000";
      } else if (healthPct < 55) {
        this.elements.healthBar.style.backgroundColor = "#ff9800";
      } else {
        this.elements.healthBar.style.backgroundColor = "#00e676";
      }
    }
    if (this.elements.healthValue) {
      this.elements.healthValue.textContent = `${healthPct}%`;
    }

    // Fuel
    const fuelPct = Math.max(0, Math.min(100, Math.floor(state.fuel)));
    if (this.elements.fuelBar) {
      this.elements.fuelBar.style.width = `${fuelPct}%`;
      if (fuelPct < 25) {
        this.elements.fuelBar.style.backgroundColor = "#ff1744";
      } else {
        this.elements.fuelBar.style.backgroundColor = "#ffb300";
      }
    }
    if (this.elements.fuelValue) {
      this.elements.fuelValue.textContent = `${fuelPct}%`;
    }

    // Naira & Score
    if (this.elements.nairaValue) {
      this.elements.nairaValue.textContent = `₦${state.naira.toLocaleString()}`;
    }
    if (this.elements.scoreValue) {
      this.elements.scoreValue.textContent = Math.floor(state.score).toLocaleString();
    }
    if (this.elements.dodgedValue) {
      this.elements.dodgedValue.textContent = state.dodgedCount !== undefined ? state.dodgedCount : 0;
    }

    // Passengers & Luggage
    if (this.elements.passengerValue) {
      this.elements.passengerValue.textContent = `${state.passengers} Commuters`;
    }
    if (this.elements.luggageStatus) {
      if (state.passengers === 0) {
        this.elements.luggageStatus.textContent = "🧳 Roof Empty";
      } else if (state.passengers <= 3) {
        this.elements.luggageStatus.textContent = "🧳 Packing...";
      } else if (state.passengers <= 6) {
        this.elements.luggageStatus.textContent = "🧳 Roof Loaded";
      } else {
        this.elements.luggageStatus.textContent = "🧳 Roof Overloaded!";
      }
    }

    // Checkpoint & Route Progress
    if (this.elements.routeCurrent) {
      this.elements.routeCurrent.textContent = state.checkpointCurrent;
    }
    if (this.elements.routeNext) {
      this.elements.routeNext.textContent = `Next: ${state.checkpointNext}`;
    }
    if (this.elements.routeProgress) {
      this.elements.routeProgress.style.width = `${Math.min(100, state.checkpointProgress * 100)}%`;
    }

    // Active Mission
    if (this.elements.missionText && state.activeMission) {
      this.elements.missionText.textContent = `🎯 ${state.activeMission.title} (${state.activeMission.current}/${state.activeMission.target})`;
    }
  }

  show() {
    if (this.container) this.container.classList.remove("hidden");
  }

  hide() {
    if (this.container) this.container.classList.add("hidden");
  }
}
