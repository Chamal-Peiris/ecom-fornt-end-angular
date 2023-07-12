import {Component, ElementRef, ViewChild} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {CustomerDto} from "../dto/CustomerDto";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('customerName')
  customerName!: ElementRef
  email: string|null=null;
  constructor(private customerService: CustomerService,private router: Router) {
  }

  ngOnInit() {
    this.customerService.me().subscribe(
      (customer: CustomerDto) => {
        console.log(customer);
        this.customerName.nativeElement.innerText=customer.fullName;
        this.email=customer.email;
      },
      (error)=>{
        this.router.navigate(["/login"]);
      }
    )
  }


}
