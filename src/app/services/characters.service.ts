import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Character, CharactersResponse } from '@shared/interfaces/characters-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  constructor(
    private _http: HttpClient
  ) {}

  getCharacters(page: number = 1): Observable<CharactersResponse> {
    const params = new HttpParams().set('page', page);
    return this._http.get<CharactersResponse>('/api/character', { params });
  }

  getCharacter(characterID: number): Observable<Character> {
    return this._http.get<Character>(`/api/character/${characterID}`);
  }

  getMultipleCharacters(charactersString: string[]) {
    console.log(charactersString);
    let charactersIDs = charactersString.map(item => Number(item.slice(42)));
    return this._http.get<Character[]>(`/api/character/${charactersIDs}`);
  }
}
