import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private product = [
    { id: 1, name: 'Laptop', price: 20000 },
    { id: 2, name: 'tablet', price: 40000 },
    { id: 3, name: 'Mobile', price: 80000 },
  ];

  // method for /user request in which all the object return.
  getAllProduct() {
    return this.product;
  }

  // method for /user/id request in which the id's related object only return.
  getProductById(id: number) {
    return this.product.find((product) => product.id === id);
  }
}
