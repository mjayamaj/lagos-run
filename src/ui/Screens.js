import confetti from "canvas-confetti";
import { themeManager, THEME_PRESETS } from "../theme/theme.js";
import { startNGAuth } from "../auth/startng.js";
import { audioManager } from "../audio/AudioManager.js";
import { danfoRadio } from "../audio/radio.js";
import { pidginPopup } from "./PidginPopup.js";

export class ScreensManager {
  constructor(game) {
    this.game = game;
    this.activeScreen = null;
    this.initScreens();
  }

  initScreens() {
    this.screens = {
      start: document.getElementById("screen-start"),
      login: document.getElementById("screen-login"),
      pause: document.getElementById("screen-pause"),
      settings: document.getElementById("screen-settings"),
      leaderboard: document.getElementById("screen-leaderboard"),
      gameover: document.getElementById("screen-gameover")
    };

    this.bindEvents();
    this.populateThemePresets();
  }

  showScreen(name) {
    Object.keys(this.screens).forEach((key) => {
      const el = this.screens[key];
      if (el) {
        if (key === name) {
          el.classList.remove("hidden");
          el.classList.add("active");
        } else {
          el.classList.add("hidden");
          el.classList.remove("active");
        }
      }
    });
    this.activeScreen = name;
  }

  hideAllScreens() {
    Object.keys(this.screens).forEach((key) => {
      const el = this.screens[key];
      if (el) {
        el.classList.add("hidden");
        el.classList.remove("active");
      }
    });
    this.activeScreen = null;
  }

