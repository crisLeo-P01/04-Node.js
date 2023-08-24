const {exec, spawn} = require('child_process');
// Opciones para llamar a exec ☝👇
// const exec = require('child_process').exec;

// exec('dir', (err, stdout, sterr) => {
//   if(err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// })

// exec('node 03-consola.js', (err, stdout, sterr) => {
//   if(err) {
//     console.error(err);
//     return false;
//   }
  
//   console.log(stdout);

// })

let proceso = spawn('cmd.exe', ['/c', 'dir']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
  console.log(dato.toString());
})

proceso.on('exit', function() {
  console.log('El proceso terminó');
})