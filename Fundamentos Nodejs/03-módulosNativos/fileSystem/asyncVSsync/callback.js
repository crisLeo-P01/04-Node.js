const fs = require('node:fs');

//> DE FORMA SINCRONA --->
console.log('Leyendo el primer archivo...');
const text = fs.readFileSync('./archivo.txt', 'utf-8');
console.log(text);

console.log('Ejecutando cosas mientras lee archivos');

console.log('Leyendo el segundo archivo...');
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8');
console.log(secondText);

console.log('-------------------------------------');

//> DE FORMA ASINCRONA --->
console.log('Leyendo el primer archivo...');
fs.readFile('./archivo.txt', 'utf-8', (req, res) => {
  console.log(res);
})

console.log('Ejecutando cosas mientras lee archivos ASINCRONOS');

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8', (req, res) => {
  console.log(res);
})
