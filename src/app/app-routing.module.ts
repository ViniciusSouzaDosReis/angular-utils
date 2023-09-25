import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginWithJwtComponent } from './pages/login-with-jwt/login-with-jwt.component';

const routes: Routes = [{ path: 'login', component: LoginWithJwtComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
