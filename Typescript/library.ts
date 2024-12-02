import { Book } from './book';

class Library {
  private books: Array<Book>;
  private address:string;
  private manager:string;

  constructor() {
    this.books = [];
    this.address = '';
    this.manager = '';
  }

  public getAddress(): string {
    return this.address;
  }

  public getManager(): string {
    return this.manager;
  }

  public setAddress(address: string): void {
    this.address = address;
  }

  public setManager(manager: string): void {
    this.manager = manager;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  public toString(): string {
    return this.books.map((value, index) => `Book ${index + 1}:\n\n${value.toString()}`).join('\n\n\n');
  }

getNumberOfBooks(): number {
  return this.books.length;
}

findByAuthor(author:string): Book[] {
  return this.books.filter(book => book.getAuthor() == author)
    }

}

export { Library }