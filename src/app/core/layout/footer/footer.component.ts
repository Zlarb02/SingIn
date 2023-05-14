import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlayService } from '../services/play.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isFooterHidden = true;
  currentSongUrl!: string;

  @ViewChild('audioPlayer', { static: true }) audioPlayer!: ElementRef;

  constructor(private playService: PlayService) { }

  toggleFooter() {
    this.isFooterHidden = !this.isFooterHidden;
  }

  get arrowIconClasses() {
    return {
      'arrow-icon': true,
      'open': !this.isFooterHidden
    };
  }

  get footerClasses() {
    return {
      'footer': true,
      'hidden': this.isFooterHidden
    };
  }

  ngOnInit(): void {
    this.playService.getCurrentSongUrl().subscribe((songInfo) => {
      this.currentSongUrl = songInfo.url;
      this.isFooterHidden = songInfo.isFooterHidden;
      this.audioPlayer.nativeElement.src = this.currentSongUrl;
    });
  }

}
