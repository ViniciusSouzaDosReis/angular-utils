import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://dev.croma-bas.com:8443/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<User>(`${this.apiUrl}/authentication/token`, {
      email,
      password,
    });
  }
}
