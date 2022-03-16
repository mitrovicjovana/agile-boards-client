import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/helpers/auth.guard';
import { LoginComponent } from './auth/pages/login/login.component';
import { SignUpComponent } from './auth/pages/sign-up/sign-up.component';
import { SuccessRegistrationComponent } from './auth/pages/success-registration/success-registration.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'signup', pathMatch: 'full', component: SignUpComponent },
  {
    path: 'registration-succesful',
    pathMatch: 'full',
    component: SuccessRegistrationComponent,
  },
  {
    path: 'boards',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./boards/boards.module').then((module) => module.BoardsModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
