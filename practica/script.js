const fs = require('fs');
const path = require('path');

const carpetaArchivo = path.join(__dirname, 'carpetaArchivo');

fs.mkdir(carpetaArchivo, (err) => {
  if(err) {
    console.err(err.message)
  } else {
    console.log('carpeta creada');
  }

  const archivo = path.join(carpetaArchivo, 'archivoTexto.txt');

  let texto = 'soy un texto dentro de un archivo';

  fs.writeFile(archivo, texto, 'utf-8', (err) => {
    if(err) {
      console.error(err.message);
    } else {
      console.log('Archivo creado');
    }
  })
})
