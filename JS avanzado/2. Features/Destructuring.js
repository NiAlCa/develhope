
/* 
es una característica poderosa de JavaScript que te permite descomponer estructuras de datos, como arrays y objetos, en variables individuales. Esto facilita la extracción de valores y la asignación a variables de una manera más concisa y legible. Vamos a explorar cómo funciona la destructuración tanto en arrays como en objetos.

*/


/*

La destructuración de arrays te permite extraer valores de un array y asignarlos a variables individuales en una sola línea. Aquí tienes un ejemplo:*/

const myArray = [1, 2, 3, 4, 5];
const [first, second, ...rest] = myArray;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
/*En este ejemplo, first se asigna al primer elemento del array, second al segundo elemento y rest al resto de los elementos como un nuevo array.*/




/*
La destructuración de objetos te permite extraer propiedades de un objeto y asignarlas a variables con los mismos nombres en una sola línea. Aquí tienes un ejemplo:

*/
const myObject = { 
    name: 'John',
    age: 30,
    nationality: 'USA' 
};

const { name, age } = myObject;

console.log(name); // 'John'
console.log(age);  // 30

//En este ejemplo, name y age se asignan a las propiedades correspondientes del objeto. También puedes asignar propiedades a variables con nombres diferente
const { name: personName, age: personAge } = myObject;

console.log(personName); // 'John'
console.log(personAge);  // 30



/*
Parámetros Rest:
Los parámetros rest permiten capturar un número variable de argumentos
 en una función en forma de un array. Esto es útil cuando no sabes cuántos
 argumentos se pasarán a una función. Los parámetros rest se representan
  mediante tres puntos suspensivos (...) seguidos de un nombre de variable.

*/

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

/*En este ejemplo, la función sum puede recibir cualquier cantidad de argumentos. 
Los argumentos se agruparán en un array llamado numbers. Luego, utilizamos
 el método reduce para sumar todos los números en el array */




 /* 
 Sintaxis Spread en Arrays:
La sintaxis spread (...) se utiliza para expandir
 elementos de arrays y objetos. En el contexto de los 
 arrays, se puede usar para copiar arrays, concatenarlos,
  crear copias modificadas y más. Veamos algunos ejemplos:
 
 */


 const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Copiar y concatenar arrays
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// Crear una copia modificada
const modifiedArray = [...array1, 7, ...array2];
console.log(modifiedArray); // [1, 2, 3, 7, 4, 5, 6]



/*

Sintaxis Spread en Objetos:
En el contexto de objetos, la sintaxis spread se utiliza
 para copiar propiedades de un objeto a otro o para crear
  objetos nuevos con propiedades adicionales o modificadas.
   Veamos un ejemplo:

*/ 
const person = { name: 'John', age: 30 };
const newPerson = { ...person, nationality: 'USA' };

console.log(newPerson); // { name: 'John', age: 30, nationality: 'USA' }


/* 
En este ejemplo, creamos un nuevo objeto newPerson que copia todas las propiedades del objeto person y agrega la propiedad nationality.

La sintaxis spread es especialmente útil cuando deseas trabajar con copias y modificaciones de arrays y objetos sin afectar los originales.

*/
