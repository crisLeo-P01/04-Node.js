console.log(global);
console.log(setInterval);

global.miVariable = 'Soy el valor de una variable';
console.log(miVariable);

let i = 0;
let intervalo = setInterval(() => {
  console.log('hola');
  if (i === 3) {
    clearInterval(intervalo)
  }
  i++;
}, 1000)