import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class RickAndMortyInterceptor implements HttpInterceptor {

  private _apiURL: string = environment.API_URL;

  constructor(
    private _spinnerService: NgxSpinnerService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = request.clone({
      url: `${this._apiURL}${request.url}`
    });

    this._spinnerService.show();

    return next.handle(clonedRequest).pipe(
      finalize(() => this._spinnerService.hide())
    )
  }
}
