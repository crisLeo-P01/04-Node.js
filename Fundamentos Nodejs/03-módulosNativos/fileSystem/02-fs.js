const fs = require('node:fs')
const path = require('node:path')

const stats = fs.statSync('./archivo2.txt')
console.log(
  stats.isFile(), // > si es un fichero
  stats.isDirectory(), // > si es un directorio
  stats.isSymbolicLink(), // > si es un enlace simbólico
  stats.size // > tamaño en bytes
)

// > PROCESO LEER UN ARCHIVO --->
// const filePathLeer = path.join(__dirname, 'archivo.txt') // Cambia 'archivo.txt' por el nombre del archivo que deseas leer

// // Leer el contenido del archivo
// fs.readFile(filePathLeer, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error al leer el archivo:', err)
//   } else {
//     console.log('Contenido del archivo:', data)
//   }
// })

// > PROCESO ESCRIBIR UN ARCHIVO --->
const filePathWrite = path.join(__dirname, 'archivodato.txt') // Cambia 'archivo.txt' por el nombre del archivo que quieras

const contenidoNuevo = 'Este es el contenido que quiero escribir en el archivo.'

// Escribe en el archivo
fs.writeFile(filePathWrite, contenidoNuevo, (err) => {
  if (err) {
    console.error('Error al escribir en el archivo:', err)
  } else {
    console.log('Contenido escrito correctamente en el archivo.')
  }
})

// > PROCESO BORRAR UN ARCHIVO --->
// const filePathBorrar = path.join(__dirname, 'archivo.txt') // Cambia 'archivo.txt' por el nombre del archivo que deseas borrar

// // Borrar el archivo
// fs.unlink(filePathBorrar, (err) => {
//   if (err) {
//     console.error('Error al borrar el archivo:', err)
//   } else {
//     console.log('Archivo borrado correctamente.')
//   }
// })
