import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  showSearchInput: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showSearchInput$ = this.showSearchInput.asObservable();

  keywordToSearch: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  keywordToSearch$ = this.keywordToSearch.asObservable();
}
