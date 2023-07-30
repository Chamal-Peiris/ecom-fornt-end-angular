import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartDto } from '../dto/CartDto';
import { ProductDto } from '../dto/ProductDto';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';
import { SharedserviceService } from '../service/sharedservice.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  productList: ProductDto[]=[];
  receivedId: number|null =null;

  cartValue = 0;
  cartForm = this.formBuilder.group({
    txtQuantity: null,
  });
  // @ts-ignore
  constructor(private productService:ProductService,private route: ActivatedRoute,private formBuilder: FormBuilder,private cartService:CartService,private sharedService:SharedserviceService) {
  }
  ngOnInit(){
    this.getProducts();
    this.route.params.subscribe(params => {
      this.receivedId = params['id'];
    });
    console.log(this.receivedId);
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      (data:ProductDto[])=>{
        this.productList=data;

      },
      (error)=>{
        console.log("Error Fetching Dto List",error);
      }
    )
  }

  addCart(productDto:ProductDto){
    let cartDto = new CartDto(null,this.receivedId,productDto.id,this.cartForm.value.txtQuantity,productDto.buyingPrice);

    this.cartValue++;
    this.sharedService.updateSharedValue(this.cartValue);
    this.cartService.saveCart(cartDto).subscribe(
      (response)=>{
        alert('Added to cart');

      },
      (error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          alert(error.error.message)
        } else {
          alert(`Error With Cause ${error.error.message} and status ${error.error.status}`)
        }
      }
    )
  }
}
