/**
 * Official start.ng Platform Integration Adapter
 * Fully compliant with https://start.ng/docs.md
 * 
 * Supports:
 * - Hidden iframe connect page (https://start.ng/connect) via postMessage
 * - startng:whoami with user & guest character style & face picture
 * - startng:score with startng.json statistics (dodges, distance, passengers, naira)
 * - startng:leaderboard query
 * - HTTP API fallback (https://api.start.ng) with game session
 * - Character Rule: style tokens propagated to Danfo driver/conductor & HUD profile card
 */

import { themeManager } from "../theme/theme.js";

const START_NG = "https://start.ng";
const API_BASE = "https://api.start.ng";
const GAME_NAME = (typeof window !== "undefined" && window.location.hostname.includes(".start.ng"))
  ? window.location.hostname.split(".")[0]
  : "lagos-run";

let connectIframePromise = null;

function connectFrame() {
  if (typeof document === "undefined") return Promise.resolve(null);
  connectIframePromise ??= new Promise((resolve, reject) => {
    const el = document.createElement("iframe");
    el.src = `${START_NG}/connect`;
    el.hidden = true;
    el.style.display = "none";
    el.onload = () => resolve(el);
    el.onerror = (err) => {
      console.warn("Could not connect to start.ng frame:", err);
      resolve(null);
    };
    document.body.append(el);
  });
  return connectIframePromise;
}

// Sends a message and resolves to start.ng's reply, or null if it didn't answer.
export async function askStartNg(message, replyType, timeoutMs = 4000) {
  try {
    const el = await connectFrame();
    if (!el || !el.contentWindow) return null;

    return new Promise((resolve) => {
      const requestId = Math.random().toString(36).slice(2);
      let timer = null;

      function onMessage(e) {
        if (e.origin !== START_NG || e.source !== el.contentWindow) return;
        if (e.data?.type === replyType && e.data.requestId === requestId) {
          clearTimeout(timer);
          window.removeEventListener("message", onMessage);
          resolve(e.data);
        }
      }

      timer = setTimeout(() => {
        window.removeEventListener("message", onMessage);
        resolve(null);
      }, timeoutMs);

      window.addEventListener("message", onMessage);
      el.contentWindow.postMessage({ ...message, requestId }, START_NG);
    });
  } catch (err) {
    console.warn("askStartNg error:", err);
    return null;
  }
}

class StartNGAuth {
  constructor() {
    this.user = null;
    this.guest = null;
    this.session = null;
    this.characterStyle = null;
    this.isInitialized = false;
    this.authListeners = [];
  }

  async init() {
    if (this.isInitialized) return this.user;

    // 1. Pick up game session token from hash if redirected from start.ng
    if (typeof window !== "undefined") {
      const hashParams = new URLSearchParams(window.location.hash.slice(1));
      if (hashParams.get("startng_session")) {
        this.session = hashParams.get("startng_session");
        sessionStorage.setItem("startng_session", this.session);
        // Clean address bar
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      } else {
        this.session = sessionStorage.getItem("startng_session");
      }
    }

    // 2. Ask start.ng connect page: who is playing?
    await this.refreshUser();

    // 3. Listen to visibilitychange and focus to refresh user if signed in elsewhere
    if (typeof window !== "undefined") {
      const onTabActive = () => {
        if (!document.hidden) {
          this.refreshUser();
        }
      };
      window.addEventListener("visibilitychange", onTabActive);
      window.addEventListener("focus", onTabActive);
    }

    // 4. Fallback for offline / dev preview if start.ng connect didn't answer
    if (!this.user && !this.guest) {
      const stored = localStorage.getItem("startng_user_session");
      if (stored) {
        try {
          const session = JSON.parse(stored);
          if (session && session.user) {
            this.user = session.user;
          }
        } catch (e) {}
      }
      if (!this.user) {
        // Default guest look
        this.guest = {
          name: "Guest Driver",
          account: "guest",
          face: "https://api.dicebear.com/7.x/bottts/svg?seed=DanfoGuest",
          style: {
            body: "male",
            primaryColor: "#FFCC00",
            secondaryColor: "#111111",
            skinColor: "#8d5524",
            hairColor: "#17120f",
            hair: "short",
            hat: "cap",
            accessory: "none"
          }
        };
      }
    }

    this.isInitialized = true;
    return this.user || this.guest;
  }

