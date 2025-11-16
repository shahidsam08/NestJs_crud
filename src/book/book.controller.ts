import { Controller, Get, Param, Post } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookrefer : BookService){}

  @Get()
  getallbooks() {
    return this.bookrefer.getBooks();
  }

  // get books by id
  @Post(":id")
  bookbyid(@Param("id") id : string){
    return this.bookrefer.getBookbyId(Number(id))
  }
}
