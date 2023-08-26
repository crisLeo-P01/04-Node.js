const path = require('node:path')

// > barra separadora de carpetas según OS
console.log(path.sep)

// > unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath) // > content\subfolder\test.txt

const base = path.basename('tmp/midu-secret-files/password.txt')
console.log(base) // > password.txt

const baseName = path.basename('tmp/midu-secret-files/password.txt', '.txt')
console.log(baseName) // > password

const extension = path.extname('image.jpg')
console.log(extension) // > .jpg
