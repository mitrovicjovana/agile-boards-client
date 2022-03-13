import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { SignUp } from '../../models/SignUp';
import { matchValidator } from '../../helpers/matchValidator';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;
  username!: FormControl;
  email!: FormControl;
  password!: FormControl;
  confirmPassword!: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.buildFormGroup();
  }

  public submitSignUp(): void {
    if (this.signUpForm.valid) {
      const signUpRequest: SignUp = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        username: this.username.value,
        email: this.email.value,
        password: this.password.value,
      };

      console.log(signUpRequest);
    }
  }

  private buildFormGroup(): void {
    this.initFormControls();

    this.signUpForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    });
  }

  private initFormControls(): void {
    this.firstName = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z\\s]*'),
    ]);
    this.lastName = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z\\s]*'),
    ]);
    this.username = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9\\.\\-]*'),
    ]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      matchValidator('confirmPassword', true),
    ]);
    this.confirmPassword = new FormControl('', [
      Validators.required,
      matchValidator('password'),
    ]);
  }
}
