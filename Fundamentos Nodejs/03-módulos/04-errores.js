function otraFuncion() {
  seRompre()
}

function seRompre() {
  return 5 + z;
}

function soyAsincrona(cb) {
  setTimeout(function() {
    try {
      return 5 + z;
    } catch(err) {
      console.log('Error en mi función asíncrona');
      cb(err);
    }
  })
}

try {
  // otraFuncion();
  soyAsincrona(function(err) {
    console.log(err.message);
  })
} catch(err) {
  console.log('Se produjo un error');
  console.log(err.message);
  console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('Sigue la ejecución del programa');