import express, { Request, Response } from 'express';
import "express-async-errors"
import morgan from "morgan";

/* 
express: Es un framework de Node.js para construir aplicaciones web 
y APIs. Facilita la creación de un servidor web.

{ Request, Response }: Son tipos de TypeScript que se utilizan
 para tipar los objetos de solicitud (request) y respuesta (response), respectivamente.

express-async-errors: Un módulo para manejar errores 
en funciones asíncronas en Express.

morgan: Es un middleware para Express que registra las solicitudes HTTP,
 lo que es útil para el desarrollo y el seguimiento de errores.
*/


const app = express();
const port = 3000;

//Aquí creamos una nueva aplicación Express y definimos el puerto 3000 para que el servidor lo escuche.

app.use(morgan("dev"))


/*
morgan("dev"): Este middleware registra detalles de cada solicitud,
 como el método HTTP, la ruta, el código de estado de la respuesta, 
 y el tiempo de respuesta. El modo "dev" proporciona un 
 formato conciso y coloreado adecuado para el desarrollo.

*/

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({msg:'Hello world!'});
});

/*
Aquí definimos una ruta GET para la raíz ('/').
 Cuando se accede a esta ruta, la función callback se ejecuta.
req y res son los objetos de solicitud y respuesta,
 respectivamente. Utilizamos res.status(200)
  para enviar un código de estado HTTP 200 (OK) y res.json({msg: 'Hello world!'}) para enviar una respuesta en formato JSON.

*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


/* 
Este código inicia el servidor en el puerto especificado (3000).
 Cuando el servidor comienza a escuchar, se muestra un mensaje en la consola.

*/