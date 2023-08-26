const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Se ha producido un error', err)
    return
  }

  files.forEach(file => {
    console.log(file)
  })
})
