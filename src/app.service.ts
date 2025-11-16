import { Injectable } from '@nestjs/common';

@Injectable()  // @injectable decorators is used to show services file.
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
