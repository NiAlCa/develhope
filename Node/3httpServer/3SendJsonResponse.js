/* 
Devolver json desde el serbidor, es algo que comunmente se trabaja
y es un formato que podemos usar para codificar nuestros datos 

tenemos que crear un cuerpo de respuesta json 


const jsonResponseBody = JSON.stringify();

este metodo acepta objetos o arrays 

ahora realmente le daremos un objeto js que se convertira en una cadena JSON 
porque no podemos devolve robjetos js en la respuesta http tiene que ser de una 
cadena de datos 

*/

import { createServer } from 'node:http';  



const server = createServer((request, response) => {



console.log( 'request received')



response.statusCode = 200; 



response.setHeader("Content-Type", "application/json" );

const jsonResponseBody = JSON.stringify({location: "Earth"})

response.end(jsonResponseBody)




});


servidor.listen(3000, () => {
    console.log('Server running at http://localhost:3000')




})

