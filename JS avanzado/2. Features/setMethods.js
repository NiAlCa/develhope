/* 

setTimeout y setInterval son dos funciones en JavaScript que te permiten programar la ejecución de código en un momento futuro. Ambas funciones son útiles para crear tareas diferidas o repetitivas en una aplicación.

*/


/* 
setTimeout:
La función setTimeout se utiliza para ejecutar una función
 o un bloque de código después de un período de
  tiempo especificado. Su sintaxis es la siguiente:


  setTimeout(función, tiempoEnMilisegundos);

  función es la función o el código que deseas ejecutar después de que transcurra el tiempo especificado.
tiempoEnMilisegundos es la cantidad de tiempo en milisegundos que debe transcurrir antes de que se ejecute la función.


*/


console.log("Inicio");
setTimeout(function() {
    console.log("Esto se ejecutará después de 2000 milisegundos");
}, 2000);
console.log("Fin");


/* 
setInterval:
La función setInterval se utiliza para ejecutar 
una función o un bloque de código de manera
 repetitiva en intervalos regulares. Su sintaxis es la siguiente:


 setInterval(función, tiempoEnMilisegundos);


 Donde:

función es la función o el código que deseas ejecutar en cada intervalo de tiempo.
tiempoEnMilisegundos es el intervalo de tiempo en milisegundos entre cada ejecución de la función.
*/

let contador = 0;
const intervalo = setInterval(function() {
    console.log("Contador:", contador);
    contador++;
    if (contador === 5) {
        clearInterval(intervalo); // Detener el intervalo después de 5 ejecuciones
    }
}, 1000);
