/*Una función en JavaScript es un conjunto de instrucciones que se agrupan para realizar una tarea específica. Las funciones se pueden reutilizar en diferentes partes de su código, lo que hace que su código sea más organizado y legible. */


/* \
Una definición de función (también denominada declaración de función o expresión de función) consta de la palabra clave function, seguida de

El nombre de la función.
Una lista de parámetros de la función, entre paréntesis y separados por comas.
Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }.

*/

//funcion normal 

function nameOFMyFunction/* nombre de la funcion*/ (arg1, arg2 /*sus argumentos */){
    let sum = arg1 + arg2; /*la declaracion */
    return sum; //tras eso devolvemos el parametro de la funcion
}



let output = nameOFMyFunction(2, 3)  // de esta manera usariamos nuestra funcion, la llamamos y le damos los argumentos 1 y 2 Llamar a la función en realidad lleva a cabo las acciones especificadas con los parámetros indicados

console.Console(output); 


//expresion de funcion Si bien la declaración de función anterior sintácticamente es una declaración, las funciones también se pueden crear mediante una expresión function.
//Esta función puede ser anónima; no tiene por qué tener un nombre.
//Sin embargo, puedes proporcionar un nombre con una expresión function. Proporcionar un nombre permite que la función se refiera a sí misma y también facilita la identificación de la función en el seguimiento de la pila de un depurador
let newFunc = function(arg1){
    console.log("added" + arg1);
}

newFunc("some string");


//Funciones callbacks 

/*Una función de callback es una función que se pasa a otra función como un argumento,
 que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

Esto nos puede interesar por ejemplo, si vamos a llamar una api y ese tiempo retrasa a nuestra funcion 
y hace que se ejecuten las posteriores primero, en nuestro escenario vamos a simular una api
con la funcion setimeout que simulara un retraso en la funcion 
*/

function first(callback){
    setTimeout(function(){
        console.log(1);
    }, 500);
}
function second(){
    console.log(2);
}

first(second);

/*
Cuando llamamos a la función first(), pasamos la función second() como devolución de llamada.
 Esto significa que cuando la función first() termine de ejecutarse, llamará a la función second(). 
 La función second() mostrará entonces el número 2 en la consola.

*/


//Arrow functions 
/* 
las arrows funcions son funciones anonimas 
no hay que invocarlas con function 

*/
let arrowFunc = (arg1) => arg1 + 3; /* no necesitas {} ya que estan disenadas para ser lo mas cortas posibles*/
    //las arrow function no necesitan reutrn, ya que tienen implicito que se devolvera un valor 
/* 
Si solo tenemos un argumento, se pueden omitir los paréntesis alrededor de los parámetros, lo que lo hace aún más corto.
*/
let double = n => n * 2;

alert( double(3) ); // 6

//Si no hay argumentos, los paréntesis están vacíos, pero deben estar presentes:

