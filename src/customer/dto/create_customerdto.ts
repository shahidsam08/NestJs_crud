import { IsInt, IsString } from "class-validator";

export class CreateCustomerdto{
  @IsString() // decarator for string || used for type checking at the runtime
  name: string;
  @IsInt() // decorator for number
  age: number
  
}



// you can also make your own custom pipe which are used to validate and transform the data.

// for using the class decorator globally you have to go main.ts file and apply globally through validation pipe.

// class-validator decorator @IsString() work properly on runtime.
// dto are used to validdate the data which are sent from the client side. 
// there is no other data we want from the client side.
// dto is like a class and variable inside that class.

// use in a way make a instance of this class and use this.