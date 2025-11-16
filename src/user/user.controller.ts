import { Controller, Param, Post } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller("user") 
export class UserController{
  constructor(private readonly userdetails : UserService){}

  @Get()
  getuser(){
    return this.userdetails.getuser();
  }
  @Post(":id")
  getiduser(@Param("id") id: string) {
    return this.userdetails.getuserbyId(Number(id));
  } 
}
