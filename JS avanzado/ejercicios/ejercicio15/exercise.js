class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(json) {
    const data = JSON.parse(json);
    return data
  }
}



const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);


/*
Create the fromJson method that takes in a json as parameter and returns an object of type Person

Cree el método que toma un json como parámetro y devuelve un objeto de tipo .fromJsonPerson*/