import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { CartDto } from '../dto/CartDto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiBaseUrl: string = environment.apiBaseUrl;
  token: string | null = null;
  headers:HttpHeaders;
  constructor(private httpService: HttpClient) {
    this.token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  }

  saveCart(cartDto:CartDto):Observable<any>{
    return this.httpService.post(this.apiBaseUrl+"/cart/save",cartDto,{headers:this.headers})
  }
}
