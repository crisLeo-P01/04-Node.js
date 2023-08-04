console.log('Empezando proceso');

function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log('Hola ' + nombre);
    miCallback(nombre)
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(function() {
    console.log('Adios ' + nombre);
    otroCallback()
  }, 1500)
}

hola('Cristian', function(nombre) {
  adios(nombre, function() {
    console.log('Terminando proceso');
  })
})
