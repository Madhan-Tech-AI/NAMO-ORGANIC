// Web Audio API ambient farm sound synthesizer
// Generates gentle breeze rustle and distant morning bird chirps procedurally

class AmbientSoundGenerator {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private birdTimer: number | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private gainNode: GainNode | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  private start() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      
      // Master Gain
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 2);
      this.gainNode.connect(this.ctx.destination);

      // 1. Gentle Wind / Breeze Noise
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02; // Pink-ish noise filter
        lastOut = output[i];
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Wind filter
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(280, this.ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(this.gainNode);
      whiteNoise.start(0);
      this.noiseNode = whiteNoise;

      // 2. Schedule natural morning bird song calls
      this.isPlaying = true;
      this.scheduleBirdChirp();
    } catch (e) {
      console.warn('AudioContext not allowed or supported', e);
    }
  }

  private scheduleBirdChirp = () => {
    if (!this.isPlaying || !this.ctx) return;
    
    // Chirp after random 3 to 7 seconds
    const nextInterval = 2500 + Math.random() * 4000;
    this.birdTimer = window.setTimeout(() => {
      this.playBirdChirp();
      this.scheduleBirdChirp();
    }, nextInterval);
  };

  private playBirdChirp() {
    if (!this.ctx || !this.isPlaying) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      const baseFreq = 2200 + Math.random() * 1200;
      
      // Frequency modulation for bird chirp
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq + 600, now + 0.05);
      osc.frequency.exponentialRampToValueAtTime(baseFreq - 200, now + 0.12);
      osc.frequency.exponentialRampToValueAtTime(baseFreq + 400, now + 0.18);
      osc.frequency.exponentialRampToValueAtTime(baseFreq - 800, now + 0.28);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.04, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.32);
    } catch {
      // Ignore audio interruption
    }
  }

  private stop() {
    this.isPlaying = false;
    if (this.birdTimer) {
      clearTimeout(this.birdTimer);
      this.birdTimer = null;
    }
    if (this.noiseNode) {
      try {
        this.noiseNode.stop();
        this.noiseNode.disconnect();
      } catch {
        // Already stopped
      }
      this.noiseNode = null;
    }
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
      setTimeout(() => {
        if (this.ctx && this.ctx.state !== 'closed') {
          this.ctx.close();
        }
      }, 1000);
    }
  }
}

export const ambientSound = new AmbientSoundGenerator();
