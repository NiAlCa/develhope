/* 
Objetos Anónimos en TypeScript 

En TypeScript, puedes definir objetos anónimos directamente. 
Estos objetos tienen una estructura fija sin la necesidad de crear una clase.

Un objeto literal tiene propiedades con nombres y
 tipos específicos, pero ten en cuenta que
  esta estructura es rígida y no es reutilizable como una clase.

*/

// Declaración de un objeto anónimo representando un país
const country: { name: string; code: string; population: number; } = {
    name: "Nueva Zelanda",
    code: "NZ",
    population: 5000000 // La población es un ejemplo simplificado
}

// Función para mostrar detalles de un país
function displayCountryDetails(country: { name: string; population: number }) {
    console.log(country.name.toUpperCase()); // Mostrar el nombre en mayúsculas
    console.log(country.population * 1000000); // Mostrar una estimación simplificada de la población en millones
}

// Llamada a la función para mostrar los detalles del país
displayCountryDetails(country);


//Ahora vamos a implementar una interfaz 


/* 
En TypeScript, puedes utilizar interfaces para definir la estructura de un objeto de manera más reutilizable. 
Las interfaces actúan como plantillas que describen la forma de un objeto. 
*/

// Declaración de una interfaz llamada "Country"
interface Country {
    name: string;
    code: string;
    population: number;
}

// Declaración de un objeto utilizando la interfaz "Country"
const country2: Country = {
    name: "Nueva Zelanda",
    code: "NZ",
    population: 5000000 // La población es un ejemplo simplificado
}

// Función para mostrar detalles de un país utilizando la interfaz "Country"
function displayCountryDetails2(country: Country) {
    console.log(country.name.toUpperCase());
    console.log(country.population * 1000000);
}

displayCountryDetails2({name: "narnia", code:"NN", population: 1234});
//Este es un ejemplo de que podemos crear un objeto de esta manera con la interfaz. 
//displayCountryDetails2(country2);



/* 
type aliases 

Los types aliases son parecidos a las interfaces 
se nombran y nos permiten reutilizar luego en diferentes
lugares a lo largo del codigo 

 Los Type Aliases son más adecuados cuando deseas combinar tipos existentes
  o crear tipos basados en otros tipos. Son menos adecuados 
  para definir estructuras que deban ser implementadas por múltiples tipos.


  Los Type Aliases no son compatibles con la asignación en el sentido en que
   las interfaces lo son. Si dos Type Aliases tienen la misma estructura,
    pero se les da nombres diferentes, no se consideran iguales por TypeScript. 
    Esto puede ser una ventaja en algunos casos, ya que evita problemas de asignación inesperada.
*/

type Country3 = {
    name: string;
    code: string;
    population: number;
}


const country3: Country = { //aqui usariamos la interfaz y no tendriamos que definir las variables en cada bloque de codigo 
    name: "Nueva Zelanda",
    code: "NZ",
    population: 5000000 // La población es un ejemplo simplificado
}

function displayCountryDetails3(country: Country) {
    console.log(country.name.toUpperCase()); 
    console.log(country.population * 1000000); 
}

displayCountryDetails2({name: "narnia", code:"NN", population: 1234});