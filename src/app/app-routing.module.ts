import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from "./login/login.component";
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full' },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'account',
    component: AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
