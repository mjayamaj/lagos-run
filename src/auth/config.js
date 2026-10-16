/**
 * Start.ng Integration Configuration
 * Configure platform endpoints, OAuth redirects, or iframe postMessage targets.
 */

export const STARTNG_CONFIG = {
  appName: "Lagos Run: Keep the Danfo Moving",
  appId: "startng-lagos-run-danfo-v1",
  
  // API endpoints (if backend is active)
  apiBaseUrl: window.STARTNG_API_URL || "https://api.start.ng/v1",
  authEndpoint: "/auth/session",
  scoresEndpoint: "/games/danfo/scores",
  leaderboardEndpoint: "/games/danfo/leaderboard",

  // Iframe PostMessage Protocol settings
  enablePostMessageAuth: true,
  targetOrigin: (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) ? "*" : "https://start.ng",
  allowedOrigins: ["https://start.ng", "https://app.start.ng", "http://localhost:5173", "http://127.0.0.1:5173"],

  // Query parameter keys for direct platform embeds
  urlParamKeys: {
    userId: ["userId", "uid", "user_id", "id"],
    username: ["username", "name", "user", "player"],
    avatar: ["avatar", "pic", "photo"],
    token: ["token", "auth_token", "jwt"]
  },

  // Fallback demo users for instant offline or dev testing
  demoUsers: [
    {
      id: "sng_driver_01",
      name: "Tunde 'Agba' Balogun",
      handle: "@tunde_danfo",
      avatar: "👨🏾‍🦱",
      rank: "Master Transporter",
      themePreset: "Lagos Sunset"
    },
    {
      id: "sng_driver_02",
      name: "Amina 'Queen' Bello",
      handle: "@amina_ikeja",
      avatar: "👩🏾‍🦱",
      rank: "Expressway Pioneer",
      themePreset: "Night Owambe"
    },
    {
      id: "sng_driver_03",
      name: "Chidi 'Speed' Okafor",
      handle: "@chidi_fast",
      avatar: "🧔🏾",
      rank: "Third Mainland Legend",
      themePreset: "Naija Green White Green"
    }
  ]
};
