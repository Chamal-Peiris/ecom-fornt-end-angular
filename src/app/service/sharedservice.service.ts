import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor() { }
  private sharedValueSubject = new BehaviorSubject<number>(0);
  private cartDisplaySubject = new BehaviorSubject<boolean>(false);
  sharedValue$ = this.sharedValueSubject.asObservable();
  cartDisplayValue$=this.cartDisplaySubject.asObservable();
  updateSharedValue(newValue: number) {
    this.sharedValueSubject.next(newValue);
  }
  updateCartDisplayBoolean(value:boolean){
    this.cartDisplaySubject.next(value);
  }
}
