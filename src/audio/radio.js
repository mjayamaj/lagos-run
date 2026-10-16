import { audioManager } from "./AudioManager.js";

class DanfoRadio {
  constructor() {
    this.playlist = [];
    this.currentIndex = 0;
    this.isPlaying = false;
    this.stationFrequencies = ["105.5 FM", "99.9 FM", "93.7 FM", "88.9 FM"];
    this.listeners = [];
  }

  async init() {
    try {
      const res = await fetch("/songs.json");
      if (res.ok) {
        this.playlist = await res.json();
      }
    } catch (e) {
      console.warn("Could not load songs.json, using built-in playlist:", e);
    }

    if (!this.playlist || this.playlist.length === 0) {
      this.playlist = [
        {
          id: "track_1",
          title: "Jaga Jaga (Danfo Radio Mix)",
          artist: "Idris Abdulkareem",
          file: "/assets/audio/jaga_jaga.mp3",
          bpm: 104,
          genre: "Naija Classic",
          dropBeat: 32
        },
        {
          id: "track_2",
          title: "E Dey Pain Me (Ekwe Street Groove)",
          artist: "Stereoman",
          file: "/assets/audio/e_dey_pain_me.mp3",
          bpm: 112,
          genre: "Galala Beat",
          dropBeat: 28
        },
        {
          id: "track_3",
          title: "Lagos Sunset Highlife",
          artist: "Danfo All-Stars",
          file: "/assets/audio/lagos_sunset.mp3",
          bpm: 118,
          genre: "Highlife Afrobeat",
          dropBeat: 36
        }
      ];
    }
  }

  getCurrentTrack() {
    return this.playlist[this.currentIndex] || null;
  }

  getCurrentStation() {
    const freq = this.stationFrequencies[this.currentIndex % this.stationFrequencies.length];
    return `Danfo FM ${freq}`;
  }

  play() {
    if (this.playlist.length === 0) return;
    this.isPlaying = true;
    const track = this.playlist[this.currentIndex];
    audioManager.playTrack(track);
    this.notify();
  }

  stop() {
    this.isPlaying = false;
    audioManager.stopMusic();
    this.notify();
  }

  nextStation() {
    audioManager.playRadioStatic();
    this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
    if (this.isPlaying) {
      this.play();
    } else {
      this.notify();
    }
  }

  prevStation() {
    audioManager.playRadioStatic();
    this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
    if (this.isPlaying) {
      this.play();
    } else {
      this.notify();
    }
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  onChange(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notify() {
    const track = this.getCurrentTrack();
    const station = this.getCurrentStation();
    const info = {
      isPlaying: this.isPlaying,
      track,
      station,
      tickerText: track ? `📻 ${station} | Now Playing: "${track.title}" - ${track.artist} (${track.bpm} BPM)` : "Danfo Radio: OFF"
    };
    for (const cb of this.listeners) {
      try {
        cb(info);
      } catch (e) {
        console.error("Radio listener error:", e);
      }
    }
  }
}

export const danfoRadio = new DanfoRadio();
