/*

las promesas son una forma de manejar operaciones asíncronas
 de manera más organizada y legible. Proporcionan 
 una estructura para manejar el éxito o el fracaso de una operación asincrónica.
*/ 

//Creacion de la promesa

let ourPromise = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand > 0.5){
        resolve(rand);
    }else{
        reject(rand);
    }
});


/* 

Aquí estás creando una nueva promesa llamada ourPromise.
 Una promesa se crea pasando una función como argumento 
 al constructor Promise. Esta función toma dos argumentos:
  resolve y reject. Dentro de esta función, se realiza algún
   trabajo asincrónico, en este caso, se genera un número aleatorio
    y se decide si la promesa se resolverá o se rechazará
     basándose en si el número aleatorio es mayor que 0.5.

Si el número aleatorio es mayor que 0.5, se llama a resolve(rand) 
para indicar que la promesa se ha cumplido con éxito.

Si el número aleatorio es menor o igual a 0.5, se llama a reject(rand)
 para indicar que la promesa ha sido rechazada.

*/

//Manejo de la promesa

ourPromise
    .then((val) => console.log(val))
    .catch((err) => console.error(err))
    .finally(() => console.log("No tiene la edad"));

/*
Aquí estás utilizando los métodos then y catch para manejar el resultado de la promesa.

El método then se usa para manejar el caso en que la promesa se resuelve exitosamente. 
Cuando la promesa se resuelve, la función pasada a then se ejecuta y recibe el valor
 que se pasó a resolve (en este caso, el número aleatorio).


 El método catch se usa para manejar el caso en que la promesa se rechaza. 
 Cuando la promesa es rechazada, la función pasada a catch se ejecuta y 
 recibe el valor que se pasó a reject (en este caso, el número aleatorio).
*/


/* 
promes.all() 

La función Promise.all toma un iterable (por lo general, un array) 
de promesas como entrada y devuelve una nueva promesa.

Esta promesa se resuelve solo cuando todas las promesas
en el iterable se han resuelto o una de ellas ha sido rechazada.

Si todas las promesas se resuelven correctamente, 
la promesa devuelta se resuelve con un array que contiene 
los valores de resolución de cada una de las promesas en el mismo orden que estaban en el iterable original.


Si al menos una promesa es rechazada,
 la promesa devuelta se rechaza con el motivo del primer rechazo encontrado.

*/
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject("Error");

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values))
  .catch(error => console.error(error)); // Esto mostrará "Error"



/*

promise.allSettled()


La función Promise.allSettled también toma un iterable 
de promesas como entrada y devuelve una nueva promesa.


A diferencia de Promise.all, esta función espera a que
 todas las promesas se resuelvan o se rechacen,
 y luego devuelve un array de objetos 
 que describen el resultado de cada promesa en el mismo orden que estaban en el iterable original.


Cada objeto de resultado tiene dos propiedades:
status (que puede ser "fulfilled" para promesas resueltas o "rejected" para promesas rechazadas)
 y value (el valor de resolución si está resuelta o el motivo de rechazo si está rechazada).

*/

const promise5 = Promise.resolve(1);
const promise4 = Promise.reject("Error");

Promise.allSettled([promise3, promise5])
  .then(results => console.log(results))
  /*
  Esto mostrará:
  [
    { status: "fulfilled", value: 1 },
    { status: "rejected", reason: "Error" }
  ]
  */



/*Promise.RACE

Promise.race también toma un iterable de promesas 
como entrada y devuelve una nueva promesa.

Esta promesa se resuelve o se rechaza tan pronto 
como una de las promesas en el iterable se resuelve
 o se rechaza, y toma el valor o motivo de la primera promesa que se complete.

*/

const promise6 = new Promise((resolve) => setTimeout(resolve, 100, "Uno"));
const promise7 = new Promise((resolve) => setTimeout(resolve, 200, "Dos"));

Promise.race([promise6, promise7])
  .then(value => console.log(value)) // Esto mostrará "Uno"



/*promise.any
Promise.any también toma un iterable de promesas
 como entrada y devuelve una nueva promesa.


Esta promesa se resuelve tan pronto como al menos una
 de las promesas en el iterable se resuelve. 
 No importa si algunas promesas se rechazan, siempre y cuando al menos una se resuelva.

*/

const promise8 = Promise.reject("Error 1");
const promise9 = Promise.resolve("Éxito");

Promise.any([promise1, promise2])
  .then(value => console.log(value)) // Esto mostrará "Éxito"