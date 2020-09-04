import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  

  // private :: using session
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
