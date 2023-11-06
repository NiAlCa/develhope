/* 
Extensión de Interfaces en TypeScript

En TypeScript, puedes extender interfaces para crear nuevas interfaces que heredan propiedades de las interfaces originales.

*/

// Definición de la interfaz "Country"
interface Country  {
    readonly name: string;  // Propiedad "name" de solo lectura
    readonly code: string;  // Propiedad "code" de solo lectura
    population?: number;   // Propiedad "population" opcional
}

// Definición de la interfaz "Currency" que extiende "Country"
interface Currency extends Country {
    currency: {
        name: string;
    }
}

// Definición de la interfaz "CountryWithCurrencyLanguages" que extiende "Country" y "Currency"
interface CountryWithCurrencyLanguages extends Country, Currency {
    languages: string;  // Nueva propiedad "languages"
}

// Creación de un objeto "country" que cumple con la interfaz "CountryWithCurrencyLanguages"
const country: CountryWithCurrencyLanguages = { 
    name: "Nueva Zelanda",
    code: "NZ",
    population: 5000000, 
    currency: {
        name: "NUSD",
    },
    languages: "Inglés",  // Propiedad adicional de "languages"
}

// Función que muestra los detalles de un país, toma un objeto que cumple con la interfaz "Country"
function displayCountryDetails2({ name, population = 0 }: Country) {
    console.log(name.toUpperCase());  // Mostrar el nombre en mayúsculas
    console.log(population * 1000000);  // Mostrar una estimación simplificada de la población en millones
}

// Llamada a la función para mostrar los detalles del país "country"
displayCountryDetails2(country);
