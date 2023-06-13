import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const userToken = this.auth.getUserToken();
    if (userToken) {
      request = request.clone({
        headers: new HttpHeaders({
          AplicationName: 'MusicApp',
          Authorization: `Bearer ${userToken}`,
        }),
      });
      return next.handle(request);
    }

    return next.handle(request);
  }
}
