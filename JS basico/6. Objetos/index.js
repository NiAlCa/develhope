

//Un objeto en JavaScript es una colección de pares de nombre-valor. Los nombres son cadenas de texto y los valores pueden ser cualquier tipo de datos, incluyendo números, cadenas, objetos, funciones, etc.


//de esta manera declaramos un objeto

let obj = {
    "key": "value",
    "number": 2,
    "func": (arg) => arg + 2,
    "obj": {
        "key": 2
    }
}

//podemos acceder a el de estas dos maneras
console.log(obj.key)
console.log(obj[number]) //esta secunda se puede considerar mas "segura"
console.log(obj.func(10)) //de esta manera accederiamos a la funcion y le dariamos argumento 

obj["number"] = 0; //podemos editar nuestras propiedades del objeto 

obj["newKey"] = 10; // podemos anadir nuevas propiedades al objeto 

//In Operator and For in Loops

/*
if ("number" in obj) {...}: El operador in se utiliza para comprobar si una propiedad específica existe dentro de un objeto. En este caso, se verifica si la propiedad "number" existe en el objeto obj. Si la propiedad existe, se imprimirá su valor utilizando la notación de corchetes.

*/

   if ("number" in obj) {
    console.log(obj["number"])
   }else {
    console.log("Number does not exist!")
}

/*
for (const variable in obj) {...}: El bucle for...in se utiliza para iterar sobre todas las propiedades enumerables de un objeto. En cada iteración, la variable variable contendrá el nombre de la propiedad actual. Luego, podemos acceder al valor de esa propiedad utilizando obj[variable].
*/


for (const variable in obj) {
    console.log(typeof(obj[variable]));
}


//De esta manera podemos copiar un objeto con un bucle for in
let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = {};

for (let key in user) {
  newUser[key] = user[key];
}





//Pasar valores por valor y por referencia 
/* 

El concepto de "pasar valores por valor" y "pasar valores por referencia" es importante en la programación y se aplica en muchos lenguajes de programación, incluido JavaScript. Estas dos formas de pasar valores se refieren a cómo se manejan los datos al pasarlos como argumentos a funciones o asignarlos a variables


1. Pasar valores por valor:
Cuando se pasa un valor por valor, se crea una copia independiente del valor original y se pasa esa copia a la función o se asigna a una nueva variable. En este caso, cualquier modificación realizada en la copia no afectará al valor original, ya que son dos instancias diferentes.
*/
// los tipos de datos primitivos, como números, cadenas de texto, booleanos, null y undefined, se pasan por valor. Por ejemplo:


let num = 10;

function modifyValue(arg) {
  arg = arg * 2;
}

modifyValue(num);
console.log(num); // El valor de 'num' no cambia (imprime 10)
// Aquí, el valor de num se pasa por valor a la función modifyValue. Se crea una copia de num llamada arg, y cualquier cambio realizado en arg dentro de la función no afectará al valor original de num.





/* 
2. Pasar valores por referencia:
Cuando se pasa un valor por referencia, lo que se pasa en realidad es una referencia a la ubicación de memoria donde se encuentra almacenado el valor original. En otras palabras, se pasa una especie de "puntero" al valor en lugar de una copia independiente. Como resultado, cualquier modificación realizada en la referencia dentro de la función o en una nueva variable se reflejará en el valor original, ya que ambas apuntan al mismo lugar en memoria.

 los objetos (incluidos los arrays y funciones) se pasan por referencia. Veamos un ejemplo:

*/

let arr = [1, 2, 3];

function modifyArray(arg1) {
  arg1.push(4);
}

modifyArray(arr);
console.log(arr); // El array original se modifica (imprime [1, 2, 3, 4])


/* 
En este caso, el array arr se pasa por referencia a la función modifyArray. La variable arrRef dentro de la función apunta al mismo array en memoria que arr. Al agregar un elemento al array arg1, el array original arr también se ve afectado.

*/

/*de esta manera clonariamos un objeto */

let newObj = {...obj};




/*
Los constructores en JavaScript son funciones que se utilizan para crear y configurar objetos. Los objetos creados a partir de un constructor suelen tener propiedades y métodos compartidos, ya que se definen dentro de la función del constructor. Veamos cómo se crea y utiliza un constructor:

*/ 


// Definición del constructor Person
function Person(name, age, nationality) {
  this.name = name;
  this.age = age;
  this.nationality = nationality;
}

