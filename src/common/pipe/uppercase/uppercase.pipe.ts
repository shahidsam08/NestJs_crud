import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(typeof value === 'string'){
      return value.toUpperCase();
    }
    return value;
  }
}

// We create this pipe outside of the anymodule because it become easy to use this pipe with diferent files method and classses
// you can make the pipe inside the module which can help to manage your code manageable.
