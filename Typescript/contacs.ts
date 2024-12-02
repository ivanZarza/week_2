import { Person } from "./person";

class Contacts {
  public contacts:Array<Person>;

  constructor() {
    this.contacts = [];
  }

  public printCalendar() {
    this.contacts.forEach((value) => {
      console.log(value);
    })
  }
}

export { Contacts }