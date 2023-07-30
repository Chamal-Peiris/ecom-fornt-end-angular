import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable } from 'rxjs';
import { environment } from 'src/environment';
import { CartDto } from '../dto/CartDto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiBaseUrl: string = environment.apiBaseUrl;
  token: string | null = null;
  headers:HttpHeaders;
  cartDtoList:CartDto[] | null= null;
  constructor(private httpService: HttpClient) {
    this.token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  }

  saveCart(cartDto:CartDto):Observable<any>{
    return this.httpService.post(this.apiBaseUrl+"/cart/save",cartDto,{headers:this.headers})
  }


  getCustomerCart(customerId: number): Observable<CartDto[]> {
    const params = new HttpParams().set('customerId', customerId.toString());

    return this.httpService
      .get<CartDto[]>(this.apiBaseUrl + "/get-customer-cart", {headers: this.headers, params: params})
      .pipe(
        map((response: any[]) => {
         this.cartDtoList = response.map((item) => new CartDto(item));
         return this.cartDtoList;
        })
      );
  }

  getCartCount(): number {
    return this.cartDtoList == null ? 0 : this.cartDtoList.length;
  }
}
