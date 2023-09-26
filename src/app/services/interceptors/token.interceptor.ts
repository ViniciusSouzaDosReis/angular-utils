import { EnvironmentInjector, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getUserToken;
    const resquestUrl: Array<any> = request.url.split('/');
    const apiUrl: Array<any> = 'https://dev.croma-bas.com:8443/api'.split('/');

    if (token && resquestUrl[2] === apiUrl[2]) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.authService.logout();
          }
          return throwError(() => error);
        })
      );
    } else {
      return next.handle(request);
    }
  }
}
