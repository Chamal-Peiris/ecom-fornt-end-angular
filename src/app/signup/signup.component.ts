import {Component} from '@angular/core';
import {FormBuilder, FormGroup,FormControl} from '@angular/forms';
import {UserDto} from '../dto/UserDto';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm = this.formBuilder.group({
    txtUName: '',
    txtPass: ''
  });

  constructor(private userService: UserService, private formBuilder: FormBuilder) {

  }

  saveUser() {
    if (this.signupForm.value.txtPass != null && this.signupForm.value.txtUName != null) {
      const USER_ROLES:string[]=["USER"];
      var userDto = new UserDto(this.signupForm.value.txtUName, this.signupForm.value.txtPass,USER_ROLES);

      this.userService.saveUser(userDto).subscribe(
        response => {
          console.log(response)
        },
        error => {
          console.error("Error", error);
        }
      )
    }

  }
}
