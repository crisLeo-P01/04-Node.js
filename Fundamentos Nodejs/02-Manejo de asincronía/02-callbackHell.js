console.log("Empezando proceso");

function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("Hola " + nombre);
    miCallback(nombre);
  }, 1500);
}

function hablar(cbHablar) {
  setTimeout(function () {
    console.log("Bla bla bla...");
    cbHablar();
  }, 1500);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios " + nombre);
    otroCallback();
  }, 1500);
}

hola("Cristian", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("Proceso Terminado");
  });
});

// Con esto 👆 resolvemos el callback hell 👇 y evitamos muchos errores

/* Además de que es mucho mas legible, ya que si tenemos 300 conversaciones
con solo colocar en la función conversación 300 lo resolvemos y de esa
forma evitamos el llamado de la función hablar 300 veces. Por lo que
lo hacemos mas legible y mucho mas manejables. */

// hola('Cristian', function(nombre) {
//   hablar(function() {
//     hablar(function() {
//       hablar(function() {
//         adios(nombre, function() {
//           console.log('Terminando proceso');
//         })
//       })
//     })
//   })
// })
