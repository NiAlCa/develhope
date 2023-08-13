const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, ...personInfo } = person;

console.log(id, personInfo);



/* 
Perform a code refactoring by using the Rest operator. The output of the console.log must not change.


*/

/* 
Realice una refactorización de código mediante el operador Rest. La salida de console.log no debe cambiar.

*/