import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public searchInput: string = '';

  constructor(private searchService: SearchService) { }

  public search() {
    this.searchService.setSearchInput(this.searchInput);
    this.searchInput = ''
  }
}
