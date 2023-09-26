import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginWithJwtComponent } from './pages/login-with-jwt/login-with-jwt.component';
import { HomeComponent } from './pages/home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterceptor } from './services/interceptors/token.interceptor';

@NgModule({
  declarations: [AppComponent, LoginWithJwtComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
