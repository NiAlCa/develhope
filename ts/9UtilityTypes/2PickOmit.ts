/* 
Lección sobre Tipos de Utilidades en TypeScript: Pick y Omit

En esta lección, aprenderemos cómo utilizar los tipos de utilidades Pick y Omit en TypeScript. Estos tipos de utilidades nos permiten seleccionar un subconjunto de propiedades de un tipo existente (Pick) o omitir propiedades específicas (Omit).

*/

// Definición de una interfaz "Country" con varias propiedades
interface Country {
    name: string;
    code: string;
    currency: string;
    population: number;
}

// Uso del tipo de utilidad "Pick" para crear un nuevo tipo "CountryPreview" seleccionando propiedades
type CountryPreview = Pick<Country, "name" | "code">

// Creación de un objeto "countryPreview" con propiedades seleccionadas
const countryPreview: CountryPreview = {
    name: "Spain",
    code: "ES",
}

/* 
El tipo "CountryPreview" se crea a partir de "Country" pero solo incluye las propiedades "name" y "code".
*/

// Uso del tipo de utilidad "Omit" para crear un nuevo tipo "Eur" omitiendo propiedades
type Eur = Omit<Country, "name" | "code">

// Creación de un objeto "euro" con propiedades omitidas
const euro: Eur = {
    currency: "EUR",
    population: 255,
}

/* 
El tipo "Eur" se crea a partir de "Country" pero omite las propiedades "name" y "code".
*/
