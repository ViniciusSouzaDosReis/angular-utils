import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://dev.croma-bas.com:8443/api';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/authentication/token`, {
        email,
        password,
      })
      .pipe(
        tap({
          next: (res) => {
            this.cookieService.set('token', res.access_token);
            this.router.navigate(['home']);
          },
          error: (err) => {
            if (err.status !== 200) {
              return;
            }
          },
        })
      );
  }

  get logged() {
    return this.cookieService.check('token');
  }
}
