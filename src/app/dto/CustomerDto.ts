export class CustomerDto {
  constructor(public id:number|null=null,public fullName:string| null =null,public email: string | null =null,public mobile:string | null = null,public address:string | null =null) {
  }
}