  bindEvents() {
    // START SCREEN BUTTONS
    const btnStart = document.getElementById("btn-start-trip");
    if (btnStart) {
      btnStart.addEventListener("click", () => {
        audioManager.unlockOnUserGesture();
        if (!startNGAuth.isLoggedIn()) {
          this.showScreen("login");
        } else {
          this.game.start();
        }
      });
    }

    const btnOpenSettings = document.getElementById("btn-open-settings");
    if (btnOpenSettings) {
      btnOpenSettings.addEventListener("click", () => this.showScreen("settings"));
    }

    const btnOpenLeaderboard = document.getElementById("btn-open-leaderboard");
    if (btnOpenLeaderboard) {
      btnOpenLeaderboard.addEventListener("click", () => {
        this.renderLeaderboard();
        this.showScreen("leaderboard");
      });
    }

    // LOGIN SCREEN
    const btnLoginCustom = document.getElementById("btn-login-submit");
    const inputUsername = document.getElementById("login-username-input");
    if (btnLoginCustom && inputUsername) {
      btnLoginCustom.addEventListener("click", (e) => {
        e.preventDefault();
        const val = inputUsername.value.trim();
        if (val) {
          startNGAuth.loginWithCredentials(val);
          this.updateUserBadges();
          this.showScreen("start");
        }
      });
    }

    // Demo quick logins
    document.querySelectorAll(".btn-demo-login").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.index || "0", 10);
        startNGAuth.loginWithDemo(idx);
        this.updateUserBadges();
        this.showScreen("start");
      });
    });

    // SETTINGS SCREEN
    const btnCloseSettings = document.getElementById("btn-close-settings");
    if (btnCloseSettings) {
      btnCloseSettings.addEventListener("click", () => {
        if (this.game.isRunning && this.game.isPaused) {
          this.showScreen("pause");
        } else {
          this.showScreen("start");
        }
      });
    }

    // Volume sliders
    const masterSlider = document.getElementById("slider-master-volume");
    if (masterSlider) {
      masterSlider.addEventListener("input", (e) => {
        audioManager.setMasterVolume(parseFloat(e.target.value));
      });
    }

    const musicSlider = document.getElementById("slider-music-volume");
    if (musicSlider) {
      musicSlider.addEventListener("input", (e) => {
        audioManager.setMusicVolume(parseFloat(e.target.value));
      });
    }

    const sfxSlider = document.getElementById("slider-sfx-volume");
    if (sfxSlider) {
      sfxSlider.addEventListener("input", (e) => {
        audioManager.setSfxVolume(parseFloat(e.target.value));
      });
    }

    // Driving Mode Select
    const drivingModeSelect = document.getElementById("select-driving-mode");
    if (drivingModeSelect) {
      const savedMode = localStorage.getItem("lagos_driving_mode_pref") || "normal";
      drivingModeSelect.value = savedMode;
      drivingModeSelect.addEventListener("change", (e) => {
        const mode = e.target.value;
        this.game.setDifficulty(mode);
        const labels = {
          relaxed: "Relaxed Commute active (slower pace) 🛣️",
          normal: "Lagos Rush active! 🚍",
          hardcore: "Crazy Okada active! Double points! ⚡"
        };
        pidginPopup.show("power_up_generator", labels[mode] || "Mode updated!");
      });
    }

    // Touch Controls Preference Select
    const touchPrefSelect = document.getElementById("select-touch-controls");
    const touchOverlay = document.getElementById("touch-controls");
    const applyTouchPref = (val) => {
      localStorage.setItem("lagos_touch_controls_pref", val);
      if (!touchOverlay) return;
      if (val === "show") {
        touchOverlay.classList.add("force-show");
        touchOverlay.classList.remove("force-hide");
        document.body.classList.remove("touch-controls-hidden");
      } else if (val === "hide") {
        touchOverlay.classList.add("force-hide");
        touchOverlay.classList.remove("force-show");
        document.body.classList.add("touch-controls-hidden");
      } else {
        // Auto
        touchOverlay.classList.remove("force-show", "force-hide");
        document.body.classList.remove("touch-controls-hidden");
      }
    };

    if (touchPrefSelect) {
      const savedPref = localStorage.getItem("lagos_touch_controls_pref") || "show";
      touchPrefSelect.value = savedPref;
      applyTouchPref(savedPref);

      touchPrefSelect.addEventListener("change", (e) => {
        applyTouchPref(e.target.value);
        pidginPopup.show("power_up_generator", `Touch controls: ${e.target.value.toUpperCase()}`);
      });
    }

    // PAUSE MENU
    const btnResume = document.getElementById("btn-resume");
    if (btnResume) {
      btnResume.addEventListener("click", () => this.game.togglePause());
    }

    const btnRestart = document.getElementById("btn-restart");
    if (btnRestart) {
      btnRestart.addEventListener("click", () => {
        this.hideAllScreens();
        this.game.start();
      });
    }

    const btnQuit = document.getElementById("btn-quit");
    if (btnQuit) {
      btnQuit.addEventListener("click", () => {
        this.game.stop();
        this.showScreen("start");
      });
    }

    const btnPauseSettings = document.getElementById("btn-pause-settings");
    if (btnPauseSettings) {
      btnPauseSettings.addEventListener("click", () => this.showScreen("settings"));
    }

    // LEADERBOARD SCREEN
    const btnCloseLeaderboard = document.getElementById("btn-close-leaderboard");
    if (btnCloseLeaderboard) {
      btnCloseLeaderboard.addEventListener("click", () => {
        if (this.game.isGameOver) {
          this.showScreen("gameover");
        } else {
          this.showScreen("start");
        }
      });
    }

    // GAME OVER / RESTART PROMPT SCREEN
    const btnPlayAgain = document.getElementById("btn-play-again");
    if (btnPlayAgain) {
      btnPlayAgain.addEventListener("click", () => {
        this.hideAllScreens();
        this.game.start();
      });
    }

    const btnGameOverExit = document.getElementById("btn-gameover-exit");
    if (btnGameOverExit) {
      btnGameOverExit.addEventListener("click", () => {
        this.game.stop();
        this.showScreen("start");
      });
    }

    const btnGameOverLeaderboard = document.getElementById("btn-gameover-leaderboard");
    if (btnGameOverLeaderboard) {
      btnGameOverLeaderboard.addEventListener("click", () => {
        this.renderLeaderboard();
        this.showScreen("leaderboard");
      });
    }

    const btnShareScore = document.getElementById("btn-share-score");
    if (btnShareScore) {
      btnShareScore.addEventListener("click", () => this.shareScore());
    }

    // Keyboard shortcut: Space or Enter on Game Over prompts immediate restart
    window.addEventListener("keydown", (e) => {
      if (this.activeScreen === "gameover") {
        if (e.code === "Space" || e.code === "Enter" || e.code === "KeyR") {
          e.preventDefault();
          this.hideAllScreens();
          this.game.start();
        }
      }
    });
  }

  updateUserBadges() {
    const user = startNGAuth.getUser();
    if (!user) return;

    document.querySelectorAll(".startng-user-name").forEach((el) => {
      el.textContent = user.name;
    });

    document.querySelectorAll(".startng-user-handle").forEach((el) => {
      el.textContent = user.account ? `@${user.account}` : (user.handle || "@driver");
    });

    const startFace = document.getElementById("start-player-face");
    const startAvatar = document.getElementById("start-player-avatar");
    if (startFace && user.face) {
      startFace.src = user.face;
      startFace.classList.remove("hidden");
      if (startAvatar) startAvatar.classList.add("hidden");
    } else if (startAvatar) {
      startAvatar.textContent = user.avatar || "🧢";
      startAvatar.classList.remove("hidden");
      if (startFace) startFace.classList.add("hidden");
    }

    const btnStartSignIn = document.getElementById("btn-start-signin");
    if (btnStartSignIn) {
      const isSignedOut = !user.id || user.id === "guest";
      btnStartSignIn.classList.toggle("hidden", !isSignedOut);
      btnStartSignIn.onclick = () => startNGAuth.signIn();
    }
  }

  populateThemePresets() {
    const container = document.getElementById("theme-preset-container");
    if (!container) return;

    container.innerHTML = "";
    const presets = themeManager.listPresets();
    const active = themeManager.getPresetName();

    presets.forEach((p) => {
      const card = document.createElement("div");
      card.className = `theme-preset-card ${p.name === active ? "selected" : ""}`;
      card.style.borderColor = p.previewAccent;
      card.innerHTML = `
        <div class="preset-header">
          <div class="preset-color-chip" style="background: ${p.previewDanfo}"></div>
          <span class="preset-name">${p.name}</span>
        </div>
        <p class="preset-desc">${p.description}</p>
        <button class="btn-select-preset" data-preset="${p.name}">
          ${p.name === active ? "Active Theme" : "Apply Theme"}
        </button>
      `;

      card.querySelector(".btn-select-preset").addEventListener("click", (e) => {
        e.stopPropagation();
        themeManager.setPreset(p.name, true);
        this.populateThemePresets();
        pidginPopup.show("power_up_generator", `Theme changed to ${p.name}!`);
      });

      container.appendChild(card);
    });
  }

  async renderLeaderboard() {
    const listEl = document.getElementById("leaderboard-list");
    if (!listEl) return;

    listEl.innerHTML = `<div style="text-align:center;padding:20px;color:var(--ui-text-muted);">Fetching start.ng leaderboard... ⏳</div>`;

    const scores = await startNGAuth.getLeaderboard(10);
    const currentUser = startNGAuth.getUser();

    if (!scores || scores.length === 0) {
      listEl.innerHTML = `<div style="text-align:center;padding:20px;color:var(--ui-text-muted);">No scores recorded yet. Be the first to set a record! 🏆</div>`;
      return;
    }

    listEl.innerHTML = scores.map((item, index) => {
      const playerId = item.player_id || item.userId;
      const isMe = currentUser && playerId && (playerId === currentUser.id);
      const rankBadge = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`;
      const dodgesVal = item.stats?.dodges ?? item.dodges ?? item.score ?? 0;
      const distVal = item.stats?.distance ?? item.distance ?? 0;
      const nairaVal = item.stats?.naira ?? item.naira ?? 0;

      return `
        <div class="leaderboard-item ${isMe ? "current-player" : ""}">
          <div class="rank-col">${rankBadge}</div>
          <div class="user-col">
            <span class="avatar">${item.avatar || "🚖"}</span>
            <div>
              <div class="name">${item.name} ${isMe ? '<span class="you-badge">(You)</span>' : ""}</div>
              <div class="subtext">${dodgesVal} Dodges • ${distVal}m Run</div>
            </div>
          </div>
          <div class="score-col">
            <div class="score">${dodgesVal} Dodges</div>
            <div class="naira">₦${Number(nairaVal).toLocaleString()}</div>
          </div>
        </div>
      `;
    }).join("");
  }

  showGameOver(summary) {
    this.updateUserBadges();

    const scoreEl = document.getElementById("go-score");
    const nairaEl = document.getElementById("go-naira");
    const passEl = document.getElementById("go-passengers");
    const routeEl = document.getElementById("go-route");
    const pidginEl = document.getElementById("go-pidgin-quote");
    const crashReasonEl = document.getElementById("go-crash-reason");
    const dodgedEl = document.getElementById("go-blocks-dodged");

    if (scoreEl) scoreEl.textContent = Math.floor(summary.score).toLocaleString();
    if (nairaEl) nairaEl.textContent = `₦${Math.floor(summary.naira).toLocaleString()}`;
    if (passEl) passEl.textContent = `${summary.passengers} Commuters`;
    if (routeEl) routeEl.textContent = summary.bestRoute;
    if (crashReasonEl && summary.crashReason) crashReasonEl.textContent = summary.crashReason;
    if (dodgedEl) dodgedEl.textContent = `${summary.dodgedCount || 0} Blocks Dodged`;

    // Pick an authentic game over Pidgin punchline
    if (pidginEl) {
      pidginEl.textContent = pidginPopup.getRandomLine("game_over") || "Bus don spoil. Wahala for who no get spare part!";
    }

    if (summary.isNewHigh) {
      if (badgeEl) badgeEl.classList.remove("hidden");
      // Fire confetti celebration!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FFCC00", "#FF5722", "#00E676", "#FFFFFF"]
      });
    } else {
      if (badgeEl) badgeEl.classList.add("hidden");
    }

    this.showScreen("gameover");
  }

  async shareScore() {
    const summary = this.game.lastSummary;
    if (!summary) return;

    const shareText = `🚍 LAGOS RUN: Keep the Danfo Moving!\nI scored ${Math.floor(summary.score).toLocaleString()} pts, dodged ${summary.dodgedCount || 0} blocks, earned ₦${Math.floor(summary.naira).toLocaleString()} and reached ${summary.bestRoute} on start.ng! Can you beat my high score? #LagosRun #DanfoGame #StartNG`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Lagos Run: Keep the Danfo Moving",
          text: shareText,
          url: window.location.href
        });
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }

    navigator.clipboard.writeText(shareText).then(() => {
      pidginPopup.show("high_score", "Score copied to clipboard! Share am with your guys!");
    });
  }
}
