const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt');
console.log(
  stats.isFile(), //> si es un fichero
  stats.isDirectory(), //> si es un directorio
  stats.isSymbolicLink(), //> si es un enlace simbólico
  stats.size //> tamaño en bytes
);

console.log('Leyendo el primer archivo...');
const text = fs.readFileSync('./archivo.txt', 'utf-8');
console.log(text);

console.log('Leyendo el segundo archivo...');
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8');
console.log(secondText);


function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    console.log(data.toString());
  })
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function(err) {
    if(err) {
      console.error('No he podido escribirlo', err);
    } else {
      console.log('Se ha escrito correctamente');
    }
  })
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

// borrar(__dirname + '/archivo1.txt', console.log);
//escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
// leer(__dirname + '/archivo.txt');