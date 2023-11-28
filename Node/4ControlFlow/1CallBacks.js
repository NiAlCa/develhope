/* 
Para entender el codigo asincrono tenemos un ejemplo
tenemos el siguiente ejemplo 

*/

console.log("1 Hello!");

setTimeout(function(){


    console.log("2. How are you?");

}, 1000)  /*Set timeout se usa para especificar un temporzador para que el codigo pueda ejecutarse despues de un periodo de tiempo determinado 
por asi decir estamos simulando la llegada de la api 
*/


console.log("3. Goodbye!");




/* 

lo siguiente es un aapi basada en devolucion de llamada y lo que haremos 
es hacer pasar un nombre de archivo como el primer argumento y luego el segundo 
es la devolucion de llamada o el ultimo argumento es siempre la devolucion de llamada 
asi que ahora vamos a pasar 


Asincronía: Node.js opera de manera asincrónica, lo que significa que el servidor puede procesar más de una solicitud al mismo tiempo. Esto es especialmente útil para operaciones de entrada/salida (I/O), como leer archivos, donde no quieres que el servidor se bloquee mientras espera que se complete la operación.

Callback: Es una función que se pasa como argumento a otra función y se ejecuta después de que una operación asincrónica ha terminado. En tu código, las funciones que se pasan a fs.readFile son callbacks


*/

import * as fs from "node:fs";
// Lectura del primer archivo (file-1.txt) de forma asincrónica
fs.readFile("file-1.txt", { encoding: "utf-8" }, function (error, data1) {
    // Anotación 1: Callback para manejar la respuesta de la lectura del archivo.

    // Anotación 2: Verificación de error. Si hay error, lo imprime y termina la ejecución.
    if (error) {
        console.error(error);
        return;
    }

    // Anotación 3: En caso de éxito, imprime los datos del primer archivo.
    console.log(data1);

    // Anotación 4: Inicio de la lectura del segundo archivo dentro del callback del primero.
    fs.readFile("file-2.txt", { encoding: "utf-8" }, function (error, data2) {
        
        // Anotación 5: Verificación de error para el segundo archivo.
        if (error) {
            console.error(error);
            return;
        }

        // Anotación 6: En caso de éxito, imprime los datos del segundo archivo.
        console.log(data2);
    });
});