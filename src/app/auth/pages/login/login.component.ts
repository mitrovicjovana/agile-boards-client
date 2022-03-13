import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username!: FormControl;
  password!: FormControl;

  constructor(private formBuilder: FormBuilder) {}

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
      console.log('login');
    }
  }
}
