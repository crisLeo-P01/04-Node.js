const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {

  return new Promise ((resolve) => {

    console.clear();
    console.log('======================='.green);
    console.log(' Seleccione una opción '.green);
    console.log('=======================\n'.green);

    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Listar tarea`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} Salir\n`);

    // Recibir información del usuario
    const readline = require('readline').createInterface ({
      input: process.stdin, // Pausar la interfaz y esperar al usuario de haber ingresado y haber dado enter
      output: process.stdout, // Mostrar en consola un mensaje cuando yo le estoy pidiendo algo al usuario
    });

    // Hora de utilizar la interface
    readline.question('Selecciones una opción ', (opt) => {
      // console.log({opt}); De esta forma se muestra en consola la opción seleccionada
      readline.close();
      resolve(opt);
    });

  })

}

// pausa de la aplciación
const pausa = () => {

  return new Promise ((resolve) => {
    const readline = require('readline').createInterface ({
      input: process.stdin,
      output: process.stdout,
    });

    // Hora de utilizar la interface
    readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
      readline.close();
      resolve();
    });
  })

}



module.exports = {
  mostrarMenu,
  pausa
}