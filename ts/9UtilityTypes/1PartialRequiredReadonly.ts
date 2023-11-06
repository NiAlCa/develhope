/* 
Lección sobre Tipos de Utilidades en TypeScript: Partial, Required y Readonly

En esta lección, aprenderemos cómo utilizar los tipos de utilidades Partial, Required y Readonly en TypeScript. Estos tipos de utilidades nos permiten crear nuevos tipos basados en un tipo existente con ciertas modificaciones.

*/

// Definición de una interfaz "Country" con propiedades obligatorias
interface Country {
    name: string;
    code: string;
    currency: string;
    population: number;
}

// Creación de un objeto "CountryA" que cumple con la interfaz "Country"
const CountryA: Country = {
    name: "Spain",
    code: "ES",
    currency: "EUR",
    population: 255,
}

// Uso del tipo de utilidad "Partial" para crear "CountryB" con propiedades opcionales
const CountryB: Partial<Country> = {
    name: "Spain",
    code: "ES",
    population: 255,
}

/* 
El tipo "CountryB" es similar a "Country", pero todas sus propiedades se vuelven opcionales, lo que significa que pueden estar presentes o no.
*/

// Uso del tipo de utilidad "Required" para crear "CountryC" con propiedades obligatorias
const CountryC: Required<Country> = {
    name: "Spain",
    code: "ES",
    currency: "EUR",
    population: 255,
}

/* 
El tipo "CountryC" es similar a "Country", pero todas sus propiedades se vuelven obligatorias, lo que significa que deben estar presentes.
*/

// Uso del tipo de utilidad "Readonly" para crear "CountryD" con propiedades de solo lectura
const CountryD: Readonly<Country> = {
    name: "Spain",
    code: "ES",
    currency: "EUR",
    population: 255,
}

/* 
El tipo "CountryD" es similar a "Country", pero todas sus propiedades se vuelven de solo lectura, lo que significa que no se pueden modificar una vez asignadas.
*/
