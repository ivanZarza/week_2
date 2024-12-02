import { Book } from './book';

let book1 = new Book('El señor de los anillos' , 1234 , '12233', 'Tolkien', 'Aragorn Books');   
console.log(book1.toString());

book1.setTitle('El hobbit');
book1.setNPages(234);
book1.setIsbn('12234');
book1.setAuthor('J.Jr.Tolkien');
book1.setEditorial('Gandalf Books');
console.log('');
console.log(book1.getTitle());
console.log(book1.getNPages());
console.log(book1.getIsbn());
console.log(book1.getAuthor());
console.log(book1.getEditorial());
console.log('');
console.log(book1.toString());

