const empleados = [
  { id: 1, nombre: 'Cristian' },
  { id: 2, nombre: 'Emiliano' },
  { id: 3, nombre: 'Male' },
];

const salarios = [
  { id: 1, salario: '1000' },
  { id: 2, salario: '1500' },
];

const getEmpleado = ( id ) => {
  const empleado = empleados.find( e => e.id === id )?.nombre
  return new Promise ((resolve, reject) => {
    (empleado) 
      ? resolve (empleado)
      : reject (`El empleado con el id ${id} no existe`);
  })
};

const getSalario = ( id ) => {
  const salario = salarios.find( s => s.id === id )?.salario
  return new Promise ((resolve, reject) => {
    (salario) 
      ? resolve (salario)
      : reject (`El empleado con el id ${id} no existe`);
  })
};

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El empleado ${empleado} tiene un salario de ${salario} dólares`;
  } catch (error){
      throw error;
  }
}

const id = 10;

getInfoUsuario(id)
 .then(msj => {
  console.log('TODO BIEN!!!')
  console.log(msj);
 })
 .catch(err => {
  console.log('TODO MAL!!!')
  console.log(err);
 });