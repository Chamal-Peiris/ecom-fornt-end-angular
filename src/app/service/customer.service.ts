import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from "../../environment";
import {CustomerDto} from '../dto/CustomerDto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiBaseUrl: string = environment.apiBaseUrl;
  token: string | null = null;

  constructor(private httpService: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  saveCustomer(customer: CustomerDto): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.httpService.post(this.apiBaseUrl + "/customer/save",customer,{headers});
  }
}
