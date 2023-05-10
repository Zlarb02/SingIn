import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchInputSubject = new Subject<string>();

  setSearchInput(value: string) {
    this.searchInputSubject.next(value);
  }

  getSearchInputObservable(): Observable<string> {
    return this.searchInputSubject.asObservable();
  }
}
