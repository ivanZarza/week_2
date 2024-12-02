class Vector {
  constructor() {
    this.vector = [];
  }
  Constructor(n, m) {
    this.vector = new Array(n);
    this.vector.forEach(i => {
      this.vector[i] = Math.floor(Math.random() * m);
    })
  }

  add(a) {
    if (this.vector.length === a.vector.length) {
      let result = new Vector();
      result.vector = this.vector.map((valor, i) => valor + a.vector[i]);
      return result;
    } else {
      return 'Los vectores no tienen la misma longitud';
    }
  }
}