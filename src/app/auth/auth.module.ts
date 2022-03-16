import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SuccessRegistrationComponent } from './pages/success-registration/success-registration.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, SuccessRegistrationComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class AuthModule {}
