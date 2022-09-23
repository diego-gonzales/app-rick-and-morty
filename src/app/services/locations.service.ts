import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LocationsResponse } from '@shared/interfaces/locations-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private _http: HttpClient) {}

  getLocations(
    page: number = 1,
    name: string = '',
    type: string = '',
    dimension: string = ''
  ): Observable<LocationsResponse> {
    const params = new HttpParams()
      .set('page', page)
      .set('name', name)
      .set('type', type)
      .set('dimension', dimension);

    return this._http.get<LocationsResponse>('/api/location', { params });
  }
}
