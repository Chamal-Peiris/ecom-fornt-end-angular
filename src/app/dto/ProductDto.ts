export class ProductDto{
  constructor(public prdouctId: number | null=null, public productName:string | null=null, public availableQuantity:number|null=null,public buyingPrice:number|null=null,
              public sellingPrice:number|null=null) {
  }
}
