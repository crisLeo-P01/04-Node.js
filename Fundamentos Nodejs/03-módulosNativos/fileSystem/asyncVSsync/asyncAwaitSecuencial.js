const fs = require('node:fs/promises');

async function init() {

  console.log('Leyendo el primer archivo...');
  const text = await fs.readFile('./archivo.txt', 'utf-8')
  console.log('Primer texto: ', text);
  
  console.log('Ejecutando cosas mientras lee archivos ASINCRONOS');
  
  console.log('Leyendo el segundo archivo...');
  const secondText = await fs.readFile('./archivo2.txt', 'utf-8')
  console.log('Segundo texto: ', secondText);
}

init();