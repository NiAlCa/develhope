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
    .catch((err) => console.error(err));

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

*/

/*

promise.allSettled()

*/


/*Promise.RACE*/


/*promise.any */