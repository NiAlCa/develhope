/* 
Lección sobre el Tipo de Utilidad Record en TypeScript

En esta lección, exploraremos el tipo de utilidad Record en TypeScript. Record nos permite crear un tipo de objeto a partir de los tipos de propiedades y valores que proporcionamos. Veamos cómo funciona en acción.

*/

// Uso del tipo de utilidad Record para crear un objeto con propiedades de cadena y valores de cadena o número
const country: Record<string, string | number> = {
    name: "Spain",
    code: "ES",
    currency: "EUR",
    population: 255,
}

/* 
El tipo "country" se crea utilizando Record y especifica que las propiedades del objeto son de tipo string y los valores pueden ser string o number.
*/

// Definición de una interfaz "Country" con propiedades específicas
interface Country {
    name: string;
    code: string;
    currency: string;
    population: number;
}

// Uso del tipo de utilidad Record para crear un objeto con propiedades de cadena y valores de tipo "Country"
const countries: Record<string, Country> = {
    spain: {
        name: "Spain",
        code: "ES",
        currency: "EUR",
        population: 255,
    },
    italy: {
        name: "Italy",
        code: "IT",
        currency: "EUR",
        population: 155,
    },
    portugal: {
        name: "Portugal",
        code: "PT",
        currency: "EUR",
        population: 255,
    },
}

/* 
El tipo "countries" se crea utilizando Record y especifica que las propiedades son de tipo string y los valores son objetos de tipo "Country".
*/
