/*

Vamos a usar el modulo HTTP central de node.js y crearemos un servidor que 
puede servir una pagina web html



*/

import { createServer } from 'node:http';  /* 

Estamos usando este protocolo 'node:http' para dejar muy clar oque el 
que estamos importando es el modulo central de node.js

*/

// Ahora podemos ir y crear nuestra instancia de servidor 
//definiremos una variable llamada servidor y llamaremos a este metodo de creacion 
//de servidor y le daremos una funcion de devolucion de llamada 

const server = createServer((request, response) => {
/* 
Hemos hecho esto porque cuando creamos nuestro servidor, queremos 
que sea capaz de aceptar las solicitudes que llegan y queremos
poder devolver las respuestas 


estos objetos que entran aqui son particulares objetos 
especiales que node.js ha creado y pasado por nosotros 


comunmente Veremos otros objetos
REq y RES   que son nombres mas cortos y realmente los podemos llamar como queramos 
*/

/*
vamos a preparar un mensaje a la terminal cuando el servidor recibe una solicitud 



*/

console.log( 'request received')


//Vamos a establecer un codigo de estado http 
response.statusCode = 200; 
/*
El response code tiene un significado muy especifico el 200 y quiere decir que esta todo bien 
*/
//Tambien podemos decirles sobre el tipo de datos que vamos a recibir, configurando un header 

response.setHeader("Content-Type", "text/html" );

/*
Ahora agreguemos un cuerpo de respuesta 

*/

response.end('<html><body><h1> this page whas served with node.js</h1> </body> </html>')


/* 
Ahora, para que nuestro servidor este en funcionamientos, debemos decirle al la instancia por fuera
que debe estar escuchando nuevas conexiones 


*/

});


servidor.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
    
})

/*
Le asignaremos 2 parametros, el primero es el puerto en el que queremos que escuche nuestro servidor 
y los puertos dicen a que proceso enviar datos, asi que cuando ejecutemos este script habra un proceso
ejecutandose en nuestra computadora y especificando el puerto y diciendole que 
cualquier cosa que llegue por el puerto 3000 debe enviarse a este proceso a este script que 
estamos ejecutando, para que luego podamos manejarlo en nuestro servidor. b 

y el segundo argumento sera una callback function que nos indicara que todo esta fnucionando 
bien 
*/