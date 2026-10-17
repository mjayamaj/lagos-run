(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const pn={"Lagos Sunset":{name:"Lagos Sunset",description:"Classic golden hour over Oshodi with iconic yellow danfo",danfo:{body:"#FFCC00",stripe:"#1A1A1A",roof:"#E5B800",bumper:"#2B2B2B",interior:"#3D2B1F",headlightGlow:"#FFF59D",taillightGlow:"#FF1744"},character:{skin:"#5C3826",outfit:"#FF5722",cap:"#1A1A1A",accessories:"#FFD700",glasses:"#111111",conductorOutfit:"#2979FF"},world:{skyTop:"#FF5722",skyBottom:"#FFE082",sunColor:"#FFF9C4",fogColor:"#FF8F00",ambientLight:"#FFB74D",sunLight:"#FFF3E0",road:"#2D2A26",roadLines:"#FFF8E1",curbPrimary:"#FFCC00",curbSecondary:"#1A1A1A",sidewalk:"#8D7B68",buildingColors:["#D7CCC8","#FFE0B2","#CFD8DC","#FFCCBC","#FFF9C4"]},ui:{primary:"#FFB300",accent:"#FF5722",background:"rgba(32, 22, 16, 0.92)",panelBg:"rgba(24, 15, 10, 0.85)",border:"#FFB300",text:"#FFF8E1",textMuted:"#D7CCC8",toastBg:"linear-gradient(135deg, #FFB300 0%, #E65100 100%)",toastText:"#1A1A1A",speedometer:"#00E676",fuelNormal:"#FFB300",fuelAlert:"#D50000",healthFull:"#00E676",nairaGold:"#FFD700"}},"Night Owambe":{name:"Night Owambe",description:"Lively Lagos night groove with royal purple, neon and gold party vibes",danfo:{body:"#8E24AA",stripe:"#FFD700",roof:"#7B1FA2",bumper:"#120024",interior:"#240046",headlightGlow:"#00E5FF",taillightGlow:"#FF007F"},character:{skin:"#4A2E1B",outfit:"#00E5FF",cap:"#FFD700",accessories:"#FFFFFF",glasses:"#FF0055",conductorOutfit:"#FFEA00"},world:{skyTop:"#0B0420",skyBottom:"#311B92",sunColor:"#BA68C8",fogColor:"#15082D",ambientLight:"#7E57C2",sunLight:"#D1C4E9",road:"#161124",roadLines:"#00E5FF",curbPrimary:"#8E24AA",curbSecondary:"#FFD700",sidewalk:"#3E2966",buildingColors:["#1F1138","#2E1A4E","#3F2565","#512D80","#281545"]},ui:{primary:"#D500F9",accent:"#00E5FF",background:"rgba(18, 8, 32, 0.94)",panelBg:"rgba(28, 12, 48, 0.88)",border:"#D500F9",text:"#F3E5F5",textMuted:"#CE93D8",toastBg:"linear-gradient(135deg, #AB47BC 0%, #4A148C 100%)",toastText:"#FFFFFF",speedometer:"#00E5FF",fuelNormal:"#E040FB",fuelAlert:"#FF1744",healthFull:"#00E676",nairaGold:"#FFD700"}},"Naija Green White Green":{name:"Naija Green White Green",description:"Patriotic Nigerian green-white-green pride on the mainland",danfo:{body:"#008751",stripe:"#FFFFFF",roof:"#00663D",bumper:"#052617",interior:"#1B3B2B",headlightGlow:"#C8E6C9",taillightGlow:"#FF3D00"},character:{skin:"#53331C",outfit:"#FFFFFF",cap:"#008751",accessories:"#FFEB3B",glasses:"#004D40",conductorOutfit:"#66BB6A"},world:{skyTop:"#004D40",skyBottom:"#A7FFEB",sunColor:"#E0F2F1",fogColor:"#00382E",ambientLight:"#80CBC4",sunLight:"#E8F5E9",road:"#1A2520",roadLines:"#FFFFFF",curbPrimary:"#008751",curbSecondary:"#FFFFFF",sidewalk:"#455A64",buildingColors:["#E0F2F1","#C8E6C9","#B2DFDB","#ECEFF1","#CFD8DC"]},ui:{primary:"#00C853",accent:"#64DD17",background:"rgba(10, 30, 20, 0.94)",panelBg:"rgba(16, 42, 28, 0.88)",border:"#00C853",text:"#E8F5E9",textMuted:"#A5D6A7",toastBg:"linear-gradient(135deg, #008751 0%, #004D40 100%)",toastText:"#FFFFFF",speedometer:"#64DD17",fuelNormal:"#00E676",fuelAlert:"#FF1744",healthFull:"#00C853",nairaGold:"#FFD700"}},"High Contrast Gold":{name:"High Contrast Gold",description:"Ultra high-contrast black and yellow designed for maximum readability and WCAG AAA compliance",danfo:{body:"#FFD600",stripe:"#000000",roof:"#FFAB00",bumper:"#000000",interior:"#000000",headlightGlow:"#FFFFFF",taillightGlow:"#FF1744"},character:{skin:"#3E2723",outfit:"#FFD600",cap:"#000000",accessories:"#FFFFFF",glasses:"#000000",conductorOutfit:"#FFD600"},world:{skyTop:"#000000",skyBottom:"#212121",sunColor:"#FFFFFF",fogColor:"#050505",ambientLight:"#FAFAFA",sunLight:"#FFFFFF",road:"#111111",roadLines:"#FFD600",curbPrimary:"#FFD600",curbSecondary:"#000000",sidewalk:"#424242",buildingColors:["#212121","#333333","#424242","#1A1A1A","#262626"]},ui:{primary:"#FFD600",accent:"#FFFFFF",background:"rgba(0, 0, 0, 0.98)",panelBg:"rgba(10, 10, 10, 0.95)",border:"#FFD600",text:"#FFFFFF",textMuted:"#E0E0E0",toastBg:"linear-gradient(135deg, #FFD600 0%, #FF8F00 100%)",toastText:"#000000",speedometer:"#00FF66",fuelNormal:"#FFD600",fuelAlert:"#FF1744",healthFull:"#00FF66",nairaGold:"#FFD600"}},"Lagos Rainstorm":{name:"Lagos Rainstorm",description:"Heavy tropical afternoon downpour with dark moody skies, wet asphalt and neon lights",danfo:{body:"#E5A800",stripe:"#101010",roof:"#C28E00",bumper:"#1A202C",interior:"#1A1A24",headlightGlow:"#80D8FF",taillightGlow:"#FF1744"},character:{skin:"#422818",outfit:"#00B0FF",cap:"#263238",accessories:"#FFD700",glasses:"#102027",conductorOutfit:"#FF6D00"},world:{skyTop:"#1A232E",skyBottom:"#37474F",sunColor:"#B0BEC5",fogColor:"#212D38",ambientLight:"#607D8B",sunLight:"#90A4AE",road:"#12181E",roadLines:"#ECEFF1",curbPrimary:"#FFB300",curbSecondary:"#263238",sidewalk:"#2C3E50",buildingColors:["#1C2833","#273746","#212F3D","#2E4053","#1A252F"]},ui:{primary:"#00E5FF",accent:"#FFB300",background:"rgba(18, 25, 35, 0.95)",panelBg:"rgba(14, 20, 30, 0.90)",border:"#00E5FF",text:"#ECEFF1",textMuted:"#B0BEC5",toastBg:"linear-gradient(135deg, #00B0FF 0%, #0077C2 100%)",toastText:"#FFFFFF",speedometer:"#00E5FF",fuelNormal:"#00E5FF",fuelAlert:"#FF1744",healthFull:"#00E676",nairaGold:"#FFD700"}}};class bl{constructor(){this.currentPresetName="Lagos Sunset",this.tokens=JSON.parse(JSON.stringify(pn[this.currentPresetName])),this.listeners=[]}init(){const e=localStorage.getItem("lagos_run_theme_preset");e&&pn[e]?this.setPreset(e,!1):this.applyCssTokens()}getPresetName(){return this.currentPresetName}getTokens(){return this.tokens}listPresets(){return Object.keys(pn).map(e=>({id:e,name:pn[e].name,description:pn[e].description,previewDanfo:pn[e].danfo.body,previewAccent:pn[e].ui.accent}))}setPreset(e,t=!0){pn[e]&&(this.currentPresetName=e,this.tokens=JSON.parse(JSON.stringify(pn[e])),t&&localStorage.setItem("lagos_run_theme_preset",e),this.applyCssTokens(),this.notifyListeners())}updateCustomToken(e,t){const n=e.split(".");let s=this.tokens;for(let r=0;r<n.length-1;r++)s[n[r]]||(s[n[r]]={}),s=s[n[r]];s[n[n.length-1]]=t,this.applyCssTokens(),this.notifyListeners()}applyCssTokens(){const e=document.documentElement,t=this.tokens.ui;e.style.setProperty("--ui-primary",t.primary),e.style.setProperty("--ui-accent",t.accent),e.style.setProperty("--ui-bg",t.background),e.style.setProperty("--ui-panel-bg",t.panelBg),e.style.setProperty("--ui-border",t.border),e.style.setProperty("--ui-text",t.text),e.style.setProperty("--ui-text-muted",t.textMuted),e.style.setProperty("--ui-toast-bg",t.toastBg),e.style.setProperty("--ui-toast-text",t.toastText),e.style.setProperty("--ui-naira",t.nairaGold),e.style.setProperty("--danfo-body",this.tokens.danfo.body),e.style.setProperty("--danfo-stripe",this.tokens.danfo.stripe)}onThemeChange(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notifyListeners(){window.dispatchEvent(new CustomEvent("themechange",{detail:this.tokens}));for(const e of this.listeners)try{e(this.tokens)}catch(t){console.error("Theme listener error:",t)}}}const qt=new bl,_s="https://start.ng",Is="https://api.start.ng",Ds=typeof window<"u"&&window.location.hostname.includes(".start.ng")?window.location.hostname.split(".")[0]:"lagos-run";let Ua=null;function wl(){return typeof document>"u"?Promise.resolve(null):(Ua??(Ua=new Promise((i,e)=>{const t=document.createElement("iframe");t.src=`${_s}/connect`,t.hidden=!0,t.style.display="none",t.onload=()=>i(t),t.onerror=n=>{console.warn("Could not connect to start.ng frame:",n),i(null)},document.body.append(t)})),Ua)}async function Fs(i,e,t=4e3){try{const n=await wl();return!n||!n.contentWindow?null:new Promise(s=>{const r=Math.random().toString(36).slice(2);let a=null;function o(l){var c;l.origin!==_s||l.source!==n.contentWindow||((c=l.data)==null?void 0:c.type)===e&&l.data.requestId===r&&(clearTimeout(a),window.removeEventListener("message",o),s(l.data))}a=setTimeout(()=>{window.removeEventListener("message",o),s(null)},t),window.addEventListener("message",o),n.contentWindow.postMessage({...i,requestId:r},_s)})}catch(n){return console.warn("askStartNg error:",n),null}}class Tl{constructor(){this.user=null,this.guest=null,this.session=null,this.characterStyle=null,this.isInitialized=!1,this.authListeners=[]}async init(){if(this.isInitialized)return this.user;if(typeof window<"u"){const e=new URLSearchParams(window.location.hash.slice(1));e.get("startng_session")?(this.session=e.get("startng_session"),sessionStorage.setItem("startng_session",this.session),window.history.replaceState(null,"",window.location.pathname+window.location.search)):this.session=sessionStorage.getItem("startng_session")}if(await this.refreshUser(),typeof window<"u"){const e=()=>{document.hidden||this.refreshUser()};window.addEventListener("visibilitychange",e),window.addEventListener("focus",e)}if(!this.user&&!this.guest){const e=localStorage.getItem("startng_user_session");if(e)try{const t=JSON.parse(e);t&&t.user&&(this.user=t.user)}catch{}this.user||(this.guest={name:"Guest Driver",account:"guest",face:"https://api.dicebear.com/7.x/bottts/svg?seed=DanfoGuest",style:{body:"male",primaryColor:"#FFCC00",secondaryColor:"#111111",skinColor:"#8d5524",hairColor:"#17120f",hair:"short",hat:"cap",accessory:"none"}})}return this.isInitialized=!0,this.user||this.guest}async refreshUser(){try{const e=await Fs({type:"startng:whoami"},"startng:user",2500);if(e){e.user?(this.user=e.user,this.guest=null,this.characterStyle=e.user.style):e.guest&&(this.guest=e.guest,this.user=null,this.characterStyle=e.guest.style),this.notifyAuthListeners();return}}catch(e){console.warn("startng:whoami check failed:",e)}if(this.session)try{const e=await fetch(`${Is}/games/${Ds}/player`,{headers:{Authorization:`Bearer ${this.session}`}});if(e.ok){const t=await e.json();this.user={id:t.id,name:t.name,account:t.account||t.name.toLowerCase().replace(/\s+/g,""),style:t.style,face:t.face||null},this.characterStyle=t.style,this.notifyAuthListeners()}else e.status===401&&(sessionStorage.removeItem("startng_session"),this.session=null)}catch(e){console.warn("HTTP player fetch error:",e)}}signIn(){if(typeof window>"u")return;const e=encodeURIComponent(window.location.origin+window.location.pathname);window.location.href=`${_s}/?return_to=${e}`}getUser(){return this.user||this.guest}isLoggedIn(){return!!(this.user&&this.user.id)}getCharacterStyle(){var e,t;return this.characterStyle||(((e=this.user)==null?void 0:e.style)??((t=this.guest)==null?void 0:t.style)??null)}onAuthChange(e){return this.authListeners.push(e),()=>{this.authListeners=this.authListeners.filter(t=>t!==e)}}notifyAuthListeners(){const e=this.user||this.guest;for(const t of this.authListeners)try{t(e)}catch(n){console.error("Auth listener error:",n)}}async saveScore({dodges:e=0,distance:t=0,passengers:n=0,naira:s=0,bestRoute:r=""}){var h,g,v;const a={dodges:Math.max(0,Math.floor(e)),distance:Math.max(0,Math.floor(t)),passengers:Math.max(0,Math.floor(n)),naira:Math.max(0,Math.floor(s))};let o=null;try{const E=await Fs({type:"startng:score",stats:a},"startng:scoreSaved",3e3);E&&E.ok&&(o=E.result)}catch(E){console.warn("startng:score connect failed:",E)}if(!o&&this.session)try{const E=await fetch(`${Is}/games/${Ds}/scores`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.session}`},body:JSON.stringify({stats:a})});E.ok&&(o=await E.json())}catch(E){console.warn("HTTP saveScore failed:",E)}const l={userId:this.user?this.user.id:"guest",name:this.user?this.user.name:this.guest?this.guest.name:"Agba Driver",account:((h=this.user)==null?void 0:h.account)||"guest",face:((g=this.user)==null?void 0:g.face)||((v=this.guest)==null?void 0:v.face)||"🧢",score:a.dodges,dodges:a.dodges,distance:a.distance,passengers:a.passengers,naira:a.naira,bestRoute:r||"Oshodi Expressway",timestamp:Date.now(),dateStr:new Date().toLocaleDateString("en-NG",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})},c="startng_lagos_run_scores";let d=[];try{d=JSON.parse(localStorage.getItem(c)||"[]")}catch{d=[]}d.push(l),d.sort((E,p)=>p.dodges-E.dodges),d=d.slice(0,50),localStorage.setItem(c,JSON.stringify(d));const f=o?!!o.improved:d[0]===l;return{record:l,isNewHigh:f,rank:(o==null?void 0:o.rank)||1,best:(o==null?void 0:o.best)||a.dodges}}async getLeaderboard(e=10){try{const s=await Fs({type:"startng:leaderboard",limit:e},"startng:leaderboardData",3e3);if(s&&s.ok&&Array.isArray(s.entries))return s.entries}catch(s){console.warn("startng:leaderboard connect failed:",s)}try{const s=await fetch(`${Is}/games/${Ds}/leaderboard?limit=${e}`);if(s.ok){const r=await s.json();if(Array.isArray(r))return r}}catch(s){console.warn("HTTP leaderboard fetch failed:",s)}const t="startng_lagos_run_scores";let n=[];try{n=JSON.parse(localStorage.getItem(t)||"[]")}catch{n=[]}return n.length===0&&(n=[{rank:1,name:"Baba Alado (Ojuelegba King)",dodges:48,distance:3450,passengers:12,naira:42e3},{rank:2,name:"Mama Sikira (Oyingbo Market)",dodges:36,distance:2800,passengers:9,naira:31500},{rank:3,name:"MC Oshodi (Third Mainland)",dodges:29,distance:2200,passengers:7,naira:26e3},{rank:4,name:"Captain Seyi (BRT Racer)",dodges:22,distance:1650,passengers:5,naira:19800}]),n}loginWithDemo(e=0){const t=[{id:"sng_01",name:"Tunde 'Agba' Balogun",account:"tunde_danfo",face:"https://api.dicebear.com/7.x/bottts/svg?seed=Tunde",style:{skinColor:"#8d5524",primaryColor:"#FFCC00",secondaryColor:"#111111",hat:"cap"}},{id:"sng_02",name:"Amina 'Queen' Bello",account:"amina_ikeja",face:"https://api.dicebear.com/7.x/bottts/svg?seed=Amina",style:{skinColor:"#a26e45",primaryColor:"#8E24AA",secondaryColor:"#FFD700",hat:"crown"}},{id:"sng_03",name:"Chidi 'Speed' Okafor",account:"chidi_fast",face:"https://api.dicebear.com/7.x/bottts/svg?seed=Chidi",style:{skinColor:"#613d21",primaryColor:"#008751",secondaryColor:"#FFFFFF",hat:"beanie"}}],n=t[e]||t[0];return this.user=n,this.guest=null,this.characterStyle=n.style,localStorage.setItem("startng_user_session",JSON.stringify({user:n})),this.notifyAuthListeners(),this.user}}const Qt=new Tl;class Al{constructor(){this.lines={},this.container=null,this.lastShownPerEvent={},this.eventBadges={game_start:"🚍",pothole:"🕳️",traffic_jam:"🚗",police_checkpoint:"👮🏾‍♂️",flood:"🌊",nepa_light_out:"💡",okada_swarm:"🏍️",conductor_drama:"🗣️",fuel_low:"⛽",near_miss:"⚡",passenger_pickup:"👥",power_up_fuel:"⛽",power_up_generator:"⚡",power_up_purewater:"💧",power_up_jollof:"🍛",power_up_naira:"💵",power_up_siren:"🚨",checkpoint_reached:"🏁",game_over:"💥",high_score:"🏆",radio_ticker:"📻"}}async init(e){this.container=e||document.getElementById("pidgin-toast-container");try{const t=await fetch("/pidgin.json");t.ok&&(this.lines=await t.json())}catch(t){console.warn("Could not load /pidgin.json:",t)}}getRandomLine(e){const t=this.lines[e];if(!t||t.length===0)return null;if(t.length===1)return t[0];const n=this.lastShownPerEvent[e],s=t.filter(a=>a!==n),r=s[Math.floor(Math.random()*s.length)]||t[0];return this.lastShownPerEvent[e]=r,r}show(e,t=null,n=1100){if(!this.container)return;const s=this.getRandomLine(e);if(!s)return;for(;this.container.firstChild;)this.container.removeChild(this.container.firstChild);const r=this.eventBadges[e]||"📢",a=document.createElement("div");a.className=`pidgin-toast pidgin-toast-${e.replace(/_/g,"-")}`,a.innerHTML=`
      <div class="toast-badge">${r}</div>
      <div class="toast-body">
        <div class="toast-title">${s}</div>
        ${t?`<div class="toast-subtext">${t}</div>`:""}
      </div>
    `,this.container.appendChild(a),requestAnimationFrame(()=>{a.classList.add("show")}),setTimeout(()=>{a.classList.remove("show"),a.classList.add("hide"),setTimeout(()=>{a.parentNode===this.container&&this.container.removeChild(a)},250)},n)}}const ft=new Al;class Cl{constructor(){this.ctx=null,this.masterGain=null,this.sfxGain=null,this.musicGain=null,this.isMuted=!1,this.masterVolume=.8,this.musicVolume=.7,this.sfxVolume=.9,this.isAudioUnlocked=!1,this.currentTrack=null,this.audioElement=null,this.bpm=108,this.beatIntervalMs=60/this.bpm*1e3,this.beatListeners=[],this.beatTimer=null,this.currentBeat=0,this.isSynthPlaying=!1,this.synthStep=0,this.synthTimer=null}ensureContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:this.masterVolume,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.setValueAtTime(this.sfxVolume,this.ctx.currentTime),this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.setValueAtTime(this.musicVolume,this.ctx.currentTime),this.musicGain.connect(this.masterGain)}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.isAudioUnlocked=!0,this.ctx}unlockOnUserGesture(){this.isAudioUnlocked&&this.ctx&&this.ctx.state==="running"||this.ensureContext()}setMasterVolume(e){this.masterVolume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx&&!this.isMuted&&this.masterGain.gain.setValueAtTime(this.masterVolume,this.ctx.currentTime)}setMusicVolume(e){this.musicVolume=Math.max(0,Math.min(1,e)),this.musicGain&&this.ctx&&this.musicGain.gain.setValueAtTime(this.musicVolume,this.ctx.currentTime),this.audioElement&&(this.audioElement.volume=this.musicVolume)}setSfxVolume(e){this.sfxVolume=Math.max(0,Math.min(1,e)),this.sfxGain&&this.ctx&&this.sfxGain.gain.setValueAtTime(this.sfxVolume,this.ctx.currentTime)}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:this.masterVolume,this.ctx.currentTime),this.audioElement&&(this.audioElement.muted=this.isMuted),this.isMuted}onBeat(e){return this.beatListeners.push(e),()=>{this.beatListeners=this.beatListeners.filter(t=>t!==e)}}startBeatClock(e){this.stopBeatClock(),this.bpm=e||108,this.beatIntervalMs=60/this.bpm*1e3,this.currentBeat=0,this.beatTimer=setInterval(()=>{this.currentBeat++;const t=this.currentTrack&&this.currentBeat%(this.currentTrack.dropBeat||32)===0,n=this.currentBeat%4===0;for(const s of this.beatListeners)try{s({beat:this.currentBeat,isBar:n,isDrop:t,bpm:this.bpm})}catch(r){console.error("Beat callback error:",r)}},this.beatIntervalMs)}stopBeatClock(){this.beatTimer&&(clearInterval(this.beatTimer),this.beatTimer=null)}playTrack(e){this.ensureContext(),this.currentTrack=e,this.startBeatClock(e.bpm||110),this.audioElement&&(this.audioElement.pause(),this.audioElement.currentTime=0,this.audioElement=null),this.stopSynthGroove();const t=new Audio;t.src=e.file,t.loop=!0,t.volume=this.musicVolume,t.muted=this.isMuted;let n=!1;const s=()=>{n||(n=!0,this.audioElement===t&&(this.audioElement=null),this.startSynthAfrobeats(e.bpm||112))};t.addEventListener("error",()=>{s()});const r=t.play();r!==void 0&&r.then(()=>{this.audioElement=t}).catch(()=>{s()})}stopMusic(){this.audioElement&&(this.audioElement.pause(),this.audioElement=null),this.stopSynthGroove(),this.stopBeatClock()}startSynthAfrobeats(e=112){this.stopSynthGroove(),this.ensureContext(),this.isSynthPlaying=!0,this.bpm=e;const t=60/this.bpm/4*1e3;this.synthStep=0;const n=[110,130.81,146.83,164.81,196],s=[0,-1,-1,1,-1,-1,2,-1,0,-1,-1,3,-1,2,-1,-1];this.synthTimer=setInterval(()=>{if(!this.isSynthPlaying||!this.ctx)return;const r=this.synthStep%16;this.synthStep++,(r===0||r===6||r===10)&&this.synthKick(),this.synthShaker(r%2===1),(r===3||r===8||r===12)&&this.synthWoodblock();const a=s[r];a!==-1&&a<n.length&&this.synthBassNote(n[a])},t)}stopSynthGroove(){this.isSynthPlaying=!1,this.synthTimer&&(clearInterval(this.synthTimer),this.synthTimer=null)}synthKick(){if(!this.ctx||this.isMuted)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain(),n=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(140,n),e.frequency.exponentialRampToValueAtTime(45,n+.15),t.gain.setValueAtTime(.5,n),t.gain.exponentialRampToValueAtTime(.001,n+.22),e.connect(t),t.connect(this.musicGain),e.start(n),e.stop(n+.25)}synthShaker(e=!1){if(!this.ctx||this.isMuted)return;if(!this.shakerBuffer){const a=Math.floor(this.ctx.sampleRate*.05);this.shakerBuffer=this.ctx.createBuffer(1,a,this.ctx.sampleRate);const o=this.shakerBuffer.getChannelData(0);for(let l=0;l<a;l++)o[l]=Math.random()*2-1}const t=this.ctx.createBufferSource();t.buffer=this.shakerBuffer;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=6500;const s=this.ctx.createGain(),r=this.ctx.currentTime;s.gain.setValueAtTime(e?.15:.08,r),s.gain.exponentialRampToValueAtTime(.001,r+.035),t.connect(n),n.connect(s),s.connect(this.musicGain),t.start(r)}synthWoodblock(){if(!this.ctx||this.isMuted)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain(),n=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(880,n),e.frequency.exponentialRampToValueAtTime(440,n+.06),t.gain.setValueAtTime(.2,n),t.gain.exponentialRampToValueAtTime(.001,n+.07),e.connect(t),t.connect(this.musicGain),e.start(n),e.stop(n+.08)}synthBassNote(e){if(!this.ctx||this.isMuted)return;const t=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain(),r=this.ctx.currentTime;t.type="triangle",t.frequency.setValueAtTime(e,r),n.type="lowpass",n.frequency.setValueAtTime(600,r),n.frequency.exponentialRampToValueAtTime(200,r+.2),s.gain.setValueAtTime(.35,r),s.gain.exponentialRampToValueAtTime(.001,r+.25),t.connect(n),n.connect(s),s.connect(this.musicGain),t.start(r),t.stop(r+.26)}playHorn(){if(this.ensureContext(),!this.ctx||this.isMuted)return;const e=this.ctx.currentTime;[0,.16].forEach(t=>{const n=this.ctx.createOscillator(),s=this.ctx.createOscillator(),r=this.ctx.createGain();n.type="sawtooth",s.type="square",n.frequency.setValueAtTime(370,e+t),s.frequency.setValueAtTime(440,e+t),r.gain.setValueAtTime(.35,e+t),r.gain.linearRampToValueAtTime(.35,e+t+.1),r.gain.exponentialRampToValueAtTime(.001,e+t+.14),n.connect(r),s.connect(r),r.connect(this.sfxGain),n.start(e+t),s.start(e+t),n.stop(e+t+.15),s.stop(e+t+.15)})}playCoin(){if(this.ensureContext(),!this.ctx||this.isMuted)return;const e=this.ctx.currentTime;[587.33,880,1174.66].forEach((n,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain(),o=e+s*.05;r.type="sine",r.frequency.setValueAtTime(n,o),a.gain.setValueAtTime(.25,o),a.gain.exponentialRampToValueAtTime(.001,o+.18),r.connect(a),a.connect(this.sfxGain),r.start(o),r.stop(o+.2)})}playPassengerOwa(){if(this.ensureContext(),!this.ctx||this.isMuted)return;const e=this.ctx.currentTime;[0,.11].forEach((t,n)=>{const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n===0?1568:1760,e+t),r.gain.setValueAtTime(.28,e+t),r.gain.exponentialRampToValueAtTime(.001,e+t+.09),s.connect(r),r.connect(this.sfxGain),s.start(e+t),s.stop(e+t+.11)}),this.playCoin()}playPothole(){if(this.ensureContext(),!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(110,e),t.frequency.exponentialRampToValueAtTime(30,e+.25),n.gain.setValueAtTime(.6,e),n.gain.exponentialRampToValueAtTime(.001,e+.28),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.3);const s=this.ctx.sampleRate*.2,r=this.ctx.createBuffer(1,s,this.ctx.sampleRate),a=r.getChannelData(0);for(let d=0;d<s;d++)a[d]=(Math.random()*2-1)*Math.exp(-d/(this.ctx.sampleRate*.05));const o=this.ctx.createBufferSource();o.buffer=r;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=850,l.Q.value=3;const c=this.ctx.createGain();c.gain.setValueAtTime(.4,e),c.gain.exponentialRampToValueAtTime(.001,e+.2),o.connect(l),l.connect(c),c.connect(this.sfxGain),o.start(e)}playSplash(){if(this.ensureContext(),!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.sampleRate*.35,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=n.getChannelData(0);for(let l=0;l<t;l++)s[l]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(400,e),a.frequency.linearRampToValueAtTime(1600,e+.15),a.frequency.exponentialRampToValueAtTime(300,e+.35);const o=this.ctx.createGain();o.gain.setValueAtTime(.4,e),o.gain.exponentialRampToValueAtTime(.001,e+.35),r.connect(a),a.connect(o),o.connect(this.sfxGain),r.start(e)}playSiren(){if(this.ensureContext(),!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(650,e),t.frequency.setValueAtTime(900,e+.18),t.frequency.setValueAtTime(650,e+.36),t.frequency.setValueAtTime(900,e+.54),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.72),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.75)}playNepa(){if(this.ensureContext(),!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(100,e),t.frequency.exponentialRampToValueAtTime(20,e+.6),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.65),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.7)}playPowerUp(){if(this.ensureContext(),!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(260,e),t.frequency.exponentialRampToValueAtTime(1040,e+.3),n.gain.setValueAtTime(.35,e),n.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.38)}playRadioStatic(){if(this.ensureContext(),!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,t=this.ctx.sampleRate*.12,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=n.getChannelData(0);for(let l=0;l<t;l++)s[l]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=2200;const o=this.ctx.createGain();o.gain.setValueAtTime(.2,e),o.gain.exponentialRampToValueAtTime(.001,e+.12),r.connect(a),a.connect(o),o.connect(this.sfxGain),r.start(e)}}const ut=new Cl;class Rl{constructor(){this.playlist=[],this.currentIndex=0,this.isPlaying=!1,this.stationFrequencies=["105.5 FM","99.9 FM","93.7 FM","88.9 FM"],this.listeners=[]}async init(){try{const e=await fetch("/songs.json");e.ok&&(this.playlist=await e.json())}catch(e){console.warn("Could not load songs.json, using built-in playlist:",e)}(!this.playlist||this.playlist.length===0)&&(this.playlist=[{id:"track_1",title:"Jaga Jaga (Danfo Radio Mix)",artist:"Idris Abdulkareem",file:"/assets/audio/jaga_jaga.mp3",bpm:104,genre:"Naija Classic",dropBeat:32},{id:"track_2",title:"E Dey Pain Me (Ekwe Street Groove)",artist:"Stereoman",file:"/assets/audio/e_dey_pain_me.mp3",bpm:112,genre:"Galala Beat",dropBeat:28},{id:"track_3",title:"Lagos Sunset Highlife",artist:"Danfo All-Stars",file:"/assets/audio/lagos_sunset.mp3",bpm:118,genre:"Highlife Afrobeat",dropBeat:36}])}getCurrentTrack(){return this.playlist[this.currentIndex]||null}getCurrentStation(){return`Danfo FM ${this.stationFrequencies[this.currentIndex%this.stationFrequencies.length]}`}play(){if(this.playlist.length===0)return;this.isPlaying=!0;const e=this.playlist[this.currentIndex];ut.playTrack(e),this.notify()}stop(){this.isPlaying=!1,ut.stopMusic(),this.notify()}nextStation(){ut.playRadioStatic(),this.currentIndex=(this.currentIndex+1)%this.playlist.length,this.isPlaying?this.play():this.notify()}prevStation(){ut.playRadioStatic(),this.currentIndex=(this.currentIndex-1+this.playlist.length)%this.playlist.length,this.isPlaying?this.play():this.notify()}togglePlayPause(){return this.isPlaying?this.stop():this.play(),this.isPlaying}onChange(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notify(){const e=this.getCurrentTrack(),t=this.getCurrentStation(),n={isPlaying:this.isPlaying,track:e,station:t,tickerText:e?`📻 ${t} | Now Playing: "${e.title}" - ${e.artist} (${e.bpm} BPM)`:"Danfo Radio: OFF"};for(const s of this.listeners)try{s(n)}catch(r){console.error("Radio listener error:",r)}}}const Wn=new Rl;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const na="186",Pl=0,Na=1,Ll=2,ds=1,Do=2,Pi=3,Yn=0,Bt=1,Mn=2,yn=0,Di=1,Oa=2,Ba=3,ka=4,Il=5,fi=100,Dl=101,Fl=102,Ul=103,Nl=104,Ol=200,Bl=201,kl=202,Gl=203,Fo=204,Uo=205,zl=206,Vl=207,Hl=208,Wl=209,Xl=210,ql=211,Yl=212,Kl=213,$l=214,pr=0,mr=1,gr=2,Fi=3,_r=4,xr=5,vr=6,Mr=7,ia=0,Zl=1,Jl=2,hn=0,No=1,Oo=2,Bo=3,ko=4,Go=5,zo=6,Vo=7,Ho=300,Kn=301,_i=302,Us=303,Ns=304,Ts=306,Sr=1e3,Sn=1001,yr=1002,Ct=1003,Ql=1004,Hi=1005,It=1006,Os=1007,Xn=1008,Vt=1009,Wo=1010,Xo=1011,Ui=1012,sa=1013,dn=1014,ln=1015,un=1016,ra=1017,aa=1018,Ni=1020,qo=35902,Yo=35899,Ko=1021,$o=1022,en=1023,wn=1026,qn=1027,Zo=1028,oa=1029,$n=1030,la=1031,ca=1033,us=33776,fs=33777,ps=33778,ms=33779,Er=35840,br=35841,wr=35842,Tr=35843,Ar=36196,Cr=37492,Rr=37496,Pr=37488,Lr=37489,xs=37490,Ir=37491,Dr=37808,Fr=37809,Ur=37810,Nr=37811,Or=37812,Br=37813,kr=37814,Gr=37815,zr=37816,Vr=37817,Hr=37818,Wr=37819,Xr=37820,qr=37821,Yr=36492,Kr=36494,$r=36495,Zr=36283,Jr=36284,vs=36285,Qr=36286,jl=3200,Ms=0,ec=1,On="",Xt="srgb",Ss="srgb-linear",ys="linear",it="srgb",Bs=7680,tc=519,nc=512,ic=513,sc=514,ha=515,rc=516,ac=517,da=518,oc=519,lc=35044,Ga="300 es",cn=2e3,Oi=2001;function cc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hc(){const i=Es("canvas");return i.style.display="block",i}const za={};function Va(...i){const e="THREE."+i.shift();console.log(e,...i)}function Jo(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=Jo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=Jo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function mi(...i){const e=i.join(" ");e in za||(za[e]=!0,ke(...i))}function dc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const uc={[pr]:mr,[gr]:vr,[_r]:Mr,[Fi]:xr,[mr]:pr,[vr]:gr,[Mr]:_r,[xr]:Fi};class Zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ks=Math.PI/180,bs=180/Math.PI;function Gi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function fc(i,e){return(i%e+e)%e}function Gs(i,e,t){return(1-t)*i+t*e}function Ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ma=class Ma{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ma.prototype.isVector2=!0;let Xe=Ma;class Mi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],f=n[s+3],h=r[a+0],g=r[a+1],v=r[a+2],E=r[a+3];if(f!==E||l!==h||c!==g||d!==v){let p=l*h+c*g+d*v+f*E;p<0&&(h=-h,g=-g,v=-v,E=-E,p=-p);let u=1-o;if(p<.9995){const w=Math.acos(p),P=Math.sin(w);u=Math.sin(u*w)/P,o=Math.sin(o*w)/P,l=l*u+h*o,c=c*u+g*o,d=d*u+v*o,f=f*u+E*o}else{l=l*u+h*o,c=c*u+g*o,d=d*u+v*o,f=f*u+E*o;const w=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=w,c*=w,d*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],f=r[a],h=r[a+1],g=r[a+2],v=r[a+3];return e[t]=o*v+d*f+l*g-c*h,e[t+1]=l*v+d*h+c*f-o*g,e[t+2]=c*v+d*g+o*h-l*f,e[t+3]=d*v-o*f-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),f=o(r/2),h=l(n/2),g=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*d*f+c*g*v,this._y=c*g*f-h*d*v,this._z=c*d*v+h*g*f,this._w=c*d*f-h*g*v;break;case"YXZ":this._x=h*d*f+c*g*v,this._y=c*g*f-h*d*v,this._z=c*d*v-h*g*f,this._w=c*d*f+h*g*v;break;case"ZXY":this._x=h*d*f-c*g*v,this._y=c*g*f+h*d*v,this._z=c*d*v+h*g*f,this._w=c*d*f-h*g*v;break;case"ZYX":this._x=h*d*f-c*g*v,this._y=c*g*f+h*d*v,this._z=c*d*v-h*g*f,this._w=c*d*f+h*g*v;break;case"YZX":this._x=h*d*f+c*g*v,this._y=c*g*f+h*d*v,this._z=c*d*v-h*g*f,this._w=c*d*f-h*g*v;break;case"XZY":this._x=h*d*f-c*g*v,this._y=c*g*f-h*d*v,this._z=c*d*v+h*g*f,this._w=c*d*f+h*g*v;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],h=n+o+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>f){const g=2*Math.sqrt(1+n-o-f);this._w=(d-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-n-f);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sa=class Sa{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ha.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*d,this.y=n+l*d+o*c-r*f,this.z=s+l*f+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zs.copy(this).projectOnVector(e),this.sub(zs)}reflect(e){return this.sub(zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sa.prototype.isVector3=!0;let G=Sa;const zs=new G,Ha=new Mi,ya=class ya{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],h=n[2],g=n[5],v=n[8],E=s[0],p=s[3],u=s[6],w=s[1],P=s[4],M=s[7],S=s[2],y=s[5],C=s[8];return r[0]=a*E+o*w+l*S,r[3]=a*p+o*P+l*y,r[6]=a*u+o*M+l*C,r[1]=c*E+d*w+f*S,r[4]=c*p+d*P+f*y,r[7]=c*u+d*M+f*C,r[2]=h*E+g*w+v*S,r[5]=h*p+g*P+v*y,r[8]=h*u+g*M+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*r,g=c*r-a*l,v=t*f+n*h+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=f*E,e[1]=(s*c-d*n)*E,e[2]=(o*n-s*a)*E,e[3]=h*E,e[4]=(d*t-s*l)*E,e[5]=(s*r-o*t)*E,e[6]=g*E,e[7]=(n*l-c*t)*E,e[8]=(a*t-n*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return mi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vs.makeScale(e,t)),this}rotate(e){return mi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vs.makeRotation(-e)),this}translate(e,t){return mi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ya.prototype.isMatrix3=!0;let ze=ya;const Vs=new ze,Wa=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xa=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pc(){const i={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return mi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return mi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ss]:{primaries:e,whitePoint:n,transfer:ys,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}const $e=pc();function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class mc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ei===void 0&&(ei=Es("canvas")),ei.width=e.width,ei.height=e.height;const s=ei.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Es("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=En(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(En(t[n]/255)*255):t[n]=En(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gc=0;class ua{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=Gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hs(s[a].image)):r.push(Hs(s[a]))}else r=Hs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Hs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let _c=0;const Ws=new G;class Dt extends Zn{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Sn,s=Sn,r=It,a=Xn,o=en,l=Vt,c=Dt.DEFAULT_ANISOTROPY,d=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=Gi(),this.name="",this.source=new ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ws).x}get height(){return this.source.getSize(Ws).y}get depth(){return this.source.getSize(Ws).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ho)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sr:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sr:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Ho;Dt.DEFAULT_ANISOTROPY=1;const Ea=class Ea{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],g=l[5],v=l[9],E=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-E)<.01&&Math.abs(v-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+E)<.1&&Math.abs(v+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,M=(g+1)/2,S=(u+1)/2,y=(d+h)/4,C=(f+E)/4,_=(v+p)/4;return P>M&&P>S?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=y/n,r=C/n):M>S?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=y/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=C/r,s=_/r),this.set(n,s,r,t),this}let w=Math.sqrt((p-v)*(p-v)+(f-E)*(f-E)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(p-v)/w,this.y=(f-E)/w,this.z=(h-d)/w,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ea.prototype.isVector4=!0;let pt=Ea;class xc extends Zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Dt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ua(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tn extends xc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qo extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vc extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ws=class ws{constructor(e,t,n,s,r,a,o,l,c,d,f,h,g,v,E,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,f,h,g,v,E,p)}set(e,t,n,s,r,a,o,l,c,d,f,h,g,v,E,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=g,u[7]=v,u[11]=E,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ws().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ti.setFromMatrixColumn(e,0).length(),r=1/ti.setFromMatrixColumn(e,1).length(),a=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*d,g=a*f,v=o*d,E=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=g+v*c,t[5]=h-E*c,t[9]=-o*l,t[2]=E-h*c,t[6]=v+g*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,g=l*f,v=c*d,E=c*f;t[0]=h+E*o,t[4]=v*o-g,t[8]=a*c,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=g*o-v,t[6]=E+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,g=l*f,v=c*d,E=c*f;t[0]=h-E*o,t[4]=-a*f,t[8]=v+g*o,t[1]=g+v*o,t[5]=a*d,t[9]=E-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,g=a*f,v=o*d,E=o*f;t[0]=l*d,t[4]=v*c-g,t[8]=h*c+E,t[1]=l*f,t[5]=E*c+h,t[9]=g*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,g=a*c,v=o*l,E=o*c;t[0]=l*d,t[4]=E-h*f,t[8]=v*f+g,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=g*f+v,t[10]=h-E*f}else if(e.order==="XZY"){const h=a*l,g=a*c,v=o*l,E=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=h*f+E,t[5]=a*d,t[9]=g*f-v,t[2]=v*f-g,t[6]=o*d,t[10]=E*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mc,e,Sc)}lookAt(e,t,n){const s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Ln.crossVectors(n,kt),Ln.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Ln.crossVectors(n,kt)),Ln.normalize(),Wi.crossVectors(kt,Ln),s[0]=Ln.x,s[4]=Wi.x,s[8]=kt.x,s[1]=Ln.y,s[5]=Wi.y,s[9]=kt.y,s[2]=Ln.z,s[6]=Wi.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],h=n[9],g=n[13],v=n[2],E=n[6],p=n[10],u=n[14],w=n[3],P=n[7],M=n[11],S=n[15],y=s[0],C=s[4],_=s[8],b=s[12],L=s[1],U=s[5],O=s[9],X=s[13],N=s[2],z=s[6],Q=s[10],K=s[14],se=s[3],Z=s[7],R=s[11],T=s[15];return r[0]=a*y+o*L+l*N+c*se,r[4]=a*C+o*U+l*z+c*Z,r[8]=a*_+o*O+l*Q+c*R,r[12]=a*b+o*X+l*K+c*T,r[1]=d*y+f*L+h*N+g*se,r[5]=d*C+f*U+h*z+g*Z,r[9]=d*_+f*O+h*Q+g*R,r[13]=d*b+f*X+h*K+g*T,r[2]=v*y+E*L+p*N+u*se,r[6]=v*C+E*U+p*z+u*Z,r[10]=v*_+E*O+p*Q+u*R,r[14]=v*b+E*X+p*K+u*T,r[3]=w*y+P*L+M*N+S*se,r[7]=w*C+P*U+M*z+S*Z,r[11]=w*_+P*O+M*Q+S*R,r[15]=w*b+P*X+M*K+S*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],g=e[14],v=e[3],E=e[7],p=e[11],u=e[15],w=l*g-c*h,P=o*g-c*f,M=o*h-l*f,S=a*g-c*d,y=a*h-l*d,C=a*f-o*d;return t*(E*w-p*P+u*M)-n*(v*w-p*S+u*y)+s*(v*P-E*S+u*C)-r*(v*M-E*y+p*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],g=e[11],v=e[12],E=e[13],p=e[14],u=e[15],w=t*o-n*a,P=t*l-s*a,M=t*c-r*a,S=n*l-s*o,y=n*c-r*o,C=s*c-r*l,_=d*E-f*v,b=d*p-h*v,L=d*u-g*v,U=f*p-h*E,O=f*u-g*E,X=h*u-g*p,N=w*X-P*O+M*U+S*L-y*b+C*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return e[0]=(o*X-l*O+c*U)*z,e[1]=(s*O-n*X-r*U)*z,e[2]=(E*C-p*y+u*S)*z,e[3]=(h*y-f*C-g*S)*z,e[4]=(l*L-a*X-c*b)*z,e[5]=(t*X-s*L+r*b)*z,e[6]=(p*M-v*C-u*P)*z,e[7]=(d*C-h*M+g*P)*z,e[8]=(a*O-o*L+c*_)*z,e[9]=(n*L-t*O-r*_)*z,e[10]=(v*y-E*M+u*w)*z,e[11]=(f*M-d*y-g*w)*z,e[12]=(o*b-a*U-l*_)*z,e[13]=(t*U-n*b+s*_)*z,e[14]=(E*P-v*S-p*w)*z,e[15]=(d*S-f*P+h*w)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,f=o+o,h=r*c,g=r*d,v=r*f,E=a*d,p=a*f,u=o*f,w=l*c,P=l*d,M=l*f,S=n.x,y=n.y,C=n.z;return s[0]=(1-(E+u))*S,s[1]=(g+M)*S,s[2]=(v-P)*S,s[3]=0,s[4]=(g-M)*y,s[5]=(1-(h+u))*y,s[6]=(p+w)*y,s[7]=0,s[8]=(v+P)*C,s[9]=(p-w)*C,s[10]=(1-(h+E))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ti.set(s[0],s[1],s[2]).length();const o=ti.set(s[4],s[5],s[6]).length(),l=ti.set(s[8],s[9],s[10]).length();r<0&&(a=-a),$t.copy(this);const c=1/a,d=1/o,f=1/l;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=d,$t.elements[5]*=d,$t.elements[6]*=d,$t.elements[8]*=f,$t.elements[9]*=f,$t.elements[10]*=f,t.setFromRotationMatrix($t),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=cn,l=!1){const c=this.elements,d=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),g=(n+s)/(n-s);let v,E;if(l)v=r/(a-r),E=a*r/(a-r);else if(o===cn)v=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===Oi)v=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=cn,l=!1){const c=this.elements,d=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),g=-(n+s)/(n-s);let v,E;if(l)v=1/(a-r),E=a/(a-r);else if(o===cn)v=-2/(a-r),E=-(a+r)/(a-r);else if(o===Oi)v=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ws.prototype.isMatrix4=!0;let gt=ws;const ti=new G,$t=new gt,Mc=new G(0,0,0),Sc=new G(1,1,1),Ln=new G,Wi=new G,kt=new G,qa=new gt,Ya=new Mi;class Tn{constructor(e=0,t=0,n=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ya.setFromEuler(this),this.setFromQuaternion(Ya,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yc=0;const Ka=new G,ni=new Mi,mn=new gt,Xi=new G,bi=new G,Ec=new G,bc=new Mi,$a=new G(1,0,0),Za=new G(0,1,0),Ja=new G(0,0,1),Qa={type:"added"},wc={type:"removed"},ii={type:"childadded",child:null},Xs={type:"childremoved",child:null};class yt extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new G,t=new Tn,n=new Mi,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new ze}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis($a,e)}rotateY(e){return this.rotateOnAxis(Za,e)}rotateZ(e){return this.rotateOnAxis(Ja,e)}translateOnAxis(e,t){return Ka.copy(e).applyQuaternion(this.quaternion),this.position.add(Ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($a,e)}translateY(e){return this.translateOnAxis(Za,e)}translateZ(e){return this.translateOnAxis(Ja,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xi.copy(e):Xi.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(bi,Xi,this.up):mn.lookAt(Xi,bi,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),ni.setFromRotationMatrix(mn),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qa),ii.child=e,this.dispatchEvent(ii),ii.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wc),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qa),ii.child=e,this.dispatchEvent(ii),ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,Ec),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,bc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}yt.DEFAULT_UP=new G(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tt extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tc={type:"move"};class qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const p=t.getJointPose(E,n),u=this._getHandJoint(c,E);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),g=.02,v=.005;c.inputState.pinching&&h>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tc)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const el={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},qi={h:0,s:0,l:0};function Ys(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=fc(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ys(a,r,e+1/3),this.g=Ys(a,r,e),this.b=Ys(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=el[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}copyLinearToSRGB(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return $e.workingToColorSpace(Lt.copy(this),e),Math.round(Ze(Lt.r*255,0,255))*65536+Math.round(Ze(Lt.g*255,0,255))*256+Math.round(Ze(Lt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Lt.copy(this),t);const n=Lt.r,s=Lt.g,r=Lt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Xt){$e.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,s=Lt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(qi);const n=Gs(In.h,qi.h,t),s=Gs(In.s,qi.s,t),r=Gs(In.l,qi.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Pe;Pe.NAMES=el;class fa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new fa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ac extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zt=new G,gn=new G,Ks=new G,_n=new G,si=new G,ri=new G,ja=new G,$s=new G,Zs=new G,Js=new G,Qs=new pt,js=new pt,er=new pt;class jt{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zt.subVectors(e,t),s.cross(Zt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zt.subVectors(s,t),gn.subVectors(n,t),Ks.subVectors(e,t);const a=Zt.dot(Zt),o=Zt.dot(gn),l=Zt.dot(Ks),c=gn.dot(gn),d=gn.dot(Ks),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,g=(c*l-o*d)*h,v=(a*d-o*l)*h;return r.set(1-g-v,v,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Qs.setScalar(0),js.setScalar(0),er.setScalar(0),Qs.fromBufferAttribute(e,t),js.fromBufferAttribute(e,n),er.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Qs,r.x),a.addScaledVector(js,r.y),a.addScaledVector(er,r.z),a}static isFrontFacing(e,t,n,s){return Zt.subVectors(n,t),gn.subVectors(e,t),Zt.cross(gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Zt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;si.subVectors(s,n),ri.subVectors(r,n),$s.subVectors(e,n);const l=si.dot($s),c=ri.dot($s);if(l<=0&&c<=0)return t.copy(n);Zs.subVectors(e,s);const d=si.dot(Zs),f=ri.dot(Zs);if(d>=0&&f<=d)return t.copy(s);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(si,a);Js.subVectors(e,r);const g=si.dot(Js),v=ri.dot(Js);if(v>=0&&g<=v)return t.copy(r);const E=g*c-l*v;if(E<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(ri,o);const p=d*v-g*f;if(p<=0&&f-d>=0&&g-v>=0)return ja.subVectors(r,s),o=(f-d)/(f-d+(g-v)),t.copy(s).addScaledVector(ja,o);const u=1/(p+E+h);return a=E*u,o=h*u,t.copy(n).addScaledVector(si,a).addScaledVector(ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Jn{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(r,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yi.copy(n.boundingBox)),Yi.applyMatrix4(e.matrixWorld),this.union(Yi)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wi),Ki.subVectors(this.max,wi),ai.subVectors(e.a,wi),oi.subVectors(e.b,wi),li.subVectors(e.c,wi),Dn.subVectors(oi,ai),Fn.subVectors(li,oi),kn.subVectors(ai,li);let t=[0,-Dn.z,Dn.y,0,-Fn.z,Fn.y,0,-kn.z,kn.y,Dn.z,0,-Dn.x,Fn.z,0,-Fn.x,kn.z,0,-kn.x,-Dn.y,Dn.x,0,-Fn.y,Fn.x,0,-kn.y,kn.x,0];return!tr(t,ai,oi,li,Ki)||(t=[1,0,0,0,1,0,0,0,1],!tr(t,ai,oi,li,Ki))?!1:($i.crossVectors(Dn,Fn),t=[$i.x,$i.y,$i.z],tr(t,ai,oi,li,Ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xn=[new G,new G,new G,new G,new G,new G,new G,new G],Jt=new G,Yi=new Jn,ai=new G,oi=new G,li=new G,Dn=new G,Fn=new G,kn=new G,wi=new G,Ki=new G,$i=new G,Gn=new G;function tr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gn.fromArray(i,r);const o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),d=n.dot(Gn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const vt=new G,Zi=new Xe;let Cc=0;class bn extends Zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lc,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zi.fromBufferAttribute(this,t),Zi.applyMatrix3(e),this.setXY(t,Zi.x,Zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class tl extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nl extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Rc=new Jn,Ti=new G,nr=new G;class pa{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ti.subVectors(e,this.center);const t=Ti.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ti,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ti.copy(e.center).add(nr)),this.expandByPoint(Ti.copy(e.center).sub(nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Pc=0;const Wt=new gt,ir=new yt,ci=new G,Gt=new Jn,Ai=new Jn,wt=new G;class Yt extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cc(e)?nl:tl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return ir.lookAt(e),ir.updateMatrix(),this.applyMatrix4(ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new At(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ai.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Gt.min,Ai.min),Gt.expandByPoint(wt),wt.addVectors(Gt.max,Ai.max),Gt.expandByPoint(wt)):(Gt.expandByPoint(Ai.min),Gt.expandByPoint(Ai.max))}Gt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)wt.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(e,c),wt.add(ci)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new G,l[_]=new G;const c=new G,d=new G,f=new G,h=new Xe,g=new Xe,v=new Xe,E=new G,p=new G;function u(_,b,L){c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,b),f.fromBufferAttribute(n,L),h.fromBufferAttribute(r,_),g.fromBufferAttribute(r,b),v.fromBufferAttribute(r,L),d.sub(c),f.sub(c),g.sub(h),v.sub(h);const U=1/(g.x*v.y-v.x*g.y);isFinite(U)&&(E.copy(d).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(U),p.copy(f).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(U),o[_].add(E),o[b].add(E),o[L].add(E),l[_].add(p),l[b].add(p),l[L].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let _=0,b=w.length;_<b;++_){const L=w[_],U=L.start,O=L.count;for(let X=U,N=U+O;X<N;X+=3)u(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const P=new G,M=new G,S=new G,y=new G;function C(_){S.fromBufferAttribute(s,_),y.copy(S);const b=o[_];P.copy(b),P.sub(S.multiplyScalar(S.dot(b))).normalize(),M.crossVectors(y,b);const U=M.dot(l[_])<0?-1:1;a.setXYZW(_,P.x,P.y,P.z,U)}for(let _=0,b=w.length;_<b;++_){const L=w[_],U=L.start,O=L.count;for(let X=U,N=U+O;X<N;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,d=new G,f=new G;if(e)for(let h=0,g=e.count;h<g;h+=3){const v=e.getX(h+0),E=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,p),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,g=t.count;h<g;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let g=0,v=0;for(let E=0,p=l.length;E<p;E++){o.isInterleavedBufferAttribute?g=l[E]*o.data.stride+o.offset:g=l[E]*d;for(let u=0;u<d;u++)h[v++]=c[g++]}return new bn(h,d,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],g=e(h,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],f=r[c];for(let h=0,g=f.length;h<g;h++)d.push(f[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sr=new G,Lc=new G,Ic=new ze;class Nn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=sr.subVectors(n,t).cross(Lc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(sr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ic.getNormalMatrix(e),s=this.coplanarPoint(sr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Dc=0;class Si extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Di,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=Uo,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Nn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vn=new G,rr=new G,Ji=new G,Qi=new G;class Fc{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){rr.copy(e).add(t).multiplyScalar(.5),Ji.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(rr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ji),o=Qi.dot(this.direction),l=-Qi.dot(Ji),c=Qi.lengthSq(),d=Math.abs(1-a*a);let f,h,g,v;if(d>0)if(f=a*l-o,h=a*o-l,v=r*d,f>=0)if(h>=-v)if(h<=v){const E=1/d;f*=E,h*=E,g=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),g=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),g=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),g=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-r,-l),r),g=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),g=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),g=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(rr).addScaledVector(Ji,h),g}intersectSphere(e,t){if(e.radius<0)return null;vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,f=e.x-a.x,h=e.y-a.y,g=e.z-a.z,v=t.x-a.x,E=t.y-a.y,p=t.z-a.z,u=n.x-a.x,w=n.y-a.y,P=n.z-a.z,M=Math.abs(l),S=Math.abs(c),y=Math.abs(d);let C,_,b,L,U,O,X,N,z,Q,K,se;if(M>=S&&M>=y?(b=l,O=f,z=v,se=u,l>=0?(C=c,_=d,L=h,U=g,X=E,N=p,Q=w,K=P):(C=d,_=c,L=g,U=h,X=p,N=E,Q=P,K=w)):S>=y?(b=c,O=h,z=E,se=w,c>=0?(C=d,_=l,L=g,U=f,X=p,N=v,Q=P,K=u):(C=l,_=d,L=f,U=g,X=v,N=p,Q=u,K=P)):(b=d,O=g,z=p,se=P,d>=0?(C=l,_=c,L=f,U=h,X=v,N=E,Q=u,K=w):(C=c,_=l,L=h,U=f,X=E,N=v,Q=w,K=u)),b===0)return null;const Z=C/b,R=_/b,T=1/b,te=L-Z*O,ie=U-R*O,be=X-Z*z,_e=N-R*z,Se=Q-Z*se,B=K-R*se,q=Se*_e-B*be,ae=te*B-ie*Se,ye=be*ie-_e*te;if(s){if(q<0||ae<0||ye<0)return null}else if((q<0||ae<0||ye<0)&&(q>0||ae>0||ye>0))return null;const re=q+ae+ye;if(re===0)return null;const Ce=T*(q*O+ae*z+ye*se);return(re>0?Ce<0:Ce>0)?null:this.at(Ce/re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const eo=new gt,zn=new Fc,ji=new pa,to=new G,es=new G,ts=new G,ns=new G,ar=new G,is=new G,no=new G,ss=new G;class le extends yt{constructor(e=new Yt,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){is.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],f=r[l];d!==0&&(ar.fromBufferAttribute(f,e),a?is.addScaledVector(ar,d):is.addScaledVector(ar.sub(t),d))}t.add(is)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(r),zn.copy(e.ray).recast(e.near),!(ji.containsPoint(zn.origin)===!1&&(zn.intersectSphere(ji,to)===null||zn.origin.distanceToSquared(to)>(e.far-e.near)**2))&&(eo.copy(r).invert(),zn.copy(e.ray).applyMatrix4(eo),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=h.length;v<E;v++){const p=h[v],u=a[p.materialIndex],w=Math.max(p.start,g.start),P=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let M=w,S=P;M<S;M+=3){const y=o.getX(M),C=o.getX(M+1),_=o.getX(M+2);s=rs(this,u,e,n,c,d,f,y,C,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),E=Math.min(o.count,g.start+g.count);for(let p=v,u=E;p<u;p+=3){const w=o.getX(p),P=o.getX(p+1),M=o.getX(p+2);s=rs(this,a,e,n,c,d,f,w,P,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,E=h.length;v<E;v++){const p=h[v],u=a[p.materialIndex],w=Math.max(p.start,g.start),P=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let M=w,S=P;M<S;M+=3){const y=M,C=M+1,_=M+2;s=rs(this,u,e,n,c,d,f,y,C,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),E=Math.min(l.count,g.start+g.count);for(let p=v,u=E;p<u;p+=3){const w=p,P=p+1,M=p+2;s=rs(this,a,e,n,c,d,f,w,P,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Uc(i,e,t,n,s,r,a,o){let l;if(e.side===Bt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Yn,o),l===null)return null;ss.copy(o),ss.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ss);return c<t.near||c>t.far?null:{distance:c,point:ss.clone(),object:i}}function rs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,es),i.getVertexPosition(l,ts),i.getVertexPosition(c,ns);const d=Uc(i,e,t,n,es,ts,ns,no);if(d){const f=new G;jt.getBarycoord(no,es,ts,ns,f),s&&(d.uv=jt.getInterpolatedAttribute(s,o,l,c,f,new Xe)),r&&(d.uv1=jt.getInterpolatedAttribute(r,o,l,c,f,new Xe)),a&&(d.normal=jt.getInterpolatedAttribute(a,o,l,c,f,new G),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};jt.getNormal(es,ts,ns,h.normal),d.face=h,d.barycoord=f}return d}class Nc extends Dt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ct,d=Ct,f,h){super(null,a,o,l,c,d,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vn=new pa,Oc=new Xe(.5,.5),as=new G;class ma{constructor(e=new Nn,t=new Nn,n=new Nn,s=new Nn,r=new Nn,a=new Nn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],f=r[5],h=r[6],g=r[7],v=r[8],E=r[9],p=r[10],u=r[11],w=r[12],P=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-a,g-d,u-v,S-w).normalize(),s[1].setComponents(c+a,g+d,u+v,S+w).normalize(),s[2].setComponents(c+o,g+f,u+E,S+P).normalize(),s[3].setComponents(c-o,g-f,u-E,S-P).normalize(),n)s[4].setComponents(l,h,p,M).normalize(),s[5].setComponents(c-l,g-h,u-p,S-M).normalize();else if(s[4].setComponents(c-l,g-h,u-p,S-M).normalize(),t===cn)s[5].setComponents(c+l,g+h,u+p,S+M).normalize();else if(t===Oi)s[5].setComponents(l,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){Vn.center.set(0,0,0);const t=Oc.distanceTo(e.center);return Vn.radius=.7071067811865476+t,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(as.x=s.normal.x>0?e.max.x:e.min.x,as.y=s.normal.y>0?e.max.y:e.min.y,as.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(as)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class il extends Dt{constructor(e=[],t=Kn,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bc extends Dt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bi extends Dt{constructor(e,t,n=dn,s,r,a,o=Ct,l=Ct,c,d=wn,f=1){if(d!==wn&&d!==qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ua(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class kc extends Bi{constructor(e,t=dn,n=Kn,s,r,a=Ct,o=Ct,l,c=wn){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sl extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ge extends Yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,g=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(d,3)),this.setAttribute("uv",new At(f,2));function v(E,p,u,w,P,M,S,y,C,_,b){const L=M/C,U=S/_,O=M/2,X=S/2,N=y/2,z=C+1,Q=_+1;let K=0,se=0;const Z=new G;for(let R=0;R<Q;R++){const T=R*U-X;for(let te=0;te<z;te++){const ie=te*L-O;Z[E]=ie*w,Z[p]=T*P,Z[u]=N,c.push(Z.x,Z.y,Z.z),Z[E]=0,Z[p]=0,Z[u]=y>0?1:-1,d.push(Z.x,Z.y,Z.z),f.push(te/C),f.push(1-R/_),K+=1}}for(let R=0;R<_;R++)for(let T=0;T<C;T++){const te=h+T+z*R,ie=h+T+z*(R+1),be=h+(T+1)+z*(R+1),_e=h+(T+1)+z*R;l.push(te,ie,_e),l.push(ie,be,_e),se+=6}o.addGroup(g,se,b),g+=se,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ge(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mt extends Yt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],f=[],h=[],g=[];let v=0;const E=[],p=n/2;let u=0;w(),a===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(d),this.setAttribute("position",new At(f,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(g,2));function w(){const M=new G,S=new G;let y=0;const C=(t-e)/n;for(let _=0;_<=r;_++){const b=[],L=_/r,U=L*(t-e)+e;for(let O=0;O<=s;O++){const X=O/s,N=X*l+o,z=Math.sin(N),Q=Math.cos(N);S.x=U*z,S.y=-L*n+p,S.z=U*Q,f.push(S.x,S.y,S.z),M.set(z,C,Q).normalize(),h.push(M.x,M.y,M.z),g.push(X,1-L),b.push(v++)}E.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){const L=E[b][_],U=E[b+1][_],O=E[b+1][_+1],X=E[b][_+1];(e>0||b!==0)&&(d.push(L,U,X),y+=3),(t>0||b!==r-1)&&(d.push(U,O,X),y+=3)}c.addGroup(u,y,0),u+=y}function P(M){const S=v,y=new Xe,C=new G;let _=0;const b=M===!0?e:t,L=M===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,p*L,0),h.push(0,L,0),g.push(.5,.5),v++;const U=v;for(let O=0;O<=s;O++){const N=O/s*l+o,z=Math.cos(N),Q=Math.sin(N);C.x=b*Q,C.y=p*L,C.z=b*z,f.push(C.x,C.y,C.z),h.push(0,L,0),y.x=z*.5+.5,y.y=Q*.5*L+.5,g.push(y.x,y.y),v++}for(let O=0;O<s;O++){const X=S+O,N=U+O;M===!0?d.push(N,N+1,X):d.push(N+1,N,X),_+=3}c.addGroup(u,_,M===!0?1:2),u+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ki extends Mt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ki(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ga extends Yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new At(r,3)),this.setAttribute("normal",new At(r.slice(),3)),this.setAttribute("uv",new At(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const P=new G,M=new G,S=new G;for(let y=0;y<t.length;y+=3)g(t[y+0],P),g(t[y+1],M),g(t[y+2],S),l(P,M,S,w)}function l(w,P,M,S){const y=S+1,C=[];for(let _=0;_<=y;_++){C[_]=[];const b=w.clone().lerp(M,_/y),L=P.clone().lerp(M,_/y),U=y-_;for(let O=0;O<=U;O++)O===0&&_===y?C[_][O]=b:C[_][O]=b.clone().lerp(L,O/U)}for(let _=0;_<y;_++)for(let b=0;b<2*(y-_)-1;b++){const L=Math.floor(b/2);b%2===0?(h(C[_][L+1]),h(C[_+1][L]),h(C[_][L])):(h(C[_][L+1]),h(C[_+1][L+1]),h(C[_+1][L]))}}function c(w){const P=new G;for(let M=0;M<r.length;M+=3)P.x=r[M+0],P.y=r[M+1],P.z=r[M+2],P.normalize().multiplyScalar(w),r[M+0]=P.x,r[M+1]=P.y,r[M+2]=P.z}function d(){const w=new G;for(let P=0;P<r.length;P+=3){w.x=r[P+0],w.y=r[P+1],w.z=r[P+2];const M=p(w)/2/Math.PI+.5,S=u(w)/Math.PI+.5;a.push(M,1-S)}v(),f()}function f(){for(let w=0;w<a.length;w+=6){const P=a[w+0],M=a[w+2],S=a[w+4],y=Math.max(P,M,S),C=Math.min(P,M,S);y>.9&&C<.1&&(P<.2&&(a[w+0]+=1),M<.2&&(a[w+2]+=1),S<.2&&(a[w+4]+=1))}}function h(w){r.push(w.x,w.y,w.z)}function g(w,P){const M=w*3;P.x=e[M+0],P.y=e[M+1],P.z=e[M+2]}function v(){const w=new G,P=new G,M=new G,S=new G,y=new Xe,C=new Xe,_=new Xe;for(let b=0,L=0;b<r.length;b+=9,L+=6){w.set(r[b+0],r[b+1],r[b+2]),P.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),y.set(a[L+0],a[L+1]),C.set(a[L+2],a[L+3]),_.set(a[L+4],a[L+5]),S.copy(w).add(P).add(M).divideScalar(3);const U=p(S);E(y,L+0,w,U),E(C,L+2,P,U),E(_,L+4,M,U)}}function E(w,P,M,S){S<0&&w.x===1&&(a[P]=w.x-1),M.x===0&&M.z===0&&(a[P]=S/2/Math.PI+.5)}function p(w){return Math.atan2(w.z,-w.x)}function u(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.vertices,e.indices,e.radius,e.detail)}}class _a extends ga{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _a(e.radius,e.detail)}}class An extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,f=e/o,h=t/l,g=[],v=[],E=[],p=[];for(let u=0;u<d;u++){const w=u*h-a;for(let P=0;P<c;P++){const M=P*f-r;v.push(M,-w,0),E.push(0,0,1),p.push(P/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<o;w++){const P=w+c*u,M=w+c*(u+1),S=w+1+c*(u+1),y=w+1+c*u;g.push(P,M,y),g.push(M,S,y)}this.setIndex(g),this.setAttribute("position",new At(v,3)),this.setAttribute("normal",new At(E,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.width,e.height,e.widthSegments,e.heightSegments)}}class xi extends Yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],f=new G,h=new G,g=[],v=[],E=[],p=[];for(let u=0;u<=n;u++){const w=[],P=u/n,M=a+P*o,S=e*Math.cos(M),y=Math.sqrt(e*e-S*S);let C=0;u===0&&a===0?C=.5/t:u===n&&l===Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){const b=_/t,L=s+b*r;f.x=-y*Math.cos(L),f.y=S,f.z=y*Math.sin(L),v.push(f.x,f.y,f.z),h.copy(f).normalize(),E.push(h.x,h.y,h.z),p.push(b+C,1-P),w.push(c++)}d.push(w)}for(let u=0;u<n;u++)for(let w=0;w<t;w++){const P=d[u][w+1],M=d[u][w],S=d[u+1][w],y=d[u+1][w+1];(u!==0||a>0)&&g.push(P,M,y),(u!==n-1||l<Math.PI)&&g.push(M,S,y)}this.setIndex(g),this.setAttribute("position",new At(v,3)),this.setAttribute("normal",new At(E,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function vi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(io(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(io(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ut(i){const e={};for(let t=0;t<i.length;t++){const n=vi(i[t]);for(const s in n)e[s]=n[s]}return e}function io(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const zc={clone:vi,merge:Ut};var Vc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vc,this.fragmentShader=Hc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=Gc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ze().fromArray(s.value);break;case"m4":this.uniforms[n].value=new gt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Wc extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Li extends Si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ms,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ue extends Si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ms,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=ia,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xc extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qc extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class As extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Yc extends As{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const or=new gt,so=new G,ro=new G;class al{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Vt,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;so.setFromMatrixPosition(e.matrixWorld),t.position.copy(so),ro.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ro),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(or,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Oi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(or)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const os=new G,ls=new Mi,rn=new G;class ol extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(os,ls,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(os,ls,rn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(os,ls,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(os,ls,rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Un=new G,ao=new Xe,oo=new Xe;class zt extends ol{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,ao,oo),t.subVectors(oo,ao)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ks*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Kc extends al{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=bs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class $c extends As{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Kc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class xa extends ol{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zc extends al{constructor(){super(new xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jc extends As{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Zc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Qc extends As{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const hi=-90,di=1;class jc extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zt(hi,di,e,t);s.layers=this.layers,this.add(s);const r=new zt(hi,di,e,t);r.layers=this.layers,this.add(r);const a=new zt(hi,di,e,t);a.layers=this.layers,this.add(a);const o=new zt(hi,di,e,t);o.layers=this.layers,this.add(o);const l=new zt(hi,di,e,t);l.layers=this.layers,this.add(l);const c=new zt(hi,di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,h,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class eh extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ba=class ba{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};ba.prototype.isMatrix2=!0;let lo=ba;function co(i,e,t,n){const s=th(n);switch(t){case Ko:return i*e;case Zo:return i*e/s.components*s.byteLength;case oa:return i*e/s.components*s.byteLength;case $n:return i*e*2/s.components*s.byteLength;case la:return i*e*2/s.components*s.byteLength;case $o:return i*e*3/s.components*s.byteLength;case en:return i*e*4/s.components*s.byteLength;case ca:return i*e*4/s.components*s.byteLength;case us:case fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case br:case Tr:return Math.max(i,16)*Math.max(e,8)/4;case Er:case wr:return Math.max(i,8)*Math.max(e,8)/2;case Ar:case Cr:case Pr:case Lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rr:case xs:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ur:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Nr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Or:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Br:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case kr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Gr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case zr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case qr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Yr:case Kr:case $r:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zr:case Jr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vs:case Qr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function th(i){switch(i){case Vt:case Wo:return{byteLength:1,components:1};case Ui:case Xo:case un:return{byteLength:2,components:1};case ra:case aa:return{byteLength:2,components:4};case dn:case sa:case ln:return{byteLength:4,components:1};case qo:case Yo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ll(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function nh(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const d=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,d);else{f.sort((g,v)=>g.start-v.start);let h=0;for(let g=1;g<f.length;g++){const v=f[h],E=f[g];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++h,f[h]=E)}f.length=h+1;for(let g=0,v=f.length;g<v;g++){const E=f[g];i.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ih=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ch=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ph=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Eh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Th=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ah=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ch=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ph=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$h=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ed=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,td=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,id=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ad=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,od=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,md=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Md=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Td=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Id=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$d=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,su=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,au=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,du=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_u=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Au=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ru=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Iu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Du=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:ih,alphahash_pars_fragment:sh,alphamap_fragment:rh,alphamap_pars_fragment:ah,alphatest_fragment:oh,alphatest_pars_fragment:lh,aomap_fragment:ch,aomap_pars_fragment:hh,batching_pars_vertex:dh,batching_vertex:uh,begin_vertex:fh,beginnormal_vertex:ph,bsdfs:mh,iridescence_fragment:gh,bumpmap_pars_fragment:_h,clipping_planes_fragment:xh,clipping_planes_pars_fragment:vh,clipping_planes_pars_vertex:Mh,clipping_planes_vertex:Sh,color_fragment:yh,color_pars_fragment:Eh,color_pars_vertex:bh,color_vertex:wh,common:Th,cube_uv_reflection_fragment:Ah,defaultnormal_vertex:Ch,displacementmap_pars_vertex:Rh,displacementmap_vertex:Ph,emissivemap_fragment:Lh,emissivemap_pars_fragment:Ih,colorspace_fragment:Dh,colorspace_pars_fragment:Fh,envmap_fragment:Uh,envmap_common_pars_fragment:Nh,envmap_pars_fragment:Oh,envmap_pars_vertex:Bh,envmap_physical_pars_fragment:$h,envmap_vertex:kh,fog_vertex:Gh,fog_pars_vertex:zh,fog_fragment:Vh,fog_pars_fragment:Hh,gradientmap_pars_fragment:Wh,lightmap_pars_fragment:Xh,lights_lambert_fragment:qh,lights_lambert_pars_fragment:Yh,lights_pars_begin:Kh,lights_toon_fragment:Zh,lights_toon_pars_fragment:Jh,lights_phong_fragment:Qh,lights_phong_pars_fragment:jh,lights_physical_fragment:ed,lights_physical_pars_fragment:td,lights_fragment_begin:nd,lights_fragment_maps:id,lights_fragment_end:sd,lightprobes_pars_fragment:rd,logdepthbuf_fragment:ad,logdepthbuf_pars_fragment:od,logdepthbuf_pars_vertex:ld,logdepthbuf_vertex:cd,map_fragment:hd,map_pars_fragment:dd,map_particle_fragment:ud,map_particle_pars_fragment:fd,metalnessmap_fragment:pd,metalnessmap_pars_fragment:md,morphinstance_vertex:gd,morphcolor_vertex:_d,morphnormal_vertex:xd,morphtarget_pars_vertex:vd,morphtarget_vertex:Md,normal_fragment_begin:Sd,normal_fragment_maps:yd,normal_pars_fragment:Ed,normal_pars_vertex:bd,normal_vertex:wd,normalmap_pars_fragment:Td,clearcoat_normal_fragment_begin:Ad,clearcoat_normal_fragment_maps:Cd,clearcoat_pars_fragment:Rd,iridescence_pars_fragment:Pd,opaque_fragment:Ld,packing:Id,premultiplied_alpha_fragment:Dd,project_vertex:Fd,dithering_fragment:Ud,dithering_pars_fragment:Nd,roughnessmap_fragment:Od,roughnessmap_pars_fragment:Bd,shadowmap_pars_fragment:kd,shadowmap_pars_vertex:Gd,shadowmap_vertex:zd,shadowmask_pars_fragment:Vd,skinbase_vertex:Hd,skinning_pars_vertex:Wd,skinning_vertex:Xd,skinnormal_vertex:qd,specularmap_fragment:Yd,specularmap_pars_fragment:Kd,tonemapping_fragment:$d,tonemapping_pars_fragment:Zd,transmission_fragment:Jd,transmission_pars_fragment:Qd,uv_pars_fragment:jd,uv_pars_vertex:eu,uv_vertex:tu,worldpos_vertex:nu,background_vert:iu,background_frag:su,backgroundCube_vert:ru,backgroundCube_frag:au,cube_vert:ou,cube_frag:lu,depth_vert:cu,depth_frag:hu,distance_vert:du,distance_frag:uu,equirect_vert:fu,equirect_frag:pu,linedashed_vert:mu,linedashed_frag:gu,meshbasic_vert:_u,meshbasic_frag:xu,meshlambert_vert:vu,meshlambert_frag:Mu,meshmatcap_vert:Su,meshmatcap_frag:yu,meshnormal_vert:Eu,meshnormal_frag:bu,meshphong_vert:wu,meshphong_frag:Tu,meshphysical_vert:Au,meshphysical_frag:Cu,meshtoon_vert:Ru,meshtoon_frag:Pu,points_vert:Lu,points_frag:Iu,shadow_vert:Du,shadow_frag:Fu,sprite_vert:Uu,sprite_frag:Nu},me={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},on={basic:{uniforms:Ut([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ut([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ut([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ut([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ut([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Pe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ut([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ut([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ut([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ut([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ut([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ut([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Ut([me.common,me.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Ut([me.lights,me.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};on.physical={uniforms:Ut([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const cs={r:0,b:0,g:0},Ou=new gt,cl=new ze;cl.set(-1,0,0,0,1,0,0,0,1);function Bu(i,e,t,n,s,r){const a=new Pe(0);let o=s===!0?0:1,l,c,d=null,f=0,h=null;function g(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){const M=w.backgroundBlurriness>0;P=e.get(P,M)}return P}function v(w){let P=!1;const M=g(w);M===null?p(a,o):M&&M.isColor&&(p(M,1),P=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(w,P){const M=g(P);M&&(M.isCubeTexture||M.mapping===Ts)?(c===void 0&&(c=new le(new Ge(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:vi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,y,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ou.makeRotationFromEuler(P.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cl),c.material.toneMapped=$e.getTransfer(M.colorSpace)!==it,(d!==M||f!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new le(new An(2,2),new fn({name:"BackgroundMaterial",uniforms:vi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=$e.getTransfer(M.colorSpace)!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,P){w.getRGB(cs,rl(i)),t.buffers.color.setClear(cs.r,cs.g,cs.b,P,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,P=1){a.set(w),o=P,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,p(a,o)},render:v,addToRenderList:E,dispose:u}}function ku(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(U,O,X,N,z){let Q=!1;const K=f(U,N,X,O);r!==K&&(r=K,c(r.object)),Q=g(U,N,X,z),Q&&v(U,N,X,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,M(U,O,X,N),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function d(U){return i.deleteVertexArray(U)}function f(U,O,X,N){const z=N.wireframe===!0;let Q=n[O.id];Q===void 0&&(Q={},n[O.id]=Q);const K=U.isInstancedMesh===!0?U.id:0;let se=Q[K];se===void 0&&(se={},Q[K]=se);let Z=se[X.id];Z===void 0&&(Z={},se[X.id]=Z);let R=Z[z];return R===void 0&&(R=h(l()),Z[z]=R),R}function h(U){const O=[],X=[],N=[];for(let z=0;z<t;z++)O[z]=0,X[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:N,object:U,attributes:{},index:null}}function g(U,O,X,N){const z=r.attributes,Q=O.attributes;let K=0;const se=X.getAttributes();for(const Z in se)if(se[Z].location>=0){const T=z[Z];let te=Q[Z];if(te===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),T===void 0||T.attribute!==te||te&&T.data!==te.data)return!0;K++}return r.attributesNum!==K||r.index!==N}function v(U,O,X,N){const z={},Q=O.attributes;let K=0;const se=X.getAttributes();for(const Z in se)if(se[Z].location>=0){let T=Q[Z];T===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(T=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(T=U.instanceColor));const te={};te.attribute=T,T&&T.data&&(te.data=T.data),z[Z]=te,K++}r.attributes=z,r.attributesNum=K,r.index=N}function E(){const U=r.newAttributes;for(let O=0,X=U.length;O<X;O++)U[O]=0}function p(U){u(U,0)}function u(U,O){const X=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;X[U]=1,N[U]===0&&(i.enableVertexAttribArray(U),N[U]=1),z[U]!==O&&(i.vertexAttribDivisor(U,O),z[U]=O)}function w(){const U=r.newAttributes,O=r.enabledAttributes;for(let X=0,N=O.length;X<N;X++)O[X]!==U[X]&&(i.disableVertexAttribArray(X),O[X]=0)}function P(U,O,X,N,z,Q,K){K===!0?i.vertexAttribIPointer(U,O,X,z,Q):i.vertexAttribPointer(U,O,X,N,z,Q)}function M(U,O,X,N){E();const z=N.attributes,Q=X.getAttributes(),K=O.defaultAttributeValues;for(const se in Q){const Z=Q[se];if(Z.location>=0){let R=z[se];if(R===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(R=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(R=U.instanceColor)),R!==void 0){const T=R.normalized,te=R.itemSize,ie=e.get(R);if(ie===void 0)continue;const be=ie.buffer,_e=ie.type,Se=ie.bytesPerElement,B=_e===i.INT||_e===i.UNSIGNED_INT||R.gpuType===sa;if(R.isInterleavedBufferAttribute){const q=R.data,ae=q.stride,ye=R.offset;if(q.isInstancedInterleavedBuffer){for(let re=0;re<Z.locationSize;re++)u(Z.location+re,q.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let re=0;re<Z.locationSize;re++)p(Z.location+re);i.bindBuffer(i.ARRAY_BUFFER,be);for(let re=0;re<Z.locationSize;re++)P(Z.location+re,te/Z.locationSize,_e,T,ae*Se,(ye+te/Z.locationSize*re)*Se,B)}else{if(R.isInstancedBufferAttribute){for(let q=0;q<Z.locationSize;q++)u(Z.location+q,R.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let q=0;q<Z.locationSize;q++)p(Z.location+q);i.bindBuffer(i.ARRAY_BUFFER,be);for(let q=0;q<Z.locationSize;q++)P(Z.location+q,te/Z.locationSize,_e,T,te*Se,te/Z.locationSize*q*Se,B)}}else if(K!==void 0){const T=K[se];if(T!==void 0)switch(T.length){case 2:i.vertexAttrib2fv(Z.location,T);break;case 3:i.vertexAttrib3fv(Z.location,T);break;case 4:i.vertexAttrib4fv(Z.location,T);break;default:i.vertexAttrib1fv(Z.location,T)}}}}w()}function S(){b();for(const U in n){const O=n[U];for(const X in O){const N=O[X];for(const z in N){const Q=N[z];for(const K in Q)d(Q[K].object),delete Q[K];delete N[z]}}delete n[U]}}function y(U){if(n[U.id]===void 0)return;const O=n[U.id];for(const X in O){const N=O[X];for(const z in N){const Q=N[z];for(const K in Q)d(Q[K].object),delete Q[K];delete N[z]}}delete n[U.id]}function C(U){for(const O in n){const X=n[O];for(const N in X){const z=X[N];if(z[U.id]===void 0)continue;const Q=z[U.id];for(const K in Q)d(Q[K].object),delete Q[K];delete z[U.id]}}}function _(U){for(const O in n){const X=n[O],N=U.isInstancedMesh===!0?U.id:0,z=X[N];if(z!==void 0){for(const Q in z){const K=z[Q];for(const se in K)d(K[se].object),delete K[se];delete z[Q]}delete X[N],Object.keys(X).length===0&&delete n[O]}}}function b(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:y,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:p,disableUnusedAttributes:w}}function Gu(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let h=0;for(let g=0;g<d;g++)h+=c[g];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zu(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==en&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Vt&&C!==ln&&!_&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(ke("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:M,maxSamples:S,samples:y}}function Vu(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Nn,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||n!==0||s;return s=h,n=f.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,g){const v=f.clippingPlanes,E=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!s||v===null||v.length===0||r&&!p)r?d(null):c();else{const w=r?0:n,P=w*4;let M=u.clippingState||null;l.value=M,M=d(v,h,P,g);for(let S=0;S!==P;++S)M[S]=t[S];u.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,g,v){const E=f!==null?f.length:0;let p=null;if(E!==0){if(p=l.value,v!==!0||p===null){const u=g+E*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<u)&&(p=new Float32Array(u));for(let P=0,M=g;P!==E;++P,M+=4)a.copy(f[P]).applyMatrix4(w,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}const pi=4,Hu=6,Wu=20,Xu=256,Ci=new xa,ho=new Pe;let lr=null,cr=0,hr=0,dr=!1;const qu=new G,Hn=new G;class uo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=qu}=r;lr=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lr,cr,hr),this._renderer.xr.enabled=dr,e.scissorTest=!1,ui(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kn||e.mapping===_i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lr=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:un,format:en,colorSpace:Ss,depthBuffer:!1},s=fo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fo(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yu(r)),this._blurMaterial=$u(r,e,t),this._ggxMaterial=Ku(r,e,t)}return s}_compileMaterial(e){const t=new le(new Yt,e);this._renderer.compile(t,Ci)}_sceneToCubeUV(e,t,n,s,r){const l=new zt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,g=f.toneMapping;f.getClearColor(ho),f.toneMapping=hn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new le(new Ge,new Nt({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,p=E.material;let u=!1;const w=e.background;w?w.isColor&&(p.color.copy(w),e.background=null,u=!0):(p.color.copy(ho),u=!0);for(let P=0;P<6;P++){const M=P%3;M===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[P],r.y,r.z)):M===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[P]));const S=this._cubeSize;ui(s,M*S,P>2?S:0,S,S),f.setRenderTarget(s),u&&f.render(E,l),f.render(e,l)}f.toneMapping=g,f.autoClear=h,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Kn||e.mapping===_i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=po());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ui(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ci)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),h=c*1.25,g=f*h,{_lodMax:v}=this,E=this._sizeLods[n],p=3*E*(n>v-pi?n-v+pi:0),u=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=v-t,ui(r,p,u,3*E,2*E),s.setRenderTarget(r),s.render(o,Ci),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-n,ui(e,p,u,3*E,2*E),s.setRenderTarget(e),s.render(o,Ci)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const d=this._sizeLods[s],f=3*d*(s>this._lodMax-pi?s-this._lodMax+pi:0),h=4*(this._cubeSize-d);ui(t,f,h,3*d,2*d),a.setRenderTarget(t),a.render(l,Ci)}}function Yu(i){const e=[],t=[];let n=i;const s=i-pi+1+Hu;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,g=3,v=new Float32Array(g*h*f),E=new Float32Array(g*h*f);for(let u=0;u<f;u++){const w=u%3*2/3-1,P=u>2?0:-1,M=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];v.set(M,g*h*u);for(let S=0;S<h;S++){const y=d[S*2]*2-1,C=d[S*2+1]*2-1;u===0?Hn.set(1,C,y):u===1?Hn.set(-y,1,-C):u===2?Hn.set(-y,C,1):u===3?Hn.set(-1,C,-y):u===4?Hn.set(-y,-1,C):Hn.set(y,C,-1),Hn.toArray(E,(u*h+S)*g)}}const p=new Yt;p.setAttribute("position",new bn(v,g)),p.setAttribute("outputDirection",new bn(E,g)),t.push(new le(p,null)),n>pi&&n--}return{lodMeshes:t,sizeLods:e}}function fo(i,e,t){const n=new tn(i,e,t);return n.texture.mapping=Ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ui(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ku(i,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xu,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function $u(i,e,t){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:Wu,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function po(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function mo(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Cs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class hl extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new il(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ge(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:yn});r.uniforms.tEquirect.value=t;const a=new le(s,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=It),new jc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Zu(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,g=!1){return h==null?null:g?a(h):r(h)}function r(h){if(h&&h.isTexture){const g=h.mapping;if(g===Us||g===Ns)if(e.has(h)){const v=e.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const E=new hl(v.height);return E.fromEquirectangularTexture(i,h),e.set(h,E),h.addEventListener("dispose",c),o(E.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const g=h.mapping,v=g===Us||g===Ns,E=g===Kn||g===_i;if(v||E){let p=t.get(h);const u=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new uo(i)),p=v?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const w=h.image;return v&&w&&w.height>0||E&&w&&l(w)?(n===null&&(n=new uo(i)),p=v?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",d),p.texture):null}}}return h}function o(h,g){return g===Us?h.mapping=Kn:g===Ns&&(h.mapping=_i),h}function l(h){let g=0;const v=6;for(let E=0;E<v;E++)h[E]!==void 0&&g++;return g===v}function c(h){const g=h.target;g.removeEventListener("dispose",c);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function d(h){const g=h.target;g.removeEventListener("dispose",d);const v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Ju(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&mi("WebGLRenderer: "+n+" extension not supported."),s}}}function Qu(i,e,t,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];const g=r.get(h);g&&(e.remove(g),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER)}function c(f){const h=[],g=f.index,v=f.attributes.position;let E=0;if(v===void 0)return;if(g!==null){const w=g.array;E=g.version;for(let P=0,M=w.length;P<M;P+=3){const S=w[P+0],y=w[P+1],C=w[P+2];h.push(S,y,y,C,C,S)}}else{const w=v.array;E=v.version;for(let P=0,M=w.length/3-1;P<M;P+=3){const S=P+0,y=P+1,C=P+2;h.push(S,y,y,C,C,S)}}const p=new(v.count>=65535?nl:tl)(h,1);p.version=E;const u=r.get(f);u&&e.remove(u),r.set(f,p)}function d(f){const h=r.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function ju(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,f*a,g),t.update(h,n,g))}function d(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,g);let E=0;for(let p=0;p<g;p++)E+=h[p];t.update(E,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function ef(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function tf(i,e,t){const n=new WeakMap,s=new pt;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let L=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var g=L;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),E===!0&&(M=2),p===!0&&(M=3);let S=o.attributes.position.count*M,y=1;S>e.maxTextureSize&&(y=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const C=new Float32Array(S*y*4*f),_=new Qo(C,S,y,f);_.type=ln,_.needsUpdate=!0;const b=M*4;for(let U=0;U<f;U++){const O=u[U],X=w[U],N=P[U],z=S*y*4*U;for(let Q=0;Q<O.count;Q++){const K=Q*b;v===!0&&(s.fromBufferAttribute(O,Q),C[z+K+0]=s.x,C[z+K+1]=s.y,C[z+K+2]=s.z,C[z+K+3]=0),E===!0&&(s.fromBufferAttribute(X,Q),C[z+K+4]=s.x,C[z+K+5]=s.y,C[z+K+6]=s.z,C[z+K+7]=0),p===!0&&(s.fromBufferAttribute(N,Q),C[z+K+8]=s.x,C[z+K+9]=s.y,C[z+K+10]=s.z,C[z+K+11]=N.itemSize===4?s.w:1)}}h={count:f,texture:_,size:new Xe(S,y)},n.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const E=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",E),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function nf(i,e,t,n,s){let r=new WeakMap;function a(c){const d=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const g=c.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return h}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const sf={[No]:"LINEAR_TONE_MAPPING",[Oo]:"REINHARD_TONE_MAPPING",[Bo]:"CINEON_TONE_MAPPING",[ko]:"ACES_FILMIC_TONE_MAPPING",[zo]:"AGX_TONE_MAPPING",[Vo]:"NEUTRAL_TONE_MAPPING",[Go]:"CUSTOM_TONE_MAPPING"};function rf(i,e,t,n,s,r){const a=new tn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Yt;c.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new At([0,2,0,0,2,0],2));const d=new Wc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new le(c,d),h=new xa(-1,1,1,-1,0,1);let g=null,v=null,E=!1,p,u=null,w=[],P=!1;this.setSize=function(M,S){a.setSize(M,S),o!==null&&o.setSize(M,S),l!==null&&l.setSize(M,S);for(let y=0;y<w.length;y++){const C=w[y];C.setSize&&C.setSize(M,S)}},this.setEffects=function(M){w=M,P=w.length>0&&w[0].isRenderPass===!0;const S=a.width,y=a.height;w.length>0&&o===null&&(o=new tn(S,y,{type:un,depthBuffer:!1,stencilBuffer:!1}),l=new tn(S,y,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<w.length;C++){const _=w[C];_.setSize&&_.setSize(S,y)}},this.begin=function(M,S){if(E||M.toneMapping===hn&&w.length===0)return!1;if(u=S,S!==null){const y=S.width,C=S.height;(a.width!==y||a.height!==C)&&this.setSize(y,C)}return P===!1&&M.setRenderTarget(a),p=M.toneMapping,M.toneMapping=hn,!0},this.hasRenderPass=function(){return P},this.end=function(M,S){M.toneMapping=p,E=!0;let y=a,C=o;for(let _=0;_<w.length;_++){const b=w[_];b.enabled!==!1&&(b.render(M,C,y,S),b.needsSwap!==!1&&(y=C,C=C===o?l:o))}if(g!==M.outputColorSpace||v!==M.toneMapping){g=M.outputColorSpace,v=M.toneMapping,d.defines={},$e.getTransfer(g)===it&&(d.defines.SRGB_TRANSFER="");const _=sf[v];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(u),M.render(f,h),u=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const dl=new Dt,jr=new Bi(1,1),ul=new Qo,fl=new vc,pl=new il,go=[],_o=[],xo=new Float32Array(16),vo=new Float32Array(9),Mo=new Float32Array(4);function yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=go[s];if(r===void 0&&(r=new Float32Array(s),go[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rs(i,e){let t=_o[e];t===void 0&&(t=new Int32Array(e),_o[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function af(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function hf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;Mo.set(n),i.uniformMatrix2fv(this.addr,!1,Mo),bt(t,n)}}function df(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;vo.set(n),i.uniformMatrix3fv(this.addr,!1,vo),bt(t,n)}}function uf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;xo.set(n),i.uniformMatrix4fv(this.addr,!1,xo),bt(t,n)}}function ff(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function _f(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function Mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function Sf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(jr.compareFunction=t.isReversedDepthBuffer()?da:ha,r=jr):r=dl,t.setTexture2D(e||r,s)}function yf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fl,s)}function Ef(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||pl,s)}function bf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ul,s)}function wf(i){switch(i){case 5126:return af;case 35664:return of;case 35665:return lf;case 35666:return cf;case 35674:return hf;case 35675:return df;case 35676:return uf;case 5124:case 35670:return ff;case 35667:case 35671:return pf;case 35668:case 35672:return mf;case 35669:case 35673:return gf;case 5125:return _f;case 36294:return xf;case 36295:return vf;case 36296:return Mf;case 35678:case 36198:case 36298:case 36306:case 35682:return Sf;case 35679:case 36299:case 36307:return yf;case 35680:case 36300:case 36308:case 36293:return Ef;case 36289:case 36303:case 36311:case 36292:return bf}}function Tf(i,e){i.uniform1fv(this.addr,e)}function Af(i,e){const t=yi(e,this.size,2);i.uniform2fv(this.addr,t)}function Cf(i,e){const t=yi(e,this.size,3);i.uniform3fv(this.addr,t)}function Rf(i,e){const t=yi(e,this.size,4);i.uniform4fv(this.addr,t)}function Pf(i,e){const t=yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lf(i,e){const t=yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function If(i,e){const t=yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Df(i,e){i.uniform1iv(this.addr,e)}function Ff(i,e){i.uniform2iv(this.addr,e)}function Uf(i,e){i.uniform3iv(this.addr,e)}function Nf(i,e){i.uniform4iv(this.addr,e)}function Of(i,e){i.uniform1uiv(this.addr,e)}function Bf(i,e){i.uniform2uiv(this.addr,e)}function kf(i,e){i.uniform3uiv(this.addr,e)}function Gf(i,e){i.uniform4uiv(this.addr,e)}function zf(i,e,t){const n=this.cache,s=e.length,r=Rs(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=jr:a=dl;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Vf(i,e,t){const n=this.cache,s=e.length,r=Rs(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fl,r[a])}function Hf(i,e,t){const n=this.cache,s=e.length,r=Rs(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||pl,r[a])}function Wf(i,e,t){const n=this.cache,s=e.length,r=Rs(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ul,r[a])}function Xf(i){switch(i){case 5126:return Tf;case 35664:return Af;case 35665:return Cf;case 35666:return Rf;case 35674:return Pf;case 35675:return Lf;case 35676:return If;case 5124:case 35670:return Df;case 35667:case 35671:return Ff;case 35668:case 35672:return Uf;case 35669:case 35673:return Nf;case 5125:return Of;case 36294:return Bf;case 36295:return kf;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return zf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return Hf;case 36289:case 36303:case 36311:case 36292:return Wf}}class qf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wf(t.type)}}class Yf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xf(t.type)}}class Kf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ur=/(\w+)(\])?(\[|\.)?/g;function So(i,e){i.seq.push(e),i.map[e.id]=e}function $f(i,e,t){const n=i.name,s=n.length;for(ur.lastIndex=0;;){const r=ur.exec(n),a=ur.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){So(t,c===void 0?new qf(o,i,e):new Yf(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Kf(o),So(t,f)),t=f}}}class gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);$f(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function yo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Zf=37297;let Jf=0;function Qf(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Eo=new ze;function jf(i){$e._getMatrix(Eo,$e.workingColorSpace,i);const e=`mat3( ${Eo.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case ys:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Qf(i.getShaderSource(e),o)}else return r}function ep(i,e){const t=jf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tp={[No]:"Linear",[Oo]:"Reinhard",[Bo]:"Cineon",[ko]:"ACESFilmic",[zo]:"AgX",[Vo]:"Neutral",[Go]:"Custom"};function np(i,e){const t=tp[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hs=new G;function ip(){$e.getLuminanceCoefficients(hs);const i=hs.x.toFixed(4),e=hs.y.toFixed(4),t=hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function rp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ap(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ii(i){return i!==""}function wo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function To(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const op=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(i){return i.replace(op,cp)}const lp=new Map;function cp(i,e){let t=We[e];if(t===void 0){const n=lp.get(e);if(n!==void 0)t=We[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ea(t)}const hp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ao(i){return i.replace(hp,dp)}function dp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Co(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const up={[ds]:"SHADOWMAP_TYPE_PCF",[Pi]:"SHADOWMAP_TYPE_VSM"};function fp(i){return up[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pp={[Kn]:"ENVMAP_TYPE_CUBE",[_i]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE_UV"};function mp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":pp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const gp={[_i]:"ENVMAP_MODE_REFRACTION"};function _p(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":gp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xp={[ia]:"ENVMAP_BLENDING_MULTIPLY",[Zl]:"ENVMAP_BLENDING_MIX",[Jl]:"ENVMAP_BLENDING_ADD"};function vp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":xp[i.combine]||"ENVMAP_BLENDING_NONE"}function Mp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=fp(t),c=mp(t),d=_p(t),f=vp(t),h=Mp(t),g=sp(t),v=rp(r),E=s.createProgram();let p,u,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ii).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ii).join(`
`),u.length>0&&(u+=`
`)):(p=[Co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),u=[Co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?We.tonemapping_pars_fragment:"",t.toneMapping!==hn?np("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,ep("linearToOutputTexel",t.outputColorSpace),ip(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),a=ea(a),a=wo(a,t),a=To(a,t),o=ea(o),o=wo(o,t),o=To(o,t),a=Ao(a),o=Ao(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===Ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const P=w+p+a,M=w+u+o,S=yo(s,s.VERTEX_SHADER,P),y=yo(s,s.FRAGMENT_SHADER,M);s.attachShader(E,S),s.attachShader(E,y),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function C(U){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(E)||"",X=s.getShaderInfoLog(S)||"",N=s.getShaderInfoLog(y)||"",z=O.trim(),Q=X.trim(),K=N.trim();let se=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,S,y);else{const R=bo(s,S,"vertex"),T=bo(s,y,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+z+`
`+R+`
`+T)}else z!==""?ke("WebGLProgram: Program Info Log:",z):(Q===""||K==="")&&(Z=!1);Z&&(U.diagnostics={runnable:se,programLog:z,vertexShader:{log:Q,prefix:p},fragmentShader:{log:K,prefix:u}})}s.deleteShader(S),s.deleteShader(y),_=new gs(s,E),b=ap(s,E)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(E,Zf)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jf++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=S,this.fragmentShader=y,this}let yp=0;class Ep{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bp(e),t.set(e,n)),n}}class bp{constructor(e){this.id=yp++,this.code=e,this.usedTimes=0}}function wp(i){return i===$n||i===xs||i===vs}function Tp(i,e,t,n,s,r){const a=new jo,o=new Ep,l=new Set,c=[],d=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function E(_,b,L,U,O,X){const N=U.fog,z=O.geometry,Q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,se=e.get(_.envMap||Q,K),Z=se&&se.mapping===Ts?se.image.height:null,R=g[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&ke("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const T=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,te=T!==void 0?T.length:0;let ie=0;z.morphAttributes.position!==void 0&&(ie=1),z.morphAttributes.normal!==void 0&&(ie=2),z.morphAttributes.color!==void 0&&(ie=3);let be,_e,Se,B;if(R){const ot=on[R];be=ot.vertexShader,_e=ot.fragmentShader}else{be=_.vertexShader,_e=_.fragmentShader;const ot=o.getVertexShaderStage(_),tt=o.getFragmentShaderStage(_);o.update(_,ot,tt),Se=ot.id,B=tt.id}const q=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),ye=O.isInstancedMesh===!0,re=O.isBatchedMesh===!0,Ce=!!_.map,Ye=!!_.matcap,ve=!!se,Be=!!_.aoMap,qe=!!_.lightMap,Oe=!!_.bumpMap&&_.wireframe===!1,Je=!!_.normalMap,at=!!_.displacementMap,ct=!!_.emissiveMap,ht=!!_.metalnessMap,mt=!!_.roughnessMap,F=_.anisotropy>0,St=_.clearcoat>0,et=_.dispersion>0,A=_.retroreflectivity>0,m=_.iridescence>0,k=_.sheen>0,W=_.transmission>0,$=F&&!!_.anisotropyMap,oe=St&&!!_.clearcoatMap,ce=St&&!!_.clearcoatNormalMap,J=St&&!!_.clearcoatRoughnessMap,ee=m&&!!_.iridescenceMap,he=m&&!!_.iridescenceThicknessMap,Ie=k&&!!_.sheenColorMap,pe=k&&!!_.sheenRoughnessMap,de=!!_.specularMap,De=!!_.specularColorMap,Ne=!!_.specularIntensityMap,Ve=W&&!!_.transmissionMap,D=W&&!!_.thicknessMap,ue=!!_.gradientMap,j=!!_.alphaMap,fe=_.alphaTest>0,Me=!!_.alphaHash,ne=!!_.extensions;let Fe=hn;_.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const Re={shaderID:R,shaderType:_.type,shaderName:_.name,vertexShader:be,fragmentShader:_e,defines:_.defines,customVertexShaderID:Se,customFragmentShaderID:B,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:re,batchingColor:re&&O._colorsTexture!==null,instancing:ye,instancingColor:ye&&O.instanceColor!==null,instancingMorph:ye&&O.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ce,matcap:Ye,envMap:ve,envMapMode:ve&&se.mapping,envMapCubeUVHeight:Z,aoMap:Be,lightMap:qe,bumpMap:Oe,normalMap:Je,displacementMap:at,emissiveMap:ct,normalMapObjectSpace:Je&&_.normalMapType===ec,normalMapTangentSpace:Je&&_.normalMapType===Ms,packedNormalMap:Je&&_.normalMapType===Ms&&wp(_.normalMap.format),metalnessMap:ht,roughnessMap:mt,anisotropy:F,anisotropyMap:$,clearcoat:St,clearcoatMap:oe,clearcoatNormalMap:ce,clearcoatRoughnessMap:J,dispersion:et,retroreflection:A,iridescence:m,iridescenceMap:ee,iridescenceThicknessMap:he,sheen:k,sheenColorMap:Ie,sheenRoughnessMap:pe,specularMap:de,specularColorMap:De,specularIntensityMap:Ne,transmission:W,transmissionMap:Ve,thicknessMap:D,gradientMap:ue,opaque:_.transparent===!1&&_.blending===Di&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:fe,alphaHash:Me,combine:_.combine,mapUv:Ce&&v(_.map.channel),aoMapUv:Be&&v(_.aoMap.channel),lightMapUv:qe&&v(_.lightMap.channel),bumpMapUv:Oe&&v(_.bumpMap.channel),normalMapUv:Je&&v(_.normalMap.channel),displacementMapUv:at&&v(_.displacementMap.channel),emissiveMapUv:ct&&v(_.emissiveMap.channel),metalnessMapUv:ht&&v(_.metalnessMap.channel),roughnessMapUv:mt&&v(_.roughnessMap.channel),anisotropyMapUv:$&&v(_.anisotropyMap.channel),clearcoatMapUv:oe&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:pe&&v(_.sheenRoughnessMap.channel),specularMapUv:de&&v(_.specularMap.channel),specularColorMapUv:De&&v(_.specularColorMap.channel),specularIntensityMapUv:Ne&&v(_.specularIntensityMap.channel),transmissionMapUv:Ve&&v(_.transmissionMap.channel),thicknessMapUv:D&&v(_.thicknessMap.channel),alphaMapUv:j&&v(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Je||F),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Ce||j),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&Je===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ae,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ie,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ce&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===it,decodeVideoTextureEmissive:ct&&_.emissiveMap.isVideoTexture===!0&&$e.getTransfer(_.emissiveMap.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Mn,flipSided:_.side===Bt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ne&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&_.extensions.multiDraw===!0||re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function p(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)b.push(L),b.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(u(b,_),w(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function u(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function w(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function P(_){const b=g[_.type];let L;if(b){const U=on[b];L=zc.clone(U.uniforms)}else L=_.uniforms;return L}function M(_,b){let L=d.get(b);return L!==void 0?++L.usedTimes:(L=new Sp(i,b,_,s),c.push(L),d.set(b,L)),L}function S(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function y(_){o.remove(_)}function C(){o.dispose()}return{getParameters:E,getProgramCacheKey:p,getUniforms:P,acquireProgram:M,releaseProgram:S,releaseShaderCache:y,programs:c,dispose:C}}function Ap(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Cp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ro(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Po(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function o(h,g,v,E,p,u){let w=i[e];return w===void 0?(w={id:h.id,object:h,geometry:g,material:v,materialVariant:a(h),groupOrder:E,renderOrder:h.renderOrder,z:p,group:u},i[e]=w):(w.id=h.id,w.object=h,w.geometry=g,w.material=v,w.materialVariant=a(h),w.groupOrder=E,w.renderOrder=h.renderOrder,w.z=p,w.group=u),e++,w}function l(h,g,v,E,p,u,w){w.reversedDepth===!0&&(p=-p);const P=o(h,g,v,E,p,u);v.transmission>0?n.push(P):v.transparent===!0?s.push(P):t.push(P)}function c(h,g,v,E,p,u){const w=o(h,g,v,E,p,u);v.transmission>0?n.unshift(w):v.transparent===!0?s.unshift(w):t.unshift(w)}function d(h,g){t.length>1&&t.sort(h||Cp),n.length>1&&n.sort(g||Ro),s.length>1&&s.sort(g||Ro)}function f(){for(let h=e,g=i.length;h<g;h++){const v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:d}}function Rp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Po,i.set(n,[a])):s>=r.length?(a=new Po,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Pp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Pe};break;case"SpotLight":t={position:new G,direction:new G,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Lp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ip=0;function Dp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fp(i){const e=new Pp,t=Lp(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,r=new gt,a=new gt;function o(c){let d=0,f=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let g=0,v=0,E=0,p=0,u=0,w=0,P=0,M=0,S=0,y=0,C=0,_=0,b=0,L=0;c.sort(Dp);for(let O=0,X=c.length;O<X;O++){const N=c[O],z=N.color,Q=N.intensity,K=N.distance;let se=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===$n?se=N.shadow.map.texture:se=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)d+=z.r*Q,f+=z.g*Q,h+=z.b*Q;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(N.sh.coefficients[Z],Q);L++}else if(N.isSunLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const R=N.shadow,T=t.get(N);T.shadowIntensity=R.intensity,T.shadowBias=R.bias,T.shadowNormalBias=R.normalBias,T.shadowRadius=R.radius,T.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[v]=T,n.sunShadowMap[v]=se;const te=R.getViewportCount();for(let ie=0;ie<te;ie++)n.sunShadowMatrix[E+ie]=R.getMatrix(ie),n.sunShadowCascade[E+ie]=R._cascadeData[ie];E+=te,v++}n.sun[g]=Z,g++}else if(N.isDirectionalLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const R=N.shadow,T=t.get(N);T.shadowIntensity=R.intensity,T.shadowBias=R.bias,T.shadowNormalBias=R.normalBias,T.shadowRadius=R.radius,T.shadowMapSize=R.mapSize,n.directionalShadow[p]=T,n.directionalShadowMap[p]=se,n.directionalShadowMatrix[p]=N.shadow.matrix,S++}n.directional[p]=Z,p++}else if(N.isSpotLight){const Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(z).multiplyScalar(Q),Z.distance=K,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,n.spot[w]=Z;const R=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,R.updateMatrices(N),N.castShadow&&b++),n.spotLightMatrix[w]=R.matrix,N.castShadow){const T=t.get(N);T.shadowIntensity=R.intensity,T.shadowBias=R.bias,T.shadowNormalBias=R.normalBias,T.shadowRadius=R.radius,T.shadowMapSize=R.mapSize,n.spotShadow[w]=T,n.spotShadowMap[w]=se,C++}w++}else if(N.isRectAreaLight){const Z=e.get(N);Z.color.copy(z).multiplyScalar(Q),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),n.rectArea[P]=Z,P++}else if(N.isPointLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const R=N.shadow,T=t.get(N);T.shadowIntensity=R.intensity,T.shadowBias=R.bias,T.shadowNormalBias=R.normalBias,T.shadowRadius=R.radius,T.shadowMapSize=R.mapSize,T.shadowCameraNear=R.camera.near,T.shadowCameraFar=R.camera.far,n.pointShadow[u]=T,n.pointShadowMap[u]=se,n.pointShadowMatrix[u]=N.shadow.matrix,y++}n.point[u]=Z,u++}else if(N.isHemisphereLight){const Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(Q),Z.groundColor.copy(N.groundColor).multiplyScalar(Q),n.hemi[M]=Z,M++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;const U=n.hash;(U.sunLength!==g||U.directionalLength!==p||U.pointLength!==u||U.spotLength!==w||U.rectAreaLength!==P||U.hemiLength!==M||U.numSunShadows!==v||U.numDirectionalShadows!==S||U.numPointShadows!==y||U.numSpotShadows!==C||U.numSpotMaps!==_||U.numLightProbes!==L)&&(n.sun.length=g,n.directional.length=p,n.spot.length=w,n.rectArea.length=P,n.point.length=u,n.hemi.length=M,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-b,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=L,U.sunLength=g,U.directionalLength=p,U.pointLength=u,U.spotLength=w,U.rectAreaLength=P,U.hemiLength=M,U.numSunShadows=v,U.numDirectionalShadows=S,U.numPointShadows=y,U.numSpotShadows=C,U.numSpotMaps=_,U.numLightProbes=L,n.version=Ip++)}function l(c,d){let f=0,h=0,g=0,v=0,E=0,p=0;const u=d.matrixWorldInverse;for(let w=0,P=c.length;w<P;w++){const M=c[w];if(M.isSunLight){const S=n.sun[f];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(u),f++}else if(M.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(u),h++}else if(M.isSpotLight){const S=n.spot[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(u),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(u),v++}else if(M.isRectAreaLight){const S=n.rectArea[E];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(u),a.identity(),r.copy(M.matrixWorld),r.premultiply(u),a.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),E++}else if(M.isPointLight){const S=n.point[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(u),g++}else if(M.isHemisphereLight){const S=n.hemi[p];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(u),p++}}}return{setup:o,setupView:l,state:n}}function Lo(i){const e=new Fp(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Up(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Lo(i),e.set(s,[o])):r>=a.length?(o=new Lo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Np=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Op=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bp=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],kp=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Io=new gt,Ri=new G,fr=new G;function Gp(i,e,t){let n=new ma;const s=new Xe,r=new Xe,a=new pt,o=new Xc,l=new qc,c={},d=t.maxTextureSize,f={[Yn]:Bt,[Bt]:Yn,[Mn]:Mn},h=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Np,fragmentShader:Op}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const v=new Yt;v.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new le(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ds;let u=this.type;this.render=function(y,C,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;this.type===Do&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ds);const b=i.getRenderTarget(),L=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),O=i.state;O.setBlending(yn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const X=u!==this.type;X&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=y.length;N<z;N++){const Q=y[N],K=Q.shadow;if(K===void 0){ke("WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const se=K.getFrameExtents();s.multiply(se),r.copy(K.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/se.x),s.x=r.x*se.x,K.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/se.y),s.y=r.y*se.y,K.mapSize.y=r.y));const Z=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Z,K.map===null||X===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Pi){if(Q.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new tn(s.x,s.y,{format:$n,type:un,minFilter:It,magFilter:It,generateMipmaps:!1}),K.map.texture.name=Q.name+".shadowMap",K.map.depthTexture=new Bi(s.x,s.y,ln),K.map.depthTexture.name=Q.name+".shadowMapDepth",K.map.depthTexture.format=wn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ct,K.map.depthTexture.magFilter=Ct}else Q.isPointLight?(K.map=new hl(s.x),K.map.depthTexture=new kc(s.x,dn)):(K.map=new tn(s.x,s.y),K.map.depthTexture=new Bi(s.x,s.y,dn)),K.map.depthTexture.name=Q.name+".shadowMap",K.map.depthTexture.format=wn,this.type===ds?(K.map.depthTexture.compareFunction=Z?da:ha,K.map.depthTexture.minFilter=It,K.map.depthTexture.magFilter=It):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ct,K.map.depthTexture.magFilter=Ct);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);const R=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();Q.isPointLight!==!0&&K.updateMatrices(Q,_);for(let T=0;T<R;T++){const te=K.getCamera(T);if(Q.isPointLight){const ie=K.camera,be=K.matrix,_e=Q.distance||ie.far;_e!==ie.far&&(ie.far=_e,ie.updateProjectionMatrix()),Ri.setFromMatrixPosition(Q.matrixWorld),ie.position.copy(Ri),fr.copy(ie.position),fr.add(Bp[T]),ie.up.copy(kp[T]),ie.lookAt(fr),ie.updateMatrixWorld(),be.makeTranslation(-Ri.x,-Ri.y,-Ri.z),Io.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Io,ie.coordinateSystem,ie.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,T),i.clear();else{T===0&&(i.setRenderTarget(K.map),i.clear());const ie=K.getViewport(T);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),O.viewport(a)}n=K.getFrustum(T),M(C,_,te,Q,this.type)}K.isPointLightShadow!==!0&&this.type===Pi&&w(K,_),K.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(b,L,U)};function w(y,C){const _=e.update(E);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,g.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),y.mapPass===null?y.mapPass=new tn(s.x,s.y,{format:$n,type:un}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(C,null,_,h,E,null),g.uniforms.shadow_pass.value=y.mapPass.texture,g.uniforms.resolution.value.set(y.map.width,y.map.height),g.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(C,null,_,g,E,null)}function P(y,C,_,b){let L=null;const U=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(U!==void 0)L=U;else if(L=_.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=L.uuid,X=C.uuid;let N=c[O];N===void 0&&(N={},c[O]=N);let z=N[X];z===void 0&&(z=L.clone(),N[X]=z,C.addEventListener("dispose",S)),L=z}if(L.visible=C.visible,L.wireframe=C.wireframe,b===Pi?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:f[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const O=i.properties.get(L);O.light=_}return L}function M(y,C,_,b,L){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&L===Pi)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);const X=e.update(y),N=y.material;if(Array.isArray(N)){const z=X.groups;for(let Q=0,K=z.length;Q<K;Q++){const se=z[Q],Z=N[se.materialIndex];if(Z&&Z.visible){const R=P(y,Z,b,L);y.onBeforeShadow(i,y,C,_,X,R,se),i.renderBufferDirect(_,null,X,R,y,se),y.onAfterShadow(i,y,C,_,X,R,se)}}}else if(N.visible){const z=P(y,N,b,L);y.onBeforeShadow(i,y,C,_,X,z,null),i.renderBufferDirect(_,null,X,z,y,null),y.onAfterShadow(i,y,C,_,X,z,null)}}const O=y.children;for(let X=0,N=O.length;X<N;X++)M(O[X],C,_,b,L)}function S(y){y.target.removeEventListener("dispose",S);for(const _ in c){const b=c[_],L=y.target.uuid;L in b&&(b[L].dispose(),delete b[L])}}}function zp(i,e){function t(){let D=!1;const ue=new pt;let j=null;const fe=new pt(0,0,0,0);return{setMask:function(Me){j!==Me&&!D&&(i.colorMask(Me,Me,Me,Me),j=Me)},setLocked:function(Me){D=Me},setClear:function(Me,ne,Fe,Re,ot){ot===!0&&(Me*=Re,ne*=Re,Fe*=Re),ue.set(Me,ne,Fe,Re),fe.equals(ue)===!1&&(i.clearColor(Me,ne,Fe,Re),fe.copy(ue))},reset:function(){D=!1,j=null,fe.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,j=null,fe=null,Me=null;return{setReversed:function(ne){if(ue!==ne){const Fe=e.get("EXT_clip_control");ne?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ue=ne;const Re=Me;Me=null,this.setClear(Re)}},getReversed:function(){return ue},setTest:function(ne){ne?q(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(ne){j!==ne&&!D&&(i.depthMask(ne),j=ne)},setFunc:function(ne){if(ue&&(ne=uc[ne]),fe!==ne){switch(ne){case pr:i.depthFunc(i.NEVER);break;case mr:i.depthFunc(i.ALWAYS);break;case gr:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case _r:i.depthFunc(i.EQUAL);break;case xr:i.depthFunc(i.GEQUAL);break;case vr:i.depthFunc(i.GREATER);break;case Mr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=ne}},setLocked:function(ne){D=ne},setClear:function(ne){Me!==ne&&(Me=ne,ue&&(ne=1-ne),i.clearDepth(ne))},reset:function(){D=!1,j=null,fe=null,Me=null,ue=!1}}}function s(){let D=!1,ue=null,j=null,fe=null,Me=null,ne=null,Fe=null,Re=null,ot=null;return{setTest:function(tt){D||(tt?q(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(tt){ue!==tt&&!D&&(i.stencilMask(tt),ue=tt)},setFunc:function(tt,Kt,nn){(j!==tt||fe!==Kt||Me!==nn)&&(i.stencilFunc(tt,Kt,nn),j=tt,fe=Kt,Me=nn)},setOp:function(tt,Kt,nn){(ne!==tt||Fe!==Kt||Re!==nn)&&(i.stencilOp(tt,Kt,nn),ne=tt,Fe=Kt,Re=nn)},setLocked:function(tt){D=tt},setClear:function(tt){ot!==tt&&(i.clearStencil(tt),ot=tt)},reset:function(){D=!1,ue=null,j=null,fe=null,Me=null,ne=null,Fe=null,Re=null,ot=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},f={},h={},g=new WeakMap,v=[],E=null,p=!1,u=null,w=null,P=null,M=null,S=null,y=null,C=null,_=new Pe(0,0,0),b=0,L=!1,U=null,O=null,X=null,N=null,z=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,se=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=se>=1):Z.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=se>=2);let R=null,T={};const te=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),be=new pt().fromArray(te),_e=new pt().fromArray(ie);function Se(D,ue,j,fe){const Me=new Uint8Array(4),ne=i.createTexture();i.bindTexture(D,ne),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<j;Fe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(ue+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ne}const B={};B[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(i.DEPTH_TEST),a.setFunc(Fi),Oe(!1),Je(Na),q(i.CULL_FACE),Be(yn);function q(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function ae(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function ye(D,ue){return h[D]!==ue?(i.bindFramebuffer(D,ue),h[D]=ue,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ue),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function re(D,ue){let j=v,fe=!1;if(D){j=g.get(ue),j===void 0&&(j=[],g.set(ue,j));const Me=D.textures;if(j.length!==Me.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Fe=Me.length;ne<Fe;ne++)j[ne]=i.COLOR_ATTACHMENT0+ne;j.length=Me.length,fe=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,fe=!0);fe&&i.drawBuffers(j)}function Ce(D){return E!==D?(i.useProgram(D),E=D,!0):!1}const Ye={[fi]:i.FUNC_ADD,[Dl]:i.FUNC_SUBTRACT,[Fl]:i.FUNC_REVERSE_SUBTRACT};Ye[Ul]=i.MIN,Ye[Nl]=i.MAX;const ve={[Ol]:i.ZERO,[Bl]:i.ONE,[kl]:i.SRC_COLOR,[Fo]:i.SRC_ALPHA,[Xl]:i.SRC_ALPHA_SATURATE,[Hl]:i.DST_COLOR,[zl]:i.DST_ALPHA,[Gl]:i.ONE_MINUS_SRC_COLOR,[Uo]:i.ONE_MINUS_SRC_ALPHA,[Wl]:i.ONE_MINUS_DST_COLOR,[Vl]:i.ONE_MINUS_DST_ALPHA,[ql]:i.CONSTANT_COLOR,[Yl]:i.ONE_MINUS_CONSTANT_COLOR,[Kl]:i.CONSTANT_ALPHA,[$l]:i.ONE_MINUS_CONSTANT_ALPHA};function Be(D,ue,j,fe,Me,ne,Fe,Re,ot,tt){if(D===yn){p===!0&&(ae(i.BLEND),p=!1);return}if(p===!1&&(q(i.BLEND),p=!0),D!==Il){if(D!==u||tt!==L){if((w!==fi||S!==fi)&&(i.blendEquation(i.FUNC_ADD),w=fi,S=fi),tt)switch(D){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oa:i.blendFunc(i.ONE,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ka:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",D);break}else switch(D){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ba:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ka:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",D);break}P=null,M=null,y=null,C=null,_.set(0,0,0),b=0,u=D,L=tt}return}Me=Me||ue,ne=ne||j,Fe=Fe||fe,(ue!==w||Me!==S)&&(i.blendEquationSeparate(Ye[ue],Ye[Me]),w=ue,S=Me),(j!==P||fe!==M||ne!==y||Fe!==C)&&(i.blendFuncSeparate(ve[j],ve[fe],ve[ne],ve[Fe]),P=j,M=fe,y=ne,C=Fe),(Re.equals(_)===!1||ot!==b)&&(i.blendColor(Re.r,Re.g,Re.b,ot),_.copy(Re),b=ot),u=D,L=!1}function qe(D,ue){D.side===Mn?ae(i.CULL_FACE):q(i.CULL_FACE);let j=D.side===Bt;ue&&(j=!j),Oe(j),D.blending===Di&&D.transparent===!1?Be(yn):Be(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const fe=D.stencilWrite;o.setTest(fe),fe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ct(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){U!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),U=D)}function Je(D){D!==Pl?(q(i.CULL_FACE),D!==O&&(D===Na?i.cullFace(i.BACK):D===Ll?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),O=D}function at(D){D!==X&&(K&&i.lineWidth(D),X=D)}function ct(D,ue,j){D?(q(i.POLYGON_OFFSET_FILL),(N!==ue||z!==j)&&(N=ue,z=j,a.getReversed()&&(ue=-ue),i.polygonOffset(ue,j))):ae(i.POLYGON_OFFSET_FILL)}function ht(D){D?q(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function mt(D){D===void 0&&(D=i.TEXTURE0+Q-1),R!==D&&(i.activeTexture(D),R=D)}function F(D,ue,j){j===void 0&&(R===null?j=i.TEXTURE0+Q-1:j=R);let fe=T[j];fe===void 0&&(fe={type:void 0,texture:void 0},T[j]=fe),(fe.type!==D||fe.texture!==ue)&&(R!==j&&(i.activeTexture(j),R=j),i.bindTexture(D,ue||B[D]),fe.type=D,fe.texture=ue)}function St(){const D=T[R];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function et(){try{i.compressedTexImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function m(){try{i.texSubImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function k(){try{i.texSubImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function oe(){try{i.texStorage2D(...arguments)}catch(D){je("WebGLState:",D)}}function ce(){try{i.texStorage3D(...arguments)}catch(D){je("WebGLState:",D)}}function J(){try{i.texImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function ee(){try{i.texImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function he(D){return f[D]!==void 0?f[D]:i.getParameter(D)}function Ie(D,ue){f[D]!==ue&&(i.pixelStorei(D,ue),f[D]=ue)}function pe(D){be.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),be.copy(D))}function de(D){_e.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),_e.copy(D))}function De(D,ue){let j=c.get(ue);j===void 0&&(j=new WeakMap,c.set(ue,j));let fe=j.get(D);fe===void 0&&(fe=i.getUniformBlockIndex(ue,D.name),j.set(D,fe))}function Ne(D,ue){const fe=c.get(ue).get(D);l.get(ue)!==fe&&(i.uniformBlockBinding(ue,fe,D.__bindingPointIndex),l.set(ue,fe))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},R=null,T={},h={},g=new WeakMap,v=[],E=null,p=!1,u=null,w=null,P=null,M=null,S=null,y=null,C=null,_=new Pe(0,0,0),b=0,L=!1,U=null,O=null,X=null,N=null,z=null,be.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:q,disable:ae,bindFramebuffer:ye,drawBuffers:re,useProgram:Ce,setBlending:Be,setMaterial:qe,setFlipSided:Oe,setCullFace:Je,setLineWidth:at,setPolygonOffset:ct,setScissorTest:ht,activeTexture:mt,bindTexture:F,unbindTexture:St,compressedTexImage2D:et,compressedTexImage3D:A,texImage2D:J,texImage3D:ee,pixelStorei:Ie,getParameter:he,updateUBOMapping:De,uniformBlockBinding:Ne,texStorage2D:oe,texStorage3D:ce,texSubImage2D:m,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:pe,viewport:de,reset:Ve}}function Vp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,d=new WeakMap,f=new Set;let h;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,m){return v?new OffscreenCanvas(A,m):Es("canvas")}function p(A,m,k){let W=1;const $=et(A);if(($.width>k||$.height>k)&&(W=k/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const oe=Math.floor(W*$.width),ce=Math.floor(W*$.height);h===void 0&&(h=E(oe,ce));const J=m?E(oe,ce):h;return J.width=oe,J.height=ce,J.getContext("2d").drawImage(A,0,0,oe,ce),ke("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+oe+"x"+ce+")."),J}else return"data"in A&&ke("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function u(A){return A.generateMipmaps}function w(A){i.generateMipmap(A)}function P(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,m,k,W,$,oe=!1){if(A!==null){if(i[A]!==void 0)return i[A];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce;W&&(ce=e.get("EXT_texture_norm16"),ce||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=m;if(m===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8),k===i.UNSIGNED_SHORT&&ce&&(J=ce.R16_EXT),k===i.SHORT&&ce&&(J=ce.R16_SNORM_EXT)),m===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),m===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8),k===i.UNSIGNED_SHORT&&ce&&(J=ce.RG16_EXT),k===i.SHORT&&ce&&(J=ce.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),m===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),m===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),m===i.RGB&&(k===i.UNSIGNED_SHORT&&ce&&(J=ce.RGB16_EXT),k===i.SHORT&&ce&&(J=ce.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),m===i.RGBA){const ee=oe?ys:$e.getTransfer($);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=ee===it?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ce&&(J=ce.RGBA16_EXT),k===i.SHORT&&ce&&(J=ce.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(A,m){let k;return A?m===null||m===dn||m===Ni?k=i.DEPTH24_STENCIL8:m===ln?k=i.DEPTH32F_STENCIL8:m===Ui&&(k=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===dn||m===Ni?k=i.DEPTH_COMPONENT24:m===ln?k=i.DEPTH_COMPONENT32F:m===Ui&&(k=i.DEPTH_COMPONENT16),k}function y(A,m){return u(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ct&&A.minFilter!==It?Math.log2(Math.max(m.width,m.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?m.mipmaps.length:1}function C(A){const m=A.target;m.removeEventListener("dispose",C),b(m),m.isVideoTexture&&d.delete(m),m.isHTMLTexture&&f.delete(m)}function _(A){const m=A.target;m.removeEventListener("dispose",_),U(m)}function b(A){const m=n.get(A);if(m.__webglInit===void 0)return;const k=A.source,W=g.get(k);if(W){const $=W[m.__cacheKey];$.usedTimes--,$.usedTimes===0&&L(A),Object.keys(W).length===0&&g.delete(k)}n.remove(A)}function L(A){const m=n.get(A);i.deleteTexture(m.__webglTexture);const k=A.source,W=g.get(k);delete W[m.__cacheKey],a.memory.textures--}function U(A){const m=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(m.__webglFramebuffer[W]))for(let $=0;$<m.__webglFramebuffer[W].length;$++)i.deleteFramebuffer(m.__webglFramebuffer[W][$]);else i.deleteFramebuffer(m.__webglFramebuffer[W]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[W])}else{if(Array.isArray(m.__webglFramebuffer))for(let W=0;W<m.__webglFramebuffer.length;W++)i.deleteFramebuffer(m.__webglFramebuffer[W]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let W=0;W<m.__webglColorRenderbuffer.length;W++)m.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[W]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const k=A.textures;for(let W=0,$=k.length;W<$;W++){const oe=n.get(k[W]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(A)}let O=0;function X(){O=0}function N(){return O}function z(A){O=A}function Q(){const A=O;return A>=s.maxTextures&&ke("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,A}function K(A){const m=[];return m.push(A.wrapS),m.push(A.wrapT),m.push(A.wrapR||0),m.push(A.magFilter),m.push(A.minFilter),m.push(A.anisotropy),m.push(A.internalFormat),m.push(A.format),m.push(A.type),m.push(A.generateMipmaps),m.push(A.premultiplyAlpha),m.push(A.flipY),m.push(A.unpackAlignment),m.push(A.colorSpace),m.join()}function se(A,m){const k=n.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const W=A.image;if(W===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(k,A,m);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+m)}function Z(A,m){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ae(k,A,m);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+m)}function R(A,m){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ae(k,A,m);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+m)}function T(A,m){const k=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){ye(k,A,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+m)}const te={[Sr]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[yr]:i.MIRRORED_REPEAT},ie={[Ct]:i.NEAREST,[Ql]:i.NEAREST_MIPMAP_NEAREST,[Hi]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[Os]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},be={[nc]:i.NEVER,[oc]:i.ALWAYS,[ic]:i.LESS,[ha]:i.LEQUAL,[sc]:i.EQUAL,[da]:i.GEQUAL,[rc]:i.GREATER,[ac]:i.NOTEQUAL};function _e(A,m){if(m.type===ln&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===It||m.magFilter===Os||m.magFilter===Hi||m.magFilter===Xn||m.minFilter===It||m.minFilter===Os||m.minFilter===Hi||m.minFilter===Xn)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,te[m.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,te[m.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,te[m.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ie[m.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ie[m.minFilter]),m.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,be[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Ct||m.minFilter!==Hi&&m.minFilter!==Xn||m.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Se(A,m){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,m.addEventListener("dispose",C));const W=m.source;let $=g.get(W);$===void 0&&($={},g.set(W,$));const oe=K(m);if(oe!==A.__cacheKey){$[oe]===void 0&&($[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[oe].usedTimes++;const ce=$[A.__cacheKey];ce!==void 0&&($[A.__cacheKey].usedTimes--,ce.usedTimes===0&&L(m)),A.__cacheKey=oe,A.__webglTexture=$[oe].texture}return k}function B(A,m,k){return Math.floor(Math.floor(A/k)/m)}function q(A,m,k,W){const oe=A.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,k,W,m.data);else{oe.sort((Ie,pe)=>Ie.start-pe.start);let ce=0;for(let Ie=1;Ie<oe.length;Ie++){const pe=oe[ce],de=oe[Ie],De=pe.start+pe.count,Ne=B(de.start,m.width,4),Ve=B(pe.start,m.width,4);de.start<=De+1&&Ne===Ve&&B(de.start+de.count-1,m.width,4)===Ne?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++ce,oe[ce]=de)}oe.length=ce+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let Ie=0,pe=oe.length;Ie<pe;Ie++){const de=oe[Ie],De=Math.floor(de.start/4),Ne=Math.ceil(de.count/4),Ve=De%m.width,D=Math.floor(De/m.width),ue=Ne,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ve,D,ue,j,k,W,m.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function ae(A,m,k){let W=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(W=i.TEXTURE_3D);const $=Se(A,m),oe=m.source;t.bindTexture(W,A.__webglTexture,i.TEXTURE0+k);const ce=n.get(oe);if(oe.version!==ce.__version||$===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){const j=$e.getPrimaries($e.workingColorSpace),fe=m.colorSpace===On?null:$e.getPrimaries(m.colorSpace),Me=m.colorSpace===On||j===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let ee=p(m.image,!1,s.maxTextureSize);ee=St(m,ee);const he=r.convert(m.format,m.colorSpace),Ie=r.convert(m.type);let pe=M(m.internalFormat,he,Ie,m.normalized,m.colorSpace,m.isVideoTexture);_e(W,m);let de;const De=m.mipmaps,Ne=m.isVideoTexture!==!0,Ve=ce.__version===void 0||$===!0,D=oe.dataReady,ue=y(m,ee);if(m.isDepthTexture)pe=S(m.format===qn,m.type),Ve&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,pe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,pe,ee.width,ee.height,0,he,Ie,null));else if(m.isDataTexture)if(De.length>0){Ne&&Ve&&t.texStorage2D(i.TEXTURE_2D,ue,pe,De[0].width,De[0].height);for(let j=0,fe=De.length;j<fe;j++)de=De[j],Ne?D&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,de.width,de.height,he,Ie,de.data):t.texImage2D(i.TEXTURE_2D,j,pe,de.width,de.height,0,he,Ie,de.data);m.generateMipmaps=!1}else Ne?(Ve&&t.texStorage2D(i.TEXTURE_2D,ue,pe,ee.width,ee.height),D&&q(m,ee,he,Ie)):t.texImage2D(i.TEXTURE_2D,0,pe,ee.width,ee.height,0,he,Ie,ee.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ne&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,pe,De[0].width,De[0].height,ee.depth);for(let j=0,fe=De.length;j<fe;j++)if(de=De[j],m.format!==en)if(he!==null)if(Ne){if(D)if(m.layerUpdates.size>0){const Me=co(de.width,de.height,m.format,m.type);for(const ne of m.layerUpdates){const Fe=de.data.subarray(ne*Me/de.data.BYTES_PER_ELEMENT,(ne+1)*Me/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ne,de.width,de.height,1,he,Fe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,ee.depth,he,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,pe,de.width,de.height,ee.depth,0,de.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,ee.depth,he,Ie,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,pe,de.width,de.height,ee.depth,0,he,Ie,de.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Ne&&Ve&&t.texStorage2D(i.TEXTURE_2D,ue,pe,De[0].width,De[0].height);for(let j=0,fe=De.length;j<fe;j++)de=De[j],m.format!==en?he!==null?Ne?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(i.TEXTURE_2D,j,pe,de.width,de.height,0,de.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?D&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,de.width,de.height,he,Ie,de.data):t.texImage2D(i.TEXTURE_2D,j,pe,de.width,de.height,0,he,Ie,de.data)}else if(m.isDataArrayTexture)if(Ne){if(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,pe,ee.width,ee.height,ee.depth),D)if(m.layerUpdates.size>0){const j=co(ee.width,ee.height,m.format,m.type);for(const fe of m.layerUpdates){const Me=ee.data.subarray(fe*j/ee.data.BYTES_PER_ELEMENT,(fe+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,ee.width,ee.height,1,he,Ie,Me)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,Ie,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,ee.width,ee.height,ee.depth,0,he,Ie,ee.data);else if(m.isData3DTexture)Ne?(Ve&&t.texStorage3D(i.TEXTURE_3D,ue,pe,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,Ie,ee.data)):t.texImage3D(i.TEXTURE_3D,0,pe,ee.width,ee.height,ee.depth,0,he,Ie,ee.data);else if(m.isFramebufferTexture){if(Ve)if(Ne)t.texStorage2D(i.TEXTURE_2D,ue,pe,ee.width,ee.height);else{let j=ee.width,fe=ee.height;for(let Me=0;Me<ue;Me++)t.texImage2D(i.TEXTURE_2D,Me,pe,j,fe,0,he,Ie,null),j>>=1,fe>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ee.parentNode!==j){j.appendChild(ee),f.add(m),j.onpaint=fe=>{const Me=fe.changedElements;for(const ne of f)Me.includes(ne.image)&&(ne.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{const Me=i.RGBA,ne=i.RGBA,Fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Me,ne,Fe,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ne&&Ve){const j=et(De[0]);t.texStorage2D(i.TEXTURE_2D,ue,pe,j.width,j.height)}for(let j=0,fe=De.length;j<fe;j++)de=De[j],Ne?D&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,he,Ie,de):t.texImage2D(i.TEXTURE_2D,j,pe,he,Ie,de);m.generateMipmaps=!1}else if(Ne){if(Ve){const j=et(ee);t.texStorage2D(i.TEXTURE_2D,ue,pe,j.width,j.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Ie,ee)}else t.texImage2D(i.TEXTURE_2D,0,pe,he,Ie,ee);u(m)&&w(W),ce.__version=oe.version,m.onUpdate&&m.onUpdate(m)}A.__version=m.version}function ye(A,m,k){if(m.image.length!==6)return;const W=Se(A,m),$=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const oe=n.get($);if($.version!==oe.__version||W===!0){t.activeTexture(i.TEXTURE0+k);const ce=$e.getPrimaries($e.workingColorSpace),J=m.colorSpace===On?null:$e.getPrimaries(m.colorSpace),ee=m.colorSpace===On||ce===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const he=m.isCompressedTexture||m.image[0].isCompressedTexture,Ie=m.image[0]&&m.image[0].isDataTexture,pe=[];for(let ne=0;ne<6;ne++)!he&&!Ie?pe[ne]=p(m.image[ne],!0,s.maxCubemapSize):pe[ne]=Ie?m.image[ne].image:m.image[ne],pe[ne]=St(m,pe[ne]);const de=pe[0],De=r.convert(m.format,m.colorSpace),Ne=r.convert(m.type),Ve=M(m.internalFormat,De,Ne,m.normalized,m.colorSpace),D=m.isVideoTexture!==!0,ue=oe.__version===void 0||W===!0,j=$.dataReady;let fe=y(m,de);_e(i.TEXTURE_CUBE_MAP,m);let Me;if(he){D&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ve,de.width,de.height);for(let ne=0;ne<6;ne++){Me=pe[ne].mipmaps;for(let Fe=0;Fe<Me.length;Fe++){const Re=Me[Fe];m.format!==en?De!==null?D?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,0,0,Re.width,Re.height,De,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,Ve,Re.width,Re.height,0,Re.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,0,0,Re.width,Re.height,De,Ne,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,Ve,Re.width,Re.height,0,De,Ne,Re.data)}}}else{if(Me=m.mipmaps,D&&ue){Me.length>0&&fe++;const ne=et(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ve,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ie){D?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,pe[ne].width,pe[ne].height,De,Ne,pe[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,pe[ne].width,pe[ne].height,0,De,Ne,pe[ne].data);for(let Fe=0;Fe<Me.length;Fe++){const ot=Me[Fe].image[ne].image;D?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,0,0,ot.width,ot.height,De,Ne,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,Ve,ot.width,ot.height,0,De,Ne,ot.data)}}else{D?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,De,Ne,pe[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,De,Ne,pe[ne]);for(let Fe=0;Fe<Me.length;Fe++){const Re=Me[Fe];D?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,0,0,De,Ne,Re.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,Ve,De,Ne,Re.image[ne])}}}u(m)&&w(i.TEXTURE_CUBE_MAP),oe.__version=$.version,m.onUpdate&&m.onUpdate(m)}A.__version=m.version}function re(A,m,k,W,$,oe){const ce=r.convert(k.format,k.colorSpace),J=r.convert(k.type),ee=M(k.internalFormat,ce,J,k.normalized,k.colorSpace),he=n.get(m),Ie=n.get(k);if(Ie.__renderTarget=m,!he.__hasExternalTextures){const pe=Math.max(1,m.width>>oe),de=Math.max(1,m.height>>oe);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,oe,ee,pe,de,m.depth,0,ce,J,null):t.texImage2D($,oe,ee,pe,de,0,ce,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),mt(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,$,Ie.__webglTexture,0,ht(m)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,$,Ie.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(A,m,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),m.depthBuffer){const W=m.depthTexture,$=W&&W.isDepthTexture?W.type:null,oe=S(m.stencilBuffer,$),ce=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(m),oe,m.width,m.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(m),oe,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,oe,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,A)}else{const W=m.textures;for(let $=0;$<W.length;$++){const oe=W[$],ce=r.convert(oe.format,oe.colorSpace),J=r.convert(oe.type),ee=M(oe.internalFormat,ce,J,oe.normalized,oe.colorSpace);mt(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(m),ee,m.width,m.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(m),ee,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,ee,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ye(A,m,k){const W=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(m.depthTexture);if($.__renderTarget=m,(!$.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,m.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),_e(i.TEXTURE_CUBE_MAP,m.depthTexture);const he=r.convert(m.depthTexture.format),Ie=r.convert(m.depthTexture.type);let pe;m.depthTexture.format===wn?pe=i.DEPTH_COMPONENT24:m.depthTexture.format===qn&&(pe=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,m.width,m.height,0,he,Ie,null)}}else se(m.depthTexture,0);const oe=$.__webglTexture,ce=ht(m),J=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ee=m.depthTexture.format===qn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===wn)mt(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,oe,0);else if(m.depthTexture.format===qn)mt(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ve(A){const m=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==A.depthTexture){const W=A.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),W){const $=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),m.__depthDisposeCallback=$}m.__boundDepthTexture=W}if(A.depthTexture&&!m.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Ye(m.__webglFramebuffer[W],A,W);else{const W=A.texture.mipmaps;W&&W.length>0?Ye(m.__webglFramebuffer[0],A,0):Ye(m.__webglFramebuffer,A,0)}else if(k){m.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[W]),m.__webglDepthbuffer[W]===void 0)m.__webglDepthbuffer[W]=i.createRenderbuffer(),Ce(m.__webglDepthbuffer[W],A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=m.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,oe)}}else{const W=A.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),Ce(m.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(A,m,k){const W=n.get(A);m!==void 0&&re(W.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ve(A)}function qe(A){const m=A.texture,k=n.get(A),W=n.get(m);A.addEventListener("dispose",_);const $=A.textures,oe=A.isWebGLCubeRenderTarget===!0,ce=$.length>1;if(ce||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=m.version,a.memory.textures++),oe){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(m.mipmaps&&m.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let ee=0;ee<m.mipmaps.length;ee++)k.__webglFramebuffer[J][ee]=i.createFramebuffer()}else k.__webglFramebuffer[J]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<m.mipmaps.length;J++)k.__webglFramebuffer[J]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ce)for(let J=0,ee=$.length;J<ee;J++){const he=n.get($[J]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&mt(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){const ee=$[J];k.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[J]);const he=r.convert(ee.format,ee.colorSpace),Ie=r.convert(ee.type),pe=M(ee.internalFormat,he,Ie,ee.normalized,ee.colorSpace,A.isXRRenderTarget===!0),de=ht(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,pe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,k.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),_e(i.TEXTURE_CUBE_MAP,m);for(let J=0;J<6;J++)if(m.mipmaps&&m.mipmaps.length>0)for(let ee=0;ee<m.mipmaps.length;ee++)re(k.__webglFramebuffer[J][ee],A,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else re(k.__webglFramebuffer[J],A,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);u(m)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let J=0,ee=$.length;J<ee;J++){const he=$[J],Ie=n.get(he);let pe=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Ie.__webglTexture),_e(pe,he),re(k.__webglFramebuffer,A,he,i.COLOR_ATTACHMENT0+J,pe,0),u(he)&&w(pe)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,W.__webglTexture),_e(J,m),m.mipmaps&&m.mipmaps.length>0)for(let ee=0;ee<m.mipmaps.length;ee++)re(k.__webglFramebuffer[ee],A,m,i.COLOR_ATTACHMENT0,J,ee);else re(k.__webglFramebuffer,A,m,i.COLOR_ATTACHMENT0,J,0);u(m)&&w(J),t.unbindTexture()}A.depthBuffer&&ve(A)}function Oe(A){const m=A.textures;for(let k=0,W=m.length;k<W;k++){const $=m[k];if(u($)){const oe=P(A),ce=n.get($).__webglTexture;t.bindTexture(oe,ce),w(oe),t.unbindTexture()}}}const Je=[],at=[];function ct(A){if(A.samples>0){if(mt(A)===!1){const m=A.textures,k=A.width,W=A.height;let $=i.COLOR_BUFFER_BIT;const oe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(A),J=m.length>1;if(J)for(let he=0;he<m.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const ee=A.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<m.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Ie=n.get(m[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,k,W,0,0,k,W,$,i.NEAREST),l===!0&&(Je.length=0,at.length=0,Je.push(i.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Je.push(oe),at.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,at)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let he=0;he<m.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Ie=n.get(m[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const m=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function ht(A){return Math.min(s.maxSamples,A.samples)}function mt(A){const m=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function F(A){const m=a.render.frame;d.get(A)!==m&&(d.set(A,m),A.update())}function St(A,m){const k=A.colorSpace,W=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Ss&&k!==On&&($e.getTransfer(k)===it?(W!==en||$!==Vt)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",k)),m}function et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=X,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=se,this.setTexture2DArray=Z,this.setTexture3D=R,this.setTextureCube=T,this.rebindTextures=Be,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=re,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Hp(i,e){function t(n,s=On){let r;const a=$e.getTransfer(s);if(n===Vt)return i.UNSIGNED_BYTE;if(n===ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wo)return i.BYTE;if(n===Xo)return i.SHORT;if(n===Ui)return i.UNSIGNED_SHORT;if(n===sa)return i.INT;if(n===dn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===Ko)return i.ALPHA;if(n===$o)return i.RGB;if(n===en)return i.RGBA;if(n===wn)return i.DEPTH_COMPONENT;if(n===qn)return i.DEPTH_STENCIL;if(n===Zo)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===$n)return i.RG;if(n===la)return i.RG_INTEGER;if(n===ca)return i.RGBA_INTEGER;if(n===us||n===fs||n===ps||n===ms)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ps)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ms)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Er||n===br||n===wr||n===Tr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===br)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ar||n===Cr||n===Rr||n===Pr||n===Lr||n===xs||n===Ir)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ar||n===Cr)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pr)return r.COMPRESSED_R11_EAC;if(n===Lr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xs)return r.COMPRESSED_RG11_EAC;if(n===Ir)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dr||n===Fr||n===Ur||n===Nr||n===Or||n===Br||n===kr||n===Gr||n===zr||n===Vr||n===Hr||n===Wr||n===Xr||n===qr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ur)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Or)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Br)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qr)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yr||n===Kr||n===$r)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yr)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$r)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zr||n===Jr||n===vs||n===Qr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Wp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new sl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fn({vertexShader:Wp,fragmentShader:Xp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new An(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yp extends Zn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,g=null,v=null;const E=typeof XRWebGLBinding<"u",p=new qp,u={},w=t.getContextAttributes();let P=null,M=null;const S=[],y=[],C=new Xe;let _=null,b=null;const L=new zt;L.viewport=new pt;const U=new zt;U.viewport=new pt;const O=[L,U],X=new eh;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let q=S[B];return q===void 0&&(q=new qs,S[B]=q),q.getTargetRaySpace()},this.getControllerGrip=function(B){let q=S[B];return q===void 0&&(q=new qs,S[B]=q),q.getGripSpace()},this.getHand=function(B){let q=S[B];return q===void 0&&(q=new qs,S[B]=q),q.getHandSpace()};function Q(B){const q=y.indexOf(B.inputSource);if(q===-1)return;const ae=S[q];ae!==void 0&&(ae.update(B.inputSource,B.frame,c||a),ae.dispatchEvent({type:B.type,data:B.inputSource}))}function K(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",se);for(let B=0;B<S.length;B++){const q=y[B];q!==null&&(y[B]=null,S[B].disconnect(q))}N=null,z=null,p.reset();for(const B in u)delete u[B];if(e.setRenderTarget(P),g=null,h=null,f=null,s=null,M=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),b!==null){const B=b.camera;B.fov=b.fov,B.zoom=b.zoom,B.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",K),s.addEventListener("inputsourceschange",se),w.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ye=null,re=null;w.depth&&(re=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=w.stencil?qn:wn,ye=w.stencil?Ni:dn);const Ce={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ce),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new tn(h.textureWidth,h.textureHeight,{format:en,type:Vt,depthTexture:new Bi(h.textureWidth,h.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new tn(g.framebufferWidth,g.framebufferHeight,{format:en,type:Vt,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function se(B){for(let q=0;q<B.removed.length;q++){const ae=B.removed[q],ye=y.indexOf(ae);ye>=0&&(y[ye]=null,S[ye].disconnect(ae))}for(let q=0;q<B.added.length;q++){const ae=B.added[q];let ye=y.indexOf(ae);if(ye===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=y.length){y.push(ae),ye=Ce;break}else if(y[Ce]===null){y[Ce]=ae,ye=Ce;break}if(ye===-1)break}const re=S[ye];re&&re.connect(ae)}}const Z=new G,R=new G;function T(B,q,ae){Z.setFromMatrixPosition(q.matrixWorld),R.setFromMatrixPosition(ae.matrixWorld);const ye=Z.distanceTo(R),re=q.projectionMatrix.elements,Ce=ae.projectionMatrix.elements,Ye=re[14]/(re[10]-1),ve=re[14]/(re[10]+1),Be=(re[9]+1)/re[5],qe=(re[9]-1)/re[5],Oe=(re[8]-1)/re[0],Je=(Ce[8]+1)/Ce[0],at=Ye*Oe,ct=Ye*Je,ht=ye/(-Oe+Je),mt=ht*-Oe;if(q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(mt),B.translateZ(ht),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),re[10]===-1)B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const F=Ye+ht,St=ve+ht,et=at-mt,A=ct+(ye-mt),m=Be*ve/St*F,k=qe*ve/St*F;B.projectionMatrix.makePerspective(et,A,m,k,F,St),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function te(B,q){q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let q=B.near,ae=B.far;p.texture!==null&&(p.depthNear>0&&(q=p.depthNear),p.depthFar>0&&(ae=p.depthFar)),X.near=U.near=L.near=q,X.far=U.far=L.far=ae,(N!==X.near||z!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),N=X.near,z=X.far),X.layers.mask=B.layers.mask|6,L.layers.mask=X.layers.mask&-5,U.layers.mask=X.layers.mask&-3;const ye=B.parent,re=X.cameras;te(X,ye);for(let Ce=0;Ce<re.length;Ce++)te(re[Ce],ye);re.length===2?T(X,L,U):X.projectionMatrix.copy(L.projectionMatrix),b===null&&B.isPerspectiveCamera&&(b={camera:B,fov:B.fov,zoom:B.zoom}),ie(B,X,ye)};function ie(B,q,ae){ae===null?B.matrix.copy(q.matrixWorld):(B.matrix.copy(ae.matrixWorld),B.matrix.invert(),B.matrix.multiply(q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=bs*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=B)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(X)},this.getCameraTexture=function(B){return u[B]};let be=null;function _e(B,q){if(d=q.getViewerPose(c||a),v=q,d!==null){const ae=d.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let ye=!1;ae.length!==X.cameras.length&&(X.cameras.length=0,ye=!0);for(let ve=0;ve<ae.length;ve++){const Be=ae[ve];let qe=null;if(g!==null)qe=g.getViewport(Be);else{const Je=f.getViewSubImage(h,Be);qe=Je.viewport,ve===0&&(e.setRenderTargetTextures(M,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(M))}let Oe=O[ve];Oe===void 0&&(Oe=new zt,Oe.layers.enable(ve),Oe.viewport=new pt,O[ve]=Oe),Oe.matrix.fromArray(Be.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Be.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(qe.x,qe.y,qe.width,qe.height),ve===0&&(X.matrix.copy(Oe.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ye===!0&&X.cameras.push(Oe)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){f=n.getBinding();const ve=f.getDepthInformation(ae[0]);ve&&ve.isValid&&ve.texture&&p.init(ve,s.renderState)}if(re&&re.includes("camera-access")&&E){e.state.unbindTexture(),f=n.getBinding();for(let ve=0;ve<ae.length;ve++){const Be=ae[ve].camera;if(Be){let qe=u[Be];qe||(qe=new sl,u[Be]=qe);const Oe=f.getCameraImage(Be);qe.sourceTexture=Oe}}}}for(let ae=0;ae<S.length;ae++){const ye=y[ae],re=S[ae];ye!==null&&re!==void 0&&re.update(ye,q,c||a)}be&&be(B,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),v=null}const Se=new ll;Se.setAnimationLoop(_e),this.setAnimationLoop=function(B){be=B},this.dispose=function(){}}}const Kp=new gt,ml=new ze;ml.set(-1,0,0,0,1,0,0,0,1);function $p(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,rl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,w,P,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(p,u):u.isMeshLambertMaterial?(r(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),d(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(p,u),h(p,u),u.isMeshPhysicalMaterial&&g(p,u,M)):u.isMeshMatcapMaterial?(r(p,u),v(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),E(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,w,P):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Bt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Bt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const w=e.get(u),P=w.envMap,M=w.envMapRotation;P&&(p.envMap.value=P,p.envMapRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(M)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ml),p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,w,P){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*w,p.scale.value=P*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,w){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Bt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.retroreflectivity>0&&(p.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function E(p,u){const w=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zp(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const y=S.program;n.uniformBlockBinding(M,y)}function c(M,S){let y=s[M.id];y===void 0&&(p(M),y=d(M),s[M.id]=y,M.addEventListener("dispose",w));const C=S.program;n.updateUBOMapping(M,C);const _=e.render.frame;r[M.id]!==_&&(h(M),r[M.id]=_)}function d(M){const S=f();M.__bindingPointIndex=S;const y=i.createBuffer(),C=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const S=s[M.id],y=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,b=y.length;_<b;_++){const L=y[_];if(Array.isArray(L))for(let U=0,O=L.length;U<O;U++)g(L[U],_,U,C);else g(L,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(M,S,y,C){if(E(M,S,y,C)===!0){const _=M.__offset,b=M.value;if(Array.isArray(b)){let L=0;for(let U=0;U<b.length;U++){const O=b[U],X=u(O);v(O,M.__data,L),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(b,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function v(M,S,y){typeof M=="number"||typeof M=="boolean"?S[0]=M:M.isMatrix3?(S[0]=M.elements[0],S[1]=M.elements[1],S[2]=M.elements[2],S[3]=0,S[4]=M.elements[3],S[5]=M.elements[4],S[6]=M.elements[5],S[7]=0,S[8]=M.elements[6],S[9]=M.elements[7],S[10]=M.elements[8],S[11]=0):ArrayBuffer.isView(M)?S.set(new M.constructor(M.buffer,M.byteOffset,S.length)):M.toArray(S,y)}function E(M,S,y,C){const _=M.value,b=S+"_"+y;if(C[b]===void 0)return typeof _=="number"||typeof _=="boolean"?C[b]=_:ArrayBuffer.isView(_)?C[b]=_.slice():C[b]=_.clone(),!0;{const L=C[b];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return C[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function p(M){const S=M.uniforms;let y=0;const C=16;for(let b=0,L=S.length;b<L;b++){const U=Array.isArray(S[b])?S[b]:[S[b]];for(let O=0,X=U.length;O<X;O++){const N=U[O],z=Array.isArray(N.value)?N.value:[N.value];for(let Q=0,K=z.length;Q<K;Q++){const se=z[Q],Z=u(se),R=y%C,T=R%Z.boundary,te=R+T;y+=T,te!==0&&C-te<Z.storage&&(y+=C-te),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=Z.storage}}}const _=y%C;return _>0&&(y+=C-_),M.__size=y,M.__cache={},this}function u(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",M),S}function w(M){const S=M.target;S.removeEventListener("dispose",w);const y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function P(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}const Jp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let an=null;function Qp(){return an===null&&(an=new Nc(Jp,16,16,$n,un),an.name="DFG_LUT",an.minFilter=It,an.magFilter=It,an.wrapS=Sn,an.wrapT=Sn,an.generateMipmaps=!1,an.needsUpdate=!0),an}class jp{constructor(e={}){const{canvas:t=hc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:g=Vt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const E=g,p=new Set([ca,la,oa]),u=new Set([Vt,dn,Ui,Ni,ra,aa]),w=new Uint32Array(4),P=new Int32Array(4),M=new G;let S=null,y=null;const C=[],_=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,O=null,X=null,N=null,z=null;this._outputColorSpace=Xt;let Q=0,K=0,se=null,Z=-1,R=null;const T=new pt,te=new pt;let ie=null;const be=new Pe(0);let _e=0,Se=t.width,B=t.height,q=1,ae=null,ye=null;const re=new pt(0,0,Se,B),Ce=new pt(0,0,Se,B);let Ye=!1;const ve=new ma;let Be=!1,qe=!1;const Oe=new gt,Je=new G,at=new pt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function mt(){return se===null?q:1}let F=n;function St(x,I){return t.getContext(x,I)}let et,A,m,k,W,$,oe,ce,J,ee,he,Ie,pe,de,De,Ne,Ve,D,ue,j,fe,Me,ne;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${na}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Kt,!1),F===null){const I="webgl2";if(F=St(I,x),F===null)throw St(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(x){throw t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),je("WebGLRenderer: "+x.message),x}function Fe(){et=new Ju(F),et.init(),fe=new Hp(F,et),A=new zu(F,et,e,fe),m=new zp(F,et),A.reversedDepthBuffer&&h&&m.buffers.depth.setReversed(!0),X=F.createFramebuffer(),N=F.createFramebuffer(),z=F.createFramebuffer(),k=new ef(F),W=new Ap,$=new Vp(F,et,m,W,A,fe,k),oe=new Zu(L),ce=new nh(F),Me=new ku(F,ce),J=new Qu(F,ce,k,Me),ee=new nf(F,J,ce,Me,k),D=new tf(F,A,$),De=new Vu(W),he=new Tp(L,oe,et,A,Me,De),Ie=new $p(L,W),pe=new Rp,de=new Up(et),Ve=new Bu(L,oe,m,ee,v,l),Ne=new Gp(L,ee,A),ne=new Zp(F,k,A,m),ue=new Gu(F,et,k),j=new ju(F,et,k),k.programs=he.programs,L.capabilities=A,L.extensions=et,L.properties=W,L.renderLists=pe,L.shadowMap=Ne,L.state=m,L.info=k}E!==Vt&&(b=new rf(E,t.width,t.height,o,s,r));const Re=new Yp(L,F);this.xr=Re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const x=et.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=et.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(x){x!==void 0&&(q=x,this.setSize(Se,B,!1))},this.getSize=function(x){return x.set(Se,B)},this.setSize=function(x,I,Y=!0){if(Re.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=x,B=I,t.width=Math.floor(x*q),t.height=Math.floor(I*q),Y===!0&&(t.style.width=x+"px",t.style.height=I+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(Se*q,B*q).floor()},this.setDrawingBufferSize=function(x,I,Y){Se=x,B=I,q=Y,t.width=Math.floor(x*Y),t.height=Math.floor(I*Y),this.setViewport(0,0,x,I)},this.setEffects=function(x){if(E===Vt){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let I=0;I<x.length;I++)if(x[I].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(T)},this.getViewport=function(x){return x.copy(re)},this.setViewport=function(x,I,Y,V){x.isVector4?re.set(x.x,x.y,x.z,x.w):re.set(x,I,Y,V),m.viewport(T.copy(re).multiplyScalar(q).round())},this.getScissor=function(x){return x.copy(Ce)},this.setScissor=function(x,I,Y,V){x.isVector4?Ce.set(x.x,x.y,x.z,x.w):Ce.set(x,I,Y,V),m.scissor(te.copy(Ce).multiplyScalar(q).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(x){m.setScissorTest(Ye=x)},this.setOpaqueSort=function(x){ae=x},this.setTransparentSort=function(x){ye=x},this.getClearColor=function(x){return x.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,Y=!0){let V=0;if(x){let H=!1;if(se!==null){const xe=se.texture.format;H=p.has(xe)}if(H){const xe=se.texture.type,we=u.has(xe),ge=Ve.getClearColor(),Te=Ve.getClearAlpha(),Le=ge.r,He=ge.g,Ke=ge.b;we?(w[0]=Le,w[1]=He,w[2]=Ke,w[3]=Te,F.clearBufferuiv(F.COLOR,0,w)):(P[0]=Le,P[1]=He,P[2]=Ke,P[3]=Te,F.clearBufferiv(F.COLOR,0,P))}else V|=F.COLOR_BUFFER_BIT}I&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),Ve.dispose(),pe.dispose(),de.dispose(),W.dispose(),oe.dispose(),ee.dispose(),Me.dispose(),ne.dispose(),he.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Ta),Re.removeEventListener("sessionend",Aa),Bn.stop()};function ot(x){x.preventDefault(),Va("WebGLRenderer: Context Lost."),U=!0}function tt(){Va("WebGLRenderer: Context Restored."),U=!1;const x=k.autoReset,I=Ne.enabled,Y=Ne.autoUpdate,V=Ne.needsUpdate,H=Ne.type;Fe(),k.autoReset=x,Ne.enabled=I,Ne.autoUpdate=Y,Ne.needsUpdate=V,Ne.type=H}function Kt(x){je("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function nn(x){const I=x.target;I.removeEventListener("dispose",nn),_l(I)}function _l(x){xl(x),W.remove(x)}function xl(x){const I=W.get(x).programs;I!==void 0&&(I.forEach(function(Y){he.releaseProgram(Y)}),x.isShaderMaterial&&he.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,Y,V,H,xe){I===null&&(I=ct);const we=H.isMesh&&H.matrixWorld.determinantAffine()<0,ge=Sl(x,I,Y,V,H);m.setMaterial(V,we);let Te=Y.index,Le=1;if(V.wireframe===!0){if(Te=J.getWireframeAttribute(Y),Te===void 0)return;Le=2}const He=Y.drawRange,Ke=Y.attributes.position;let Ae=He.start*Le,nt=(He.start+He.count)*Le;xe!==null&&(Ae=Math.max(Ae,xe.start*Le),nt=Math.min(nt,(xe.start+xe.count)*Le)),Te!==null?(Ae=Math.max(Ae,0),nt=Math.min(nt,Te.count)):Ke!=null&&(Ae=Math.max(Ae,0),nt=Math.min(nt,Ke.count));const xt=nt-Ae;if(xt<0||xt===1/0)return;Me.setup(H,V,ge,Y,Te);let dt,rt=ue;if(Te!==null&&(dt=ce.get(Te),rt=j,rt.setIndex(dt)),H.isMesh)V.wireframe===!0?(m.setLineWidth(V.wireframeLinewidth*mt()),rt.setMode(F.LINES)):rt.setMode(F.TRIANGLES);else if(H.isLine){let Rt=V.linewidth;Rt===void 0&&(Rt=1),m.setLineWidth(Rt*mt()),H.isLineSegments?rt.setMode(F.LINES):H.isLineLoop?rt.setMode(F.LINE_LOOP):rt.setMode(F.LINE_STRIP)}else H.isPoints?rt.setMode(F.POINTS):H.isSprite&&rt.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(et.get("WEBGL_multi_draw"))rt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Rt=H._multiDrawStarts,Ee=H._multiDrawCounts,Ft=H._multiDrawCount,Qe=Te?ce.get(Te).bytesPerElement:1,Ht=W.get(V).currentProgram.getUniforms();for(let sn=0;sn<Ft;sn++)Ht.setValue(F,"_gl_DrawID",sn),rt.render(Rt[sn]/Qe,Ee[sn])}else if(H.isInstancedMesh)rt.renderInstances(Ae,xt,H.count);else if(Y.isInstancedBufferGeometry){const Rt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ee=Math.min(Y.instanceCount,Rt);rt.renderInstances(Ae,xt,Ee)}else rt.render(Ae,xt)};function wa(x,I,Y,V){O!==null&&x.isNodeMaterial&&O.setObject(V,x),Be===!0&&De.setState(x,Y,!1),x.transparent===!0&&x.side===Mn&&x.forceSinglePass===!1?(x.side=Bt,x.needsUpdate=!0,Vi(x,I,V),x.side=Yn,x.needsUpdate=!0,Vi(x,I,V),x.side=Mn):Vi(x,I,V)}this.compile=function(x,I,Y=null){Y===null&&(Y=x),O!==null&&O.renderStart(x,I,Y),y=de.get(Y),y.init(I),_.push(y),Y.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),x!==Y&&x.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),y.setupLights(),O!==null&&O.updateLights(y.state.lightsArray),qe=this.localClippingEnabled,Be=De.init(this.clippingPlanes,qe),Be===!0&&De.setGlobalState(this.clippingPlanes,I),O!==null&&Ne.render(y.state.shadowsArray,Y,I);const V=new Set;return x.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const xe=H.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){const ge=xe[we];wa(ge,Y,I,H),V.add(ge)}else wa(xe,Y,I,H),V.add(xe)}),y=_.pop(),O!==null&&O.renderEnd(),V},this.compileAsync=function(x,I,Y=null){const V=this.compile(x,I,Y);return new Promise(H=>{function xe(){if(V.forEach(function(we){const Te=W.get(we).currentProgram;(Te===void 0||Te.isReady())&&V.delete(we)}),V.size===0){H(x);return}setTimeout(xe,10)}et.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ps=null;function vl(x){Ps&&Ps(x)}function Ta(){Bn.stop()}function Aa(){Bn.start()}const Bn=new ll;Bn.setAnimationLoop(vl),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(x){Ps=x,Re.setAnimationLoop(x),x===null?Bn.stop():Bn.start()},Re.addEventListener("sessionstart",Ta),Re.addEventListener("sessionend",Aa),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(x,I);const Y=Re.enabled===!0&&Re.isPresenting===!0,V=b!==null&&(se===null||Y)&&b.begin(L,se);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(I),I=Re.getCamera()),x.isScene===!0&&x.onBeforeRender(L,x,I,se),y=de.get(x,_.length),y.init(I),y.state.textureUnits=$.getTextureUnits(),_.push(y),Oe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ve.setFromProjectionMatrix(Oe,cn,I.reversedDepth),qe=this.localClippingEnabled,Be=De.init(this.clippingPlanes,qe),S=pe.get(x,C.length),S.init(),C.push(S),Re.enabled===!0&&Re.isPresenting===!0){const we=L.xr.getDepthSensingMesh();we!==null&&Ls(we,I,-1/0,L.sortObjects)}Ls(x,I,0,L.sortObjects),S.finish(),O!==null&&O.updateLights(y.state.lightsArray),L.sortObjects===!0&&S.sort(ae,ye),ht=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ht&&Ve.addToRenderList(S,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&De.beginShadows();const H=y.state.shadowsArray;if(Ne.render(H,x,I),Be===!0&&De.endShadows(),(V&&b.hasRenderPass())===!1){const we=S.opaque,ge=S.transmissive;if(y.setupLights(),I.isArrayCamera){const Te=I.cameras;if(ge.length>0)for(let Le=0,He=Te.length;Le<He;Le++){const Ke=Te[Le];Ra(we,ge,x,Ke)}ht&&Ve.render(x);for(let Le=0,He=Te.length;Le<He;Le++){const Ke=Te[Le];Ca(S,x,Ke,Ke.viewport)}}else ge.length>0&&Ra(we,ge,x,I),ht&&Ve.render(x),Ca(S,x,I)}se!==null&&K===0&&($.updateMultisampleRenderTarget(se),$.updateRenderTargetMipmap(se)),V&&b.end(L),x.isScene===!0&&x.onAfterRender(L,x,I),Me.resetDefaultState(),Z=-1,R=null,_.pop(),_.length>0?(y=_[_.length-1],$.setTextureUnits(y.state.textureUnits),Be===!0&&De.setGlobalState(L.clippingPlanes,y.state.camera)):y=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,O!==null&&O.renderEnd()};function Ls(x,I,Y,V){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)Y=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLightProbeGrid)y.pushLightProbeGrid(x);else if(x.isLight)y.pushLight(x),x.castShadow&&y.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(ve)){V&&at.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Oe);const we=ee.update(x),ge=x.material;ge.visible&&S.push(x,we,ge,Y,at.z,null,I)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(ve))){const we=ee.update(x),ge=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),at.copy(x.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),at.copy(we.boundingSphere.center)),at.applyMatrix4(x.matrixWorld).applyMatrix4(Oe)),Array.isArray(ge)){const Te=we.groups;for(let Le=0,He=Te.length;Le<He;Le++){const Ke=Te[Le],Ae=ge[Ke.materialIndex];Ae&&Ae.visible&&S.push(x,we,Ae,Y,at.z,Ke,I)}}else ge.visible&&S.push(x,we,ge,Y,at.z,null,I)}}const xe=x.children;for(let we=0,ge=xe.length;we<ge;we++)Ls(xe[we],I,Y,V)}function Ca(x,I,Y,V){const{opaque:H,transmissive:xe,transparent:we}=x;y.setupLightsView(Y),Be===!0&&De.setGlobalState(L.clippingPlanes,Y),V&&m.viewport(T.copy(V)),H.length>0&&zi(H,I,Y),xe.length>0&&zi(xe,I,Y),we.length>0&&zi(we,I,Y),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Ra(x,I,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[V.id]===void 0){const Ae=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[V.id]=new tn(1,1,{generateMipmaps:!0,type:Ae?un:Vt,minFilter:Xn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const xe=y.state.transmissionRenderTarget[V.id],we=V.viewport||T;xe.setSize(we.z*L.transmissionResolutionScale,we.w*L.transmissionResolutionScale);const ge=L.getRenderTarget(),Te=L.getActiveCubeFace(),Le=L.getActiveMipmapLevel();L.setRenderTarget(xe),L.getClearColor(be),_e=L.getClearAlpha(),_e<1&&L.setClearColor(16777215,.5),L.clear(),ht&&Ve.render(Y);const He=L.toneMapping;L.toneMapping=hn;const Ke=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),y.setupLightsView(V),Be===!0&&De.setGlobalState(L.clippingPlanes,V),zi(x,Y,V),$.updateMultisampleRenderTarget(xe),$.updateRenderTargetMipmap(xe),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let nt=0,xt=I.length;nt<xt;nt++){const dt=I[nt],{object:rt,geometry:Rt,material:Ee,group:Ft}=dt;if(Ee.side===Mn&&rt.layers.test(V.layers)){const Qe=Ee.side;Ee.side=Bt,Ee.needsUpdate=!0,Pa(rt,Y,V,Rt,Ee,Ft),Ee.side=Qe,Ee.needsUpdate=!0,Ae=!0}}Ae===!0&&($.updateMultisampleRenderTarget(xe),$.updateRenderTargetMipmap(xe))}L.setRenderTarget(ge,Te,Le),L.setClearColor(be,_e),Ke!==void 0&&(V.viewport=Ke),L.toneMapping=He}function zi(x,I,Y){const V=I.isScene===!0?I.overrideMaterial:null;for(let H=0,xe=x.length;H<xe;H++){const we=x[H],{object:ge,geometry:Te,group:Le}=we;let He=we.material;He.allowOverride===!0&&V!==null&&(He=V),ge.layers.test(Y.layers)&&Pa(ge,I,Y,Te,He,Le)}}function Pa(x,I,Y,V,H,xe){O!==null&&H.isNodeMaterial&&O.setObject(x,H),x.onBeforeRender(L,I,Y,V,H,xe),x.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),H.onBeforeRender(L,I,Y,V,x,xe),H.transparent===!0&&H.side===Mn&&H.forceSinglePass===!1?(H.side=Bt,H.needsUpdate=!0,L.renderBufferDirect(Y,I,V,H,x,xe),H.side=Yn,H.needsUpdate=!0,L.renderBufferDirect(Y,I,V,H,x,xe),H.side=Mn):L.renderBufferDirect(Y,I,V,H,x,xe),x.onAfterRender(L,I,Y,V,H,xe)}function Vi(x,I,Y){I.isScene!==!0&&(I=ct);const V=W.get(x),H=y.state.lights,xe=y.state.shadowsArray,we=H.state.version,ge=he.getParameters(x,H.state,xe,I,Y,y.state.lightProbeGridArray),Te=he.getProgramCacheKey(ge);let Le=V.programs;V.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,V.fog=I.fog;const He=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;V.envMap=oe.get(x.envMap||V.environment,He),V.envMapRotation=V.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Le===void 0&&(x.addEventListener("dispose",nn),Le=new Map,V.programs=Le);let Ke=Le.get(Te);if(Ke!==void 0){if(V.currentProgram===Ke&&V.lightsStateVersion===we)return Ia(x,ge),Ke}else ge.uniforms=he.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,Y,ge),x.onBeforeCompile(ge,L),Ke=he.acquireProgram(ge,Te),Le.set(Te,Ke),V.uniforms=ge.uniforms;const Ae=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ae.clippingPlanes=De.uniform),Ia(x,ge),V.needsLights=El(x),V.lightsStateVersion=we,V.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.sunLights.value=H.state.sun,Ae.sunLightShadows.value=H.state.sunShadow,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.sunShadowMatrix.value=H.state.sunShadowMatrix,Ae.sunShadowCascade.value=H.state.sunShadowCascade,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotLightMatrix.value=H.state.spotLightMatrix,Ae.spotLightMap.value=H.state.spotLightMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=y.state.lightProbeGridArray.length>0,V.currentProgram=Ke,V.uniformsList=null,Ke}function La(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=gs.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Ia(x,I){const Y=W.get(x);Y.outputColorSpace=I.outputColorSpace,Y.batching=I.batching,Y.batchingColor=I.batchingColor,Y.instancing=I.instancing,Y.instancingColor=I.instancingColor,Y.instancingMorph=I.instancingMorph,Y.skinning=I.skinning,Y.morphTargets=I.morphTargets,Y.morphNormals=I.morphNormals,Y.morphColors=I.morphColors,Y.morphTargetsCount=I.morphTargetsCount,Y.numClippingPlanes=I.numClippingPlanes,Y.numIntersection=I.numClipIntersection,Y.vertexAlphas=I.vertexAlphas,Y.vertexTangents=I.vertexTangents,Y.toneMapping=I.toneMapping}function Ml(x,I){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(I.matrixWorld);for(let Y=0,V=x.length;Y<V;Y++){const H=x[Y];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function Sl(x,I,Y,V,H){I.isScene!==!0&&(I=ct),$.resetTextureUnits();const xe=I.fog,we=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?I.environment:null,ge=se===null?L.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:$e.workingColorSpace,Te=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Le=oe.get(V.envMap||we,Te),He=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ke=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!Y.morphAttributes.position,nt=!!Y.morphAttributes.normal,xt=!!Y.morphAttributes.color;let dt=hn;V.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(dt=L.toneMapping);const rt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Rt=rt!==void 0?rt.length:0,Ee=W.get(V),Ft=y.state.lights;if(Be===!0&&(qe===!0||x!==R)){const lt=x===R&&V.id===Z;De.setState(V,x,lt)}let Qe=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ft.state.version||Ee.outputColorSpace!==ge||H.isBatchedMesh&&Ee.batching===!1||!H.isBatchedMesh&&Ee.batching===!0||H.isBatchedMesh&&Ee.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Ee.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Ee.instancing===!1||!H.isInstancedMesh&&Ee.instancing===!0||H.isSkinnedMesh&&Ee.skinning===!1||!H.isSkinnedMesh&&Ee.skinning===!0||H.isInstancedMesh&&Ee.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ee.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ee.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ee.instancingMorph===!1&&H.morphTexture!==null||Ee.envMap!==Le||V.fog===!0&&Ee.fog!==xe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==De.numPlanes||Ee.numIntersection!==De.numIntersection)||Ee.vertexAlphas!==He||Ee.vertexTangents!==Ke||Ee.morphTargets!==Ae||Ee.morphNormals!==nt||Ee.morphColors!==xt||Ee.toneMapping!==dt||Ee.morphTargetsCount!==Rt||!!Ee.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,Ee.__version=V.version);let Ht=Ee.currentProgram;Qe===!0&&(Ht=Vi(V,I,H),O&&V.isNodeMaterial&&O.onUpdateProgram(V,Ht,Ee));let sn=!1,Cn=!1,Qn=!1;const st=Ht.getUniforms(),_t=Ee.uniforms;if(m.useProgram(Ht.program)&&(sn=!0,Cn=!0,Qn=!0),V.id!==Z&&(Z=V.id,Cn=!0),Ee.needsLights){const lt=Ml(y.state.lightProbeGridArray,H);Ee.lightProbeGrid!==lt&&(Ee.lightProbeGrid=lt,Cn=!0)}if(sn||R!==x){m.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),st.setValue(F,"projectionMatrix",x.projectionMatrix),st.setValue(F,"viewMatrix",x.matrixWorldInverse);const Pn=st.map.cameraPosition;Pn!==void 0&&Pn.setValue(F,Je.setFromMatrixPosition(x.matrixWorld)),A.logarithmicDepthBuffer&&st.setValue(F,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&st.setValue(F,"isOrthographic",x.isOrthographicCamera===!0),R!==x&&(R=x,Cn=!0,Qn=!0)}if(Ee.needsLights&&(Ft.state.sunShadowMap.length>0&&st.setValue(F,"sunShadowMap",Ft.state.sunShadowMap,$),Ft.state.directionalShadowMap.length>0&&st.setValue(F,"directionalShadowMap",Ft.state.directionalShadowMap,$),Ft.state.spotShadowMap.length>0&&st.setValue(F,"spotShadowMap",Ft.state.spotShadowMap,$),Ft.state.pointShadowMap.length>0&&st.setValue(F,"pointShadowMap",Ft.state.pointShadowMap,$)),H.isSkinnedMesh){st.setOptional(F,H,"bindMatrix"),st.setOptional(F,H,"bindMatrixInverse");const lt=H.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),st.setValue(F,"boneTexture",lt.boneTexture,$))}H.isBatchedMesh&&(st.setOptional(F,H,"batchingTexture"),st.setValue(F,"batchingTexture",H._matricesTexture,$),st.setOptional(F,H,"batchingIdTexture"),st.setValue(F,"batchingIdTexture",H._indirectTexture,$),st.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&st.setValue(F,"batchingColorTexture",H._colorsTexture,$));const Rn=Y.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&D.update(H,Y,Ht),(Cn||Ee.receiveShadow!==H.receiveShadow)&&(Ee.receiveShadow=H.receiveShadow,st.setValue(F,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&I.environment!==null&&(_t.envMapIntensity.value=I.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=Qp()),Cn){if(st.setValue(F,"toneMappingExposure",L.toneMappingExposure),Ee.needsLights&&yl(_t,Qn),xe&&V.fog===!0&&Ie.refreshFogUniforms(_t,xe),Ie.refreshMaterialUniforms(_t,V,q,B,y.state.transmissionRenderTarget[x.id]),Ee.needsLights&&Ee.lightProbeGrid){const lt=Ee.lightProbeGrid;_t.probesSH.value=lt.texture,_t.probesMin.value.copy(lt.boundingBox.min),_t.probesMax.value.copy(lt.boundingBox.max),_t.probesResolution.value.copy(lt.resolution)}gs.upload(F,La(Ee),_t,$)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(gs.upload(F,La(Ee),_t,$),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&st.setValue(F,"center",H.center),st.setValue(F,"modelViewMatrix",H.modelViewMatrix),st.setValue(F,"normalMatrix",H.normalMatrix),st.setValue(F,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const lt=V.uniformsGroups;for(let Pn=0,jn=lt.length;Pn<jn;Pn++){const Fa=lt[Pn];ne.update(Fa,Ht),ne.bind(Fa,Ht)}}return Ht}function yl(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.sunLights.needsUpdate=I,x.sunLightShadows.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function El(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(x,I,Y){const V=W.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(x.texture).__webglTexture=I,W.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const Y=W.get(x);Y.__webglFramebuffer=I,Y.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,Y=0){se=x,Q=I,K=Y;let V=null,H=!1,xe=!1;if(x){const ge=W.get(x);if(ge.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(F.FRAMEBUFFER,ge.__webglFramebuffer),T.copy(x.viewport),te.copy(x.scissor),ie=x.scissorTest,m.viewport(T),m.scissor(te),m.setScissorTest(ie),Z=-1;return}else if(ge.__webglFramebuffer===void 0)$.setupRenderTarget(x);else if(ge.__hasExternalTextures)$.rebindTextures(x,W.get(x.texture).__webglTexture,W.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const He=x.depthTexture;if(ge.__boundDepthTexture!==He){if(He!==null&&W.has(He)&&(x.width!==He.image.width||x.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(x)}}const Te=x.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(xe=!0);const Le=W.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?V=Le[I][Y]:V=Le[I],H=!0):x.samples>0&&$.useMultisampledRTT(x)===!1?V=W.get(x).__webglMultisampledFramebuffer:Array.isArray(Le)?V=Le[Y]:V=Le,T.copy(x.viewport),te.copy(x.scissor),ie=x.scissorTest}else T.copy(re).multiplyScalar(q).floor(),te.copy(Ce).multiplyScalar(q).floor(),ie=Ye;if(Y!==0&&(V=X),m.bindFramebuffer(F.FRAMEBUFFER,V)&&m.drawBuffers(x,V),m.viewport(T),m.scissor(te),m.setScissorTest(ie),H){const ge=W.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,ge.__webglTexture,Y)}else if(xe){const ge=I;for(let Te=0;Te<x.textures.length;Te++){const Le=W.get(x.textures[Te]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Te,Le.__webglTexture,Y,ge)}}else if(x!==null&&Y!==0){const ge=W.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ge.__webglTexture,Y)}Z=-1};function Da(x){const I=W.get(x);return(I.__readFormat!==x.format||I.__readType!==x.type)&&(I.__readFormat=x.format,I.__readType=x.type,I.__formatReadable=A.textureFormatReadable(x.format),I.__typeReadable=A.textureTypeReadable(x.type)),I}this.readRenderTargetPixels=function(x,I,Y,V,H,xe,we,ge=0){if(!(x&&x.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=W.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te){m.bindFramebuffer(F.FRAMEBUFFER,Te);try{const Le=x.textures[ge],He=Le.format,Ke=Le.type;x.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ge);const Ae=Da(Le);if(Ae.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-V&&Y>=0&&Y<=x.height-H&&F.readPixels(I,Y,V,H,fe.convert(He),fe.convert(Ke),xe)}finally{const Le=se!==null?W.get(se).__webglFramebuffer:null;m.bindFramebuffer(F.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(x,I,Y,V,H,xe,we,ge=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=W.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te)if(I>=0&&I<=x.width-V&&Y>=0&&Y<=x.height-H){m.bindFramebuffer(F.FRAMEBUFFER,Te);const Le=x.textures[ge],He=Le.format,Ke=Le.type;x.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ge);const Ae=Da(Le);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,nt),F.bufferData(F.PIXEL_PACK_BUFFER,xe.byteLength,F.STREAM_READ),F.readPixels(I,Y,V,H,fe.convert(He),fe.convert(Ke),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const xt=se!==null?W.get(se).__webglFramebuffer:null;m.bindFramebuffer(F.FRAMEBUFFER,xt);const dt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await dc(F,dt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,nt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(nt),F.deleteSync(dt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,Y=0){const V=Math.pow(2,-Y),H=Math.floor(x.image.width*V),xe=Math.floor(x.image.height*V),we=I!==null?I.x:0,ge=I!==null?I.y:0;$.setTexture2D(x,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,we,ge,H,xe),m.unbindTexture()},this.copyTextureToTexture=function(x,I,Y=null,V=null,H=0,xe=0){let we,ge,Te,Le,He,Ke,Ae,nt,xt;const dt=x.isCompressedTexture?x.mipmaps[xe]:x.image;if(Y!==null)we=Y.max.x-Y.min.x,ge=Y.max.y-Y.min.y,Te=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,He=Y.min.y,Ke=Y.isBox3?Y.min.z:0;else{const _t=Math.pow(2,-H);we=Math.floor(dt.width*_t),ge=Math.floor(dt.height*_t),x.isDataArrayTexture?Te=dt.depth:x.isData3DTexture?Te=Math.floor(dt.depth*_t):Te=1,Le=0,He=0,Ke=0}V!==null?(Ae=V.x,nt=V.y,xt=V.z):(Ae=0,nt=0,xt=0);const rt=fe.convert(I.format),Rt=fe.convert(I.type);let Ee;I.isData3DTexture?($.setTexture3D(I,0),Ee=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?($.setTexture2DArray(I,0),Ee=F.TEXTURE_2D_ARRAY):($.setTexture2D(I,0),Ee=F.TEXTURE_2D),m.activeTexture(F.TEXTURE0),m.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),m.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),m.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const Ft=m.getParameter(F.UNPACK_ROW_LENGTH),Qe=m.getParameter(F.UNPACK_IMAGE_HEIGHT),Ht=m.getParameter(F.UNPACK_SKIP_PIXELS),sn=m.getParameter(F.UNPACK_SKIP_ROWS),Cn=m.getParameter(F.UNPACK_SKIP_IMAGES);m.pixelStorei(F.UNPACK_ROW_LENGTH,dt.width),m.pixelStorei(F.UNPACK_IMAGE_HEIGHT,dt.height),m.pixelStorei(F.UNPACK_SKIP_PIXELS,Le),m.pixelStorei(F.UNPACK_SKIP_ROWS,He),m.pixelStorei(F.UNPACK_SKIP_IMAGES,Ke);const Qn=x.isDataArrayTexture||x.isData3DTexture,st=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const _t=W.get(x),Rn=W.get(I),lt=W.get(_t.__renderTarget),Pn=W.get(Rn.__renderTarget);m.bindFramebuffer(F.READ_FRAMEBUFFER,lt.__webglFramebuffer),m.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let jn=0;jn<Te;jn++)Qn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(x).__webglTexture,H,Ke+jn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(I).__webglTexture,xe,xt+jn)),F.blitFramebuffer(Le,He,we,ge,Ae,nt,we,ge,F.DEPTH_BUFFER_BIT,F.NEAREST);m.bindFramebuffer(F.READ_FRAMEBUFFER,null),m.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||x.isRenderTargetTexture||W.has(x)){const _t=W.get(x),Rn=W.get(I);m.bindFramebuffer(F.READ_FRAMEBUFFER,N),m.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let lt=0;lt<Te;lt++)Qn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_t.__webglTexture,H,Ke+lt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_t.__webglTexture,H),st?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rn.__webglTexture,xe,xt+lt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Rn.__webglTexture,xe),H!==0?F.blitFramebuffer(Le,He,we,ge,Ae,nt,we,ge,F.COLOR_BUFFER_BIT,F.NEAREST):st?F.copyTexSubImage3D(Ee,xe,Ae,nt,xt+lt,Le,He,we,ge):F.copyTexSubImage2D(Ee,xe,Ae,nt,Le,He,we,ge);m.bindFramebuffer(F.READ_FRAMEBUFFER,null),m.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else st?x.isDataTexture||x.isData3DTexture?F.texSubImage3D(Ee,xe,Ae,nt,xt,we,ge,Te,rt,Rt,dt.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(Ee,xe,Ae,nt,xt,we,ge,Te,rt,dt.data):F.texSubImage3D(Ee,xe,Ae,nt,xt,we,ge,Te,rt,Rt,dt):x.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xe,Ae,nt,we,ge,rt,Rt,dt.data):x.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xe,Ae,nt,dt.width,dt.height,rt,dt.data):F.texSubImage2D(F.TEXTURE_2D,xe,Ae,nt,we,ge,rt,Rt,dt);m.pixelStorei(F.UNPACK_ROW_LENGTH,Ft),m.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qe),m.pixelStorei(F.UNPACK_SKIP_PIXELS,Ht),m.pixelStorei(F.UNPACK_SKIP_ROWS,sn),m.pixelStorei(F.UNPACK_SKIP_IMAGES,Cn),xe===0&&I.generateMipmaps&&F.generateMipmap(Ee),m.unbindTexture()},this.initRenderTarget=function(x){W.get(x).__webglFramebuffer===void 0&&$.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?$.setTextureCube(x,0):x.isData3DTexture?$.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?$.setTexture2DArray(x,0):$.setTexture2D(x,0),m.unbindTexture()},this.resetState=function(){Q=0,K=0,se=null,m.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class em{constructor(e){this.canvas=e,this.scene=new Ac,this.camera=new zt(58,window.innerWidth/window.innerHeight,.1,350),this.renderer=new jp({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Do,this.ambientLight=null,this.sunLight=null,this.hemisphereLight=null,this.shakeIntensity=0,this.shakeDecay=5,this.isNepaBlackout=!1,this.originalLightIntensity={ambient:.9,sun:1.4},this.initLightingAndAtmosphere(),window.addEventListener("resize",()=>this.onResize()),qt.onThemeChange(t=>this.updateTheme(t))}initLightingAndAtmosphere(){const e=qt.getTokens();this.scene.fog=new fa(new Pe(e.world.fogColor),.011),this.scene.background=new Pe(e.world.skyBottom),this.ambientLight=new Qc(new Pe(e.world.ambientLight),.85),this.scene.add(this.ambientLight),this.hemisphereLight=new Yc(new Pe(e.world.skyTop),new Pe(e.world.road),.65),this.scene.add(this.hemisphereLight),this.sunLight=new Jc(new Pe(e.world.sunLight),1.35),this.sunLight.position.set(25,45,50),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=160,this.sunLight.shadow.camera.left=-25,this.sunLight.shadow.camera.right=25,this.sunLight.shadow.camera.top=25,this.sunLight.shadow.camera.bottom=-25,this.scene.add(this.sunLight);const t=new xi(18,16,16),n=new Nt({color:new Pe(e.world.sunColor)});this.sunSphere=new le(t,n),this.sunSphere.position.set(20,22,280),this.scene.add(this.sunSphere)}updateTheme(e){this.scene.fog&&this.scene.fog.color.set(e.world.fogColor),this.scene.background&&this.scene.background.set(e.world.skyBottom),this.ambientLight&&this.ambientLight.color.set(e.world.ambientLight),this.hemisphereLight&&(this.hemisphereLight.color.set(e.world.skyTop),this.hemisphereLight.groundColor.set(e.world.road)),this.sunLight&&this.sunLight.color.set(e.world.sunLight),this.sunSphere&&this.sunSphere.material.color.set(e.world.sunColor)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.8))}triggerScreenShake(e=.45){this.shakeIntensity=Math.max(this.shakeIntensity,e)}setNepaBlackout(e){if(this.isNepaBlackout=e,e)this.ambientLight&&(this.ambientLight.intensity=.08),this.sunLight&&(this.sunLight.intensity=.05),this.scene.fog&&(this.scene.fog.density=.025),this.scene.background&&this.scene.background.set(328970);else{const t=qt.getTokens();this.ambientLight&&(this.ambientLight.intensity=.85),this.sunLight&&(this.sunLight.intensity=1.35),this.scene.fog&&(this.scene.fog.density=.011,this.scene.fog.color.set(t.world.fogColor)),this.scene.background&&this.scene.background.set(t.world.skyBottom)}}updateCamera(e,t){let n=0,s=0;this.shakeIntensity>.001&&(n=(Math.random()-.5)*this.shakeIntensity,s=(Math.random()-.5)*this.shakeIntensity,this.shakeIntensity-=this.shakeDecay*t*this.shakeIntensity);const r=e.x*.45+n,a=4.2+s,o=e.z-9.2;this.camera.position.x+=(r-this.camera.position.x)*Math.min(1,8*t),this.camera.position.y+=(a-this.camera.position.y)*Math.min(1,8*t),this.camera.position.z=o,this.camera.lookAt(e.x*.25,e.y+1.6,e.z+18),this.sunLight&&(this.sunLight.position.set(e.x+25,45,e.z+40),this.sunLight.target.position.set(e.x,0,e.z+10),this.sunLight.target.updateMatrixWorld()),this.sunSphere&&(this.sunSphere.position.z=e.z+280)}render(){this.renderer.render(this.scene,this.camera)}}class tm{constructor(e){this.scene=e,this.roadChunks=[],this.chunkLength=60,this.numChunks=5,this.roadWidth=14,this.laneWidth=3.6,this.sceneryObjects=[],this.busStops=[],this.materials={},this.initMaterials(),this.buildInitialChunks(),this.buildSkyline(),qt.onThemeChange(t=>this.updateTheme(t))}initMaterials(){const e=qt.getTokens();this.materials.road=new Ue({color:new Pe(e.world.road)}),this.materials.laneLines=new Nt({color:new Pe(e.world.roadLines)}),this.materials.curb1=new Ue({color:new Pe(e.world.curbPrimary)}),this.materials.curb2=new Ue({color:new Pe(e.world.curbSecondary)}),this.materials.sidewalk=new Ue({color:new Pe(e.world.sidewalk)}),this.materials.pole=new Ue({color:4864818}),this.materials.foliage=new Ue({color:3046706}),this.materials.trunk=new Ue({color:6111287}),this.materials.umbrella=[new Ue({color:13840175}),new Ue({color:16498733}),new Ue({color:1668818}),new Ue({color:3706428})]}updateTheme(e){this.materials.road&&this.materials.road.color.set(e.world.road),this.materials.laneLines&&this.materials.laneLines.color.set(e.world.roadLines),this.materials.curb1&&this.materials.curb1.color.set(e.world.curbPrimary),this.materials.curb2&&this.materials.curb2.color.set(e.world.curbSecondary),this.materials.sidewalk&&this.materials.sidewalk.color.set(e.world.sidewalk)}buildInitialChunks(){for(let e=0;e<this.numChunks;e++){const t=e*this.chunkLength-this.chunkLength,n=this.createRoadChunk(t,e);this.scene.add(n),this.roadChunks.push({mesh:n,z:t,index:e})}}createRoadChunk(e,t){const n=new Tt;n.position.z=e;const s=new An(this.roadWidth,this.chunkLength);s.rotateX(-Math.PI/2);const r=new le(s,this.materials.road);return r.receiveShadow=!0,n.add(r),[-this.laneWidth*.5,this.laneWidth*.5].forEach(a=>{const c=this.chunkLength/8;for(let d=0;d<8;d++){const f=new An(.22,3.5);f.rotateX(-Math.PI/2);const h=new le(f,this.materials.laneLines);h.position.set(a,.01,-this.chunkLength*.5+d*c+3.5),n.add(h)}}),[-1,1].forEach(a=>{const o=a*(this.roadWidth*.5+4),l=new Ge(8,.25,this.chunkLength),c=new le(l,this.materials.sidewalk);c.position.set(o,.12,0),c.receiveShadow=!0,n.add(c);const d=12,f=this.chunkLength/d;for(let h=0;h<d;h++){const g=new Ge(.3,.35,f),v=h%2===0?this.materials.curb1:this.materials.curb2,E=new le(g,v);E.position.set(a*(this.roadWidth*.5+.15),.17,-this.chunkLength*.5+h*f+f*.5),n.add(E)}}),this.addChunkProps(n,t),n}addChunkProps(e,t){if([-1,1].forEach(n=>{const s=n*(this.roadWidth*.5+3.2),r=(Math.random()-.5)*20,a=new Tt;a.position.set(s,0,r);const o=new Mt(.18,.22,9,8),l=new le(o,this.materials.pole);l.position.y=4.5,l.castShadow=!0,a.add(l);const c=new Ge(2.4,.15,.15),d=new le(c,this.materials.pole);d.position.y=8.2,a.add(d),[-1,0,1].forEach(f=>{const h=new Mt(.06,.08,.2,6),g=new Nt({color:14540253}),v=new le(h,g);v.position.set(f*.9,8.35,0),a.add(v)}),e.add(a)}),[-1,1].forEach(n=>{if(Math.random()>.4){const s=n*(this.roadWidth*.5+5.5+Math.random()*2),r=(Math.random()-.5)*35,a=this.createPalmTree();a.position.set(s,0,r),e.add(a)}}),Math.random()>.3){const s=(Math.random()>.5?1:-1)*(this.roadWidth*.5+1.8),r=(Math.random()-.5)*30,a=this.createMarketStall();a.position.set(s,0,r),e.add(a)}if(t%2===0){const n=this.createBillboard();n.position.set(this.roadWidth*.5+6.5,0,0),e.add(n)}}createPalmTree(){const e=new Tt,t=new Mt(.2,.35,7,7),n=new le(t,this.materials.trunk);n.position.y=3.5,n.rotation.z=(Math.random()-.5)*.2,n.castShadow=!0,e.add(n);for(let s=0;s<6;s++){const r=s/6*Math.PI*2,a=new ki(1.2,3.8,4);a.rotateX(Math.PI/2.5);const o=new le(a,this.materials.foliage);o.position.set(0,6.8,0),o.rotation.y=r,o.castShadow=!0,e.add(o)}return e}createMarketStall(){const e=new Tt,t=new Mt(.06,.06,2.4,6),n=new Ue({color:4473924}),s=new le(t,n);s.position.y=1.2,e.add(s);const r=new ki(1.4,.6,8),a=this.materials.umbrella[Math.floor(Math.random()*this.materials.umbrella.length)],o=new le(r,a);o.position.y=2.4,o.rotation.y=Math.random()*Math.PI,e.add(o);const l=new Ge(1.2,.7,.8),c=new Ue({color:9268835}),d=new le(l,c);d.position.y=.35,e.add(d);const f=new Ge(.9,.2,.6),h=new Ue({color:15022389}),g=new le(f,h);return g.position.y=.75,e.add(g),e}createBillboard(){const e=["NO CONDITION IS PERMANENT","START.NG - BUILD THE FUTURE","GBEDU FM 105.5 - NO DULLING","GOD'S TIME MOTORS NAIJA","HOT LAGOS PARTY JOLLOF"],t=e[Math.floor(Math.random()*e.length)],n=new Tt;[-1.2,1.2].forEach(d=>{const f=new Mt(.12,.12,6,6),h=new Ue({color:3622735}),g=new le(f,h);g.position.set(d,3,0),n.add(g)});const s=document.createElement("canvas");s.width=512,s.height=256;const r=s.getContext("2d");r.fillStyle="#FFC107",r.fillRect(0,0,512,256),r.strokeStyle="#1A1A1A",r.lineWidth=14,r.strokeRect(10,10,492,236),r.fillStyle="#1A1A1A",r.font="bold 32px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("LAGOS EXPRESSWAY",256,75),r.fillStyle="#D32F2F",r.font="bold 26px sans-serif",r.fillText(t,256,145);const a=new Bc(s),o=new Nt({map:a}),l=new Ge(4.2,2.2,.2),c=new le(l,o);return c.position.y=6,n.add(c),n}buildSkyline(){this.skylineGroup=new Tt;const t=qt.getTokens().world.buildingColors;for(let n=0;n<28;n++){const s=12+Math.random()*18,r=25+Math.random()*55,a=15,o=(n-14)*22,l=180+Math.random()*40,c=t[n%t.length],d=new Ue({color:new Pe(c)}),f=new Ge(s,r,a),h=new le(f,d);h.position.set(o,r*.5-2,l),this.skylineGroup.add(h)}this.scene.add(this.skylineGroup)}update(e,t,n){this.skylineGroup&&(this.skylineGroup.position.z=e),this.roadChunks.forEach(s=>{s.mesh.position.z<e-this.chunkLength*1.5&&(s.mesh.position.z+=this.chunkLength*this.numChunks)})}}class nm{constructor(){this.mesh=new Tt,this.materials={},this.wheels=[],this.luggageMeshes=[],this.headlightBeams=[],this.conductorArm=null,this.targetLane=0,this.laneWidth=3.6,this.currentX=0,this.targetX=0,this.laneSpeed=12,this.roll=0,this.pitch=0,this.bounceOffset=0,this.spinAngle=0,this.isSpinning=!1,this.spinTimer=0,this.isShielded=!1,this.isSirenActive=!1,this.shieldMesh=null,this.sirenMesh=null,this.initMaterials(),this.buildBus(),this.buildLuggageRack(),this.buildDriverAndConductor(),this.buildPowerUpAttachments(),qt.onThemeChange(e=>this.updateTheme(e))}initMaterials(){const e=qt.getTokens();this.materials.body=new Ue({color:new Pe(e.danfo.body),roughness:.4}),this.materials.stripe=new Ue({color:new Pe(e.danfo.stripe)}),this.materials.bumper=new Ue({color:new Pe(e.danfo.bumper)}),this.materials.glass=new Li({color:8962256,metalness:.1,roughness:.2,transparent:!0,opacity:.55}),this.materials.wheel=new Ue({color:2236962}),this.materials.rim=new Ue({color:13421772}),this.materials.headlight=new Nt({color:new Pe(e.danfo.headlightGlow)}),this.materials.taillight=new Nt({color:new Pe(e.danfo.taillightGlow)}),this.materials.driverSkin=new Ue({color:new Pe(e.character.skin)}),this.materials.driverOutfit=new Ue({color:new Pe(e.character.outfit)}),this.materials.driverCap=new Ue({color:new Pe(e.character.cap)}),this.materials.driverGlasses=new Nt({color:new Pe(e.character.glasses)}),this.materials.conductorOutfit=new Ue({color:new Pe(e.character.conductorOutfit)})}updateTheme(e){this.materials.body&&this.materials.body.color.set(e.danfo.body),this.materials.stripe&&this.materials.stripe.color.set(e.danfo.stripe),this.materials.bumper&&this.materials.bumper.color.set(e.danfo.bumper),this.materials.headlight&&this.materials.headlight.color.set(e.danfo.headlightGlow),this.materials.taillight&&this.materials.taillight.color.set(e.danfo.taillightGlow),this.materials.driverSkin&&this.materials.driverSkin.color.set(e.character.skin),this.materials.driverOutfit&&this.materials.driverOutfit.color.set(e.character.outfit),this.materials.driverCap&&this.materials.driverCap.color.set(e.character.cap),this.materials.conductorOutfit&&this.materials.conductorOutfit.color.set(e.character.conductorOutfit),this.headlightBeams.forEach(t=>{t.color.set(e.danfo.headlightGlow)})}applyCharacterStyle(e){e&&(e.skinColor&&this.materials.driverSkin&&this.materials.driverSkin.color.set(e.skinColor),e.primaryColor&&this.materials.driverOutfit&&this.materials.driverOutfit.color.set(e.primaryColor),e.secondaryColor&&this.materials.conductorOutfit&&this.materials.conductorOutfit.color.set(e.secondaryColor),e.hairColor&&this.materials.driverCap&&this.materials.driverCap.color.set(e.hairColor))}buildBus(){const n=new Ge(2.1,1.1,4.8),s=new le(n,this.materials.body);s.position.y=.95,s.castShadow=!0,s.receiveShadow=!0,this.mesh.add(s);const r=new Ge(2.1+.03,.18,4.8+.02),a=new le(r,this.materials.stripe);a.position.y=.95,this.mesh.add(a);const o=new le(r,this.materials.stripe);o.position.y=.65,this.mesh.add(o);const l=new Ge(2.1*.95,1.1,4.8*.95),c=new le(l,this.materials.body);c.position.y=1.95,c.castShadow=!0,this.mesh.add(c);const d=new An(2.1*.85,.85),f=new le(d,this.materials.glass);f.position.set(0,1.95,4.8*.475+.01),f.rotation.x=-.15,this.mesh.add(f);const h=new le(d,this.materials.glass);h.position.set(0,1.95,-4.8*.475-.01),h.rotation.y=Math.PI,this.mesh.add(h),[-1,1].forEach(P=>{const M=new An(3.5999999999999996,.75),S=new le(M,this.materials.glass);S.position.set(P*(2.1*.475+.01),1.95,0),S.rotation.y=P*(Math.PI/2),this.mesh.add(S)});const g=new Ge(2.1*.7,.35,.1),v=new le(g,this.materials.bumper);v.position.set(0,.75,4.8*.5+.02),this.mesh.add(v);const E=new Ge(2.1+.1,.22,.2),p=new le(E,this.materials.bumper);p.position.set(0,.45,4.8*.5+.08),this.mesh.add(p);const u=new le(E,this.materials.bumper);u.position.set(0,.45,-4.8*.5-.08),this.mesh.add(u),[-.7,.7].forEach(P=>{const M=new Ge(.3,.25,.1),S=new le(M,this.materials.headlight);S.position.set(P,.8,4.8*.5+.05),this.mesh.add(S);const y=new $c(16774557,4,45,Math.PI/4,.4);y.position.set(P,.8,4.8*.5+.1),y.target.position.set(P*.5,0,4.8*.5+25),this.mesh.add(y),this.mesh.add(y.target),this.headlightBeams.push(y)}),[-.8,.8].forEach(P=>{const M=new Ge(.25,.3,.08),S=new le(M,this.materials.taillight);S.position.set(P,.85,-4.8*.5-.03),this.mesh.add(S)}),[{x:-2.1*.48,y:.45,z:1.5},{x:2.1*.48,y:.45,z:1.5},{x:-2.1*.48,y:.45,z:-1.5},{x:2.1*.48,y:.45,z:-1.5}].forEach(P=>{const M=new Tt;M.position.set(P.x,P.y,P.z);const S=new Mt(.45,.45,.35,14);S.rotateZ(Math.PI/2);const y=new le(S,this.materials.wheel);y.castShadow=!0,M.add(y);const C=new Mt(.24,.24,.36,10);C.rotateZ(Math.PI/2);const _=new le(C,this.materials.rim);M.add(_),this.mesh.add(M),this.wheels.push(M)})}buildLuggageRack(){this.rackGroup=new Tt,this.rackGroup.position.set(0,2.55,0);const e=new Ue({color:3355443}),t=new Ge(1.8,.1,3.8),n=new le(t,e);this.rackGroup.add(n),this.mesh.add(this.rackGroup)}updateLuggage(e){this.luggageMeshes.forEach(r=>this.rackGroup.remove(r)),this.luggageMeshes=[];const t=Math.min(14,Math.floor(e*1.2));if(t<=0)return;const n=[12000284,870305,1793568,15690752,5125166,16635957,3622735],s=[{x:-.45,y:.25,z:1,w:.7,h:.45,d:.9},{x:.45,y:.25,z:1,w:.65,h:.4,d:.85},{x:-.45,y:.25,z:0,w:.75,h:.48,d:.9},{x:.45,y:.25,z:0,w:.7,h:.45,d:.95},{x:-.45,y:.25,z:-1,w:.7,h:.42,d:.8},{x:.45,y:.25,z:-1,w:.68,h:.46,d:.9},{x:-.3,y:.65,z:.6,w:.65,h:.4,d:.75},{x:.3,y:.65,z:.6,w:.6,h:.42,d:.7},{x:-.3,y:.65,z:-.4,w:.65,h:.38,d:.8},{x:.3,y:.65,z:-.4,w:.6,h:.4,d:.75},{x:0,y:1.05,z:.2,w:.8,h:.42,d:.9},{x:-.15,y:1.05,z:-.6,w:.6,h:.35,d:.6},{x:.15,y:1.45,z:0,w:.5,h:.32,d:.6},{x:0,y:1.75,z:-.1,w:.4,h:.3,d:.45}];for(let r=0;r<t;r++){const a=s[r],o=n[r%n.length],l=new Ue({color:o}),c=new Ge(a.w,a.h,a.d),d=new le(c,l);d.position.set(a.x,a.y,a.z),d.castShadow=!0;const f=new Mt(.015,.015,a.w*1.1);f.rotateZ(Math.PI/2);const h=new Nt({color:2236962}),g=new le(f,h);g.position.y=a.h*.5+.01,d.add(g),this.rackGroup.add(d),this.luggageMeshes.push(d)}}buildDriverAndConductor(){const e=new Tt;e.position.set(-.45,1.35,1.2);const t=new Ge(.45,.5,.3),n=new le(t,this.materials.driverOutfit);e.add(n);const s=new Ge(.28,.3,.28),r=new le(s,this.materials.driverSkin);r.position.y=.4,e.add(r);const a=new Ge(.32,.1,.36),o=new le(a,this.materials.driverCap);o.position.set(0,.55,.04),e.add(o);const l=new Ge(.26,.08,.08),c=new le(l,this.materials.driverGlasses);c.position.set(0,.42,.16),e.add(c),this.mesh.add(e);const d=new Tt;d.position.set(1.15,1.2,.3),d.rotation.y=-Math.PI/3;const f=new le(t,this.materials.conductorOutfit);d.add(f);const h=new le(s,this.materials.driverSkin);h.position.y=.4,d.add(h);const g=new Ge(.12,.45,.12);this.conductorArm=new le(g,this.materials.driverSkin),this.conductorArm.position.set(.3,.35,0),this.conductorArm.rotation.z=-Math.PI/4,d.add(this.conductorArm),this.mesh.add(d)}buildPowerUpAttachments(){const e=new xi(3,16,16),t=new Nt({color:58879,transparent:!0,opacity:.35,wireframe:!0});this.shieldMesh=new le(e,t),this.shieldMesh.position.y=1.5,this.shieldMesh.visible=!1,this.mesh.add(this.shieldMesh),this.sirenMesh=new Tt,this.sirenMesh.position.set(0,2.7,1.5);const n=new le(new Mt(.12,.12,.2,8),new Nt({color:16711680}));n.position.x=-.3,this.sirenMesh.add(n);const s=new le(new Mt(.12,.12,.2,8),new Nt({color:22015}));s.position.x=.3,this.sirenMesh.add(s),this.sirenMesh.visible=!1,this.mesh.add(this.sirenMesh)}setLane(e){this.targetLane=Math.max(-1,Math.min(1,e)),this.targetX=this.targetLane*this.laneWidth}shiftLeft(){this.setLane(this.targetLane-1)}shiftRight(){this.setLane(this.targetLane+1)}triggerSpin(){this.isSpinning||(this.isSpinning=!0,this.spinTimer=0)}setShield(e){this.isShielded=e,this.shieldMesh&&(this.shieldMesh.visible=e)}setSiren(e){this.isSirenActive=e,this.sirenMesh&&(this.sirenMesh.visible=e)}update(e,t){const n=this.targetX-this.currentX;this.currentX+=n*Math.min(1,this.laneSpeed*e),this.mesh.position.x=this.currentX;const s=t*e*2.5;this.wheels.forEach(o=>{o.children.forEach(l=>{l.rotation.x+=s})});const r=-n*.08;this.roll+=(r-this.roll)*Math.min(1,10*e),this.conductorArm&&(this.conductorArm.rotation.x=Math.sin(Date.now()*.008)*.4,this.conductorArm.rotation.z=-Math.PI/4+Math.sin(Date.now()*.01)*.2),this.isSpinning&&(this.spinTimer+=e,this.spinAngle+=e*14,this.spinTimer>.8&&(this.isSpinning=!1,this.spinAngle=0));const a=Math.sin(Date.now()*.03)*.02*(t/20);if(this.mesh.position.y=this.bounceOffset+a,this.mesh.rotation.z=this.roll,this.mesh.rotation.y=this.isSpinning?this.spinAngle:0,this.isShielded&&this.shieldMesh&&(this.shieldMesh.rotation.y+=e*4,this.shieldMesh.rotation.x+=e*2),this.isSirenActive&&this.sirenMesh){const o=Math.sin(Date.now()*.025);this.sirenMesh.children[0].visible=o>0,this.sirenMesh.children[1].visible=o<=0}}getBoundingBox(){const e=this.mesh.position.x,t=this.mesh.position.y,n=this.mesh.position.z,s=.85,r=2.1,a=2;return new Jn(new G(e-s,t+.1,n-r),new G(e+s,t+.1+a,n+r))}}class im{constructor(e){this.scene=e,this.activeItems=[],this.pools={},this.laneWidth=3.6,this.spawnTimer=0,this.spawnInterval=1.6,this.lastSpawnZ=0,this.beatPulsePending=!1,ut.onBeat(t=>{t.isBar&&(this.beatPulsePending=!0)}),this.initPools()}initPools(){this.types=["pothole","flood","traffic_jam","police_checkpoint","fuel_scarcity","nepa_outage","okada","conductor_drama","market_hawker","broken_truck","power_fuel","power_generator","power_purewater","power_jollof","power_naira","power_siren","passenger_stop"],this.types.forEach(e=>{this.pools[e]=[]})}getItem(e){if(this.pools[e]&&this.pools[e].length>0){const t=this.pools[e].pop();return t.mesh.visible=!0,t}return this.createItem(e)}recycleItem(e){e.mesh.visible=!1,e.collected=!1,e.hit=!1,e.dodged=!1,this.pools[e.type]&&!this.pools[e.type].includes(e)&&this.pools[e.type].push(e)}createItem(e){let t=new Tt,n={w:2.2,h:2,d:2.5},s=!1,r=!1;switch(e){case"pothole":{const a=new Mt(1,1.1,.08,10),o=new Ue({color:1118481}),l=new le(a,o);l.position.y=.04,t.add(l);const c=new ki(.25,.7,8),d=new Ue({color:16733986}),f=new le(c,d);f.position.set(.75,.35,0),t.add(f),n={w:1.8,h:.8,d:1.8};break}case"flood":{const a=new An(2.4,4);a.rotateX(-Math.PI/2);const o=new Li({color:1668818,roughness:.1,metalness:.7,transparent:!0,opacity:.8}),l=new le(a,o);l.position.y=.05,t.add(l),n={w:2.1,h:.8,d:3.5};break}case"traffic_jam":{const a=[1402304,13840175,4545124,16088064],o=new Ge(1.8,1.2,4),l=new Ue({color:a[Math.floor(Math.random()*a.length)]}),c=new le(o,l);c.position.y=.7,c.castShadow=!0,t.add(c);const d=new Ge(1.6,.75,2),f=new Li({color:2236962,opacity:.8}),h=new le(d,f);h.position.set(0,1.4,-.2),t.add(h),n={w:1.9,h:1.8,d:4};break}case"police_checkpoint":{const a=new Ge(2.2,.3,.2),o=new Ue({color:13840175}),l=new le(a,o);l.position.y=1,t.add(l),[-.9,.9].forEach(g=>{const v=new le(new Mt(.07,.07,1.2,6),new Ue({color:2236962}));v.position.set(g,.6,0),t.add(v)});const c=new Tt;c.position.set(.95,0,0);const d=new le(new Ge(.4,.8,.28),new Ue({color:1713022}));d.position.y=.9,c.add(d);const f=new le(new Ge(.28,.28,.28),new Ue({color:4861467}));f.position.y=1.45,c.add(f);const h=new le(new Ge(.32,.12,.32),new Ue({color:1118481}));h.position.y=1.62,c.add(h),t.add(c),n={w:2.1,h:1.8,d:1.2};break}case"fuel_scarcity":{for(let a=0;a<3;a++){const o=new Ge(.45,.6,.35),l=new Ue({color:16498733}),c=new le(o,l);c.position.set(-.55+a*.55,.3,0),t.add(c)}n={w:1.9,h:1,d:1.2};break}case"nepa_outage":{const a=new Mt(.12,.12,3.8,6),o=new le(a,new Ue({color:4073251}));o.position.y=1.9,t.add(o);const l=new le(new xi(.25,8,8),new Nt({color:16771899}));l.position.y=3.9,t.add(l),n={w:1.6,h:2,d:1.5};break}case"okada":{const a=new Ge(.4,.7,2),o=new Ue({color:13840175}),l=new le(a,o);l.position.y=.5,t.add(l),[-.6,.6].forEach(f=>{const h=new le(new Mt(.32,.32,.12,10),new Ue({color:1118481}));h.rotation.z=Math.PI/2,h.position.set(0,.32,f),t.add(h)});const c=new le(new Ge(.38,.6,.28),new Ue({color:16498733}));c.position.set(0,1.05,-.2),t.add(c);const d=new le(new xi(.22,8,8),new Ue({color:0}));d.position.set(0,1.5,-.2),t.add(d),n={w:1.2,h:1.8,d:2};break}case"conductor_drama":{s=!0;const a=new Mt(.55,.55,.12,16);a.rotateX(Math.PI/2);const o=new Li({color:16766720,metalness:.8,roughness:.2}),l=new le(a,o);l.position.y=1.3,t.add(l),n={w:1.8,h:1.8,d:1.8};break}case"market_hawker":{const a=new le(new Ge(.38,.85,.28),new Ue({color:8069026}));a.position.y=.85,t.add(a);const o=new le(new Ge(.24,.26,.24),new Ue({color:6111287}));o.position.y=1.4,t.add(o);const l=new le(new Mt(.5,.4,.1,10),new Ue({color:15690752}));l.position.y=1.65,t.add(l),n={w:1.4,h:1.8,d:1.4};break}case"broken_truck":{const a=new le(new Ge(2,2.2,5),new Ue({color:3046706}));a.position.y=1.4,a.castShadow=!0,t.add(a);const o=new _a(.5),l=new Ue({color:5025616}),c=new le(o,l);c.position.set(0,.5,-2.8),t.add(c),n={w:2,h:2.2,d:5};break}case"power_fuel":{s=!0;const a=new Ge(.8,1,.5),o=new Ue({color:16771899}),l=new le(a,o);l.position.y=1.2,t.add(l),n={w:1.8,h:2,d:1.8};break}case"power_generator":{s=!0;const a=new Ge(.9,.75,.75),o=new Ue({color:13840175}),l=new le(a,o);l.position.y=1.2,t.add(l),n={w:1.8,h:2,d:1.8};break}case"power_purewater":{s=!0;const a=new Ge(.7,.9,.35),o=new Li({color:58879,transparent:!0,opacity:.85}),l=new le(a,o);l.position.y=1.2,t.add(l),n={w:1.8,h:2,d:1.8};break}case"power_jollof":{s=!0;const a=new Ge(.9,.45,.9),o=new Ue({color:16733986}),l=new le(a,o);l.position.y=1.2,t.add(l),n={w:1.8,h:2,d:1.8};break}case"power_naira":{s=!0;const a=new Ge(1,.4,.6),o=new Ue({color:3046706}),l=new le(a,o);l.position.y=1.2,t.add(l),n={w:1.8,h:2,d:1.8};break}case"power_siren":{s=!0;const a=new Mt(.4,.4,.6,12),o=new Nt({color:58879}),l=new le(a,o);l.position.y=1.2,t.add(l),n={w:1.8,h:2,d:1.8};break}case"passenger_stop":{r=!0;const a=new Ge(2.5,2.6,4),o=new Ue({color:16498733}),l=new le(a,o);l.position.set(0,1.3,0),t.add(l);for(let c=0;c<2;c++){const d=new le(new Ge(.35,.9,.35),new Ue({color:c===0?15277667:48340}));d.position.set(-.3+c*.6,.9,-.6+c*1.2),t.add(d)}n={w:2.2,h:2.6,d:3.8};break}}return this.scene.add(t),{type:e,mesh:t,colliderSize:n,isPowerUp:s,isPassenger:r,lane:0,collected:!1,hit:!1,dodged:!1,speedX:e==="okada"?Math.random()>.5?2.5:-2.5:0}}spawnAt(e,t,n){const s=this.getItem(e);return s.lane=t,s.mesh.position.set(t*this.laneWidth,0,n),s.collected=!1,s.hit=!1,s.dodged=!1,e==="passenger_stop"&&(s.mesh.position.x=1*this.laneWidth+1.6,s.lane=1),this.activeItems.push(s),s}update(e,t,n,s,r){this.spawnTimer+=e;const a=Math.max(.9,this.spawnInterval-n/50*.5);if(this.spawnTimer>=a||this.beatPulsePending&&this.spawnTimer>.6){this.spawnTimer=0,this.beatPulsePending=!1;const l=t+85+Math.random()*25,c=Math.random(),d=[-1,0,1],f=d[Math.floor(Math.random()*d.length)];if(t<180)if(c<.45)this.spawnAt("passenger_stop",1,l);else{const h=["power_fuel","conductor_drama","power_naira","power_purewater"],g=h[Math.floor(Math.random()*h.length)];this.spawnAt(g,f,l)}else if(c<.22)this.spawnAt("passenger_stop",1,l);else if(c<.45){const h=["power_fuel","power_generator","power_purewater","power_jollof","power_naira","power_siren","conductor_drama"],g=h[Math.floor(Math.random()*h.length)];this.spawnAt(g,f,l)}else{const h=["broken_truck","police_checkpoint","traffic_jam","pothole","flood","okada","market_hawker","fuel_scarcity","nepa_outage"],g=h[Math.floor(Math.random()*h.length)];if(g==="traffic_jam"){const v=d[Math.floor(Math.random()*d.length)];d.forEach(E=>{E!==v&&this.spawnAt("traffic_jam",E,l)})}else this.spawnAt(g,f,l)}}const o=s.getBoundingBox();for(let l=this.activeItems.length-1;l>=0;l--){const c=this.activeItems[l];if(c.mesh.position.z<t-20){this.activeItems.splice(l,1),this.recycleItem(c);continue}if(c.type==="okada"&&(c.mesh.position.x+=c.speedX*e,c.mesh.position.x>this.laneWidth*1.3?c.speedX=-Math.abs(c.speedX):c.mesh.position.x<-this.laneWidth*1.3&&(c.speedX=Math.abs(c.speedX))),(c.isPowerUp||c.type==="conductor_drama")&&(c.mesh.rotation.y+=e*3.5,c.mesh.position.y=Math.sin(Date.now()*.005+c.mesh.position.z)*.25),!c.hit&&!c.collected&&!c.dodged&&!c.isPowerUp&&!c.isPassenger&&c.mesh.position.z<t-1.5&&(c.dodged=!0,r&&r.onDodge&&r.onDodge(c.type)),!c.hit&&!c.collected){const d=new Jn;d.setFromCenterAndSize(new G(c.mesh.position.x,c.mesh.position.y+c.colliderSize.h*.5,c.mesh.position.z),new G(c.colliderSize.w,c.colliderSize.h,c.colliderSize.d)),o.intersectsBox(d)&&this.handleCollision(c,s,r)}}}handleCollision(e,t,n){if(n){if(e.isPowerUp){e.collected=!0,e.mesh.visible=!1,n.onPowerUp&&n.onPowerUp(e.type);return}if(e.isPassenger){e.collected=!0,e.mesh.visible=!1,n.onPassengerPickup&&n.onPassengerPickup();return}if(e.hit=!0,t.isShielded||t.isSirenActive){ut.playCoin(),n.onObstacleBash&&n.onObstacleBash(e.type),e.mesh.visible=!1;return}n.onObstacleHit&&n.onObstacleHit(e.type)}}clearAll(){this.activeItems.forEach(e=>this.recycleItem(e)),this.activeItems=[],this.spawnTimer=0,this.beatPulsePending=!1}}class sm{constructor(){this.handlers={onLeft:()=>{},onRight:()=>{},onBoost:()=>{},onBrake:()=>{},onHorn:()=>{},onRadioToggle:()=>{},onPauseToggle:()=>{}},this.isBoosting=!1,this.isBraking=!1,this.touchStartX=0,this.touchStartY=0,this.touchStartTime=0,this.minSwipeDistance=35,this.initKeyboard(),this.initTouch()}setHandlers(e){this.handlers={...this.handlers,...e}}setKeyFeedback(e,t){const n=document.getElementById(e);n&&(t?n.classList.add("key-active"):n.classList.remove("key-active"))}initKeyboard(){window.addEventListener("keydown",e=>{if(!(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"))switch(e.code){case"ArrowLeft":case"KeyA":this.setKeyFeedback("key-deck-left",!0),this.setKeyFeedback("btn-left",!0),this.handlers.onLeft();break;case"ArrowRight":case"KeyD":this.setKeyFeedback("key-deck-right",!0),this.setKeyFeedback("btn-right",!0),this.handlers.onRight();break;case"ArrowUp":case"KeyW":this.isBoosting=!0,this.setKeyFeedback("key-deck-boost",!0),this.setKeyFeedback("btn-boost",!0),this.handlers.onBoost(!0);break;case"ArrowDown":case"KeyS":this.isBraking=!0,this.setKeyFeedback("key-deck-brake",!0),this.setKeyFeedback("btn-brake",!0),this.handlers.onBrake(!0);break;case"Space":case"KeyH":e.preventDefault(),this.setKeyFeedback("key-deck-horn",!0),this.setKeyFeedback("btn-horn",!0),this.handlers.onHorn();break;case"KeyR":this.handlers.onRadioToggle();break;case"Escape":case"KeyP":this.handlers.onPauseToggle();break}}),window.addEventListener("keyup",e=>{if(!(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"))switch(e.code){case"ArrowLeft":case"KeyA":this.setKeyFeedback("key-deck-left",!1),this.setKeyFeedback("btn-left",!1);break;case"ArrowRight":case"KeyD":this.setKeyFeedback("key-deck-right",!1),this.setKeyFeedback("btn-right",!1);break;case"ArrowUp":case"KeyW":this.isBoosting=!1,this.setKeyFeedback("key-deck-boost",!1),this.setKeyFeedback("btn-boost",!1),this.handlers.onBoost(!1);break;case"ArrowDown":case"KeyS":this.isBraking=!1,this.setKeyFeedback("key-deck-brake",!1),this.setKeyFeedback("btn-brake",!1),this.handlers.onBrake(!1);break;case"Space":case"KeyH":this.setKeyFeedback("key-deck-horn",!1),this.setKeyFeedback("btn-horn",!1);break}})}initTouch(){let e=0;window.addEventListener("touchstart",t=>{if(t.target.closest(".interactive-ui")||t.target.tagName==="BUTTON"||t.target.closest("button"))return;const n=t.touches[0];this.touchStartX=n.clientX,this.touchStartY=n.clientY,this.touchStartTime=Date.now()},{passive:!0}),window.addEventListener("touchend",t=>{if(t.target.closest(".interactive-ui")||t.target.tagName==="BUTTON"||t.target.closest("button"))return;const n=t.changedTouches[0],s=n.clientX-this.touchStartX,r=n.clientY-this.touchStartY,a=Date.now(),o=a-this.touchStartTime,l=Math.abs(s),c=Math.abs(r);l>this.minSwipeDistance&&l>c?s>0?this.handlers.onRight():this.handlers.onLeft():c>this.minSwipeDistance&&c>l?r<0?(this.handlers.onBoost(!0),setTimeout(()=>this.handlers.onBoost(!1),500)):(this.handlers.onBrake(!0),setTimeout(()=>this.handlers.onBrake(!1),500)):o<250&&l<15&&c<15&&(a-e<300?(this.handlers.onHorn(),e=0):e=a)},{passive:!0})}bindOnScreenButtons(){const e=(t,n,s)=>{const r=document.getElementById(t);if(!r)return;const a=l=>{if(l&&l.cancelable&&l.preventDefault(),l&&l.pointerId!==void 0)try{r.setPointerCapture(l.pointerId)}catch{}r.classList.add("key-active"),n()},o=l=>{if(l&&l.cancelable&&l.preventDefault(),l&&l.pointerId!==void 0)try{r.releasePointerCapture(l.pointerId)}catch{}r.classList.remove("key-active"),s&&s()};r.addEventListener("pointerdown",a),s?(r.addEventListener("pointerup",o),r.addEventListener("pointercancel",o)):(r.addEventListener("pointerup",l=>{l&&l.cancelable&&l.preventDefault(),r.classList.remove("key-active")}),r.addEventListener("pointercancel",l=>{l&&l.cancelable&&l.preventDefault(),r.classList.remove("key-active")}))};e("btn-left",()=>this.handlers.onLeft()),e("btn-right",()=>this.handlers.onRight()),e("btn-boost",()=>this.handlers.onBoost(!0),()=>this.handlers.onBoost(!1)),e("btn-brake",()=>this.handlers.onBrake(!0),()=>this.handlers.onBrake(!1)),e("btn-horn",()=>this.handlers.onHorn()),e("key-deck-left",()=>this.handlers.onLeft()),e("key-deck-right",()=>this.handlers.onRight()),e("key-deck-boost",()=>this.handlers.onBoost(!0),()=>this.handlers.onBoost(!1)),e("key-deck-brake",()=>this.handlers.onBrake(!0),()=>this.handlers.onBrake(!1)),e("key-deck-horn",()=>this.handlers.onHorn())}}const gl=new sm;class rm{constructor(){this.container=document.getElementById("hud-container"),this.elements={},this.initElements()}initElements(){this.elements.playerName=document.getElementById("hud-player-name"),this.elements.playerAvatar=document.getElementById("hud-player-avatar"),this.elements.speedValue=document.getElementById("hud-speed-value"),this.elements.healthBar=document.getElementById("hud-health-fill"),this.elements.healthValue=document.getElementById("hud-health-text"),this.elements.fuelBar=document.getElementById("hud-fuel-fill"),this.elements.fuelValue=document.getElementById("hud-fuel-text"),this.elements.nairaValue=document.getElementById("hud-naira-value"),this.elements.passengerValue=document.getElementById("hud-passenger-value"),this.elements.scoreValue=document.getElementById("hud-score-value"),this.elements.dodgedValue=document.getElementById("hud-dodged-value"),this.elements.routeCurrent=document.getElementById("hud-route-current"),this.elements.routeNext=document.getElementById("hud-route-next"),this.elements.routeProgress=document.getElementById("hud-route-fill"),this.elements.missionText=document.getElementById("hud-mission-text"),this.elements.radioTicker=document.getElementById("hud-radio-ticker"),this.elements.luggageStatus=document.getElementById("hud-luggage-status"),this.elements.playerFace=document.getElementById("hud-player-face"),this.elements.playerAccount=document.getElementById("hud-player-account"),this.elements.btnSignIn=document.getElementById("btn-startng-signin")}setPlayer(e){if(e&&(this.elements.playerName&&(this.elements.playerName.textContent=e.name),this.elements.playerAccount&&(this.elements.playerAccount.textContent=e.account?`@${e.account}`:"Driver"),this.elements.playerFace&&e.face?(this.elements.playerFace.src=e.face,this.elements.playerFace.classList.remove("hidden"),this.elements.playerAvatar&&this.elements.playerAvatar.classList.add("hidden")):this.elements.playerAvatar&&(this.elements.playerAvatar.textContent=e.avatar||"🧢",this.elements.playerAvatar.classList.remove("hidden"),this.elements.playerFace&&this.elements.playerFace.classList.add("hidden")),this.elements.btnSignIn)){const t=!e.id||e.id==="guest";this.elements.btnSignIn.classList.toggle("hidden",!t),this.elements.btnSignIn.onclick=()=>{window.location.href=`https://start.ng/?return_to=${encodeURIComponent(window.location.origin+window.location.pathname)}`}}}updateRadioTicker(e){this.elements.radioTicker&&(this.elements.radioTicker.textContent=e)}update(e){const t=Math.floor(e.speed*2.2);this.elements.speedValue&&(this.elements.speedValue.textContent=`${t} KM/H`);const n=Math.max(0,Math.min(100,Math.floor(e.health)));this.elements.healthBar&&(this.elements.healthBar.style.width=`${n}%`,n<25?this.elements.healthBar.style.backgroundColor="#d50000":n<55?this.elements.healthBar.style.backgroundColor="#ff9800":this.elements.healthBar.style.backgroundColor="#00e676"),this.elements.healthValue&&(this.elements.healthValue.textContent=`${n}%`);const s=Math.max(0,Math.min(100,Math.floor(e.fuel)));this.elements.fuelBar&&(this.elements.fuelBar.style.width=`${s}%`,s<25?this.elements.fuelBar.style.backgroundColor="#ff1744":this.elements.fuelBar.style.backgroundColor="#ffb300"),this.elements.fuelValue&&(this.elements.fuelValue.textContent=`${s}%`),this.elements.nairaValue&&(this.elements.nairaValue.textContent=`₦${e.naira.toLocaleString()}`),this.elements.scoreValue&&(this.elements.scoreValue.textContent=Math.floor(e.score).toLocaleString()),this.elements.dodgedValue&&(this.elements.dodgedValue.textContent=e.dodgedCount!==void 0?e.dodgedCount:0),this.elements.passengerValue&&(this.elements.passengerValue.textContent=`${e.passengers} Commuters`),this.elements.luggageStatus&&(e.passengers===0?this.elements.luggageStatus.textContent="🧳 Roof Empty":e.passengers<=3?this.elements.luggageStatus.textContent="🧳 Packing...":e.passengers<=6?this.elements.luggageStatus.textContent="🧳 Roof Loaded":this.elements.luggageStatus.textContent="🧳 Roof Overloaded!"),this.elements.routeCurrent&&(this.elements.routeCurrent.textContent=e.checkpointCurrent),this.elements.routeNext&&(this.elements.routeNext.textContent=`Next: ${e.checkpointNext}`),this.elements.routeProgress&&(this.elements.routeProgress.style.width=`${Math.min(100,e.checkpointProgress*100)}%`),this.elements.missionText&&e.activeMission&&(this.elements.missionText.textContent=`🎯 ${e.activeMission.title} (${e.activeMission.current}/${e.activeMission.target})`)}show(){this.container&&this.container.classList.remove("hidden")}hide(){this.container&&this.container.classList.add("hidden")}}var va={};(function i(e,t,n,s){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=(function(){if(!e.OffscreenCanvas)return!1;try{var R=new OffscreenCanvas(1,1),T=R.getContext("2d");T.fillRect(0,0,1,1);var te=R.transferToImageBitmap();T.createPattern(te,"no-repeat")}catch{return!1}return!0})();function l(){}function c(R){var T=t.exports.Promise,te=T!==void 0?T:e.Promise;return typeof te=="function"?new te(R):(R(l,l),null)}var d=(function(R,T){return{transform:function(te){if(R)return te;if(T.has(te))return T.get(te);var ie=new OffscreenCanvas(te.width,te.height),be=ie.getContext("2d");return be.drawImage(te,0,0),T.set(te,ie),ie},clear:function(){T.clear()}}})(o,new Map),f=(function(){var R=Math.floor(16.666666666666668),T,te,ie={},be=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(T=function(_e){var Se=Math.random();return ie[Se]=requestAnimationFrame(function B(q){be===q||be+R-1<q?(be=q,delete ie[Se],_e()):ie[Se]=requestAnimationFrame(B)}),Se},te=function(_e){ie[_e]&&cancelAnimationFrame(ie[_e])}):(T=function(_e){return setTimeout(_e,R)},te=function(_e){return clearTimeout(_e)}),{frame:T,cancel:te}})(),h=(function(){var R,T,te={};function ie(be){function _e(Se,B){be.postMessage({options:Se||{},callback:B})}be.init=function(B){var q=B.transferControlToOffscreen();be.postMessage({canvas:q},[q])},be.fire=function(B,q,ae){if(T)return _e(B,null),T;var ye=Math.random().toString(36).slice(2);return T=c(function(re){function Ce(Ye){Ye.data.callback===ye&&(delete te[ye],be.removeEventListener("message",Ce),T=null,d.clear(),ae(),re())}be.addEventListener("message",Ce),_e(B,ye),te[ye]=Ce.bind(null,{data:{callback:ye}})}),T},be.reset=function(){be.postMessage({reset:!0});for(var B in te)te[B](),delete te[B]}}return function(){if(R)return R;if(!n&&r){var be=["var CONFETTI, SIZE = {}, module = {};","("+i.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{R=new Worker(URL.createObjectURL(new Blob([be])))}catch(_e){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",_e),null}ie(R)}return R}})(),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(R,T){return T?T(R):R}function E(R){return R!=null}function p(R,T,te){return v(R&&E(R[T])?R[T]:g[T],te)}function u(R){return R<0?0:Math.floor(R)}function w(R,T){return Math.floor(Math.random()*(T-R))+R}function P(R){return parseInt(R,16)}function M(R){return R.map(S)}function S(R){var T=String(R).replace(/[^0-9a-f]/gi,"");return T.length<6&&(T=T[0]+T[0]+T[1]+T[1]+T[2]+T[2]),{r:P(T.substring(0,2)),g:P(T.substring(2,4)),b:P(T.substring(4,6))}}function y(R){var T=p(R,"origin",Object);return T.x=p(T,"x",Number),T.y=p(T,"y",Number),T}function C(R){R.width=document.documentElement.clientWidth,R.height=document.documentElement.clientHeight}function _(R){var T=R.getBoundingClientRect();R.width=T.width,R.height=T.height}function b(R){var T=document.createElement("canvas");return T.style.position="fixed",T.style.top="0px",T.style.left="0px",T.style.pointerEvents="none",T.style.zIndex=R,T}function L(R,T,te,ie,be,_e,Se,B,q){R.save(),R.translate(T,te),R.rotate(_e),R.scale(ie,be),R.arc(0,0,1,Se,B,q),R.restore()}function U(R){var T=R.angle*(Math.PI/180),te=R.spread*(Math.PI/180);return{x:R.x,y:R.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:R.startVelocity*.5+Math.random()*R.startVelocity,angle2D:-T+(.5*te-Math.random()*te),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:R.color,shape:R.shape,tick:0,totalTicks:R.ticks,decay:R.decay,drift:R.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:R.gravity*3,ovalScalar:.6,scalar:R.scalar,flat:R.flat}}function O(R,T){T.x+=Math.cos(T.angle2D)*T.velocity+T.drift,T.y+=Math.sin(T.angle2D)*T.velocity+T.gravity,T.velocity*=T.decay,T.flat?(T.wobble=0,T.wobbleX=T.x+10*T.scalar,T.wobbleY=T.y+10*T.scalar,T.tiltSin=0,T.tiltCos=0,T.random=1):(T.wobble+=T.wobbleSpeed,T.wobbleX=T.x+10*T.scalar*Math.cos(T.wobble),T.wobbleY=T.y+10*T.scalar*Math.sin(T.wobble),T.tiltAngle+=.1,T.tiltSin=Math.sin(T.tiltAngle),T.tiltCos=Math.cos(T.tiltAngle),T.random=Math.random()+2);var te=T.tick++/T.totalTicks,ie=T.x+T.random*T.tiltCos,be=T.y+T.random*T.tiltSin,_e=T.wobbleX+T.random*T.tiltCos,Se=T.wobbleY+T.random*T.tiltSin;if(R.fillStyle="rgba("+T.color.r+", "+T.color.g+", "+T.color.b+", "+(1-te)+")",R.beginPath(),a&&T.shape.type==="path"&&typeof T.shape.path=="string"&&Array.isArray(T.shape.matrix))R.fill(K(T.shape.path,T.shape.matrix,T.x,T.y,Math.abs(_e-ie)*.1,Math.abs(Se-be)*.1,Math.PI/10*T.wobble));else if(T.shape.type==="bitmap"){var B=Math.PI/10*T.wobble,q=Math.abs(_e-ie)*.1,ae=Math.abs(Se-be)*.1,ye=T.shape.bitmap.width*T.scalar,re=T.shape.bitmap.height*T.scalar,Ce=new DOMMatrix([Math.cos(B)*q,Math.sin(B)*q,-Math.sin(B)*ae,Math.cos(B)*ae,T.x,T.y]);Ce.multiplySelf(new DOMMatrix(T.shape.matrix));var Ye=R.createPattern(d.transform(T.shape.bitmap),"no-repeat");Ye.setTransform(Ce),R.globalAlpha=1-te,R.fillStyle=Ye,R.fillRect(T.x-ye/2,T.y-re/2,ye,re),R.globalAlpha=1}else if(T.shape==="circle")R.ellipse?R.ellipse(T.x,T.y,Math.abs(_e-ie)*T.ovalScalar,Math.abs(Se-be)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI):L(R,T.x,T.y,Math.abs(_e-ie)*T.ovalScalar,Math.abs(Se-be)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI);else if(T.shape==="star")for(var ve=Math.PI/2*3,Be=4*T.scalar,qe=8*T.scalar,Oe=T.x,Je=T.y,at=5,ct=Math.PI/at;at--;)Oe=T.x+Math.cos(ve)*qe,Je=T.y+Math.sin(ve)*qe,R.lineTo(Oe,Je),ve+=ct,Oe=T.x+Math.cos(ve)*Be,Je=T.y+Math.sin(ve)*Be,R.lineTo(Oe,Je),ve+=ct;else R.moveTo(Math.floor(T.x),Math.floor(T.y)),R.lineTo(Math.floor(T.wobbleX),Math.floor(be)),R.lineTo(Math.floor(_e),Math.floor(Se)),R.lineTo(Math.floor(ie),Math.floor(T.wobbleY));return R.closePath(),R.fill(),T.tick<T.totalTicks}function X(R,T,te,ie,be){var _e=T.slice(),Se=R.getContext("2d"),B,q,ae=c(function(ye){function re(){B=q=null,Se.clearRect(0,0,ie.width,ie.height),d.clear(),be(),ye()}function Ce(){n&&!(ie.width===s.width&&ie.height===s.height)&&(ie.width=R.width=s.width,ie.height=R.height=s.height),!ie.width&&!ie.height&&(te(R),ie.width=R.width,ie.height=R.height),Se.clearRect(0,0,ie.width,ie.height),_e=_e.filter(function(Ye){return O(Se,Ye)}),_e.length?B=f.frame(Ce):re()}B=f.frame(Ce),q=re});return{addFettis:function(ye){return _e=_e.concat(ye),ae},canvas:R,promise:ae,reset:function(){B&&f.cancel(B),q&&q()}}}function N(R,T){var te=!R,ie=!!p(T||{},"resize"),be=!1,_e=p(T,"disableForReducedMotion",Boolean),Se=r&&!!p(T||{},"useWorker"),B=Se?h():null,q=te?C:_,ae=R&&B?!!R.__confetti_initialized:!1,ye=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,re;function Ce(ve,Be,qe){for(var Oe=p(ve,"particleCount",u),Je=p(ve,"angle",Number),at=p(ve,"spread",Number),ct=p(ve,"startVelocity",Number),ht=p(ve,"decay",Number),mt=p(ve,"gravity",Number),F=p(ve,"drift",Number),St=p(ve,"colors",M),et=p(ve,"ticks",Number),A=p(ve,"shapes"),m=p(ve,"scalar"),k=!!p(ve,"flat"),W=y(ve),$=Oe,oe=[],ce=R.width*W.x,J=R.height*W.y;$--;)oe.push(U({x:ce,y:J,angle:Je,spread:at,startVelocity:ct,color:St[$%St.length],shape:A[w(0,A.length)],ticks:et,decay:ht,gravity:mt,drift:F,scalar:m,flat:k}));return re?re.addFettis(oe):(re=X(R,oe,q,Be,qe),re.promise)}function Ye(ve){var Be=_e||p(ve,"disableForReducedMotion",Boolean),qe=p(ve,"zIndex",Number);if(Be&&ye)return c(function(ct){ct()});te&&re?R=re.canvas:te&&!R&&(R=b(qe),document.body.appendChild(R)),ie&&!ae&&q(R);var Oe={width:R.width,height:R.height};B&&!ae&&B.init(R),ae=!0,B&&(R.__confetti_initialized=!0);function Je(){if(B){var ct={getBoundingClientRect:function(){if(!te)return R.getBoundingClientRect()}};q(ct),B.postMessage({resize:{width:ct.width,height:ct.height}});return}Oe.width=Oe.height=null}function at(){re=null,ie&&(be=!1,e.removeEventListener("resize",Je)),te&&R&&(document.body.contains(R)&&document.body.removeChild(R),R=null,ae=!1)}return ie&&!be&&(be=!0,e.addEventListener("resize",Je,!1)),B?B.fire(ve,Oe,at):Ce(ve,Oe,at)}return Ye.reset=function(){B&&B.reset(),re&&re.reset()},Ye}var z;function Q(){return z||(z=N(null,{useWorker:!0,resize:!0})),z}function K(R,T,te,ie,be,_e,Se){var B=new Path2D(R),q=new Path2D;q.addPath(B,new DOMMatrix(T));var ae=new Path2D;return ae.addPath(q,new DOMMatrix([Math.cos(Se)*be,Math.sin(Se)*be,-Math.sin(Se)*_e,Math.cos(Se)*_e,te,ie])),ae}function se(R){if(!a)throw new Error("path confetti are not supported in this browser");var T,te;typeof R=="string"?T=R:(T=R.path,te=R.matrix);var ie=new Path2D(T),be=document.createElement("canvas"),_e=be.getContext("2d");if(!te){for(var Se=1e3,B=Se,q=Se,ae=0,ye=0,re,Ce,Ye=0;Ye<Se;Ye+=2)for(var ve=0;ve<Se;ve+=2)_e.isPointInPath(ie,Ye,ve,"nonzero")&&(B=Math.min(B,Ye),q=Math.min(q,ve),ae=Math.max(ae,Ye),ye=Math.max(ye,ve));re=ae-B,Ce=ye-q;var Be=10,qe=Math.min(Be/re,Be/Ce);te=[qe,0,0,qe,-Math.round(re/2+B)*qe,-Math.round(Ce/2+q)*qe]}return{type:"path",path:T,matrix:te}}function Z(R){var T,te=1,ie="#000000",be='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof R=="string"?T=R:(T=R.text,te="scalar"in R?R.scalar:te,be="fontFamily"in R?R.fontFamily:be,ie="color"in R?R.color:ie);var _e=10*te,Se=""+_e+"px "+be,B=new OffscreenCanvas(_e,_e),q=B.getContext("2d");q.font=Se;var ae=q.measureText(T),ye=Math.ceil(ae.actualBoundingBoxRight+ae.actualBoundingBoxLeft),re=Math.ceil(ae.actualBoundingBoxAscent+ae.actualBoundingBoxDescent),Ce=2,Ye=ae.actualBoundingBoxLeft+Ce,ve=ae.actualBoundingBoxAscent+Ce;ye+=Ce+Ce,re+=Ce+Ce,B=new OffscreenCanvas(ye,re),q=B.getContext("2d"),q.font=Se,q.fillStyle=ie,q.fillText(T,Ye,ve);var Be=1/te;return{type:"bitmap",bitmap:B.transferToImageBitmap(),matrix:[Be,0,0,Be,-ye*Be/2,-re*Be/2]}}t.exports=function(){return Q().apply(this,arguments)},t.exports.reset=function(){Q().reset()},t.exports.create=N,t.exports.shapeFromPath=se,t.exports.shapeFromText=Z})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),va,!1);const ta=va.exports;va.exports.create;class am{constructor(e){this.canvas=e,this.renderer=new em(e),this.world=new tm(this.renderer.scene),this.danfoBus=new nm,this.renderer.scene.add(this.danfoBus.mesh),this.obstacleManager=new im(this.renderer.scene),this.hud=new rm,this.screens=null,this.isRunning=!1,this.isPaused=!1,this.isGameOver=!1,this.difficulty=localStorage.getItem("lagos_driving_mode_pref")||"normal",this.setDifficulty(this.difficulty),this.distance=0,this.score=0,this.naira=0,this.passengers=0,this.health=100,this.fuel=100,this.checkpoints=[{name:"Oshodi Terminal",distance:0},{name:"Ojuelegba Flyover",distance:450},{name:"Maryland Bustop",distance:1e3},{name:"Ikeja Under Bridge",distance:1700},{name:"Third Mainland Bridge",distance:2600},{name:"Victoria Island",distance:3600}],this.checkpointIndex=0,this.missions=[{id:"passengers",title:"Carry 8 passengers to Ikeja",current:0,target:8,reward:5e3},{id:"dodge",title:"Dodge 15 Lagos obstacles",current:0,target:15,reward:6e3},{id:"checkpoint",title:"Reach Maryland Bus Stop",current:0,target:1e3,reward:8e3}],this.missionIndex=0,this.dodgedCount=0,this.powerUpTimers={generator:0,jollof:0,siren:0,nairaMultiplier:0,nepaBlackout:0},this.lastTime=0,this.lastSummary=null,this.animFrameId=null,this.isBoosting=!1,this.isBraking=!1,this.setupInput()}setScreens(e){this.screens=e}setupInput(){gl.setHandlers({onLeft:()=>{!this.isRunning||this.isPaused||this.danfoBus.shiftLeft()},onRight:()=>{!this.isRunning||this.isPaused||this.danfoBus.shiftRight()},onBoost:e=>{this.isBoosting=!!e},onBrake:e=>{this.isBraking=!!e},onHorn:()=>{ut.playHorn(),this.renderer.triggerScreenShake(.1)},onRadioToggle:()=>{Wn.nextStation()},onPauseToggle:()=>{this.isRunning&&!this.isGameOver&&this.togglePause()}}),Wn.onChange(e=>{this.hud.updateRadioTicker(e.tickerText)})}setDifficulty(e){this.difficulty=e||"normal",localStorage.setItem("lagos_driving_mode_pref",this.difficulty),this.difficulty==="relaxed"?(this.baseSpeed=16,this.maxSpeed=44,this.maxDistanceRamp=14,this.speedAccelRate=.005,this.scoreMult=1):this.difficulty==="hardcore"?(this.baseSpeed=28,this.maxSpeed=80,this.maxDistanceRamp=35,this.speedAccelRate=.018,this.scoreMult=2):(this.baseSpeed=22,this.maxSpeed=64,this.maxDistanceRamp=22,this.speedAccelRate=.01,this.scoreMult=1.3),this.isRunning||(this.speed=this.baseSpeed,this.targetSpeed=this.baseSpeed)}start(){this.isRunning=!0,this.isPaused=!1,this.isGameOver=!1,this.speed=this.baseSpeed,this.targetSpeed=this.baseSpeed,this.distance=0,this.score=0,this.naira=0,this.passengers=0,this.health=100,this.fuel=100,this.checkpointIndex=0,this.missionIndex=0,this.missions[0].current=0,this.dodgedCount=0,this.danfoBus.mesh.position.set(0,0,0),this.danfoBus.setLane(0),this.danfoBus.updateLuggage(0),this.danfoBus.setShield(!1),this.danfoBus.setSiren(!1),this.obstacleManager.clearAll(),this.renderer.setNepaBlackout(!1);const e=Qt.getUser();this.hud.setPlayer(e),e&&e.style&&this.danfoBus.applyCharacterStyle(e.style),this.hud.show(),this.screens.hideAllScreens(),Wn.play(),ft.show("game_start",`Driver: ${e?e.name:"Agba Driver"}`),this.isBoosting=!1,this.isBraking=!1,this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null),this.lastTime=performance.now(),this.animFrameId=requestAnimationFrame(t=>this.loop(t))}stop(){this.isRunning=!1,this.isPaused=!1,this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null),Wn.stop(),this.hud.hide()}togglePause(){return this.isPaused=!this.isPaused,this.isPaused?(this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null),this.screens.showScreen("pause")):(this.screens.hideAllScreens(),this.lastTime=performance.now(),this.animFrameId&&cancelAnimationFrame(this.animFrameId),this.animFrameId=requestAnimationFrame(e=>this.loop(e))),this.isPaused}loop(e){if(!this.isRunning||this.isPaused){this.animFrameId=null;return}const t=Math.min((e-this.lastTime)/1e3,.1);this.lastTime=e;try{this.update(t),this.renderer.render()}catch(n){console.error("Game loop tick error:",n)}this.isRunning&&!this.isGameOver&&!this.isPaused?this.animFrameId=requestAnimationFrame(n=>this.loop(n)):this.animFrameId=null}update(e){const t=Math.min(this.maxDistanceRamp,this.distance*this.speedAccelRate);let n=this.baseSpeed+t;this.powerUpTimers.jollof>0&&(n+=20),this.isBoosting&&(n+=16),this.isBraking&&(n=Math.max(10,n-12)),this.speed+=(n-this.speed)*Math.min(1,2.8*e);const s=this.speed*e;this.danfoBus.mesh.position.z+=s,this.distance+=s,this.score+=s*1.5*this.scoreMult;const r=this.powerUpTimers.jollof>0?.7:.35;if(this.fuel=Math.max(0,this.fuel-r*e),this.fuel<20&&Math.random()<.008&&ft.show("fuel_low"),this.fuel<=0){this.triggerGameOver("Fuel Finished! Tank Empty ⛽");return}if(this.health<=0){this.triggerGameOver("Bus Health Depleted 💥");return}this.updatePowerUpTimers(e),this.danfoBus.update(e,this.speed),this.world.update(this.danfoBus.mesh.position.z,this.speed,e),this.obstacleManager.update(e,this.danfoBus.mesh.position.z,this.speed,this.danfoBus,{onObstacleHit:d=>this.handleObstacleHit(d),onObstacleBash:d=>this.handleObstacleBash(d),onPowerUp:d=>this.handlePowerUp(d),onPassengerPickup:()=>this.handlePassengerPickup(),onDodge:d=>this.handleDodge(d)}),this.renderer.updateCamera(this.danfoBus.mesh.position,e),this.updateCheckpoints();const a=this.checkpoints[this.checkpointIndex],o=this.checkpoints[Math.min(this.checkpoints.length-1,this.checkpointIndex+1)],l=Math.max(1,o.distance-a.distance),c=(this.distance-a.distance)/l;this.hud.update({speed:this.speed,health:this.health,fuel:this.fuel,score:this.score,naira:this.naira,passengers:this.passengers,dodgedCount:this.dodgedCount,checkpointCurrent:a.name,checkpointNext:o.name,checkpointProgress:c,activeMission:this.missions[this.missionIndex]})}updatePowerUpTimers(e){this.powerUpTimers.generator>0&&(this.powerUpTimers.generator-=e,this.powerUpTimers.generator<=0&&this.danfoBus.setShield(!1)),this.powerUpTimers.jollof>0&&(this.powerUpTimers.jollof-=e,this.powerUpTimers.jollof<=0&&(this.targetSpeed=22)),this.powerUpTimers.siren>0&&(this.powerUpTimers.siren-=e,this.powerUpTimers.siren<=0&&this.danfoBus.setSiren(!1)),this.powerUpTimers.nairaMultiplier>0&&(this.powerUpTimers.nairaMultiplier-=e),this.powerUpTimers.nepaBlackout>0&&(this.powerUpTimers.nepaBlackout-=e,this.powerUpTimers.nepaBlackout<=0&&this.renderer.setNepaBlackout(!1))}handleObstacleHit(e){if(this.isGameOver||!this.isRunning)return;if(e==="broken_truck"||e==="police_checkpoint"||e==="traffic_jam"){this.renderer.triggerScreenShake(.85),this.speed=0,this.health=0,ut.playPothole();let a="YOU HIT A ROAD BLOCK! 🚧";e==="broken_truck"?(a="Slammed into Stalled Broken Trailer! 🚛",ft.show("pothole","Direct collision with broken-down truck!")):e==="police_checkpoint"?(a="Crashed into Police Barricade! 👮🏾‍♂️",ut.playSiren(),ft.show("police_checkpoint","You hit police checkpoint barricade!")):e==="traffic_jam"&&(a="Slammed into Go-Slow Traffic Jam! 🚗",ft.show("traffic_jam","Direct collision with go-slow cars!")),setTimeout(()=>{this.isGameOver||this.triggerGameOver(a)},250);return}let n=25,s="Road hazard impact!",r="Bus Health Depleted 💥";e==="pothole"?(n=25,s="Oshodi pothole! -25% Health 🕳️",r="Engine Smashed by Oshodi Pothole! 🕳️",ut.playPothole(),this.renderer.triggerScreenShake(.35),this.speed=Math.max(14,this.speed-6)):e==="flood"?(n=20,s="Kuramo flood splash! -20% Health 🌊",r="Engine Drowned by Flood Waters! 🌊",ut.playSplash(),this.danfoBus.triggerSpin(),this.renderer.triggerScreenShake(.3)):e==="okada"?(n=25,s="Okada bike scrape! -25% Health 🏍️",r="Wrecked by Okada Collision! 🏍️",ut.playHorn(),this.renderer.triggerScreenShake(.35)):e==="market_hawker"?(n=20,s="Market hawker bump! -20% Health 🧺",r="Crashed into Market Stalls! 🧺",ut.playPothole(),this.renderer.triggerScreenShake(.3)):e==="fuel_scarcity"?(n=25,s="Jerrycan barricade bump! -25% Health ⛽",r="Smashed into Fuel Queue! ⛽",ut.playPothole(),this.renderer.triggerScreenShake(.35)):e==="nepa_outage"&&(n=20,s="NEPA pole bump! -20% Health 💡",r="Crashed in NEPA Total Darkness! 💡",ut.playNepa(),this.renderer.triggerScreenShake(.3)),this.health=Math.max(0,this.health-n),ft.show("pothole",`${s} (${this.health}% Health Left)`),this.health<=0&&(this.speed=0,setTimeout(()=>{this.isGameOver||this.triggerGameOver(r)},250))}handleDodge(e){this.dodgedCount++,this.score+=250;const t=this.missions[this.missionIndex];t&&t.id==="dodge"&&(t.current=this.dodgedCount,t.current>=t.target&&this.completeMission(t))}handleObstacleBash(e){this.renderer.triggerScreenShake(.2),this.score+=400,ft.show("power_up_generator",`Bashed through ${e}!`),this.onDodgeOrBash()}handlePowerUp(e){switch(ut.playPowerUp(),e){case"power_fuel":this.fuel=Math.min(100,this.fuel+45),ft.show("power_up_fuel","+45% Fuel Tank!");break;case"power_generator":this.powerUpTimers.generator=8,this.danfoBus.setShield(!0),ft.show("power_up_generator","Tiger Generator Shield (8s)!");break;case"power_purewater":this.health=Math.min(100,this.health+35),ft.show("power_up_purewater","+35% Bus Health Restored!");break;case"power_jollof":this.powerUpTimers.jollof=6,this.targetSpeed=this.speed+22,ft.show("power_up_jollof","Party Jollof Turbo Boost!");break;case"power_naira":this.powerUpTimers.nairaMultiplier=12;const t=3e3;this.naira+=t,ft.show("power_up_naira",`+₦${t} & 2x Multiplier Active!`);break;case"conductor_drama":this.naira+=1e3,this.score+=500,ut.playCoin(),ft.show("naira_collected","+₦1,000 Conductor change picked! 🪙");break;case"power_siren":this.powerUpTimers.siren=9,this.danfoBus.setSiren(!0),ft.show("power_up_siren","VIP Siren Escort Active!");break}}handlePassengerPickup(){this.passengers++;const e=this.powerUpTimers.nairaMultiplier>0?2:1,t=1500*e;this.naira+=t,this.score+=500*e,ut.playPassengerOwa(),this.danfoBus.updateLuggage(this.passengers),ft.show("passenger_pickup",`+${t} Naira fare collected!`);const n=this.missions[this.missionIndex];n&&n.id==="passengers"&&(n.current=this.passengers,n.current>=n.target&&this.completeMission(n))}onDodgeOrBash(){this.dodgedCount++;const e=this.missions[this.missionIndex];e&&e.id==="dodge"&&(e.current=this.dodgedCount,e.current>=e.target&&this.completeMission(e))}updateCheckpoints(){const e=this.checkpointIndex+1;if(e<this.checkpoints.length){const t=this.checkpoints[e];if(this.distance>=t.distance){this.checkpointIndex=e,this.fuel=Math.min(100,this.fuel+30),this.naira+=5e3,this.score+=2500,ut.playCoin(),ft.show("checkpoint_reached",`${t.name} Reached! +₦5,000 Bonus!`),ta({particleCount:50,spread:60,origin:{y:.7}});const n=this.missions[this.missionIndex];n&&n.id==="checkpoint"&&(n.current=this.distance,n.current>=n.target&&this.completeMission(n))}}}completeMission(e){this.naira+=e.reward,this.score+=e.reward,ft.show("high_score",`Mission Complete: ${e.title}! +₦${e.reward}`),ta({particleCount:70,spread:80,origin:{y:.5}}),this.missionIndex=(this.missionIndex+1)%this.missions.length,this.missions[this.missionIndex].current=0}checkHealthAndFuel(){(this.health<=0||this.fuel<=0)&&this.triggerGameOver()}async triggerGameOver(e="Lagos Obstacle Collision 💥"){if(this.isGameOver)return;this.isGameOver=!0,this.isRunning=!1,this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null),Wn.stop(),this.hud.hide();const t=this.checkpoints[this.checkpointIndex],n={score:this.score,naira:this.naira,passengers:this.passengers,bestRoute:t.name,dodgedCount:this.dodgedCount,dodges:this.dodgedCount,distance:this.distance,crashReason:e},s=await Qt.saveScore(n);n.isNewHigh=s?s.isNewHigh:!1,this.lastSummary=n,this.screens.showGameOver(n)}}class om{constructor(e){this.game=e,this.activeScreen=null,this.initScreens()}initScreens(){this.screens={start:document.getElementById("screen-start"),login:document.getElementById("screen-login"),pause:document.getElementById("screen-pause"),settings:document.getElementById("screen-settings"),leaderboard:document.getElementById("screen-leaderboard"),gameover:document.getElementById("screen-gameover")},this.bindEvents(),this.populateThemePresets()}showScreen(e){Object.keys(this.screens).forEach(t=>{const n=this.screens[t];n&&(t===e?(n.classList.remove("hidden"),n.classList.add("active")):(n.classList.add("hidden"),n.classList.remove("active")))}),this.activeScreen=e}hideAllScreens(){Object.keys(this.screens).forEach(e=>{const t=this.screens[e];t&&(t.classList.add("hidden"),t.classList.remove("active"))}),this.activeScreen=null}bindEvents(){const e=document.getElementById("btn-start-trip");e&&e.addEventListener("click",()=>{ut.unlockOnUserGesture(),Qt.isLoggedIn()?this.game.start():this.showScreen("login")});const t=document.getElementById("btn-open-settings");t&&t.addEventListener("click",()=>this.showScreen("settings"));const n=document.getElementById("btn-open-leaderboard");n&&n.addEventListener("click",()=>{this.renderLeaderboard(),this.showScreen("leaderboard")});const s=document.getElementById("btn-login-submit"),r=document.getElementById("login-username-input");s&&r&&s.addEventListener("click",C=>{C.preventDefault();const _=r.value.trim();_&&(Qt.loginWithCredentials(_),this.updateUserBadges(),this.showScreen("start"))}),document.querySelectorAll(".btn-demo-login").forEach(C=>{C.addEventListener("click",()=>{const _=parseInt(C.dataset.index||"0",10);Qt.loginWithDemo(_),this.updateUserBadges(),this.showScreen("start")})});const a=document.getElementById("btn-close-settings");a&&a.addEventListener("click",()=>{this.game.isRunning&&this.game.isPaused?this.showScreen("pause"):this.showScreen("start")});const o=document.getElementById("slider-master-volume");o&&o.addEventListener("input",C=>{ut.setMasterVolume(parseFloat(C.target.value))});const l=document.getElementById("slider-music-volume");l&&l.addEventListener("input",C=>{ut.setMusicVolume(parseFloat(C.target.value))});const c=document.getElementById("slider-sfx-volume");c&&c.addEventListener("input",C=>{ut.setSfxVolume(parseFloat(C.target.value))});const d=document.getElementById("select-driving-mode");if(d){const C=localStorage.getItem("lagos_driving_mode_pref")||"normal";d.value=C,d.addEventListener("change",_=>{const b=_.target.value;this.game.setDifficulty(b);const L={relaxed:"Relaxed Commute active (slower pace) 🛣️",normal:"Lagos Rush active! 🚍",hardcore:"Crazy Okada active! Double points! ⚡"};ft.show("power_up_generator",L[b]||"Mode updated!")})}const f=document.getElementById("select-touch-controls"),h=document.getElementById("touch-controls"),g=C=>{localStorage.setItem("lagos_touch_controls_pref",C),h&&(C==="show"?(h.classList.add("force-show"),h.classList.remove("force-hide"),document.body.classList.remove("touch-controls-hidden")):C==="hide"?(h.classList.add("force-hide"),h.classList.remove("force-show"),document.body.classList.add("touch-controls-hidden")):(h.classList.remove("force-show","force-hide"),document.body.classList.remove("touch-controls-hidden")))};if(f){const C=localStorage.getItem("lagos_touch_controls_pref")||"show";f.value=C,g(C),f.addEventListener("change",_=>{g(_.target.value),ft.show("power_up_generator",`Touch controls: ${_.target.value.toUpperCase()}`)})}const v=document.getElementById("btn-resume");v&&v.addEventListener("click",()=>this.game.togglePause());const E=document.getElementById("btn-restart");E&&E.addEventListener("click",()=>{this.hideAllScreens(),this.game.start()});const p=document.getElementById("btn-quit");p&&p.addEventListener("click",()=>{this.game.stop(),this.showScreen("start")});const u=document.getElementById("btn-pause-settings");u&&u.addEventListener("click",()=>this.showScreen("settings"));const w=document.getElementById("btn-close-leaderboard");w&&w.addEventListener("click",()=>{this.game.isGameOver?this.showScreen("gameover"):this.showScreen("start")});const P=document.getElementById("btn-play-again");P&&P.addEventListener("click",()=>{this.hideAllScreens(),this.game.start()});const M=document.getElementById("btn-gameover-exit");M&&M.addEventListener("click",()=>{this.game.stop(),this.showScreen("start")});const S=document.getElementById("btn-gameover-leaderboard");S&&S.addEventListener("click",()=>{this.renderLeaderboard(),this.showScreen("leaderboard")});const y=document.getElementById("btn-share-score");y&&y.addEventListener("click",()=>this.shareScore()),window.addEventListener("keydown",C=>{this.activeScreen==="gameover"&&(C.code==="Space"||C.code==="Enter"||C.code==="KeyR")&&(C.preventDefault(),this.hideAllScreens(),this.game.start())})}updateUserBadges(){const e=Qt.getUser();if(!e)return;document.querySelectorAll(".startng-user-name").forEach(r=>{r.textContent=e.name}),document.querySelectorAll(".startng-user-handle").forEach(r=>{r.textContent=e.account?`@${e.account}`:e.handle||"@driver"});const t=document.getElementById("start-player-face"),n=document.getElementById("start-player-avatar");t&&e.face?(t.src=e.face,t.classList.remove("hidden"),n&&n.classList.add("hidden")):n&&(n.textContent=e.avatar||"🧢",n.classList.remove("hidden"),t&&t.classList.add("hidden"));const s=document.getElementById("btn-start-signin");if(s){const r=!e.id||e.id==="guest";s.classList.toggle("hidden",!r),s.onclick=()=>Qt.signIn()}}populateThemePresets(){const e=document.getElementById("theme-preset-container");if(!e)return;e.innerHTML="";const t=qt.listPresets(),n=qt.getPresetName();t.forEach(s=>{const r=document.createElement("div");r.className=`theme-preset-card ${s.name===n?"selected":""}`,r.style.borderColor=s.previewAccent,r.innerHTML=`
        <div class="preset-header">
          <div class="preset-color-chip" style="background: ${s.previewDanfo}"></div>
          <span class="preset-name">${s.name}</span>
        </div>
        <p class="preset-desc">${s.description}</p>
        <button class="btn-select-preset" data-preset="${s.name}">
          ${s.name===n?"Active Theme":"Apply Theme"}
        </button>
      `,r.querySelector(".btn-select-preset").addEventListener("click",a=>{a.stopPropagation(),qt.setPreset(s.name,!0),this.populateThemePresets(),ft.show("power_up_generator",`Theme changed to ${s.name}!`)}),e.appendChild(r)})}async renderLeaderboard(){const e=document.getElementById("leaderboard-list");if(!e)return;e.innerHTML='<div style="text-align:center;padding:20px;color:var(--ui-text-muted);">Fetching start.ng leaderboard... ⏳</div>';const t=await Qt.getLeaderboard(10),n=Qt.getUser();if(!t||t.length===0){e.innerHTML='<div style="text-align:center;padding:20px;color:var(--ui-text-muted);">No scores recorded yet. Be the first to set a record! 🏆</div>';return}e.innerHTML=t.map((s,r)=>{var h,g,v;const a=s.player_id||s.userId,o=n&&a&&a===n.id,l=r===0?"🥇":r===1?"🥈":r===2?"🥉":`#${r+1}`,c=((h=s.stats)==null?void 0:h.dodges)??s.dodges??s.score??0,d=((g=s.stats)==null?void 0:g.distance)??s.distance??0,f=((v=s.stats)==null?void 0:v.naira)??s.naira??0;return`
        <div class="leaderboard-item ${o?"current-player":""}">
          <div class="rank-col">${l}</div>
          <div class="user-col">
            <span class="avatar">${s.avatar||"🚖"}</span>
            <div>
              <div class="name">${s.name} ${o?'<span class="you-badge">(You)</span>':""}</div>
              <div class="subtext">${c} Dodges • ${d}m Run</div>
            </div>
          </div>
          <div class="score-col">
            <div class="score">${c} Dodges</div>
            <div class="naira">₦${Number(f).toLocaleString()}</div>
          </div>
        </div>
      `}).join("")}showGameOver(e){this.updateUserBadges();const t=document.getElementById("go-score"),n=document.getElementById("go-naira"),s=document.getElementById("go-passengers"),r=document.getElementById("go-route"),a=document.getElementById("go-pidgin-quote"),o=document.getElementById("go-crash-reason"),l=document.getElementById("go-blocks-dodged");t&&(t.textContent=Math.floor(e.score).toLocaleString()),n&&(n.textContent=`₦${Math.floor(e.naira).toLocaleString()}`),s&&(s.textContent=`${e.passengers} Commuters`),r&&(r.textContent=e.bestRoute),o&&e.crashReason&&(o.textContent=e.crashReason),l&&(l.textContent=`${e.dodgedCount||0} Blocks Dodged`),a&&(a.textContent=ft.getRandomLine("game_over")||"Bus don spoil. Wahala for who no get spare part!"),e.isNewHigh?(badgeEl&&badgeEl.classList.remove("hidden"),ta({particleCount:80,spread:70,origin:{y:.6},colors:["#FFCC00","#FF5722","#00E676","#FFFFFF"]})):badgeEl&&badgeEl.classList.add("hidden"),this.showScreen("gameover")}async shareScore(){const e=this.game.lastSummary;if(!e)return;const t=`🚍 LAGOS RUN: Keep the Danfo Moving!
I scored ${Math.floor(e.score).toLocaleString()} pts, dodged ${e.dodgedCount||0} blocks, earned ₦${Math.floor(e.naira).toLocaleString()} and reached ${e.bestRoute} on start.ng! Can you beat my high score? #LagosRun #DanfoGame #StartNG`;if(navigator.share)try{await navigator.share({title:"Lagos Run: Keep the Danfo Moving",text:t,url:window.location.href});return}catch{}navigator.clipboard.writeText(t).then(()=>{ft.show("high_score","Score copied to clipboard! Share am with your guys!")})}}async function lm(){qt.init(),await ft.init(document.getElementById("pidgin-toast-container")),await Wn.init();const i=document.getElementById("game-canvas"),e=new am(i),t=new om(e);e.setScreens(t),gl.bindOnScreenButtons();const n=document.getElementById("btn-hud-radio-next");n&&n.addEventListener("click",()=>{Wn.nextStation()});const s=document.getElementById("btn-hud-controls-toggle");s&&s.addEventListener("click",()=>{const c=document.body.classList.toggle("controls-hidden");s.textContent=c?"🎮 Keys: OFF":"🎮 Controls",s.setAttribute("aria-pressed",(!c).toString()),ft.show("power_up_generator",c?"Controls hidden for cinematic view":"Controls visible on screen! 🎮")});const r=document.getElementById("btn-hud-mute");r&&r.addEventListener("click",()=>{const c=ut.toggleMute();r.textContent=c?"🔇":"🔊",r.setAttribute("aria-pressed",c?"true":"false")});const a=document.getElementById("btn-hud-pause");a&&a.addEventListener("click",()=>{const c=e.togglePause();a.textContent=c?"▶️":"⏸️",a.setAttribute("aria-pressed",c?"true":"false")}),await Qt.init()?(t.updateUserBadges(),t.showScreen("start")):t.showScreen("login"),Qt.onAuthChange(c=>{t.updateUserBadges(),c?t.activeScreen==="login"&&t.showScreen("start"):(e.stop(),t.showScreen("login"))});const l=()=>{ut.unlockOnUserGesture(),window.removeEventListener("pointerdown",l),window.removeEventListener("keydown",l)};window.addEventListener("pointerdown",l,{once:!0}),window.addEventListener("keydown",l,{once:!0})}window.addEventListener("DOMContentLoaded",()=>{lm().catch(i=>console.error("Boot error:",i))});
