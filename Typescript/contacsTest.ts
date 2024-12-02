import { Contacts } from "./contacs";
import { Person } from "./person";

let person1 = new Person('Ivan', 45)
let person2 = new Person('Fran', 25)
let person3 = new Person('Juan', 35)
let person4 = new Person('Antuan', 55)

let contacts = new Contacts()

contacts.contacts.push(person1)
contacts.contacts.push(person2)
contacts.contacts.push(person3)
contacts.contacts.push(person4)

contacts.printCalendar()