import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResourcesResponse } from '@interfaces/resources-response.interface';
import { Resource } from '@interfaces/resource.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private _http: HttpClient
  ) { }

  getRickAndMortyResources(): Observable<Resource[]> {
    return this._http.get<ResourcesResponse>('/api').pipe(
      map((resp: any) => {
        return Object.keys(resp).map(key => {
          return {
            name: key,
            url: resp[key]
          }
        });
      })
    )
  }
}
