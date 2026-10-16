/**
 * Pidgin HUD Toast & Popup Notification System
 * Loads lines strictly from public/pidgin.json - NO hardcoded strings in game logic.
 * Animated, non-blocking 1-2s toasts with random variation per event.
 */

class PidginPopupManager {
  constructor() {
    this.lines = {};
    this.container = null;
    this.lastShownPerEvent = {};
    this.eventBadges = {
      game_start: "🚍",
      pothole: "🕳️",
      traffic_jam: "🚗",
      police_checkpoint: "👮🏾‍♂️",
      flood: "🌊",
      nepa_light_out: "💡",
      okada_swarm: "🏍️",
      conductor_drama: "🗣️",
      fuel_low: "⛽",
      near_miss: "⚡",
      passenger_pickup: "👥",
      power_up_fuel: "⛽",
      power_up_generator: "⚡",
      power_up_purewater: "💧",
      power_up_jollof: "🍛",
      power_up_naira: "💵",
      power_up_siren: "🚨",
      checkpoint_reached: "🏁",
      game_over: "💥",
      high_score: "🏆",
      radio_ticker: "📻"
    };
  }

  async init(containerEl) {
    this.container = containerEl || document.getElementById("pidgin-toast-container");
    try {
      const res = await fetch("/pidgin.json");
      if (res.ok) {
        this.lines = await res.json();
      }
    } catch (e) {
      console.warn("Could not load /pidgin.json:", e);
    }
  }

  getRandomLine(eventKey) {
    const list = this.lines[eventKey];
    if (!list || list.length === 0) return null;

    if (list.length === 1) return list[0];

    const last = this.lastShownPerEvent[eventKey];
    const filtered = list.filter(line => line !== last);
    const chosen = filtered[Math.floor(Math.random() * filtered.length)] || list[0];
    this.lastShownPerEvent[eventKey] = chosen;
    return chosen;
  }

  show(eventKey, subtext = null, durationMs = 1100) {
    if (!this.container) return;

    const line = this.getRandomLine(eventKey);
    if (!line) return;

    // Remove any existing toast so it never stacks or blocks road visibility
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }

    const badge = this.eventBadges[eventKey] || "📢";

    const toast = document.createElement("div");
    toast.className = `pidgin-toast pidgin-toast-${eventKey.replace(/_/g, "-")}`;
    toast.innerHTML = `
      <div class="toast-badge">${badge}</div>
      <div class="toast-body">
        <div class="toast-title">${line}</div>
        ${subtext ? `<div class="toast-subtext">${subtext}</div>` : ""}
      </div>
    `;

    this.container.appendChild(toast);

    // Trigger enter animation
    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    // Remove after duration
    setTimeout(() => {
      toast.classList.remove("show");
      toast.classList.add("hide");
      setTimeout(() => {
        if (toast.parentNode === this.container) {
          this.container.removeChild(toast);
        }
      }, 250);
    }, durationMs);
  }
}

export const pidginPopup = new PidginPopupManager();
