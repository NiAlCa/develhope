/*
Las promesas proporcionan otra forma de escribir codigo asincrono en JS
En esta leccion vamos a aprender como crear y usar promesas en nuestro codigo 

podemos pensar en las promesas como un representante de un valor
que aun no esta disponible cuando el se crea la promesa. 


*/

// Creación de una promesa
const someTask = new Promise(function(resolve, reject) {
    // Aquí iría la lógica de la tarea. Utilizamos setTimeout para simular una tarea asíncrona
    setTimeout(() => resolve("This is some data"), 1000); // La promesa se resuelve después de 1 segundo
});

// Uso de la promesa
someTask.then(
    function (value) {
        // Se ejecuta si la promesa se resuelve exitosamente
        console.log("value:", value); // Muestra el valor con el que se resolvió la promesa
        console.log("someTask:", someTask); // Muestra el estado actual de la promesa
    },
    function (reason) {
        // Se ejecuta si la promesa es rechazada
        console.log("reason:", reason); // Muestra la razón del rechazo
        console.log("someTask:", someTask); // Muestra el estado actual de la promesa
    }
);

console.log(someTask); // Muestra el estado inicial de la promesa



import * as fs from "node:fs/promises";

fs.readFile("file-1.txt", {encoding: "utf-8"})
.then(function (file1Data){
    console.log("file1Data:", file1Data); // Muestra los datos del primer archivo
    return fs.readFile("file-2.txt", {encoding: "utf-8"}); // Retorna la promesa de leer el segundo archivo
})
.then(function (file2Data){
    console.log("file2Data:", file2Data); // Muestra los datos del segundo archivo
    return fs.readFile("file-3.txt", {encoding: "utf-8"}); // Retorna la promesa de leer el tercer archivo
})
.then(function (file3Data){
    console.log("file3Data:", file3Data); // Muestra los datos del tercer archivo
})
.catch(function(error){
    console.error(error); // Maneja cualquier error que ocurra en alguna de las promesas anteriores
});





import * as fs from "node:fs/promises";

fs.readFile("file-1.txt", { encoding: "utf-8" })
  .then((file1Data) => {
      console.log("file1Data:", file1Data); // Muestra los datos del primer archivo
      return fs.readFile("file-2.txt", { encoding: "utf-8" }); // Continúa con la lectura del segundo archivo
  })
  .then((file2Data) => {
      console.log("file2Data:", file2Data); // Muestra los datos del segundo archivo
      return fs.readFile("file-3.txt", { encoding: "utf-8" }); // Continúa con la lectura del tercer archivo
  })
  .then((file3Data) => {
      console.log("file3Data:", file3Data); // Muestra los datos del tercer archivo
  })
  .catch((error) => {
      console.error(error); // Maneja cualquier error que ocurra durante las operaciones anteriores
  });


  /* 
  
  Lectura del Primer Archivo: Se inicia con la lectura del archivo 
  "file-1.txt". Una vez que esta operación se completa, el contenido del archivo se pasa a la siguiente función then.

Encadenamiento de Promesas:

En el primer then, tras mostrar los datos del primer archivo,
 se retorna la promesa de leer el segundo archivo ("file-2.txt").
En el segundo then, se muestra el contenido del segundo 
archivo y se retorna la promesa de leer el tercer archivo ("file-3.txt").
Manejo de Resultados:

Cada then maneja el resultado de la promesa anterior.
La función dentro de cada then realiza dos tareas: muestra el
 contenido del archivo leído y retorna la promesa para la siguiente operación de lectura.
Manejo de Errores:

El método catch al final de la cadena se usa para capturar y
 manejar cualquier error que pueda ocurrir en cualquiera de las operaciones de lectura de archivos.
Si ocurre un error en cualquier punto de la cadena de promesas,
 el control se pasa directamente al catch.
  
  */