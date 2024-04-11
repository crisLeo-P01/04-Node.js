function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de freeCodeCamp`);
    setTimeout(() => {
      if (producto === 'taza') {
        resolve('Ordenando una taza con el logo de freeCodeCamp')
      }
    }, 2000)
  })
}