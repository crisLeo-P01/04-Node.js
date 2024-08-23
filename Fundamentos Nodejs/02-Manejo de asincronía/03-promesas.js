/* eslint-disable prefer-promise-reject-errors */
// console.log('Empezando proceso')

// function hola(nombre) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log('Hola ' + nombre)
//       resolve(nombre)
//     }, 1500)
//   })
// }

// function hablar(nombre) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       console.log('Bla bla bla...')
//       // resolve(nombre);
//       reject('Hay un error')
//     }, 1500)
//   })
// }

// function adios(nombre) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       console.log('Adios ' + nombre)
//       resolve()
//     }, 1500)
//   })
// }

// hola('Cristian')
//   .then(hablar)
//   .then(hablar)
//   .then(hablar)
//   .then(hablar)
//   .then(adios)
//   .then((nombre) => {
//     console.log('Terminando proceso')
//   })
//   .catch(error => {
//     console.error('Ha habido un error')
//     console.error(error)
//   })

// console.log('Proceso finalizado');
// console.log('Comienzo de un nuevo proceso');

// const promesaCumplida = true
// const miPromesa = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (promesaCumplida) {
//       res('Promesa CUMPLIDA')
//     } else {
//       rej('Promesa RECHAZADA')
//     }
//   }, 5000)
// })

// const manejarPromesaCumplida = (valor) => {
//   console.log(valor);
// }

// const manejarPromesaRechazada = (razonRechazo) => {
//   console.log(razonRechazo);
// }

// miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada)

// console.log('Proceso finalizado');

console.log("Pedido de pizzas Comenzado");
const estatusPedido = () => {
  return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("Pedido exitoso! Su pizza esta en camino");
    } else {
      reject("Ocurrio un error. Por favor intente nuevamente");
    }
  }, 3000);
});

// TOTAL DE REEMPLAZO
const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError);
};

// miPedidoDePizza.then(manejarPedido, rechazarPedido)

// --------- Esto 👆 es reemplazado de forma mas concisa por esto 👇

// miPedidoDePizza
//  .then((mensajeDeConfirmacion) => {
//    console.log(mensajeDeConfirmacion);
//  })
// .then(null, (mensajeDeError) => {
//    console.log(mensajeDeError);
// })

//   // --------- Esto 👆 es reemplazado de forma mas concisa por esto 👇
//   .catch((mensajeDeError) => {
//     console.log(mensajeDeError);
//   })

miPedidoDePizza.then(manejarPedido).catch(rechazarPedido);
