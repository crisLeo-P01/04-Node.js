const fs = require("fs");

fs.mkdir("archivos", (err) => {
  if (err) {
    console.log("Se produjo un error al crear la carpeta");
  } else {
    console.log("Carpeta creada");
  }
});

fs.writeFile("./archivos/archivoNuevo.txt", "", (err) => {
  if (err) {
    console.log("Se produjo un error al crear el archivo: ", err.message);
  } else {
    console.log("Archivo creado de forma exitosa");
  }
});

const incluirTexto = "Esto es una linea de texto a incluir en el archivo";

fs.appendFile("./archivos/archivoNuevo.txt", incluirTexto, "utf8", (err, data) => {
  if (err) {
    console.log("Se produjo un error al incluir texto en el archivo:", err);
    return;
  }

  console.log("Se intrdujo el texto de forma exitosa:", data);
});

setTimeout(() => {
  fs.unlink("./archivos/archivoNuevo.txt", (err) => {
    if (err) {
      console.log("Se produjo un error al eliminar el archivo: ", err);
    } else {
      console.log("Se elimino el archivo de forma exitosa");
    }
  });
}, 10000);
