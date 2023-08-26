const buffer = Buffer.alloc(4) // > Estamos guardando la cantidad de espacio en memoria
const bufferFrom = Buffer.from([1, 2, 5]) // > Guardando un array de numeros
const bufferFromString = Buffer.from('Hola mundo') // > Guardando una cadena de texto

console.log(buffer)
console.log(bufferFrom)
console.log(bufferFromString) // > Es la versión cruda en la que te muestra el resultado
console.log(bufferFromString.toString())

// > Recorrido de abcedario
const abc = Buffer.alloc(26)
console.log(abc)

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97
}

console.log(abc)
console.log(abc.toString())
