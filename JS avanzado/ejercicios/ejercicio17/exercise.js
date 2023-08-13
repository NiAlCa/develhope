const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};


const filteredPerson = {
  id: person.id,
  age: person.age,
};

const json = JSON.stringify(filteredPerson);

console.log(json);

/*
En este ejercicio, necesitamos filtrar las propiedades del objeto persona para convertir solo los valores de identificación y edad en JSON.
*/ 