import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TransformCustomerPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(typeof value === 'string'){
      return value.toUpperCase();
    }
    return value;
  }
}


// this is the concepts of the pipe which is used to validate and transform the data you can use the pipe every where you want.
// You can use with the variable, class and method.