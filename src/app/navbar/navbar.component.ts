import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDto } from '../dto/CustomerDto';
import { CartService } from '../service/cart.service';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  customerId: number  | null=null;

  constructor(private customerService:CustomerService,private router:Router,private cartService:CartService) {
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
  }
  
}
