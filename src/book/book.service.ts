import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  private book = [
    {id : 1, name: "java by rosemary", price : 2000},
    {id: 2, name: "game of thrones", price: 1000},
    {id: 3, name: "C++ by shahid ali", price : 4000}
  ]
  // get all the books object
  getBooks(){
    return this.book;
  }

  /// get book by id
  getBookbyId(id: number) {
    return this.book.find((book) => book.id === id);
  }
}
