import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/core/services/header.service';
import { SignUp } from '../../models/SignUp';
import { AuthService } from '../../services/auth.service';
import { CustomValidatorsService } from '../../services/custom-validators.service';

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
  signUpError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private customValidator: CustomValidatorsService,
    private router: Router,
    private headerService: HeaderService
  ) {
    if (this.authService.isLoggedIn()) router.navigateByUrl('/boards');
    this.headerService.hideHeader();
  }

  ngOnInit(): void {
    this.buildFormGroup();
  }

  public submitSignUp(): void {
    this.signUpError = '';

    if (this.signUpForm.valid) {
      const signUpRequest: SignUp = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        username: this.username.value,
        email: this.email.value,
        password: this.password.value,
      };

      this.authService.signUp(signUpRequest).subscribe((res) => {
        this.signUpForm.reset();
        if (res) this.router.navigateByUrl('/registration-succesful');
        else this.signUpError = 'Something went wrong, please try again.';
      });
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
    this.username = new FormControl(
      '',
      [Validators.required, Validators.pattern('[a-zA-Z0-9\\.\\-]*')],
      [this.customValidator.existValidator('username')]
    );
    this.email = new FormControl(
      '',
      [Validators.required, Validators.email],
      [this.customValidator.existValidator('email')]
    );
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      this.customValidator.matchValidator('confirmPassword', true),
    ]);
    this.confirmPassword = new FormControl('', [
      Validators.required,
      this.customValidator.matchValidator('password'),
    ]);
  }

  public getFirstNameErrorMessage(): string {
    if (this.firstName.hasError('required')) return 'First name is required.';
    return this.firstName.hasError('pattern')
      ? ' First name can contain only letters and spaces.'
      : '';
  }

  public getLastNameErrorMessage(): string {
    if (this.lastName.hasError('required')) return 'Last name is required.';
    return this.lastName.hasError('pattern')
      ? 'Last name can contain only letters spaces.'
      : '';
  }

  public getUsernamerrorMessage(): string {
    if (this.username.hasError('required')) return 'Username is required.';
    else if (this.username.hasError('pattern'))
      return 'Username can contain only letters, numbers, dots and dashes.';
    return this.username.hasError('exist') ? 'Username is already taken.' : '';
  }

  public getEmailErrorMessage(): string {
    if (this.email.hasError('required')) return 'Email is required.';
    else if (this.email.hasError('email')) return 'Email is not valid.';
    return this.email.hasError('exist') ? 'Email is already taken.' : '';
  }

  public getPasswordErrorMessage(): string {
    if (this.password.hasError('required')) return 'Password is required.';
    return this.password.hasError('minlength')
      ? 'Password must be at least 6 characters long.'
      : '';
  }

  public getConfirmPasswordErrorMessage(): string {
    if (this.confirmPassword.hasError('required'))
      return 'Password is required.';
    return this.confirmPassword.hasError('matching')
      ? 'Passwords must match.'
      : '';
  }
}
