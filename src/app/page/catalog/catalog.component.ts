import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';

interface Song {
  name: string;
  artist: string;
  mp3Url: string;
  opusUrl: string;
  tempo: string;
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent {

  constructor(private searchService: SearchService) { }

  //db songs
  songs: Song[] = [
    {
      name: 'Cases to Rest',
      artist: 'Blue Dot Sessions',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/Blue Dot Sessions - Cases to Rest.mp3',
      opusUrl: 'assets/music/FMA/Blue Dot Sessions - Cases to Rest.opus'
    },
    {
      name: 'Mind Body Mind',
      artist: 'Blue Dot Sessions',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/Blue Dot Sessions - Mind Body Mind.mp3',
      opusUrl: 'assets/music/FMA/Blue Dot Sessions - Mind Body Mind.opus'
    },
    {
      name: 'Soothe',
      artist: 'Blue Dot Sessions',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/Blue Dot Sessions - Soothe.mp3',
      opusUrl: 'assets/music/FMA/Blue Dot Sessions - Soothe.opus'
    },
    {
      name: 'Sweetly',
      artist: 'Blue Dot Sessions',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/Blue Dot Sessions - Sweetly.mp3',
      opusUrl: 'assets/music/FMA/Blue Dot Sessions - Sweetly.opus'
    },
    {
      name: 'Thannoid',
      artist: 'Blue Dot Sessions',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/Blue Dot Sessions - Thannoid.mp3',
      opusUrl: 'assets/music/FMA/Blue Dot Sessions - Thannoid.opus'
    },
    {
      name: 'Doctor 1',
      artist: 'Cory Gray',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/Cory Gray - Doctor 1.mp3',
      opusUrl: 'assets/music/FMA/Cory Gray - Doctor 1.opus'
    },
    {
      name: 'Multitudes',
      artist: 'Gillicuddy',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/Gillicuddy - Multitudes.mp3',
      opusUrl: 'assets/music/FMA/Gillicuddy - Multitudes.opus'
    },
    {
      name: 'As a Child',
      artist: 'Johnny Ripper',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/johnny_ripper - as a child.mp3',
      opusUrl: 'assets/music/FMA/johnny_ripper - as a child.opus'
    },
    {
      name: 'Gare du Nord',
      artist: 'Johnny Ripper',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/johnny_ripper - gare du nord.mp3',
      opusUrl: 'assets/music/FMA/johnny_ripper - gare du nord.opus'
    },
    {
      name: 'Lille',
      artist: 'Johnny Ripper',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/johnny_ripper - Lille.mp3',
      opusUrl: 'assets/music/FMA/johnny_ripper - Lille.opus'
    },
    {
      name: 'Paris',
      artist: 'Johnny Ripper',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/johnny_ripper - Paris.mp3',
      opusUrl: 'assets/music/FMA/johnny_ripper - Paris.opus'
    },
    {
      name: 'Sans Soucis',
      artist: 'Johnny Ripper',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/johnny_ripper - sans soucis.mp3',
      opusUrl: 'assets/music/FMA/johnny_ripper - sans soucis.opus'
    },
    {
      name: 'theme 4',
      artist: 'Johnny Ripper',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/johnny_ripper - theme 4.mp3',
      opusUrl: 'assets/music/FMA/johnny_ripper - theme 4.opus'
    },
    {
      name: 'Shenandoah',
      artist: 'SalmonLikeTheFish',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/SalmonLikeTheFish - Shenandoah.mp3',
      opusUrl: 'assets/music/FMA/SalmonLikeTheFish - Shenandoah.opus'
    },
    {
      name: 'Zion',
      artist: 'SalmonLikeTheFish',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/SalmonLikeTheFish - Zion.mp3',
      opusUrl: 'assets/music/FMA/SalmonLikeTheFish - Zion.opus'
    },
    {
      name: 'L’art de se dénuder',
      artist: 'Ulrike Mod',
      tempo: '120 BPM',
      mp3Url: 'assets/music/FMA/Ulrike Mod - 04 - L’art de se dénuder.mp3',
      opusUrl: 'assets/music/FMA/Ulrike Mod - 04 - L’art de se dénuder.opus'
    }
  ];

  // search request
  public searchInput: string = '';
  private searchInputSubscription!: Subscription;

  filteredSongs: Song[] = [];

  ngOnInit() {
    this.searchInputSubscription = this.searchService.getSearchInputObservable().subscribe((value: string) => {
      this.searchInput = value;
      this.filterSongs(value);
    });
  }

  ngOnDestroy() {
    this.searchInputSubscription.unsubscribe();
  }

  public resetSearch() {
    this.searchService.setSearchInput('');
  }

  filterSongs(searchValue: string): void {
    this.filteredSongs = this.songs.filter((song: Song) => {
      return song.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchValue.toLowerCase());
    });
  }


}