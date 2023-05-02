import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { AuthGuard } from './routeguards/auth.guard';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { DetailsUserComponent } from './components/user/details-user/details-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'form', component: AddUserComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'forgot', component: ForgotComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: {
    roles: ['USER', 'ADMIN']
  }},
  { path: 'list', component: ListUserComponent, canActivate: [AuthGuard], data: {
    roles: ['ADMIN']
  }},
  { path: 'details', component: DetailsUserComponent, canActivate: [AuthGuard], data: {
    roles: ['ADMIN']
  }},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
