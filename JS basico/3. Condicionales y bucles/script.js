let num = 9;

let conditionA = num > 2;
let conditionB = num < 8;

// operador ternario (?)
let str = conditionA && conditionB ? "in bound" : "out  of bounds";

/*Si la condición es true, el operador retorna el valor de la condtitionA; de lo contrario, devuelve el valor de conditionB */




// if else
let str2 = "";
if(conditionA && conditionB) {
    str2 = "Verdadero"
    //si las condiciones son verdaderas se ejecutara este bloque 
}else{
    str2 = "Falso"
    //si las condiciones son falsas se ejecutara este bloque
}
// podemos anadir mas if 


let str3 = "";
if(conditionA && conditionB) {
    str3 = "Verdadero";
    //si las condiciones son verdaderas se ejecutara este bloque 
}else if(conditionA || conditionB){
    str3 = "SECUNDA CONDICIO VERDADERA";
    //si las primeras condiciones son falsas pero estas secundas son verdaderas se ejecutara este codigo 
}else{
    //si la secunda condicion tampoco se cumple se ejecuta este bloque 
    str3 = "Falso"
}



//Switch 
/*Lo que hace switch es muy parecido a if, pero cuando se ejecuta una igualdad, se ejecuta el resto del codigo */
switch(num){ //convocamos el switch 
    case 1://le damos los casos y el codigo en caso de que se cumpla
        console.log("one!");
        break; //si se ejecuta nuestro codigo, con break paramos el codigo y asi evitamos que siga ejecutando hacia abajo
    case 2: //si fuese el caso 2, se ejecutaria hasta default porque no hay ningun break. 
        console.log("twp"); 
    case 3:
        console.log("three");
    default: //podemos preparar un default para que se ejecute en caso de ser todo falso.
        console.log("dafault")
}

//Bucles Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente. 


/*for loop
for(initalize our iterator; set our stopping condition; update our iterator)
*/ //la variable i solo existe dentro del contexto del bucle, fuera de este no. pero podemos coger una variable ya declarada y esta si que se existira fuera del bucle . 
/* for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])
  instrucción

El inicializador se ejecuta una vez, antes de que el bucle comience a ejecutarse.
La condición se comprueba después de cada iteración del bucle. Si la condición es verdadera, el bloque de código se ejecuta de nuevo. Si la condición es falsa, el bucle termina.
El actualizador se ejecuta después de cada iteración del bucle. Se utiliza para actualizar el valor de la variable que se utiliza en la condición.
  */


for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  /* 
  Este bucle primero inicializa la variable i con el valor 1. A continuación, comprueba si la condición i <= 10 es verdadera. Si es así, el bloque de código se ejecuta, que imprime el valor de la variable i. A continuación, el actualizador incrementa el valor de la variable i en 1. El bucle se repite hasta que la condición i <= 10 sea falsa.
  
  */

 

/*while loop 
Una declaración while ejecuta sus instrucciones siempre que una condición especificada se evalúe como true.
*/
/* 
while (condición)
  expresión

Si la condición se vuelve false, la instrucción dentro del bucle se deja de ejecutar y el control pasa a la instrucción que sigue al bucle.

La prueba de condición ocurre antes de que se ejecute la expresión en el bucle. Si la condición devuelve true, se ejecuta la expresión y la condición se prueba de nuevo. Si la condición devuelve false, la ejecución se detiene y el control se pasa a la instrucción que sigue a while.

  */

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

/*
Este código primero establece la variable i a 1. A continuación, comprueba si i es menor o igual a 10. Si es así, el código imprime el valor de i y luego incrementa i en 1. El bucle se repite mientras i sea menor o igual a 10. Cuando i sea mayor que 10, el bucle terminará.

*/