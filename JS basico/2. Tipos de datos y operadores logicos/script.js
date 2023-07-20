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

