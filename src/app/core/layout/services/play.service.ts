import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  private currentSong = new BehaviorSubject<{
    url: string,
    name: string,
    artist: string,
    tempo: string,
    isFooterHidden: boolean
  }>
    ({
      url: '',
      name: '',
      artist: '',
      tempo: '',
      isFooterHidden: true
    });

  playSong(songUrl: string, songName: string, songArtist: string, songTempo: string) {
    this.currentSong.next({
      url: songUrl,
      name: songName,
      artist: songArtist,
      tempo: songTempo,
      isFooterHidden: false
    });
  }

  getCurrentSong(): Observable<{
    url: string,
    name: string,
    artist: string,
    tempo: string,
    isFooterHidden: boolean
  }> {
    return this.currentSong.asObservable();
  }

  toggleFooter() {
    const currentValue = this.currentSong.getValue();
    this.currentSong.next({
      url: currentValue.url,
      name: currentValue.name,
      artist: currentValue.artist,
      tempo: currentValue.tempo,
      isFooterHidden: !currentValue.isFooterHidden
    });
  }
}
