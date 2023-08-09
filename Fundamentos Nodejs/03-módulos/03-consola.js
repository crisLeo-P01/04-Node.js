let tabla = [
  {
    usuario: 1,
    nombre: 'Male'
  },
  {
    usuario: 2,
    nombre: 'Cristian'
  }
]

console.log(tabla);
console.table(tabla);

console.group('Conversacion');
console.log('bla bla bla...');
console.log('bla bla bla...');
console.log('bla bla bla...');
console.group('Conversacion Usuario2')
console.log('bla bla bla...');
console.log('bla bla bla...');
console.log('bla bla bla...');
console.groupEnd('Conversacion Usuario2')
console.groupEnd('Conversacion')

console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
console.count('veces')
