import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerdto } from './dto/create_customerdto';

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
}