// Creación de objetos utilizando el constructor
let greg = new Person("Juan", 28, "Esp");
let susan = new Person("Susan", 23, "Fr");

// Cada objeto creado tiene sus propias propiedades, pero comparten los mismos métodos definidos en el constructor.

// Acceder a las propiedades de los objetos
console.log(greg.name);       // "Juan"
console.log(susan.age);       // 23

// Modificar propiedades de los objetos
greg.nationality = "Mex";
susan.age = 24;

// Añadir nuevas propiedades a los objetos
greg.hobbies = ["reading", "cooking"];
susan.email = "susan@example.com";

// Borrado de propiedades de los objetos
delete greg.age;

// Importancia de utilizar 'new' con el constructor
let person = Person("John", 30, "US");
console.log(person);  // undefined
console.log(name);    // "John" (se crea una variable global 'name')

// Al no utilizar 'new', el constructor actúa como una función normal y no devuelve un objeto nuevo. Además, las propiedades se asignarán al ámbito global, lo que no es deseable.


//objetos anidados 

//Los objetos anidados, también conocidos como objetos dentro de objetos, son una estructura común y poderosa en JavaScript que nos permite organizar y acceder a datos de manera jerárquica. Esto significa que un objeto puede contener propiedades cuyos valores son otros objetos.

// Definición de un objeto anidado
let person2 = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  },
  hobbies: ["reading", "cooking", "traveling"],
  contact: {
    email: "john@example.com",
    phone: "555-123-4567"
  }
};

// Acceder a propiedades en objetos anidados
console.log(person2.name);                  // "John"
console.log(person2.address.city);          // "New York"
console.log(person2.hobbies[0]);            // "reading"
console.log(person2.contact.email);         // "john@example.com"

// Modificar propiedades en objetos anidados
person.age = 31;
person2.address.country = "Canada";
person2.hobbies.push("swimming");
person2.contact.phone = "555-987-6543";

// Añadir nuevas propiedades a objetos anidados
person2.address.postalCode = "A1B 2C3";
person2.contact.socialMedia = {
  twitter: "@john_doe",
  instagram: "@john_doe_official"
};

// Borrado de propiedades en objetos anidados
delete person2.address.street;

// Recorrer objetos anidados utilizando for...in
for (const key in person2) {
  if (typeof person[key] === "object") {
    for (const nestedKey in person[key]) {
      console.log(nestedKey + ": " + person[key][nestedKey]);
    }
  } else {
    console.log(key + ": " + person[key]);
  }
}


// El símbolo ? se coloca después del nombre de la propiedad que se desea acceder. Si la propiedad existe, se devolverá su valor; de lo contrario, se devolverá undefined en lugar de generar un error

let person3 = {
  name: "John",
  age: 30,
  contact: {
    email: "john@example.com",
    phone: "555-123-4567"
  }
};

// Ejemplo sin Optional Chaining
let phone2 = person.contact.phone; // "555-123-4567"
let address2 = person.address.street; // TypeError: Cannot read property 'street' of undefined

// Ejemplo con Optional Chaining
let phone3 = person.contact?.phone; // "555-123-4567"
let address3 = person.address?.street; // undefined

/* 
Object.keys():
La función Object.keys() devuelve un array que contiene los nombres de las propiedades enumerables de un objeto. Es decir, devuelve un array con las claves o nombres de las propiedades del objeto.

*/

const person = {
  name: "John",
  age: 30,
  country: "USA"
};

const keys = Object.keys(person);
console.log(keys); // ["name", "age", "country"]


/* 
Object.values():
La función Object.values() devuelve un array que contiene los valores de las propiedades enumerables de un objeto. Es decir, devuelve un array con los valores de las propiedades del objeto.

*/
const person = {
  name: "John",
  age: 30,
  country: "USA"
};

const values = Object.values(person);
console.log(values); // ["John", 30, "USA"]


/* 
Object.entries():
La función Object.entries() devuelve un array de arrays, donde cada array interno contiene un par clave-valor de las propiedades enumerables del objeto. Es decir, devuelve una matriz con los pares clave-valor del objeto.

*/

const person = {
  name: "John",
  age: 30,
  country: "USA"
};

const entries = Object.entries(person);
console.log(entries); 
// [["name", "John"], ["age", 30], ["country", "USA"]]
