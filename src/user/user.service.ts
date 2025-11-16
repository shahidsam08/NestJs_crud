import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private user = [
    {id: 1, name : "Shahid", age : 24},
    {id: 2, name : "Irshad", age : 21},
    {id: 3, name : "Tausif", age : 23},
    {id: 4, name : "sajid", age : 25}
  ]
  getuser() {
    return this.user;
  }

  getuserbyId(id: number){
    return this.user.find((user) => user.id === id)
  }
}
