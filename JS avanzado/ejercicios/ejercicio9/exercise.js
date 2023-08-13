const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, firstName: name, lastName: surname, age: old } = person;
console.log(id, name, surname, old);

/* 

The destructuring returns undefined for the properties: name, surname and old. Try fixing the code without changing the any of the object properties in the constant { id, name, surname, old }.



La desestructuración devuelve indefinidos para las propiedades: nombre, apellido y antigüedad. Intente corregir el código sin cambiar ninguna de las propiedades del objeto en la constante { id, nombre, apellido, antiguo }.
*/