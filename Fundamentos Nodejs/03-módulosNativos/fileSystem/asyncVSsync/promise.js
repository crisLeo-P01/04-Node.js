/* Esto solo en los módulos nativos
que no tienen promesas nativas */

// const {promisify} = require('node:util');
// const readFilePromise = promisify(fs.readFile);

const fs = require('node:fs/promises');

//> DE FORMA ASINCRONA --->
console.log('Leyendo el primer archivo...');
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('Primer texto: ', text);
  })

console.log('Ejecutando cosas mientras lee archivos ASINCRONOS');

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('Segundo texto: ', text);
  })