import { Module } from '@nestjs/common';
import { ProductController } from 'src/product/product.controller';
import { ProductService } from 'src/product/product.service';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [],
  controllers : [ProductController,UserController],
  providers : [UserService, ProductService]
})
export class EmployeeModule {}
