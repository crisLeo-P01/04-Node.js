function aprenderTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

aprenderTema('Node.js');

// setTimeout(function, time, args)
// Para ejecutar código luego de un número específico de milisegundos
setTimeout(aprenderTema, 4000, 'Node.js')

console.log('Antes de setImmediate()'); // código síncrono

// setImmediate()
// Para ejecutar código asíncrono en la próxima iteración del ciclo de eventos(lo más pronto posible)
setImmediate(aprenderTema, 'Javascript')

console.log('Después de setImmediate()'); // código síncrono

// setInterval()
// Para ejecutar código un num infinito de veces con un retraso específico de milisegundos
function sumar(a, b) {
  console.log(a + b);
}

setInterval(sumar, 3, 4)