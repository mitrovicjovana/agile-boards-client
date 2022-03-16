import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/core/services/header.service';
import { Login } from '../../models/Login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username!: FormControl;
  password!: FormControl;
  loginError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private headerService: HeaderService
  ) {
    if (this.authService.isLoggedIn()) router.navigateByUrl('/boards');
    this.headerService.hideHeader();
  }

  ngOnInit(): void {
    this.buildFormGroup();
  }

  private initFormControls(): void {
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
  }

  private buildFormGroup(): void {
    this.initFormControls();

    this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password,
    });
  }

  public submitLogin(): void {
    if (this.loginForm.valid) {
      const loginRequest: Login = {
        username: this.username.value,
        password: this.password.value,
      };

      this.authService.login(loginRequest).subscribe((res) => {
        this.loginError = '';
        if (res) {
          this.router.navigateByUrl('/boards');
        } else this.loginError = 'Incorrect username or password';
      });
    }
  }
}
