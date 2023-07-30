import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  showPopup = false;
  customerId:number|null=null;
  cartItems: any[] = []; // Replace this with your actual cart items

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const showPopupString = sessionStorage.getItem('showPopup');
    this.showPopup = showPopupString === 'true';
  }
  openPopup(): void {
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
    sessionStorage.setItem('showPopup',JSON.stringify(false))
  }
}
