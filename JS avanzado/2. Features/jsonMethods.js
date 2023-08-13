/* 
Los "JSON methods" (métodos JSON) son un conjunto de funciones proporcionadas
 por JavaScript para trabajar con datos en formato JSON (JavaScript Object Notation)
 . JSON es un formato ligero y legible por humanos utilizado para 
 intercambiar y almacenar datos estructurados entre un servidor
  y un cliente, o entre diferentes partes de una aplicación. 
  Estos métodos permiten convertir objetos JavaScript en cadenas 
  JSON y viceversa, lo que es esencial para la comunicación
   entre sistemas y la persistencia de datos.

*/

/* 
JSON.stringify(objeto[, replacer[, espacio]]):
 Este método convierte un objeto JavaScript en una cadena JSON.
  Toma hasta tres argumentos opcionales:

objeto: El objeto que se va a convertir a una cadena JSON.
replacer (opcional): Una función que se llama para transformar
 los valores y propiedades del objeto antes de ser serializados.
  Puede ser utilizado para filtrar o transformar los datos.
espacio (opcional): Un valor numérico o una cadena que especifica
 el espaciado de formato en la cadena JSON resultante.
*/




/*
JSON.parse(cadena): Este método convierte una cadena JSON en un objeto JavaScript.
 Recibe una cadena JSON como argumento y devuelve un objeto JavaScript correspondiente.

Estos métodos son esenciales para la comunicación entre un servidor
 y un cliente a través de API, ya que permiten enviar datos estructurados 
 de ida y vuelta. Por ejemplo, cuando envías datos desde el cliente al servidor,
  generalmente los conviertes en una cadena JSON utilizando JSON.stringify.
   Cuando recibes datos del servidor, los conviertes de nuevo en objetos JavaScript utilizando JSON.parse.


*/


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  };
  
  // Convertir el objeto en una cadena JSON
  const jsonStr = JSON.stringify(person);
  console.log(jsonStr);
  
  // Convertir la cadena JSON de nuevo a un objeto
  const parsedPerson = JSON.parse(jsonStr);
  console.log(parsedPerson.firstName); // Salida: John
  