class Person {
  _firstName = "";
  _lastName = "";
  _age = 0;
  constructor(firstName, lastName, age){
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }



  get fullName(){
    return this._firstName + " " + this._lastName;
  }
  
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);


/*
Define a class called `Person` that takes in three parameters in the constructor (`firstName`, `lastName` and `age`). Create the getters and setters methods for each property and a getter method called `fullName` that returns the full name.

class Person {
// ...
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);


Defina una clase llamada `Persona` que tome tres parámetros en el constructor (`nombre`, `apellido` y `edad`). Cree los métodos getters y setters para cada propiedad y un método getter llamado `fullName` que devuelva el nombre completo.

Persona de clase {
// ...
}

const persona = nueva Persona('Mario', 'Rossi', 25);
consola.log(persona.nombre completo);

persona.nombre = 'María';
persona.apellido = 'Verdi';
consola.log(persona.nombre completo); 



*/