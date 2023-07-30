import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedserviceService } from '../service/sharedservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  showPopup = false;
  customerId:number|null=null;
  cartItems: any[] = []; // Replace this with your actual cart items

  constructor(private route: ActivatedRoute,private sharedService:SharedserviceService) {}

  ngOnInit(): void {
    this.sharedService.cartDisplayValue$.subscribe((value) => {
      this.showPopup=value;
    });
  }
  openPopup(): void {
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
