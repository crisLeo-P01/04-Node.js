/* eslint-disable n/no-path-concat */
const fs = require('fs')
const stream = require('stream')
const util = require('util')

const data = ''
const redableStream = fs.createReadStream(__dirname + '/input.txt')

redableStream.setEncoding('UTF8')
redableStream.on('data', function (chunk) {
    console.log(chunk)
    // console.log(chunk.toString());

    /* Esto no es la mejor opción cuando ya sabemos
    la codificación del archivo que va a venir lo que podemos hacer
    es indicarle con setEncoding() */

    data += chunk
})

redableStream.on('end', function () {
    console.log(data)
})

// > Ya son un buffer de escritura
process.stdout.write('hola')
process.stdout.write('que')
process.stdout.write('tal')

const Transform = stream.Transform
function Mayus () {
    Transform.call(this)
}

util.inherits(Mayus, Transform)
Mayus.prototype._transform = function (chunk, codif, cb) {
    const chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
}

const mayus = new Mayus()
redableStream
    .pipe(mayus)
    .pipe(process.stdout)
