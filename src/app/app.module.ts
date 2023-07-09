import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import {UserService} from "./service/user.service";
import {CustomerService} from "./service/customer.service";
import {HttpClientModule} from "@angular/common/http";
import { AuthService } from './service/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,CustomerService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
