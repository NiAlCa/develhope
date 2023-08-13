class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Developer extends Person{
  constructor(firstName, lastName, role) {
    super(firstName, lastName);
    this.role = role;
}
}

const developer = new Developer("Mario", "Rossi", "Front-end");
console.log(
  developer.firstName + " " + developer.lastName + " " + developer.role
);





/*
Create a class called Developer. The Developer class has to inherit the Person class created in the previous exercise. The Developer class takes in another argument in the constructor method (role).

class Person {
constructor(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}
}

const developer = new Developer("Mario", "Rossi", "Front-end");
console.log(developer.firstName + " " + developer.lastName + " " + developer.role);


Cree una clase llamada Desarrollador. La clase Desarrollador tiene que heredar la clase Persona creada en el ejercicio anterior. La clase Developer toma otro argumento en el método constructor (rol).

Persona de clase {
constructor(nombre, apellido) {
this.firstName = firstName;
este.apellido = apellido;
}
}

const desarrollador = nuevo desarrollador("Mario", "Rossi", "Front-end");
console.log(desarrollador.nombre + " " + desarrollador.apellido + " " + desarrollador.rol);


*/