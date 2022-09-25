import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EpisodesResponse } from '@shared/interfaces/episodes-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {

  constructor(private _http: HttpClient) {}

  getEpisodes(
    page: number = 1,
    episode: string = '',
    name: string = ''
  ): Observable<EpisodesResponse> {
    const params = new HttpParams()
      .set('page', page)
      .set('episode', episode)
      .set('name', name);

    return this._http.get<EpisodesResponse>('/api/episode', { params });
  }
}
