import { Injectable } from '@nestjs/common';

@Injectable()  // @injectable decorators is used to show services file.
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// This is the nest js services file which are used with the @Injectable decorators.

// In this file we write the business logic of the code and which are connected with the controller.
