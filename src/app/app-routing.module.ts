import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginWithJwtComponent } from './pages/login-with-jwt/login-with-jwt.component';
import { HomeComponent } from './pages/home/home.component';
import { authenticatedUserGuard } from './services/guards/authenticated-user.guard';

const routes: Routes = [
  { path: 'login', component: LoginWithJwtComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authenticatedUserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
