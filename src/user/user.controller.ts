import { Controller, Param, Post } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller() 
export class UserController{
  @Get("about")
  findUser():string {
    return "This is about page and run through the get request. and sometime it is very like nobody talk about."
  }

  @Post("post")
  getPost():string {
    return "This is post request which are only access by the postman"
  }
}
