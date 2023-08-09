const os = require('os');

// console.log(os.arch()); //> x64
// console.log(os.platform()); //> Sistema operativo

// console.log(os.cpus()); //> Cantidad de cpu con sus detalles de cada núcleo
// console.log(os.cpus().length); //> Cantidad de cpu general
// console.log(os.constants); //> 


//> ESPACIO LIBRE EN MEMORIA
//console.log(os.freemem()); //> Muestra la cantidad de memoria (en bytes) de la cpu en cuestión

const SIZE = 1024;
function kb(bytes) {return bytes / SIZE};
function mb(bytes) {return kb(bytes) / SIZE};
function gb(bytes) {return mb(bytes) / SIZE};


//> ESPACIO TOTAL EN MEMORIA
console.log('Espacio libre en memoria');
console.log(os.freemem() + ' bytes');
console.log(kb(os.freemem()).toFixed(2) + ' kb');
console.log(mb(os.freemem()).toFixed(2) + ' mb');
console.log(gb(os.freemem()).toFixed(2) + ' gb');

console.log('Espacio total en memoria');
console.log(os.totalmem() + ' bytes');
console.log(kb(os.totalmem()).toFixed(2) + ' kb');
console.log(mb(os.totalmem()).toFixed(2) + ' mb');
console.log(gb(os.totalmem()).toFixed(2) + ' gb');

//> Saber la carpeta raís del usuario
console.log(os.homedir());
console.log(os.tmpdir()); //> Archivos temporales

console.log(os.hostname());

console.log(os.networkInterfaces()); //> Ver todas las interfaces de red