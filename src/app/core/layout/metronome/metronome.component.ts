import { Component } from '@angular/core';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.scss']
})
export class MetronomeComponent {
  private audioContext: AudioContext;
  private timer!: any;
  public gainNode: GainNode;
  private isStarted: boolean;
  private interval: number;
  private currentBeatIndex: number;
  public beats: number[];
  public currentBeat: number;
  public isPlaying: boolean = false;
  public tempo: number = 120;
  public beatsPerMeasure: number = 4;
  public volume: number = 50;
  public waveforms: string[] = ['sine', 'square', 'sawtooth', 'triangle'];
  public currentWaveform: string = 'triangle';

  constructor() {
    this.audioContext = new AudioContext();
    this.gainNode = this.audioContext.createGain();
    this.gainNode.connect(this.audioContext.destination);
    this.isStarted = false;
    this.interval = 60 / this.tempo * 1000;
    this.currentBeatIndex = 0;
    this.beats = [];
    for (let i = 0; i < this.beatsPerMeasure; i++) {
      this.beats.push(i);
    }
    this.currentBeat = this.beats[this.currentBeatIndex];
  }

  public playMetronome() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.startMetronome();
    } else {
      this.stopMetronome();
    }
  }

  public setTempo(tempo: number) {
    this.tempo = tempo;
    this.interval = 60 / this.tempo * 1000;
    if (this.isPlaying) {
      this.stopMetronome();
      this.startMetronome();
    }
  }

  public setBeatsPerMeasure(beatsPerMeasure: number) {
    this.beatsPerMeasure = beatsPerMeasure;
    this.beats = [];
    for (let i = this.beatsPerMeasure - 1; i >= 0; i--) {
      this.beats.push(i);
    }
    this.currentBeatIndex = this.beatsPerMeasure - 1;
    this.currentBeat = this.beats[this.currentBeatIndex];
    if (this.isPlaying) {
      this.stopMetronome();
      this.startMetronome();
    }
  }

  public setVolume(volume: number) {
    this.volume = volume;
    this.gainNode.gain.setValueAtTime(this.volume / 100, this.audioContext.currentTime);
  }

  private startMetronome() {
    this.isStarted = true;
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      this.playSound();
    }, this.interval);
  }

  public setWaveform(waveform: string) {
    this.currentWaveform = waveform;
    this.stopMetronome();
    this.startMetronome();
  }

  public stopMetronome() {
    this.isStarted = false;
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.currentBeatIndex = 0;
    this.currentBeat = this.beats[this.currentBeatIndex];
  }

  private playSound() {
    if (!this.isStarted) {
      return;
    }
    // Play the click sound
    const gain = this.audioContext.createGain();
    gain.gain.value = this.volume / 100;
    gain.connect(this.audioContext.destination);
    const oscillator = this.audioContext.createOscillator();

    // Condition pour la waveform à utiliser
    if (this.currentWaveform === 'sine') {
      oscillator.type = 'sine';
    } else if (this.currentWaveform === 'triangle') {
      oscillator.type = 'triangle';
    } else if (this.currentWaveform === 'sawtooth') {
      oscillator.type = 'sawtooth';
    } else if (this.currentWaveform === 'square') {
      oscillator.type = 'square';
    }

    oscillator.connect(gain);

    // Condition pour la fréquence de l'oscillateur
    if ((this.currentBeatIndex + 1) % this.beatsPerMeasure === 0) {
      oscillator.frequency.value = 880;
    } else {
      oscillator.frequency.value = 440;
    }



    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.1);

    // Update the current beat index
    this.currentBeatIndex = (this.currentBeatIndex + 1) % this.beatsPerMeasure;
    this.currentBeat = this.beats[this.currentBeatIndex];
  }

  ///tap tempo
  private tapTimes: number[] = [];

  public tapTempo() {
    const now = Date.now();
    this.tapTimes.push(now);
    if (this.tapTimes.length > 2) {
      const diff1 = this.tapTimes[this.tapTimes.length - 1] - this.tapTimes[this.tapTimes.length - 2];
      const diff2 = this.tapTimes[this.tapTimes.length - 2] - this.tapTimes[this.tapTimes.length - 3];
      const averageDiff = (diff1 + diff2) / 2;
      const newTempo = Math.round(60000 / averageDiff);
      if (newTempo >= 20 && newTempo <= 300) {
        this.setTempo(newTempo);
      }
    }
  }

}
