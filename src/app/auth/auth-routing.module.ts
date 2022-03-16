import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SuccessRegistrationComponent } from './pages/success-registration/success-registration.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', pathMatch: 'full', component: LoginComponent },
      { path: 'signup', pathMatch: 'full', component: SignUpComponent },
      {
        path: 'registration-succesful',
        pathMatch: 'full',
        component: SuccessRegistrationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
