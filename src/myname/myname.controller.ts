import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipe/uppercase/uppercase.pipe';

@Controller('myname')
export class MynameController {
  @Post("custom") // url: http://localhost:3000/myname/custom
  createNewuser(@Body("name", new UppercasePipe()) name: string){
    return {message: `return user is : ${name}`}
  }
}
