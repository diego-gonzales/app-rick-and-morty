import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class RickAndMortyInterceptor implements HttpInterceptor {

  private _apiURL: string = environment.API_URL;

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = request.clone({
      url: `${this._apiURL}${request.url}`
    });

    return next.handle(clonedRequest);
  }
}
