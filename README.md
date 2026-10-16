# Lagos Run: Keep the Danfo Moving 🚍💨

An authentic 3D endless/checkpoint Lagos Danfo racing game built with Three.js and Vite, ready to publish on the **start.ng** platform.

Drive an iconic yellow danfo bus through a stylized golden-hour Lagos expressway from Oshodi to Ikeja. Pick up passengers at bus stops, stack luggage high on the roof rack, dodge notorious Lagos obstacles (potholes, floods, traffic jams, police checkpoints, NEPA blackouts, and okada swarms), tune into Danfo FM for Afrobeats grooves, and keep the danfo moving!

---

## 🚀 Quickstart & Local Development

### 1. Prerequisites
- **Node.js**: v18+ (tested on Node v24)
- **npm**: v9+

### 2. Installation & Running Locally
```bash
# Install dependencies (Three.js pinned, Vite, Canvas-Confetti)
npm install

# Start development server
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in any browser (desktop or mobile).

### 3. Production Build for start.ng
```bash
npm run build
```
This generates a production bundle in the `dist/` directory. All assets use relative paths (`./`) via `vite.config.js` so it runs seamlessly in iframes, subdirectories, or standalone domains.

---

## 🎮 Core Controls

| Action | Desktop Keyboard | Mobile Touch |
| :--- | :--- | :--- |
| **Steer Left** | `A` or `ArrowLeft` | Swipe Left or tap `◀` on-screen |
| **Steer Right** | `D` or `ArrowRight` | Swipe Right or tap `▶` on-screen |
| **Turbo Boost** | `W` or `ArrowUp` | Swipe Up / Tap upper screen or tap `🚀 BOOST` |
| **Brake** | `S` or `ArrowDown` | Swipe Down / Tap lower screen or tap `🛑 BRAKE` |
| **Danfo Horn** | `Space` or `H` | Tap `📢 HORN` button ("PAHN-PAHN!!") |
| **Radio Switch** | `R` | Tap `📻 Station` button on HUD |
| **Pause / Resume**| `Escape` or `P` | Tap `⏸️` button on HUD |

---

## 🕹️ Core Arcade Dodging Gameplay

Just like classic high-intensity arcade racing games, the core challenge is to **dodge blocks and obstacles** to survive as long as possible and post record-breaking high scores on **start.ng**:
- **Instant Crash on Block Hit**: Colliding with any road obstacle (pothole, go-slow traffic jam car, broken trailer, police barricade, okada bike, or flood puddle) **stops the game immediately**! The Danfo crashes with screen shake, collision sound effects, and an authentic Pidgin crash punchline.
- **Dodging for High Score**: Every block successfully dodged grants **+250 points** and increments your live **DODGED BLOCKS** counter on the HUD.
- **Power-up Shield Protection**: Collecting the **Tiger Generator Boost** or **VIP Siren Escort** activates an invincibility shield that allows you to **smash through blocks** without stopping, turning obstacles into massive bonus points!
- **Passengers & Luggage**: Pull over to bus stops along the road to board commuters, earn Naira, and watch your Danfo roof luggage stack higher and higher!

### ⚡ Power-ups
1. **Fuel Can (Jerrycan)**: Restores +45% fuel.
2. **Tiger Generator Boost**: "I better pass my neighbor" mini-generator providing invincibility shield (8s) to bash through any obstacle!
3. **Pure Water Sachet**: Chilled nylon sachet restoring +35% bus health.
4. **Party Jollof Pack**: Firewood aroma speed overdrive!
5. **Naira Stack**: Floating bundle of ₦1,000 notes + 2x multiplier for 12 seconds.
6. **Siren Pass**: VIP escort convoy clearing the lane ahead!

---

## 🎨 Central Theme System (`src/theme/theme.js`)

All colors, fonts, 3D materials, and UI styling are managed by `themeManager` via design tokens. Changing or switching presets immediately re-colors:
- **Danfo Bus**: Body color, stripe color, roof, bumpers, and headlight glow.
- **Driver & Conductor**: Skin tone, outfit shirt, cap, and accessories.
- **Environment**: Golden hour sky gradient, sun light, fog density, road, and striped curb stones.
- **UI Elements**: HUD cards, toasts, and buttons.

### Included Live Presets
1. **"Lagos Sunset"**: Classic golden hour with iconic Danfo yellow (`#FFCC00`) and black stripes.
2. **"Night Owambe"**: Royal purple Danfo (`#8E24AA`) with gold stripes and neon cyan agbada party vibes.
3. **"Naija Green White Green"**: Patriotic Nigerian national green (`#008751`) with pure white racing stripes.

Switch presets in-game via **Garage & Themes** without reloading the page.

---

## 📢 Pidgin HUD Text System (`public/pidgin.json`)

**Zero hardcoded Pidgin strings in game logic.** All dialogue lines are stored in `public/pidgin.json`, grouped by event with multiple variations picked at random:
- `game_start`: "Enter bus, we dey go!", "Driver don start engine, hold your bag well!"
- `pothole`: "Wahala dey! Who dig this road?", "Chai! Pothole don shake bus shock absorber!"
- `traffic_jam`: "Go slow don block road!", "Traffic don tie us for here!"
- `police_checkpoint`: "Oga, I get am... settle am!", "Show your particulars, oga driver!"
- `flood`: "Water don carry road!", "Speed boat danfo! Hold tight o!"
- `nepa_light_out`: "NEPA don take light again!", "Headlights only! Drive with faith!"
- `okada_swarm`: "Okada dey come from everywhere!", "Mind your side mirror, bike man dey rush!"
- `passenger_pickup`: "Enter, enter, Ikeja dey go!", "Market woman don enter with her basket!"
- `game_over`: "Bus don spoil. Wahala for who no get spare part!"
- `high_score`: "You don blow! Na you be the Oga Driver!"

