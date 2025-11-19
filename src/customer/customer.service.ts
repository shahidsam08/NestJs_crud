import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerdto } from './dto/create_customerdto';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];

  // get all customers
  getAllCustomer(): Customer[] {
    return this.customers;
  }

  // get method by id
  getCustomerById(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }

  // create new customer
  addCustomer(createcustomer: CreateCustomerdto): Customer {
    const newCustomer: Customer = {
      id: Date.now(),
      ...createcustomer,
    }
    this.customers.push(newCustomer)
    return newCustomer;
  }

  // custome pipe messsage 
  customPipemessage(same: string){
    return {message: `The name is : ${same}`}
  }
}
