console.time('TODO')
let suma = 0
let suma2 = 0

console.time('Bucle')
for (let i = 0; i < 100000000; i++) {
  suma += 1
}
console.timeEnd('Bucle')

console.time('Bucle 2')
for (let i = 0; i < 10000; i++) {
  suma2 += 1
}
console.timeEnd('Bucle 2')

console.time('ASINCRONO')
console.log('Empieza el proceso async')
asincrono()
  .then(() => {
    console.timeEnd('ASINCRONO')
  })

console.timeEnd('TODO')

// > ---
function asincrono () {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log('Termina el proceso asincrono')
      resolve()
    })
  })
}
