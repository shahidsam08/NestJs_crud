import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, ProductController],
  providers: [AppService, ProductService, UserService],
})
export class AppModule {}



// UserController is from the user folder and the file is user.controller.ts file. It is important to put UserController in the app.module.ts file in the controller file.
