function isAdult(age) {
  return age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {age} = person;

console.log(isAdult(age));


 
/*
Use the destructuring to make the check of the age easier. Try modifying the parameter of the isAdult function.

Utilice la desestructuración para facilitar la comprobación de la edad. Prueba a modificar el parámetro de la función isAdult.*/
