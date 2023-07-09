export class CustomerDto {
  constructor(public fullName:string| null =null,public email: string | null =null,public mobile:string | null = null,public address:string | null =null) {
  }
}
