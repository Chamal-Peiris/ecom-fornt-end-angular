import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDto } from '../dto/CustomerDto';
import { CartService } from '../service/cart.service';
import { CustomerService } from '../service/customer.service';
import { SharedserviceService } from '../service/sharedservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  customerId: number  | null=null;
  cartCount: number|null=null;
  showCart: boolean = false;

  constructor(private customerService:CustomerService,private router:Router,private cartService:CartService,private sharedService:SharedserviceService) {
  }
  ngOnInit(){
    this.customerService.me().subscribe(
      (customer: CustomerDto) => {
        this.customerId=customer.id;
      },
      (error)=>{
        this.router.navigate(["/login"]);
      }
    )
    this.sharedService.sharedValue$.subscribe((value) => {
      this.cartCount = value;
    });

  }

  changePopup() {
   // this.sharedService.updateCartDisplayBoolean(true);
    this.showCart = !this.showCart;
  }
}
