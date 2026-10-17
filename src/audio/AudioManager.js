/**
 * Audio Manager with Web Audio Synthesizer, Sound Effects,
 * BPM Beat Clock, and Procedural Afrobeats fallback engine.
 */

class AudioManager {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.sfxGain = null;
    this.musicGain = null;

    this.isMuted = false;
    this.masterVolume = 0.8;
    this.musicVolume = 0.7;
    this.sfxVolume = 0.9;

    this.isAudioUnlocked = false;
    this.currentTrack = null;
    this.audioElement = null;

    // Beat clock
    this.bpm = 108;
    this.beatIntervalMs = (60 / this.bpm) * 1000;
    this.beatListeners = [];
    this.beatTimer = null;
    this.currentBeat = 0;

    // Procedural Synth State (for fallback groove)
    this.isSynthPlaying = false;
    this.synthStep = 0;
    this.synthTimer = null;
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.masterVolume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(this.sfxVolume, this.ctx.currentTime);
      this.sfxGain.connect(this.masterGain);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(this.musicVolume, this.ctx.currentTime);
      this.musicGain.connect(this.masterGain);
    }

    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }

    this.isAudioUnlocked = true;
    return this.ctx;
  }

  unlockOnUserGesture() {
    if (this.isAudioUnlocked && this.ctx && this.ctx.state === "running") return;
    this.ensureContext();
  }

  setMasterVolume(val) {
    this.masterVolume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx && !this.isMuted) {
      this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
    }
  }

  setMusicVolume(val) {
    this.musicVolume = Math.max(0, Math.min(1, val));
    if (this.musicGain && this.ctx) {
      this.musicGain.gain.setValueAtTime(this.musicVolume, this.ctx.currentTime);
    }
    if (this.audioElement) {
      this.audioElement.volume = this.musicVolume;
    }
  }

  setSfxVolume(val) {
    this.sfxVolume = Math.max(0, Math.min(1, val));
    if (this.sfxGain && this.ctx) {
      this.sfxGain.gain.setValueAtTime(this.sfxVolume, this.ctx.currentTime);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.masterVolume, this.ctx.currentTime);
    }
    if (this.audioElement) {
      this.audioElement.muted = this.isMuted;
    }
    return this.isMuted;
  }

  onBeat(callback) {
    this.beatListeners.push(callback);
    return () => {
      this.beatListeners = this.beatListeners.filter(cb => cb !== callback);
    };
  }

  startBeatClock(bpm) {
    this.stopBeatClock();
    this.bpm = bpm || 108;
    this.beatIntervalMs = (60 / this.bpm) * 1000;
    this.currentBeat = 0;

    this.beatTimer = setInterval(() => {
      this.currentBeat++;
      const isDrop = this.currentTrack && (this.currentBeat % (this.currentTrack.dropBeat || 32) === 0);
      const isBar = this.currentBeat % 4 === 0;

      for (const cb of this.beatListeners) {
        try {
          cb({
            beat: this.currentBeat,
            isBar,
            isDrop,
            bpm: this.bpm
          });
        } catch (e) {
          console.error("Beat callback error:", e);
        }
      }
    }, this.beatIntervalMs);
  }

  stopBeatClock() {
    if (this.beatTimer) {
      clearInterval(this.beatTimer);
      this.beatTimer = null;
    }
  }

  // Play audio track from songs.json or fall back to Afrobeats synth
  playTrack(track) {
    this.ensureContext();
    this.currentTrack = track;
    this.startBeatClock(track.bpm || 110);

    // Stop existing audio element
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
      this.audioElement = null;
    }
    this.stopSynthGroove();

    // Try HTML Audio element first
    const audio = new Audio();
    audio.src = track.file;
    audio.loop = true;
    audio.volume = this.musicVolume;
    audio.muted = this.isMuted;

    let fallbackStarted = false;
    const startFallback = () => {
      if (fallbackStarted) return;
      fallbackStarted = true;
      if (this.audioElement === audio) {
        this.audioElement = null;
      }
      this.startSynthAfrobeats(track.bpm || 112);
    };

    audio.addEventListener("error", () => {
      // File not found or failed to load - start synthesized Afrobeats beat immediately!
      startFallback();
    });

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.audioElement = audio;
      }).catch(() => {
        // Autoplay prevented or file missing - fallback to synth
        startFallback();
      });
    }
  }

  stopMusic() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement = null;
    }
    this.stopSynthGroove();
    this.stopBeatClock();
  }

  // Procedural Afrobeats Synthesizer: 16-step sequencer with log drums, shaker, woodblock, and bassline
  startSynthAfrobeats(bpm = 112) {
    this.stopSynthGroove();
    this.ensureContext();
    this.isSynthPlaying = true;
    this.bpm = bpm;
    const sixteenthInterval = (60 / this.bpm / 4) * 1000;
    this.synthStep = 0;

    // African pentatonic bass notes in Hz (A minor / D minor vibe)
    const bassScale = [110.0, 130.81, 146.83, 164.81, 196.0]; // A2, C3, D3, E3, G3
    const bassPattern = [0, -1, -1, 1, -1, -1, 2, -1, 0, -1, -1, 3, -1, 2, -1, -1];

    this.synthTimer = setInterval(() => {
      if (!this.isSynthPlaying || !this.ctx) return;
      const step = this.synthStep % 16;
      this.synthStep++;

      // Log drum / Kick on steps: 0, 6, 10 (Afrobeats polyrhythm 3-3-2 feel)
      if (step === 0 || step === 6 || step === 10) {
        this.synthKick();
      }

      // Shaker on all 16th notes with accent on offbeats
      this.synthShaker(step % 2 === 1);

      // Woodblock / Clave rimshot on steps: 3, 8, 12
      if (step === 3 || step === 8 || step === 12) {
        this.synthWoodblock();
      }

      // Syncopated Bassline
      const noteIdx = bassPattern[step];
      if (noteIdx !== -1 && noteIdx < bassScale.length) {
        this.synthBassNote(bassScale[noteIdx]);
      }
    }, sixteenthInterval);
  }

  stopSynthGroove() {
    this.isSynthPlaying = false;
    if (this.synthTimer) {
      clearInterval(this.synthTimer);
      this.synthTimer = null;
    }
  }

  synthKick() {
    if (!this.ctx || this.isMuted) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const t = this.ctx.currentTime;

    osc.type = "sine";
    // Pitch drop log-drum / 808
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(45, t + 0.15);

    gain.gain.setValueAtTime(0.5, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

    osc.connect(gain);
    gain.connect(this.musicGain);

    osc.start(t);
    osc.stop(t + 0.25);
  }

  synthShaker(accent = false) {
    if (!this.ctx || this.isMuted) return;
    if (!this.shakerBuffer) {
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.05);
      this.shakerBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = this.shakerBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = this.shakerBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 6500;

    const gain = this.ctx.createGain();
    const t = this.ctx.currentTime;
    gain.gain.setValueAtTime(accent ? 0.15 : 0.08, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.035);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGain);

    noise.start(t);
  }

  synthWoodblock() {
    if (!this.ctx || this.isMuted) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const t = this.ctx.currentTime;

    osc.type = "sine";
    osc.frequency.setValueAtTime(880, t);
    osc.frequency.exponentialRampToValueAtTime(440, t + 0.06);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.07);

    osc.connect(gain);
    gain.connect(this.musicGain);

    osc.start(t);
    osc.stop(t + 0.08);
  }

  synthBassNote(freq) {
    if (!this.ctx || this.isMuted) return;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    const t = this.ctx.currentTime;

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, t);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(600, t);
    filter.frequency.exponentialRampToValueAtTime(200, t + 0.2);

    gain.gain.setValueAtTime(0.35, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGain);

    osc.start(t);
    osc.stop(t + 0.26);
  }

  /* ==========================================================
     DANFO SOUND EFFECTS
     ========================================================== */

  // Iconic Danfo Horn: "PAHN-PAHN!!"
  playHorn() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const t = this.ctx.currentTime;

    [0, 0.16].forEach((offset) => {
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = "sawtooth";
      osc2.type = "square";

      osc1.frequency.setValueAtTime(370, t + offset); // F#4
      osc2.frequency.setValueAtTime(440, t + offset); // A4

      gain.gain.setValueAtTime(0.35, t + offset);
      gain.gain.linearRampToValueAtTime(0.35, t + offset + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.14);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.sfxGain);

      osc1.start(t + offset);
      osc2.start(t + offset);
      osc1.stop(t + offset + 0.15);
      osc2.stop(t + offset + 0.15);
    });
  }

  // Passenger Pickup / Coin register
  playCoin() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const t = this.ctx.currentTime;
    const freqs = [587.33, 880, 1174.66]; // D5, A5, D6 arpeggio

    freqs.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startT = t + i * 0.05;

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, startT);

      gain.gain.setValueAtTime(0.25, startT);
      gain.gain.exponentialRampToValueAtTime(0.001, startT + 0.18);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(startT);
      osc.stop(startT + 0.2);
    });
  }

  // Conductor Whistle & Passenger "Owa o!" Call
  playPassengerOwa() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const t = this.ctx.currentTime;

    // Two-tone sharp brass whistle: G6 -> A6
    [0, 0.11].forEach((offset, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(idx === 0 ? 1568 : 1760, t + offset);
      gain.gain.setValueAtTime(0.28, t + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.09);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(t + offset);
      osc.stop(t + offset + 0.11);
    });

    // Also trigger coin fare chime
    this.playCoin();
  }

  // Pothole Impact / Clank
  playPothole() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const t = this.ctx.currentTime;

    // Heavy low punch
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(110, t);
    osc.frequency.exponentialRampToValueAtTime(30, t + 0.25);
    oscGain.gain.setValueAtTime(0.6, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
    osc.connect(oscGain);
    oscGain.connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.3);

    // Metal suspension rattle
    const bufferSize = this.ctx.sampleRate * 0.2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.05));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 850;
    filter.Q.value = 3.0;

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.4, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.sfxGain);
    noise.start(t);
  }

  // Water Splash (Flood)
  playSplash() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const t = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.35;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(400, t);
    filter.frequency.linearRampToValueAtTime(1600, t + 0.15);
    filter.frequency.exponentialRampToValueAtTime(300, t + 0.35);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    noise.start(t);
  }

  // Police Siren Checkpoint
  playSiren() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";

    // Two alternating siren tones
    osc.frequency.setValueAtTime(650, t);
    osc.frequency.setValueAtTime(900, t + 0.18);
    osc.frequency.setValueAtTime(650, t + 0.36);
    osc.frequency.setValueAtTime(900, t + 0.54);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.72);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.75);
  }

  // NEPA Power Outage hum
  playNepa() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(100, t);
    osc.frequency.exponentialRampToValueAtTime(20, t + 0.6);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.65);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.7);
  }

  // Power-up Boost / Jollof / Generator
  playPowerUp() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";

    osc.frequency.setValueAtTime(260, t);
    osc.frequency.exponentialRampToValueAtTime(1040, t + 0.3);

    gain.gain.setValueAtTime(0.35, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.38);
  }

  // Radio Static Burst when switching stations
  playRadioStatic() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const t = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.12;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 2200;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    noise.start(t);
  }
}

export const audioManager = new AudioManager();
