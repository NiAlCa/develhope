import express from 'express';

/* Inicializa una aplicación Express.

En el contexto de Node.js y especialmente en frameworks como Express, 
un callback middleware es una función que tiene acceso al objeto de
 solicitud (req), al objeto de respuesta (res), y a la siguiente función
  middleware en el ciclo de solicitud-respuesta de una aplicación web.
   El término "callback" se refiere a que estas funciones son llamadas
    de vuelta (o "callback") en respuesta a un evento específico, en este caso, una solicitud HTTP.

Las funciones middleware pueden realizar una variedad de tareas, como:

Ejecutar cualquier código: Pueden ejecutar código general que necesita
 correr con cada solicitud, como logging, validaciones, manejo de sesiones, etc.
Modificar los objetos de solicitud y respuesta: Pueden modificar el objeto
 req (solicitud) y el objeto res (respuesta), por ejemplo, analizando cuerpos
  de solicitud, estableciendo cabeceras de respuesta, etc.
Finalizar el ciclo de solicitud-respuesta: Pueden terminar el ciclo enviando
 una respuesta al cliente.
Llamar al siguiente middleware en la pila: Si un middleware no termina el 
ciclo de solicitud-respuesta, debe llamar a next() para pasar el control al siguiente middleware. De lo contrario, la solicitud quedará colgada.
Un middleware se define típicamente en Express con la siguiente estructura:

*/
const app = express();




// Primer middleware: Establece una cabecera personalizada en todas las respuestas.
app.use(function setHeaderMiddleware(req, res, next) {
    console.log("called : setHeaderMiddleware");

    // Establece una cabecera personalizada en la respuesta. Debe ser 'res', no 'response'.
    res.setHeader("x-Custom-Headers", "123");

    // Llama a 'next()' para pasar al siguiente middleware en la cadena.
    next();
});

// Segundo middleware: Envía datos en la respuesta.
app.use(function sendDataMiddleware(req, res, next) {
    console.log("called sendDataMiddleware");

    // Envía una respuesta JSON. Debe ser 'res', no 'Response'.
    res.json({data: "this is some data"});

    // Es importante llamar a 'next()' si queremos que se ejecute más middleware después de este.
    // Pero en este caso, como ya se envía una respuesta, no deberíamos llamar a 'next()'.
});

// Tercer middleware: Manejador de errores.
app.use(function errorHandlerMiddleware(error, req, res, next) {
    console.log("called errorHandlerMiddleware");

    // Establece el código de estado de la respuesta. Debe ser 'res', no 'response'.
    res.status(500);

    // Envía un mensaje de error en la respuesta. Debe ser 'res', no 'response'.
    res.json({message: error.message});

    // Llama a 'next()' para continuar con el siguiente middleware, si lo hay.
    next();
});

// El middleware en Express se ejecuta en el orden en que se añade.
// Cada middleware puede modificar el objeto de solicitud (req) y de respuesta (res), 
// y luego pasar el control al siguiente middleware en la cadena llamando a 'next()'.



/* 

Donde:

req es el objeto de solicitud HTTP.
res es el objeto de respuesta HTTP.
next es una función que, cuando se invoca, ejecuta el siguiente middleware en la pila.
*/