  async refreshUser() {
    try {
      const reply = await askStartNg({ type: "startng:whoami" }, "startng:user", 2500);
      if (reply) {
        if (reply.user) {
          this.user = reply.user;
          this.guest = null;
          this.characterStyle = reply.user.style;
        } else if (reply.guest) {
          this.guest = reply.guest;
          this.user = null;
          this.characterStyle = reply.guest.style;
        }
        this.notifyAuthListeners();
        return;
      }
    } catch (err) {
      console.warn("startng:whoami check failed:", err);
    }

    // HTTP API fallback if session token exists
    if (this.session) {
      try {
        const res = await fetch(`${API_BASE}/games/${GAME_NAME}/player`, {
          headers: { Authorization: `Bearer ${this.session}` }
        });
        if (res.ok) {
          const data = await res.json();
          this.user = {
            id: data.id,
            name: data.name,
            account: data.account || data.name.toLowerCase().replace(/\s+/g, ""),
            style: data.style,
            face: data.face || null
          };
          this.characterStyle = data.style;
          this.notifyAuthListeners();
        } else if (res.status === 401) {
          sessionStorage.removeItem("startng_session");
          this.session = null;
        }
      } catch (e) {
        console.warn("HTTP player fetch error:", e);
      }
    }
  }

  signIn() {
    if (typeof window === "undefined") return;
    const returnUrl = encodeURIComponent(window.location.origin + window.location.pathname);
    window.location.href = `${START_NG}/?return_to=${returnUrl}`;
  }

  getUser() {
    return this.user || this.guest;
  }

  isLoggedIn() {
    return Boolean(this.user && this.user.id);
  }

  getCharacterStyle() {
    return this.characterStyle || (this.user?.style ?? this.guest?.style ?? null);
  }

  onAuthChange(callback) {
    this.authListeners.push(callback);
    return () => {
      this.authListeners = this.authListeners.filter(cb => cb !== callback);
    };
  }

  notifyAuthListeners() {
    const active = this.user || this.guest;
    for (const cb of this.authListeners) {
      try {
        cb(active);
      } catch (e) {
        console.error("Auth listener error:", e);
      }
    }
  }

