export class UserDto {
  constructor(public username:string | null = null,public password:string | null =null,public userRole:string[] | null=null) {
  }
}
