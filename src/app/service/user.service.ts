import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environment";
import { UserDto } from '../dto/UserDto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseUrl: string = environment.apiBaseUrl;
  constructor(private httpService: HttpClient) { }

  saveUser(user: UserDto):  Observable<any>{
    return this.httpService.post(this.apiBaseUrl+"/register",user);
  }

}
