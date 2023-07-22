/*tipos de variable */


/*numeros 
Puedes almacenar números en variables, ya sea números enteros como 30 (también llamados enteros — "integer") o números decimales como 2.456 (también llamados números flotantes o de coma flotante — "number").
*/

let numeroInteger = 10;
let numeroFloat = 10.4324;

/*Strings
Las strings (cadenas) son piezas de texto. Cuando le das a una variable un valor de cadena, debes encerrarlo entre comillas simples o dobles */

let string = "Esto es una cadena de caracteres";

/*Boolean
Los booleanos son valores verdadero/falso — pueden tener dos valores, true o false. Estos, generalmente se utilizan para probar una condición, después de lo cual se ejecuta el código según corresponda */

let verdadero = true;
let falso = false;

/*Aquí se está usando el operador "menor que" (<) para probar si 6 es menor que 3. Como era de esperar, devuelve false,  */

verdadero = 1 < 5; 
falso = 1 > 5;

/*Array
Un array es un objeto único que contiene múltiples valores encerrados entre corchetes y separados por comas */

let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10, 15, 40];

/*Una vez que se definen estos arreglos, puedes acceder a cada valor por su ubicación dentro del arreglo. Prueba estas líneas: */
myNameArray[0]; // debería devolver 'Chris'
myNumberArray[2]; // debe devolver 40


/*
Objetos
En programación, un objeto es una estructura de código que modela un objeto de la vida real.*/

let dog = { name : 'Spot', breed : 'Dalmatian' };

/*Para recuperar la información almacenada en el objeto, puedes utilizar la siguiente sintaxis: */
dog.breed




/*CONVERSIONES */

let str = "1";
let nmr = 1;
let bool = true; 

let strANmr = Number(str); /*De esta manera convertimos un string en un numero */
let nmrAStr = String(nmr);/*De esta manera convertimos un numero en string*/
let nmrABool= Boolean(nmr); /*De esta manera convertimos a un booleano */


/*COMPARADORES*/

/* 
Mayor/menor que:  a > b . a < b
Mayor/menor que o igual a: a >= b . a <= b
Iguales: , tenga en cuenta que el signo de doble igualdad significa la prueba de igualdad, mientras que uno solo significa una asignación.a == b . a = b
igualdad estricta ===  prueba la igualdad total de un elemento Carlos === carlos, seria false. Carlos === Carlos seria true
*/


/* 
Todos los operadores de comparación devuelven un valor booleano:

true – significa "sí", "correcto" o "la verdad".
false – significa "no", "incorrecto" o "no es la verdad".
*/
let alert = 0;
alert: 2 > 1 ;  // true (correct)
alert: 2 == 1 ; // false (wrong)
alert: 2 != 1 ; // true (correct)



/* 
Los operadores de comparación devuelven un valor booleano.
Las cadenas se comparan letra por letra en el orden "diccionario".
Cuando se comparan valores de diferentes tipos, se convierten en números (con la exclusión de un estricto control de igualdad).
Los valores y iguales entre sí y no son iguales a ningún otro valor.nullundefined==
Tenga cuidado al usar comparaciones similares o con variables que ocasionalmente pueden ser . Verificar por separado es una buena idea.><null/undefinednull/undefined
*/

/*OPERADORES LOGICOS
Hay cuatro operadores lógicos en JavaScript: solo veremos (OR), (AND)

*/

let a = 5
let b = a > 10;
let c = a > 1;

/*|| (OR) */

let result = b || c;

console.log(result)//true

/* Hay cuatro combinaciones lógicas posibles:

Por asi decir, solo hace falta que una de la condiciones para que se vuelva true

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false


"||" encuentra el primer valor verídico
*/


/*&& (AND) */

let result2 = b && c;
console.log(result2)//false

/* && por asi decir necesita que las dos condiciones sean verdaderas
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false


&& encuentra el primer valor falso
*/