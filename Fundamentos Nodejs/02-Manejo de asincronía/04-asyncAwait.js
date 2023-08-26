async function hola (nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('Hola ' + nombre)
      resolve(nombre)
    }, 1500)
  })
}

async function hablar (nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Bla bla bla...')
      resolve(nombre)
      // reject('Hay un error')
    }, 1500)
  })
}

async function adios (nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Adios ' + nombre)
      resolve()
    }, 1500)
  })
}

async function main () {
  const nombre = await hola('cristian')
  await hablar()
  await hablar()
  await hablar()
  await adios(nombre)
  console.log('Terminando proceso')
}

console.log('Empezando proceso')
main()