  // Save game run according to startng.json statistics
  async saveScore({ dodges = 0, distance = 0, passengers = 0, naira = 0, bestRoute = "" }) {
    const stats = {
      dodges: Math.max(0, Math.floor(dodges)),
      distance: Math.max(0, Math.floor(distance)),
      passengers: Math.max(0, Math.floor(passengers)),
      naira: Math.max(0, Math.floor(naira))
    };

    let startNgResult = null;

    // 1. Post to start.ng connect iframe
    try {
      const reply = await askStartNg({ type: "startng:score", stats }, "startng:scoreSaved", 3000);
      if (reply && reply.ok) {
        startNgResult = reply.result;
      }
    } catch (e) {
      console.warn("startng:score connect failed:", e);
    }

    // 2. HTTP API fallback if session present
    if (!startNgResult && this.session) {
      try {
        const res = await fetch(`${API_BASE}/games/${GAME_NAME}/scores`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.session}`
          },
          body: JSON.stringify({ stats })
        });
        if (res.ok) {
          startNgResult = await res.json();
        }
      } catch (e) {
        console.warn("HTTP saveScore failed:", e);
      }
    }

    // 3. Cache locally for offline preview and personal best
    const record = {
      userId: this.user ? this.user.id : "guest",
      name: this.user ? this.user.name : (this.guest ? this.guest.name : "Agba Driver"),
      account: this.user?.account || "guest",
      face: this.user?.face || this.guest?.face || "🧢",
      score: stats.dodges,
      dodges: stats.dodges,
      distance: stats.distance,
      passengers: stats.passengers,
      naira: stats.naira,
      bestRoute: bestRoute || "Oshodi Expressway",
      timestamp: Date.now(),
      dateStr: new Date().toLocaleDateString("en-NG", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    const storageKey = "startng_lagos_run_scores";
    let list = [];
    try {
      list = JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch (e) {
      list = [];
    }
    list.push(record);
    list.sort((a, b) => b.dodges - a.dodges);
    list = list.slice(0, 50);
    localStorage.setItem(storageKey, JSON.stringify(list));

    const isNewHigh = startNgResult ? Boolean(startNgResult.improved) : (list[0] === record);

    return {
      record,
      isNewHigh,
      rank: startNgResult?.rank || 1,
      best: startNgResult?.best || stats.dodges
    };
  }

  // Fetch official start.ng leaderboard
  async getLeaderboard(limit = 10) {
    // 1. Try connect iframe
    try {
      const reply = await askStartNg({ type: "startng:leaderboard", limit }, "startng:leaderboardData", 3000);
      if (reply && reply.ok && Array.isArray(reply.entries)) {
        return reply.entries;
      }
    } catch (e) {
      console.warn("startng:leaderboard connect failed:", e);
    }

    // 2. Try HTTP API
    try {
      const res = await fetch(`${API_BASE}/games/${GAME_NAME}/leaderboard?limit=${limit}`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) return data;
      }
    } catch (e) {
      console.warn("HTTP leaderboard fetch failed:", e);
    }

    // 3. Fallback to local storage entries with authentic default legends
    const storageKey = "startng_lagos_run_scores";
    let list = [];
    try {
      list = JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch (e) {
      list = [];
    }

    if (list.length === 0) {
      list = [
        { rank: 1, name: "Baba Alado (Ojuelegba King)", dodges: 48, distance: 3450, passengers: 12, naira: 42000 },
        { rank: 2, name: "Mama Sikira (Oyingbo Market)", dodges: 36, distance: 2800, passengers: 9, naira: 31500 },
        { rank: 3, name: "MC Oshodi (Third Mainland)", dodges: 29, distance: 2200, passengers: 7, naira: 26000 },
        { rank: 4, name: "Captain Seyi (BRT Racer)", dodges: 22, distance: 1650, passengers: 5, naira: 19800 }
      ];
    }
    return list;
  }

  loginWithDemo(index = 0) {
    const demos = [
      { id: "sng_01", name: "Tunde 'Agba' Balogun", account: "tunde_danfo", face: "https://api.dicebear.com/7.x/bottts/svg?seed=Tunde", style: { skinColor: "#8d5524", primaryColor: "#FFCC00", secondaryColor: "#111111", hat: "cap" } },
      { id: "sng_02", name: "Amina 'Queen' Bello", account: "amina_ikeja", face: "https://api.dicebear.com/7.x/bottts/svg?seed=Amina", style: { skinColor: "#a26e45", primaryColor: "#8E24AA", secondaryColor: "#FFD700", hat: "crown" } },
      { id: "sng_03", name: "Chidi 'Speed' Okafor", account: "chidi_fast", face: "https://api.dicebear.com/7.x/bottts/svg?seed=Chidi", style: { skinColor: "#613d21", primaryColor: "#008751", secondaryColor: "#FFFFFF", hat: "beanie" } }
    ];
    const user = demos[index] || demos[0];
    this.user = user;
    this.guest = null;
    this.characterStyle = user.style;
    localStorage.setItem("startng_user_session", JSON.stringify({ user }));
    this.notifyAuthListeners();
    return this.user;
  }
}

export const startNGAuth = new StartNGAuth();
