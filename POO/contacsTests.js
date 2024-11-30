const Contacs = require('./contacs.js')
const Person = require('./person.js')

let contactos = new Contacs
let persona1 = new Person('Ivan', 'Zarza Estevez', 1979, 'Calle Falsa 123', '692692692', '47474474b','ivavavvavva@izarzadev.com', 'masculino', 'soltero', 'español', 'hosteleria', ['E.G.B.', 'G.M. Cultivos Marinos'], 1, 2, 'Maria Elena', 'Jose Francisco', 1.85, 93, 'castaño oscuro', 'marrones y verdes', 'blanca', 42, 'normal', false, ['ninguna'], ['ninguna'], '0+', ['cine', 'teatro', 'viajar']);
let persona2 = new Person('Alberto', 'Zarza Estevez', 1979, 'Calle Falsa 123', '692692692', '47474474b','ivavavvavva@izarzadev.com', 'masculino', 'soltero', 'español', 'hosteleria', ['E.G.B.', 'G.M. Cultivos Marinos'], 1, 2, 'Maria Elena', 'Jose Francisco', 1.85, 93, 'castaño oscuro', 'marrones y verdes', 'blanca', 42, 'normal', false, ['ninguna'], ['ninguna'], '0+', ['cine', 'teatro', 'viajar'])
let persona3 = new Person('Roberto', 'Zarza Estevez', 1979, 'Calle Falsa 123', '692692692', '47474474b','ivavavvavva@izarzadev.com', 'masculino', 'soltero', 'español', 'hosteleria', ['E.G.B.', 'G.M. Cultivos Marinos'], 1, 2, 'Maria Elena', 'Jose Francisco', 1.85, 93, 'castaño oscuro', 'marrones y verdes', 'blanca', 42, 'normal', false, ['ninguna'], ['ninguna'], '0+', ['cine', 'teatro', 'viajar'])
let persona4 = new Person('Rigoberto', 'Zarza Estevez', 1979, 'Calle Falsa 123', '692692692', '47474474b','ivavavvavva@izarzadev.com', 'masculino', 'soltero', 'español', 'hosteleria', ['E.G.B.', 'G.M. Cultivos Marinos'], 1, 2, 'Maria Elena', 'Jose Francisco', 1.85, 93, 'castaño oscuro', 'marrones y verdes', 'blanca', 42, 'normal', false, ['ninguna'], ['ninguna'], '0+', ['cine', 'teatro', 'viajar'])

console.log(contactos);

contactos.añadirPersonas(persona1);
contactos.añadirPersonas(persona2);
contactos.añadirPersonas(persona3);
contactos.añadirPersonas(persona4);

contactos.contacts.forEach(persona => {
  console.log(persona);
})



