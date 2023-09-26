import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginWithJwtComponent } from './pages/login-with-jwt/login-with-jwt.component';
import { HomeComponent } from './pages/home/home.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [AppComponent, LoginWithJwtComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
