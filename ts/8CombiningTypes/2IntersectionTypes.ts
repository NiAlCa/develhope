/* 
Lección sobre Tipos de Intersección en TypeScript

Si deseamos combinar los tipos de objetos existentes, podemos crear un tipo de intersección (intersection type).
Los tipos de intersección permiten combinar los miembros de múltiples interfaces u objetos en un solo tipo que incluye todas las propiedades de las interfaces originales.

*/

// Definición de dos interfaces: "Country" y "Climate"
interface Country {
    name: string;
}

interface Climate {
    desert: boolean;
}

// Función "describe" que acepta un tipo de intersección entre "Country" y "Climate"
function describe(country: Country & Climate) {
    console.log(`Country name is ${country.name}`);
    console.log(`Country has a desert climate: ${country.desert}`);
}

describe({ name: "Nigeria", desert: true });
describe({ name: "Nigeria", desert: false });
// El siguiente código no funcionaría, ya que falta la propiedad "desert"
// describe({ name: "Nigeria" });

// Definición de dos interfaces: "Country2" y "CountryData2"
interface Country2 {
    name: string;
    code: string;
}

interface CountryData2 {
    languages: string[];
    population: number;
}



// Creación de un objeto "greece" que combina las interfaces "Country2" y "CountryData2"
type CountryWithData = Country2 & CountryData2;

const greece: CountryWithData = {
    name: "Greece",
    code: "GR",
    languages: ["English"],
    population: 121
}
