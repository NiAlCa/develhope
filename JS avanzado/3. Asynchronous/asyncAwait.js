 /* 
async y await son características de JavaScript que se utilizan para trabajar
 con promesas de manera más sencilla y legible. Están diseñados para facilitar
  la escritura y gestión de código asíncrono.

*/

/* 

async:

La palabra clave async se utiliza antes de una función para indicar que la función
 es asincrónica, es decir, que puede contener operaciones asincrónicas.


Cuando una función es marcada como async, automáticamente devuelve una promesa.
 Esta promesa se resolverá con el valor devuelto por la función o se rechazará con cualquier error lanzado por la función.


Las funciones async pueden contener la palabra clave await, que indica dónde
 se debe esperar a que una promesa se resuelva antes de continuar con la ejecución del código.

*/

async function miFuncionAsync() {
    return 42;
  }
  
  miFuncionAsync().then(resultado => {
    console.log(resultado); // Esto mostrará 42
  });

  

  //await:

/* 
La palabra clave await se usa dentro de una función marcada como
 async para esperar a que una promesa se resuelva.


Cuando se encuentra un await, la ejecución de la función async se pausa hasta 
que la promesa especificada se resuelva. Mientras tanto, la ejecución del
 hilo principal de JavaScript no se bloquea, lo que permite que otras tareas continúen.


El resultado de la promesa resuelta se almacena en una variable 
que puede ser utilizada en el código posterior de la función async

*/

async function obtenerDatos() {
    const resultado = await fetch('https://ejemplo.com/api/datos');
    const datos = await resultado.json();
    return datos;
  }
  
  obtenerDatos()
    .then(datos => console.log(datos))
    .catch(error => console.error(error));

/* 
En este ejemplo, await se utiliza para esperar la respuesta de una 
solicitud a una API y luego para esperar que los datos se 
conviertan en formato JSON antes de continuar.

En resumen, async declara una función asincrónica que siempre 
devuelve una promesa, y await se usa dentro de funciones async 
para esperar la resolución de promesas, lo que hace que el código 
asíncrono sea más legible y más parecido al código síncrono. 
Esto mejora la gestión de flujos asíncronos en JavaScript.

*/ 