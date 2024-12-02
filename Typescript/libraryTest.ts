import { Book } from "./book";
import { Library } from "./library";

let book1 = new Book('Manziger Z',8, '123454', 'Parchis', 'cAnaya')
let book2 = new Book('El señor de los anillos', 1234, '12233', 'Tolkien', 'Aragorn Books')
let book3 = new Book('El hobbit', 234, '12234', 'Tolkien', 'Gandalf Books')
let book4 = new Book('Pinocho', 234, '12235', 'Gigapeto', 'Ballena tragona')

let libreria = new Library()

libreria.addBook(book1)
libreria.addBook(book2)
libreria.addBook(book3)
libreria.addBook(book4)

libreria.setAddress('Calle mala letra')
libreria.setManager('Casimiro')

console.log(libreria.getAddress());
console.log(libreria.getManager());

console.log(libreria.toString())

console.log(libreria.findByAuthor('Tolkien'))