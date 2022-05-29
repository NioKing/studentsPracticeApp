import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../login/guards/login.guard';
import { LoginComponent } from '../login/login.component';
import { RegisterGuard } from '../login/register/guards/register.guard';
import { RegisterComponent } from '../login/register/register.component';
import { MainComponent } from '../main/main.component';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [RegisterGuard]},
  {path: 'students', component: MainComponent, canActivate: [LoginGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [RegisterGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
