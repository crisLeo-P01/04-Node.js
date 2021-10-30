const empleados = [
  { id: 1, nombre: 'Cristian' },
  { id: 2, nombre: 'Emiliano' },
  { id: 3, nombre: 'Male' },
];

const salarios = [
  { id: 1, salario: '1000' },
  { id: 2, salario: '1500' },
];

const getEmpleado = ( id, callback ) => {
  const empleado = empleados.find( e => e.id === id )?.nombre
  
  if ( empleado ) {
    callback( null, empleado );
  } else {
    callback(`Empleado con id ${ id } no existe`);
  }
}

const getSalario = ( id, callback ) => {
  // ? => null check operator
  const salario = salarios.find( s => s.id === id )?.salario; // ?.salario => pregunta si existe. Si existe que ejecute lo que sigue

  if ( salario ) {
    callback( null, salario );
  } else {
    callback( `No existe salario para el id ${ id }` );
  }
}

const id = 2;

getEmpleado( id, ( err, empleado ) => {
  if ( err ) {
    console.log('ERROR!');
    return console.log(err);
  }

  getSalario(id, (err, salario) => {
    if ( err ) {
        return console.log(err);
    }
    console.log('El empleado:', empleado, 'tiene un salario de:', salario )
  })
})

