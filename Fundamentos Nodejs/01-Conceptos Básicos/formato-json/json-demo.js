let infoCurso = {
  'titulo': 'Aprende Node.js',
  'numVisitas': 45642,
  'numLikes': 21123,
  'temas': [
    'Javascript',
    'Node.js'
  ],
  'esPublico': true
}

// Objeto -> Cadena de Caracteres
// Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso)
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

// No lo lee xq no es un formato JSON, sino una cadena de texto(string)
console.log(infoCursoJSON.titulo); // undefined

// Convierte una cadena de texto en un Objeto JSON
let infoCursoObjeto = JSON.parse(infoCursoJSON)
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

console.log(infoCursoObjeto.titulo);
console.log(infoCursoObjeto.temas);