import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import {UserDto} from '../dto/UserDto';
import {AuthService} from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    txtUName: '',
    txtPass: ''
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService,private router:Router) {
  }


  login() {
    let userDto = new UserDto(this.loginForm.value.txtUName, this.loginForm.value.txtPass, null);

    this.authService.authenticateUser(userDto).subscribe(
      (token: string) => {
        alert("user login successfull");
        console.log(token);
        localStorage.setItem('token', token);
        this.loginForm.reset();
        this.router.navigate(["/dashboard"]);
      }
    )
  }
}
