import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDto } from '../dto/ProductDto';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  productList: ProductDto[]=[];
  receivedId: string|null =null;
  constructor(private productService:ProductService,private route: ActivatedRoute) {
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
        console.log(this.productList);
      },
      (error)=>{
        console.log("Error Fetching Dto List",error);
      }
    )
  }
}
