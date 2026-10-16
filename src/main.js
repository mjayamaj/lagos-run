import { themeManager } from "./theme/theme.js";
import { startNGAuth } from "./auth/startng.js";
import { pidginPopup } from "./ui/PidginPopup.js";
import { danfoRadio } from "./audio/radio.js";
import { audioManager } from "./audio/AudioManager.js";
import { Game } from "./core/Game.js";
import { ScreensManager } from "./ui/Screens.js";
import { inputManager } from "./core/Input.js";

async function boot() {
  // 1. Initialize Central Theme System
  themeManager.init();

  // 2. Initialize Pidgin HUD Toasts
  await pidginPopup.init(document.getElementById("pidgin-toast-container"));

  // 3. Initialize Danfo Radio Playlist
  await danfoRadio.init();

  // 4. Initialize Three.js Game Engine
  const canvas = document.getElementById("game-canvas");
  const game = new Game(canvas);

  // 5. Initialize UI Screens
  const screens = new ScreensManager(game);
  game.setScreens(screens);

  // 6. Bind on-screen touch buttons for mobile
  inputManager.bindOnScreenButtons();

  // 7. HUD Quick Action Buttons
  const btnRadioNext = document.getElementById("btn-hud-radio-next");
  if (btnRadioNext) {
    btnRadioNext.addEventListener("click", () => {
      danfoRadio.nextStation();
    });
  }

  const btnControlsToggle = document.getElementById("btn-hud-controls-toggle");
  if (btnControlsToggle) {
    btnControlsToggle.addEventListener("click", () => {
      const isHidden = document.body.classList.toggle("controls-hidden");
      btnControlsToggle.textContent = isHidden ? "🎮 Keys: OFF" : "🎮 Controls";
      btnControlsToggle.setAttribute("aria-pressed", (!isHidden).toString());
      pidginPopup.show("power_up_generator", isHidden ? "Controls hidden for cinematic view" : "Controls visible on screen! 🎮");
    });
  }

  const btnMute = document.getElementById("btn-hud-mute");
  if (btnMute) {
    btnMute.addEventListener("click", () => {
      const isMuted = audioManager.toggleMute();
      btnMute.textContent = isMuted ? "🔇" : "🔊";
      btnMute.setAttribute("aria-pressed", isMuted ? "true" : "false");
    });
  }

  const btnPause = document.getElementById("btn-hud-pause");
  if (btnPause) {
    btnPause.addEventListener("click", () => {
      const isPaused = game.togglePause();
      btnPause.textContent = isPaused ? "▶️" : "⏸️";
      btnPause.setAttribute("aria-pressed", isPaused ? "true" : "false");
    });
  }

  // 8. Detect Start.ng Authentication Session
  const currentUser = await startNGAuth.init();

  if (currentUser) {
    screens.updateUserBadges();
    screens.showScreen("start");
  } else {
    // If not logged in, show Start.ng login screen and block play
    screens.showScreen("login");
  }

  // Listen to auth state changes
  startNGAuth.onAuthChange((user) => {
    screens.updateUserBadges();
    if (user) {
      if (screens.activeScreen === "login") {
        screens.showScreen("start");
      }
    } else {
      game.stop();
      screens.showScreen("login");
    }
  });

  // Global user interaction gesture to unlock Web Audio API
  const unlockAudio = () => {
    audioManager.unlockOnUserGesture();
    window.removeEventListener("pointerdown", unlockAudio);
    window.removeEventListener("keydown", unlockAudio);
  };
  window.addEventListener("pointerdown", unlockAudio, { once: true });
  window.addEventListener("keydown", unlockAudio, { once: true });
}

window.addEventListener("DOMContentLoaded", () => {
  boot().catch(err => console.error("Boot error:", err));
});
