import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-with-jwt',
  templateUrl: './login-with-jwt.component.html',
  styleUrls: ['./login-with-jwt.component.css'],
})
export class LoginWithJwtComponent {
  loginForm!: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    const val = this.loginForm.value;

    this.authService.login(val.email, val.password).subscribe((res) => {
      console.log(res);
      // console.log('User is logged in');
      // this.router.navigateByUrl('/home');
    });
    // if (val.email && val.password) {
    // }
  }

  get email() {
    return this.loginForm.get('email')!;
  }
  get password() {
    return this.loginForm.get('password')!;
  }
}
