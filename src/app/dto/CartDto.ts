export class CartDto{
  constructor(public id:number|null=null,public customerId:number | null=null,public productId:number |null=null,public quantity:number|null=null,public price:number|null=null) {
  }
}
