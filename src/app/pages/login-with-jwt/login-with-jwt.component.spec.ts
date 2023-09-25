import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithJwtComponent } from './login-with-jwt.component';

describe('LoginWithJwtComponent', () => {
  let component: LoginWithJwtComponent;
  let fixture: ComponentFixture<LoginWithJwtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginWithJwtComponent]
    });
    fixture = TestBed.createComponent(LoginWithJwtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
