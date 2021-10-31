const fs = require('fs');
const { conflicts } = require('yargs');
const colors = require('colors');

const crearArchivo = async (base, listar = false, hasta = 10) => {
  
  try {
    
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida = salida + `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${ colors.red('x') } ${i} ${ colors.red('=') } ${base * i}\n`;
    }

    if (listar) {
      console.log('============='.green);
      console.log(' TABLA DEL '.bgGreen, colors.blue(hasta));
      console.log('============='.green);

      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla ${hasta}.txt`, salida)
    
    return `tabla-${hasta}.txt creado`;
  } catch (err) {
    throw err;
  }

}

module.exports = {
  crearArchivo: crearArchivo, // Si la propiedad se llama igual al valor, se puede omitir la propiedad y dejar solo el valor
}
