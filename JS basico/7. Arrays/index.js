//Un array es una estructura de datos en JavaScript que nos permite almacenar múltiples valores en una sola variable. Cada valor en el array tiene una posición llamada índice que empieza desde 0 y va en orden numérico. Los arrays pueden contener elementos de diferentes tipos de datos, como números, cadenas, booleanos, objetos, funciones, entre otros.



let arr = [1, "2", true];

// Acceder a un elemento específico del array por su índice.
console.log(arr[1]); // "2" (el segundo elemento del array)

// Recorrer e imprimir todos los elementos del array utilizando un bucle for.
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Resultado:
// 1
// "2"
// true

// Modificar el primer elemento del array.
arr[0] = 10;

console.log(arr); // [10, "2", true]



//FUNCIONES BASICAS ARRAYS

/* length: Propiedad que devuelve la cantidad de elementos en el array. */
const fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // 3


//push(): Método que agrega uno o más elementos al final del array.
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]


//pop(): Método que elimina el último elemento del array y lo devuelve.
const colors = ["red", "blue", "green"];
const removedColor = colors.pop();
console.log(colors); // ["red", "blue"]
console.log(removedColor); // "green"

//slice(): Método que devuelve una porción del array, sin modificar el array original.
const animals = ["cat", "dog", "elephant", "lion"];
const slicedAnimals = animals.slice(1, 3);
console.log(slicedAnimals); // ["dog", "elephant"]


/* Método unshift():
El método unshift() se utiliza para agregar uno o más elementos al principio de un array. Es similar al método push(), pero en lugar de agregar elementos al final, los agrega al principio del array. Los índices de los elementos existentes en el array se ajustan automáticamente para dar cabida a los nuevos elementos agregados al principio.*/
const numbers2 = [2, 3, 4];
numbers.unshift(1); // Agrega el elemento 1 al principio del array

console.log(numbers2); // [1, 2, 3, 4]


/* 
Método join():
El método join() se utiliza para crear una cadena de texto a partir de los elementos de un array. Concatena los elementos utilizando un separador que especificamos como argumento del método. Por defecto, el separador es una coma (,), pero podemos cambiarlo según nuestras necesidade
*/

const fruits2 = ["apple", "banana", "orange"];
const result2 = fruits.join(", "); // Une los elementos usando una coma y un espacio como separador

console.log(result2); // "apple, banana, orange"



// forEach(): El método forEach() se utiliza para llamar a una función para cada elemento del array. No crea un nuevo array, solo itera sobre los elementos.


const arr = [1, 2, 3];
arr.forEach((element) => console.log(element)); // Imprime cada elemento del array: 1, 2, 3

//length: La propiedad length es una propiedad de los arrays en JavaScript que devuelve la cantidad de elementos en el array. Es decir, representa la longitud del array, contando desde el índice 0 hasta el último índice del array más 1.

const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // Devuelve 5, ya que el array tiene 5 elementos

//map(): El método map() se utiliza para crear un nuevo array con el resultado de llamar a una función para cada elemento del array.

const arrr = [1, 2, 3];
const doubledArr = arrr.map((element) => element * 2);
console.log(doubledArr); // Devuelve un nuevo array: [2, 4, 6]



//reduce(): El método reduce() reduce los valores de un array a un único valor, de izquierda a derecha, utilizando una función acumuladora.

const arr = [1, 2, 3, 4];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Devuelve la suma de los elementos: 10


//sort(): El método sort() se utiliza para ordenar los elementos de un array. Modifica el array original.

const arr = [3, 1, 4, 2];
arr.sort();
console.log(arr); // Modifica el array original, devolviendo [1, 2, 3, 4]



///filter(): El método filter() crea un nuevo array con los elementos del array original que cumplan una condición específica definida por una función.
const arr = [1, 2, 3, 4, 5];
const filteredArr = arr.filter((element) => element % 2 === 0);
console.log(filteredArr); // Devuelve un nuevo array: [2, 4]


 /*
 En JavaScript, los arrays son objetos especiales que tienen índices numéricos secuenciales y una propiedad length. Dado que los arrays son también objetos, podemos utilizar ciertas funciones y métodos que son proporcionados por el objeto Object. Estas funciones son Object.keys(), Object.values() y Object.entries(), que nos permiten obtener información sobre los arrays en diferentes formas.
 
 */

 const fruits3 = ['apple', 'banana', 'orange'];

const keys = Object.keys(fruits3);
console.log(keys); // Devuelve un array con las claves: ['0', '1', '2']


// Object.values(): Esta función toma un objeto (incluidos los arrays) como argumento y devuelve un array con los valores de las propiedades del objeto. Para los arrays, esto significa que obtendremos un array con los elementos del array.

const fruits4 = ['apple', 'banana', 'orange'];

const values = Object.values(fruits4);
console.log(values); // Devuelve un array con los valores: ['apple', 'banana', 'orange']


// Object.entries(): Esta función toma un objeto (incluidos los arrays) como argumento y devuelve un array de arrays, donde cada subarray contiene una clave (índice) y su valor correspondiente. Para los arrays, esto significa que obtendremos un array de arrays, donde cada subarray contiene un índice numérico y el elemento correspondiente.

const fruits5 = ['apple', 'banana', 'orange'];

const entries = Object.entries(fruits5);
console.log(entries);
// Devuelve un array de arrays:
// [['0', 'apple'], ['1', 'banana'], ['2', 'orange']]
