import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerdto } from './dto/create_customerdto';
import { TransformCustomerPipe } from './pipe/transform-customer/transform-customer.pipe';

@Controller('customer')
export class CustomerController {
  constructor(private readonly refCustomer: CustomerService) {}

  @Get()
  getallcustomer(){
    return this.refCustomer.getAllCustomer();
  }

  @Get(":id")
  getcustomerbyid(@Param("id") id: string){
    this.refCustomer.getCustomerById(Number(id))
  }

  // create new user
  @Post()
  createcusomer(@Body() body : CreateCustomerdto){
    return this.refCustomer.addCustomer(body)
  }

  //using the pipe in the post method when the client sent the data.
  @Post('custompipe') // http://localhost:3000/customer/custompipe
  allcustomPipe(@Body("name", new TransformCustomerPipe()) name: string){
    return this.refCustomer.customPipemessage(name)
  }
}
