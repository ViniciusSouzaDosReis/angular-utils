import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-with-jwt',
  templateUrl: './login-with-jwt.component.html',
  styleUrls: ['./login-with-jwt.component.css'],
})
export class LoginWithJwtComponent  {
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });
  }
  
  get email(){
    return this.loginForm.get('email')!;
  }
}
