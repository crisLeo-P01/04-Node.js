const fs = require("node:fs");
const path = require("node:path");

const stats = fs.statSync("./archivo.txt");
console.log(
  "Es un archivo? => " + stats.isFile(), // > si es un fichero
  stats.isDirectory(), // > si es un directorio
  stats.isSymbolicLink(), // > si es un enlace simbólico
  stats.size // > tamaño en bytes
);

// > PROCESO LEER UN ARCHIVO --->
const filePathLeer = path.join(__dirname, "archivo.txt"); // Cambia 'archivo.txt' por el nombre del archivo que deseas leer

// Leer el contenido del archivo
fs.readFile(filePathLeer, "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    // throw err // Esta línea si se produce un error, detiene la efecución de todo el archivo
  } else {
    console.log("Contenido del archivo:", data);
  }

  console.log("Mensaje despues de error de leer un archivo");
});

// > PROCESO PARA CAMBIAR EL NOMBRE DE UN ARCHIVO --->
// fs.rename('index.html', 'main.html', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Nombre cambiado exitosamente');
// })

// > PROCESO ESCRIBIR UN ARCHIVO --->
const filePathWrite = path.join(__dirname, "archivodato.txt"); // Cambia 'archivo.txt' por el nombre del archivo que quieras
const contenidoNuevo = "Este es el contenido que quiero escribir en el archivo.";

// Escribe en el archivo. Reemplaza todo el contenido del archivo
fs.writeFile(filePathWrite, contenidoNuevo, (err) => {
  if (err) {
    console.error("Error al escribir en el archivo:", err);
  } else {
    console.log("Contenido escrito correctamente en el archivo.");
  }
});

// Texto agregado al final del archivo
const filePathAlFinal = path.join(__dirname, "archivodato.txt");
const agregarContenidoAlFinal = "Texto agregado al final del archivo";

fs.appendFile(filePathAlFinal, agregarContenidoAlFinal, (err) => {
  if (err) {
    console.log("Se produjo un error al implementar texto");
  } else {
    console.log("Texto agregado al final del archivo de forma exitosa");
  }
});

const creoArchivonuevo = path.join(__filename, "aprendoNode.txt");

// > PROCESO BORRAR UN ARCHIVO --->
const filePathBorrar = path.join(__dirname, "archivo.txt"); // Cambia 'archivo.txt' por el nombre del archivo que deseas borrar

// // Borrar el archivo
// fs.unlink(filePathBorrar, (err) => {
//   if (err) {
//     console.error("Error al borrar el archivo:", err);
//   } else {
//     console.log("Archivo borrado correctamente.");
//   }
// });

setTimeout(function () {
  fs.unlink(filePathBorrar, (err) => {
    if (err) {
      console.log("Se ha producido un error en el archivo", err);
    } else {
      console.log("El archivo fue borrado con éxtio");
    }
  });
}, 6000);
