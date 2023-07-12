import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from "../../environment";
import {CustomerDto} from '../dto/CustomerDto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiBaseUrl: string = environment.apiBaseUrl;
  token: string | null = null;
  headers:HttpHeaders;
  constructor(private httpService: HttpClient) {
    this.token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  }

  saveCustomer(customer: CustomerDto): Observable<any> {
    return this.httpService.post(this.apiBaseUrl + "/customer/save",customer,{headers:this.headers});
  }

  me():Observable<any>{
    return this.httpService.get(this.apiBaseUrl+"/customer/me",{headers: this.headers}).pipe(
      map(response => response as CustomerDto)
    );
  }
}