To add new lines, simply open `public/pidgin.json` and add strings to the corresponding event array.

---

## 📻 Afrobeats Soundtrack & Danfo Radio (`public/songs.json`)

The audio engine features an in-bus Danfo Radio with station switching:
- **Playlist Config**: Configured in `public/songs.json` (title, artist, file path, BPM, and dropBeat).
- **Referenced Tracks**:
  - *"Jaga Jaga"* by Idris Abdulkareem (104 BPM)
  - *"E Dey Pain Me"* by Stereoman (112 BPM)
  - *"Lagos Sunset Highlife"* by Danfo All-Stars (118 BPM)
  - *"Third Mainland Expressway"* by Mainland Rhythm Band (124 BPM)
- **Swapping Songs**: Place licensed or custom MP3/OGG files in `public/assets/audio/` and update the file path in `public/songs.json`.
- **Built-in Fallback**: If an audio file is not supplied or fails to load, the procedural Web Audio synthesizer automatically generates authentic Afrobeats log drums, shakers, woodblock rimshots, and syncopated basslines synchronized to the song's BPM and beat pulses!
- **Gameplay Sync**: Obstacle spawns pulse on the beat, and speed drops kick in on designated song drop bars.

---

## 🔐 start.ng Platform Integration

The authentication adapter in `src/auth/startng.js` and `src/auth/config.js` is designed to support start.ng seamlessly across all deployment environments:

### 1. Iframe Embed Protocol (postMessage)
When embedded in an iframe on the start.ng portal:
- The game automatically listens for `STARTNG_AUTH_SUCCESS` messages.
- Posts `STARTNG_AUTH_REQUEST` to parent window.
- Posts `STARTNG_SAVE_SCORE` with `{ userId, name, score, naira, passengers, bestRoute }` on game over.

### 2. URL Query Parameters
If start.ng launches games with query strings:
- `https://your-domain.com/?userId=123&username=Chidi&token=xyz`
- The game automatically detects the session and logs the user in.

### 3. Global SDK Handshake
- Supports `window.StartNG.getUser()` and `window.StartNG.saveScore(record)` if an SDK is injected by the host shell.

### 4. Standalone / Demo Driver Fallback
- For local preview or standalone hosting, an authentic Start.ng Login Modal is presented with pre-configured verified pilot profiles (Tunde, Amina, Chidi) or custom username entry. Scores are persisted in `localStorage` and displayed on the Hall of Fame Leaderboard.

---

## 📦 Project Structure

```
Lagos Danfo/
├── dist/                      # Publish-ready production build for start.ng
├── public/
│   ├── assets/
│   │   └── audio/             # MP3/OGG tracks and placeholders
│   ├── pidgin.json            # Central Pidgin toast database
│   └── songs.json             # Afrobeats playlist configuration
├── src/
│   ├── audio/
│   │   ├── AudioManager.js    # Web Audio synth, SFX, beat clock, procedural drums
│   │   └── radio.js           # Danfo radio station changer & ticker
│   ├── auth/
│   │   ├── config.js          # start.ng endpoints & demo profiles
│   │   └── startng.js         # Session detector, postMessage, and score saver
│   ├── core/
│   │   ├── Game.js            # Main loop, physics, collisions, checkpoints, missions
│   │   ├── Input.js           # Keyboard, touch gestures, and on-screen controls
│   │   ├── Renderer.js        # Three.js scene, camera follow, shake, NEPA lighting
│   │   └── World.js           # Endless 3-lane road, curbs, market stalls, skyline
│   ├── entities/
│   │   └── DanfoBus.js        # 3D Danfo bus, dynamic roof luggage, driver, conductor
│   ├── obstacles/
│   │   └── ObstacleManager.js # 10 Nigerian problem obstacles + 6 power-ups
│   ├── theme/
│   │   └── theme.js           # Central design tokens & 3 live presets
│   ├── ui/
│   │   ├── HUD.js             # Mobile-first speedometer, fuel, health, naira, route
│   │   ├── PidginPopup.js     # Animated non-blocking toast system
│   │   └── Screens.js         # Start, Login, Pause, Settings, Leaderboard, Game Over
│   ├── main.js                # Game bootstrapper
│   └── style.css              # Central stylesheet reading theme tokens
├── index.html                 # Semantic HTML5 entry
├── package.json               # Pinned Three.js and Vite configuration
├── vite.config.js             # Relative path production build setup
└── README.md                  # Complete documentation
```

---

## 📋 Assumptions Made Regarding start.ng
1. **Platform Docs**: The user prompt included the placeholder `[PASTE THE RELEVANT start.ng LOGIN/AUTH/PUBLISH DOCS HERE]`. We assumed standard browser game hosting conventions (iframe embedding with `postMessage` protocol, query parameters `?userId=...&username=...`, and optional `window.StartNG` SDK).
2. **Publish Format**: The production bundle in `dist/` contains relative asset references (`./`), making it ready to upload as a static zip, host on an S3/Cloud Storage bucket, or embed directly into a start.ng web view.
3. **Leaderboard & Auth Persistence**: Uses `localStorage` with parent `postMessage` synchronization so verified user profiles, personal bests, and scores work both standalone and within the platform container.
