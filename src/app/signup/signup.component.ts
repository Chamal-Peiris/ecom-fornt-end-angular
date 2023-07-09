import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {UserDto} from '../dto/UserDto';
import {UserService} from '../service/user.service';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthService} from '../service/auth.service';
import {CustomerService} from '../service/customer.service';
import {CustomerDto} from "../dto/CustomerDto";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm = this.formBuilder.group({
    txtUName: '',
    txtPass: '',
    txtConfPass: '',
    txtName: '',
    txtEmail: '',
    txtMob: '',
    txtAdd: ''

  });

  constructor(private userService: UserService, private authService: AuthService, private customerService: CustomerService, private formBuilder: FormBuilder) {
  }

  saveUser() {
    if (this.signupForm.value.txtPass != null && this.signupForm.value.txtUName != null) {

      if (this.signupForm.value.txtPass != this.signupForm.value.txtConfPass) {
        alert("Password and conf pass does not match")
        throw new Error("Password and conf pass does not match");
      }

      const USER_ROLES: string[] = ["USER"];
      var userDto = new UserDto(this.signupForm.value.txtUName, this.signupForm.value.txtPass, USER_ROLES);

      this.userService.saveUser(userDto).subscribe(
        (response: UserDto) => {

          //Get Auth Token For the logged in user
          this.authService.authenticateUser(userDto).subscribe(
            (token: string) => {
              console.log(token)
              localStorage.setItem('token', token);

              //Logic to save the customer
              var customerDto = new CustomerDto(this.signupForm.value.txtName, this.signupForm.value.txtEmail, this.signupForm.value.txtMob, this.signupForm.value.txtAdd);

              this.customerService.saveCustomer(customerDto).subscribe(
                (response: CustomerDto) => {
                  alert(`Customer with name ${response.fullName} was saved successfully`)
                },
                (error: HttpErrorResponse) => {
                  if (error.error instanceof ErrorEvent) {
                    // Client-side error occurred
                    alert(error.error.message)
                  } else {
                    // API error occurred
                    alert(`Error With Cause ${error.error.message} and status ${error.error.status}`)
                  }
                }
              )
            },
            error => {
              alert(error.value)
            }
          )
        },
        (error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            // Client-side error occurred
            alert(error.error.message)
          } else {
            // API error occurred
            alert(`Error With Cause ${error.error.message} and status ${error.error.status}`)
          }
        }
      )
    }

  }
}
