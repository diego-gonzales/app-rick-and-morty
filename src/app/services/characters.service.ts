import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CharactersResponse } from '@shared/interfaces/characters-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private _http: HttpClient
  ) { }

  getCharacters(
    page: number = 1
  ) {
    const params = new HttpParams()
      .set('page', page)

    return this._http.get<CharactersResponse>('/api/character', { params });
  }
}
