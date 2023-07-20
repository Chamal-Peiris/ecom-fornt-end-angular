import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { ProductDto } from '../dto/ProductDto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiBaseUrl: string = environment.apiBaseUrl;
  token: string | null = null;
  headers:HttpHeaders;
  constructor(private httpService: HttpClient) {
    this.token = localStorage.getItem('token');
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  }

  getProducts():Observable<ProductDto[]>{
    return this.httpService.get<ProductDto[]>(this.apiBaseUrl+"/product",{headers:this.headers})
  }
}
