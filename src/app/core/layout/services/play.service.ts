import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  private currentSongUrl = new BehaviorSubject<{ url: string, isFooterHidden: boolean }>({ url: '', isFooterHidden: true });

  playSong(songUrl: string) {
    this.currentSongUrl.next({ url: songUrl, isFooterHidden: false });
  }

  getCurrentSongUrl(): Observable<{ url: string, isFooterHidden: boolean }> {
    return this.currentSongUrl.asObservable();
  }

  toggleFooter() {
    const currentValue = this.currentSongUrl.getValue();
    this.currentSongUrl.next({ url: currentValue.url, isFooterHidden: !currentValue.isFooterHidden });
  }
}
