/**
 * Central Theme System for "Lagos Run: Keep the Danfo Moving"
 * All styling, 3D character colors, Danfo colors, environment lighting,
 * and UI tokens originate from here.
 * Live preset switching without page reload.
 */

export const THEME_PRESETS = {
  "Lagos Sunset": {
    name: "Lagos Sunset",
    description: "Classic golden hour over Oshodi with iconic yellow danfo",
    danfo: {
      body: "#FFCC00",
      stripe: "#1A1A1A",
      roof: "#E5B800",
      bumper: "#2B2B2B",
      interior: "#3D2B1F",
      headlightGlow: "#FFF59D",
      taillightGlow: "#FF1744"
    },
    character: {
      skin: "#5C3826",
      outfit: "#FF5722",
      cap: "#1A1A1A",
      accessories: "#FFD700",
      glasses: "#111111",
      conductorOutfit: "#2979FF"
    },
    world: {
      skyTop: "#FF5722",
      skyBottom: "#FFE082",
      sunColor: "#FFF9C4",
      fogColor: "#FF8F00",
      ambientLight: "#FFB74D",
      sunLight: "#FFF3E0",
      road: "#2D2A26",
      roadLines: "#FFF8E1",
      curbPrimary: "#FFCC00",
      curbSecondary: "#1A1A1A",
      sidewalk: "#8D7B68",
      buildingColors: ["#D7CCC8", "#FFE0B2", "#CFD8DC", "#FFCCBC", "#FFF9C4"]
    },
    ui: {
      primary: "#FFB300",
      accent: "#FF5722",
      background: "rgba(32, 22, 16, 0.92)",
      panelBg: "rgba(24, 15, 10, 0.85)",
      border: "#FFB300",
      text: "#FFF8E1",
      textMuted: "#D7CCC8",
      toastBg: "linear-gradient(135deg, #FFB300 0%, #E65100 100%)",
      toastText: "#1A1A1A",
      speedometer: "#00E676",
      fuelNormal: "#FFB300",
      fuelAlert: "#D50000",
      healthFull: "#00E676",
      nairaGold: "#FFD700"
    }
  },

  "Night Owambe": {
    name: "Night Owambe",
    description: "Lively Lagos night groove with royal purple, neon and gold party vibes",
    danfo: {
      body: "#8E24AA",
      stripe: "#FFD700",
      roof: "#7B1FA2",
      bumper: "#120024",
      interior: "#240046",
      headlightGlow: "#00E5FF",
      taillightGlow: "#FF007F"
    },
    character: {
      skin: "#4A2E1B",
      outfit: "#00E5FF",
      cap: "#FFD700",
      accessories: "#FFFFFF",
      glasses: "#FF0055",
      conductorOutfit: "#FFEA00"
    },
    world: {
      skyTop: "#0B0420",
      skyBottom: "#311B92",
      sunColor: "#BA68C8",
      fogColor: "#15082D",
      ambientLight: "#7E57C2",
      sunLight: "#D1C4E9",
      road: "#161124",
      roadLines: "#00E5FF",
      curbPrimary: "#8E24AA",
      curbSecondary: "#FFD700",
      sidewalk: "#3E2966",
      buildingColors: ["#1F1138", "#2E1A4E", "#3F2565", "#512D80", "#281545"]
    },
    ui: {
      primary: "#D500F9",
      accent: "#00E5FF",
      background: "rgba(18, 8, 32, 0.94)",
      panelBg: "rgba(28, 12, 48, 0.88)",
      border: "#D500F9",
      text: "#F3E5F5",
      textMuted: "#CE93D8",
      toastBg: "linear-gradient(135deg, #AB47BC 0%, #4A148C 100%)",
      toastText: "#FFFFFF",
      speedometer: "#00E5FF",
      fuelNormal: "#E040FB",
      fuelAlert: "#FF1744",
      healthFull: "#00E676",
      nairaGold: "#FFD700"
    }
  },

  "Naija Green White Green": {
    name: "Naija Green White Green",
    description: "Patriotic Nigerian green-white-green pride on the mainland",
    danfo: {
      body: "#008751",
      stripe: "#FFFFFF",
      roof: "#00663D",
      bumper: "#052617",
      interior: "#1B3B2B",
      headlightGlow: "#C8E6C9",
      taillightGlow: "#FF3D00"
    },
    character: {
      skin: "#53331C",
      outfit: "#FFFFFF",
      cap: "#008751",
      accessories: "#FFEB3B",
      glasses: "#004D40",
      conductorOutfit: "#66BB6A"
    },
    world: {
      skyTop: "#004D40",
      skyBottom: "#A7FFEB",
      sunColor: "#E0F2F1",
      fogColor: "#00382E",
      ambientLight: "#80CBC4",
      sunLight: "#E8F5E9",
      road: "#1A2520",
      roadLines: "#FFFFFF",
      curbPrimary: "#008751",
      curbSecondary: "#FFFFFF",
      sidewalk: "#455A64",
      buildingColors: ["#E0F2F1", "#C8E6C9", "#B2DFDB", "#ECEFF1", "#CFD8DC"]
    },
    ui: {
      primary: "#00C853",
      accent: "#64DD17",
      background: "rgba(10, 30, 20, 0.94)",
      panelBg: "rgba(16, 42, 28, 0.88)",
      border: "#00C853",
      text: "#E8F5E9",
      textMuted: "#A5D6A7",
      toastBg: "linear-gradient(135deg, #008751 0%, #004D40 100%)",
      toastText: "#FFFFFF",
      speedometer: "#64DD17",
      fuelNormal: "#00E676",
      fuelAlert: "#FF1744",
      healthFull: "#00C853",
      nairaGold: "#FFD700"
    }
  },

  "High Contrast Gold": {
    name: "High Contrast Gold",
    description: "Ultra high-contrast black and yellow designed for maximum readability and WCAG AAA compliance",
    danfo: {
      body: "#FFD600",
      stripe: "#000000",
      roof: "#FFAB00",
      bumper: "#000000",
      interior: "#000000",
      headlightGlow: "#FFFFFF",
      taillightGlow: "#FF1744"
    },
    character: {
      skin: "#3E2723",
      outfit: "#FFD600",
      cap: "#000000",
      accessories: "#FFFFFF",
      glasses: "#000000",
      conductorOutfit: "#FFD600"
    },
    world: {
      skyTop: "#000000",
      skyBottom: "#212121",
      sunColor: "#FFFFFF",
      fogColor: "#050505",
      ambientLight: "#FAFAFA",
      sunLight: "#FFFFFF",
      road: "#111111",
      roadLines: "#FFD600",
      curbPrimary: "#FFD600",
      curbSecondary: "#000000",
      sidewalk: "#424242",
      buildingColors: ["#212121", "#333333", "#424242", "#1A1A1A", "#262626"]
    },
    ui: {
      primary: "#FFD600",
      accent: "#FFFFFF",
      background: "rgba(0, 0, 0, 0.98)",
      panelBg: "rgba(10, 10, 10, 0.95)",
      border: "#FFD600",
      text: "#FFFFFF",
      textMuted: "#E0E0E0",
      toastBg: "linear-gradient(135deg, #FFD600 0%, #FF8F00 100%)",
      toastText: "#000000",
      speedometer: "#00FF66",
      fuelNormal: "#FFD600",
      fuelAlert: "#FF1744",
      healthFull: "#00FF66",
      nairaGold: "#FFD600"
    }
  },

  "Lagos Rainstorm": {
    name: "Lagos Rainstorm",
    description: "Heavy tropical afternoon downpour with dark moody skies, wet asphalt and neon lights",
    danfo: {
      body: "#E5A800",
      stripe: "#101010",
      roof: "#C28E00",
      bumper: "#1A202C",
      interior: "#1A1A24",
      headlightGlow: "#80D8FF",
      taillightGlow: "#FF1744"
    },
    character: {
      skin: "#422818",
      outfit: "#00B0FF",
      cap: "#263238",
      accessories: "#FFD700",
      glasses: "#102027",
      conductorOutfit: "#FF6D00"
    },
    world: {
      skyTop: "#1A232E",
      skyBottom: "#37474F",
      sunColor: "#B0BEC5",
      fogColor: "#212D38",
      ambientLight: "#607D8B",
      sunLight: "#90A4AE",
      road: "#12181E",
      roadLines: "#ECEFF1",
      curbPrimary: "#FFB300",
      curbSecondary: "#263238",
      sidewalk: "#2C3E50",
      buildingColors: ["#1C2833", "#273746", "#212F3D", "#2E4053", "#1A252F"]
    },
    ui: {
      primary: "#00E5FF",
      accent: "#FFB300",
      background: "rgba(18, 25, 35, 0.95)",
      panelBg: "rgba(14, 20, 30, 0.90)",
      border: "#00E5FF",
      text: "#ECEFF1",
      textMuted: "#B0BEC5",
      toastBg: "linear-gradient(135deg, #00B0FF 0%, #0077C2 100%)",
      toastText: "#FFFFFF",
      speedometer: "#00E5FF",
      fuelNormal: "#00E5FF",
      fuelAlert: "#FF1744",
      healthFull: "#00E676",
      nairaGold: "#FFD700"
    }
  }
};

