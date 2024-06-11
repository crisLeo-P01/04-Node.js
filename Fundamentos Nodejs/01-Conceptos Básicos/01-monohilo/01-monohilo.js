// Entra al event loop y lo resuelve
console.log('Hola mundo!');

/* Entra el event loop pero lo manda al thread pool para
que lo resuelva mientras el event loop sigue ejecutandose */

let i = 0
console.log('Ejecuto conteo');
const f_setInterval = setInterval(function () {
  console.log(i);
  i++;

  if (i === 5) {
    let a = 5 + z;
  }

}, 1500)

// Entra al event loop y lo resuelve
console.log('Segunda instrucción');