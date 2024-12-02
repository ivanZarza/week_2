
class Person {

  public name: string;
  public age: number;
  public address: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.address = '';
  }

  public printName():void {
    console.log(this.name);
  }

  public yearOfBirth(currentYear: number): number {
    let born = currentYear - this.age;
    return born;
  }

  setAddress(address:string):void {
    this.address = address
  }

  getAddress() {
    return this.address
  }
}


export { Person }

