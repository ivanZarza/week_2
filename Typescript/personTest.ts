import { Person } from './person.js';

let person = new Person('Ivan', 45)

person.printName()
person.yearOfBirth(new Date().getFullYear())
console.log(person.yearOfBirth(new Date().getFullYear()))
person.setAddress('Calle 13 rua del percebe')
console.log(person.getAddress())