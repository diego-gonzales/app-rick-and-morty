import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, finalize, catchError, of, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';

@Injectable()
export class RickAndMortyInterceptor implements HttpInterceptor {

  private _apiURL: string = environment.API_URL;

  constructor(
    private _spinnerService: NgxSpinnerService,
    private _messageService: MessageService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = request.clone({
      url: `${this._apiURL}${request.url}`
    });

    this._spinnerService.show();

    return next.handle(clonedRequest).pipe(
      catchError((err: HttpErrorResponse) => {
        this._messageService.add({severity:'error', summary: `Error (${err.status})`, detail: err.error.error});
        return throwError(() => new Error(err.error.error))
      }),
      finalize(() => this._spinnerService.hide())
    )
  }
}
