import { Vector } from "./vector";

let vector = new Vector(5,10)
let v1 = new Vector(5,10)

vector.print()
v1.print()

let sum = vector.add(v1)
console.log('Suma', sum);
let resta = vector.subs(v1)
console.log('Resta', resta);
let mult = vector.mult(v1)
console.log('Multiplicacion', mult);
let producto = vector.multNumber(2)
console.log('Producto', producto);