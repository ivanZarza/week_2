const Person = require('./person.js');

class Contacts {
    constructor() {
        this.contacts = [];
    }

    añadirPersonas(persona) {
        if (persona instanceof Person) {
            this.contacts.push(persona);
        } else {
            console.log('No es una persona');
        }
    }

    printPersons() {
        this.contacts.forEach(persona => {
          console.log(persona);
        });
    }
  }

module.exports = Contacts