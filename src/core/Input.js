export class InputManager {
  constructor() {
    this.handlers = {
      onLeft: () => {},
      onRight: () => {},
      onBoost: () => {},
      onBrake: () => {},
      onHorn: () => {},
      onRadioToggle: () => {},
      onPauseToggle: () => {}
    };

    this.isBoosting = false;
    this.isBraking = false;

    // Touch swipe tracking
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchStartTime = 0;
    this.minSwipeDistance = 35; // px

    this.initKeyboard();
    this.initTouch();
  }

  setHandlers(handlers) {
    this.handlers = { ...this.handlers, ...handlers };
  }

  setKeyFeedback(id, active) {
    const el = document.getElementById(id);
    if (el) {
      if (active) el.classList.add("key-active");
      else el.classList.remove("key-active");
    }
  }

  initKeyboard() {
    window.addEventListener("keydown", (e) => {
      // Avoid intercepting input if typing in login form
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      switch (e.code) {
        case "ArrowLeft":
        case "KeyA":
          this.setKeyFeedback("key-deck-left", true);
          this.setKeyFeedback("btn-left", true);
          this.handlers.onLeft();
          break;
        case "ArrowRight":
        case "KeyD":
          this.setKeyFeedback("key-deck-right", true);
          this.setKeyFeedback("btn-right", true);
          this.handlers.onRight();
          break;
        case "ArrowUp":
        case "KeyW":
          this.isBoosting = true;
          this.setKeyFeedback("key-deck-boost", true);
          this.setKeyFeedback("btn-boost", true);
          this.handlers.onBoost(true);
          break;
        case "ArrowDown":
        case "KeyS":
          this.isBraking = true;
          this.setKeyFeedback("key-deck-brake", true);
          this.setKeyFeedback("btn-brake", true);
          this.handlers.onBrake(true);
          break;
        case "Space":
        case "KeyH":
          e.preventDefault();
          this.setKeyFeedback("key-deck-horn", true);
          this.setKeyFeedback("btn-horn", true);
          this.handlers.onHorn();
          break;
        case "KeyR":
          this.handlers.onRadioToggle();
          break;
        case "Escape":
        case "KeyP":
          this.handlers.onPauseToggle();
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      switch (e.code) {
        case "ArrowLeft":
        case "KeyA":
          this.setKeyFeedback("key-deck-left", false);
          this.setKeyFeedback("btn-left", false);
          break;
        case "ArrowRight":
        case "KeyD":
          this.setKeyFeedback("key-deck-right", false);
          this.setKeyFeedback("btn-right", false);
          break;
        case "ArrowUp":
        case "KeyW":
          this.isBoosting = false;
          this.setKeyFeedback("key-deck-boost", false);
          this.setKeyFeedback("btn-boost", false);
          this.handlers.onBoost(false);
          break;
        case "ArrowDown":
        case "KeyS":
          this.isBraking = false;
          this.setKeyFeedback("key-deck-brake", false);
          this.setKeyFeedback("btn-brake", false);
          this.handlers.onBrake(false);
          break;
        case "Space":
        case "KeyH":
          this.setKeyFeedback("key-deck-horn", false);
          this.setKeyFeedback("btn-horn", false);
          break;
      }
    });
  }

  initTouch() {
    let lastTapTime = 0;

    window.addEventListener("touchstart", (e) => {
      if (e.target.closest(".interactive-ui") || e.target.tagName === "BUTTON" || e.target.closest("button")) return;
      const touch = e.touches[0];
      this.touchStartX = touch.clientX;
      this.touchStartY = touch.clientY;
      this.touchStartTime = Date.now();
    }, { passive: true });

    window.addEventListener("touchend", (e) => {
      if (e.target.closest(".interactive-ui") || e.target.tagName === "BUTTON" || e.target.closest("button")) return;
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - this.touchStartX;
      const deltaY = touch.clientY - this.touchStartY;
      const now = Date.now();
      const elapsed = now - this.touchStartTime;

      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (absX > this.minSwipeDistance && absX > absY) {
        // Horizontal swipe: lane shift
        if (deltaX > 0) {
          this.handlers.onRight();
        } else {
          this.handlers.onLeft();
        }
      } else if (absY > this.minSwipeDistance && absY > absX) {
        // Vertical swipe
        if (deltaY < 0) {
          // Swipe up = quick boost
          this.handlers.onBoost(true);
          setTimeout(() => this.handlers.onBoost(false), 500);
        } else {
          // Swipe down = quick brake
          this.handlers.onBrake(true);
          setTimeout(() => this.handlers.onBrake(false), 500);
        }
      } else if (elapsed < 250 && absX < 15 && absY < 15) {
        // Double-tap anywhere to honk horn!
        if (now - lastTapTime < 300) {
          this.handlers.onHorn();
          lastTapTime = 0;
        } else {
          lastTapTime = now;
        }
      }
    }, { passive: true });
  }

  // Bind on-screen buttons
  bindOnScreenButtons() {
    const bindBtn = (id, onDown, onUp) => {
      const el = document.getElementById(id);
      if (!el) return;

      const triggerDown = (e) => {
        if (e && e.cancelable) e.preventDefault();
        if (e && e.pointerId !== undefined) {
          try { el.setPointerCapture(e.pointerId); } catch (_) {}
        }
        el.classList.add("key-active");
        onDown();
      };

      const triggerUp = (e) => {
        if (e && e.cancelable) e.preventDefault();
        if (e && e.pointerId !== undefined) {
          try { el.releasePointerCapture(e.pointerId); } catch (_) {}
        }
        el.classList.remove("key-active");
        if (onUp) onUp();
      };

      el.addEventListener("pointerdown", triggerDown);
      if (onUp) {
        el.addEventListener("pointerup", triggerUp);
        el.addEventListener("pointercancel", triggerUp);
      } else {
        el.addEventListener("pointerup", (e) => {
          if (e && e.cancelable) e.preventDefault();
          el.classList.remove("key-active");
        });
        el.addEventListener("pointercancel", (e) => {
          if (e && e.cancelable) e.preventDefault();
          el.classList.remove("key-active");
        });
      }
    };

    // Bind Mobile Virtual Buttons
    bindBtn("btn-left", () => this.handlers.onLeft());
    bindBtn("btn-right", () => this.handlers.onRight());
    bindBtn("btn-boost", () => this.handlers.onBoost(true), () => this.handlers.onBoost(false));
    bindBtn("btn-brake", () => this.handlers.onBrake(true), () => this.handlers.onBrake(false));
    bindBtn("btn-horn", () => this.handlers.onHorn());

    // Bind Prominent HUD Controls Deck Buttons (Desktop / Tablet click)
    bindBtn("key-deck-left", () => this.handlers.onLeft());
    bindBtn("key-deck-right", () => this.handlers.onRight());
    bindBtn("key-deck-boost", () => this.handlers.onBoost(true), () => this.handlers.onBoost(false));
    bindBtn("key-deck-brake", () => this.handlers.onBrake(true), () => this.handlers.onBrake(false));
    bindBtn("key-deck-horn", () => this.handlers.onHorn());
  }
}

export const inputManager = new InputManager();