class ThemeManager {
  constructor() {
    this.currentPresetName = "Lagos Sunset";
    this.tokens = JSON.parse(JSON.stringify(THEME_PRESETS[this.currentPresetName]));
    this.listeners = [];
  }

  init() {
    // Check saved preset in localStorage or startng profile
    const saved = localStorage.getItem("lagos_run_theme_preset");
    if (saved && THEME_PRESETS[saved]) {
      this.setPreset(saved, false);
    } else {
      this.applyCssTokens();
    }
  }

  getPresetName() {
    return this.currentPresetName;
  }

  getTokens() {
    return this.tokens;
  }

  listPresets() {
    return Object.keys(THEME_PRESETS).map(key => ({
      id: key,
      name: THEME_PRESETS[key].name,
      description: THEME_PRESETS[key].description,
      previewDanfo: THEME_PRESETS[key].danfo.body,
      previewAccent: THEME_PRESETS[key].ui.accent
    }));
  }

  setPreset(presetName, save = true) {
    if (!THEME_PRESETS[presetName]) return;
    this.currentPresetName = presetName;
    this.tokens = JSON.parse(JSON.stringify(THEME_PRESETS[presetName]));
    if (save) {
      localStorage.setItem("lagos_run_theme_preset", presetName);
    }
    this.applyCssTokens();
    this.notifyListeners();
  }

