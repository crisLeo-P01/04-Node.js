require('colors');
require('inquirer');

const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu } = require('./helpers/inquirer');

console.clear();

const main = async () => {

  let opt = '';

  do {

    opt = await mostrarMenu();
    console.log({opt});

    if (opt !== '0') await pausa();

  } while (opt !== '0');


  //pausa();

}

main();