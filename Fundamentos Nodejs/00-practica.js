const os = require('os')

console.log(process.argv[3])

for (let i = 0; i < process.argv.length; i++) {
  console.log(process.argv[i])
}

console.log(process.memoryUsage());
console.log(os.userInfo());

function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

setTimeout(mostrarTema, 5000, 'Node.js')