  updateCustomToken(path, value) {
    const keys = path.split(".");
    let target = this.tokens;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!target[keys[i]]) target[keys[i]] = {};
      target = target[keys[i]];
    }
    target[keys[keys.length - 1]] = value;
    this.applyCssTokens();
    this.notifyListeners();
  }

  applyCssTokens() {
    const root = document.documentElement;
    const ui = this.tokens.ui;
    root.style.setProperty("--ui-primary", ui.primary);
    root.style.setProperty("--ui-accent", ui.accent);
    root.style.setProperty("--ui-bg", ui.background);
    root.style.setProperty("--ui-panel-bg", ui.panelBg);
    root.style.setProperty("--ui-border", ui.border);
    root.style.setProperty("--ui-text", ui.text);
    root.style.setProperty("--ui-text-muted", ui.textMuted);
    root.style.setProperty("--ui-toast-bg", ui.toastBg);
    root.style.setProperty("--ui-toast-text", ui.toastText);
    root.style.setProperty("--ui-naira", ui.nairaGold);
    root.style.setProperty("--danfo-body", this.tokens.danfo.body);
    root.style.setProperty("--danfo-stripe", this.tokens.danfo.stripe);
  }

  onThemeChange(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notifyListeners() {
    window.dispatchEvent(new CustomEvent("themechange", { detail: this.tokens }));
    for (const listener of this.listeners) {
      try {
        listener(this.tokens);
      } catch (err) {
        console.error("Theme listener error:", err);
      }
    }
  }
}

export const themeManager = new ThemeManager();
