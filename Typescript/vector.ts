export class Vector{
  private elements: Array<number>

  constructor(n:number, k:number){
    this.elements = new Array<number>(n)
    for(let i = 0; i < n; i++){
      this.elements[i] = Math.floor(Math.random() * k)
    }
}

public print(): void{
  console.log(this.elements);
}

public add(v1:Vector): Vector{
  if(this.elements.length != v1.elements.length){
    throw new Error('Los vectores on tienen la misma longitud')
  }
  let sumaArray = new Vector(this.elements.length, 0)
  sumaArray.elements= this.elements.map((value, i) => value + v1.elements[i])
  return sumaArray
}

public subs(v1:Vector): Vector{
  if(this.elements.length != v1.elements.length){
    throw new Error('Los vectores on tienen la misma longitud')
  }
  let restaArray = new Vector(this.elements.length, 0)
  restaArray.elements = this.elements.map((value, i) => value - v1.elements[i])
  return restaArray
}

public mult(v1:Vector):Vector{
  if(this.elements.length != v1.elements.length){
    throw new Error('Los vectores on tienen la misma longitud');
  }
  let multArray = new Vector(this.elements.length, 0)
  multArray.elements = this.elements = this.elements.map((value,i) => value * v1.elements[i])
  return multArray
  }

  multNumber(n:number):Vector{
    let producArray = new Vector(this.elements.length, 0)
    producArray.elements = this.elements = this.elements.map( value => value % n )
    return producArray
  }
}
