console.log(process.cwd());

process.on('beforeExit',() => {
  console.log('El proceso va a terminar');
});

process.on('exit',() => {
  console.log('El proceso finalizo');
  setTimeout(function() {
    console.log('Esto NO se va a ejecutar');
  }, 0);
});

setTimeout(() => {
  console.log('Esto SI se va a ejecutar');
}, 0);

//> Cuando hay una esepcion y rompe nuestro proceso y no lo captamos con catch
//> Una forma de evitar esto es una ecepción que no se capturo:
process.on('uncaughtException', (err, origen) => {
  console.error('Vaya, se nos ha olvidado captar el error');
  console.error(err);
});
// process.on('uncaughtRejection'); //> Promesas que se harn rechazado y nadie tiene un catch

funcionQueNoExiste();

console.log('Esto si el error no se captura, no sale');