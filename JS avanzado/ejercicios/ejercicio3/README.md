# Classes

Define a static method called fromObject inside the Person class which takes in an object literal as parameter and instantiate a Person object.

class Person {
constructor(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}
}

const obj = {
firstName: 'Mario',
lastName: 'Rossi'
};

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);


Defina un método estático llamado fromObject dentro de la clase Person que toma un objeto literal como parámetro e instancia un objeto Person.

Persona de clase {
constructor(nombre, apellido) {
this.firstName = firstName;
este.apellido = apellido;
}
}

constante obj = {
nombre: 'Mario',
apellido: 'Rossi'
};

const persona = Persona.fromObject(obj);
console.log(persona.nombre + " " + persona.apellido);