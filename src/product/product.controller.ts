import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService){}

  @Get()
  getAllProducts() {
    return this.productService.getAllProduct();
  }

  @Post(":id")
  productbyid(@Param("id") id : string) {
    return this.productService.getProductById(Number(id));
  }
}
