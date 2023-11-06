/* 
Lección sobre Tipos Asignados (Mapped Types) en TypeScript

En esta lección, aprenderemos a crear tipos asignados en TypeScript. Los tipos asignados son tipos genéricos que permiten tomar un tipo existente y transformar o mapear sus miembros.

*/

// Definición de un tipo "Currency" que utiliza un tipo de asignación
type Currency = {
    [Key: string]: string;
};

const currency: Currency = {
    name: 'United States',
    code: 'USD',
    symbol: '$',
}

// El tipo "Currency" permite cualquier clave (string) con un valor asociado (string)
// Puedes agregar más pares clave-valor si lo deseas

// Definición de un tipo "CountryData" que contiene propiedades "languages" y "population"
type CountryData = {
    languages: String[];
    population: Number;
}

// Definición de un tipo asignado genérico "Available" que marca propiedades como disponibles (boolean)
const availableCountryData: Available2<CountryData> = {
    languages: true,
    population: false,
}

// Definición de un tipo "CountryData2" similar al anterior
type CountryData2 = {
    languages: String[];
    population: Number;
}

// Definición de un tipo asignado genérico "Available2" que marca propiedades como disponibles con el modificador +?
type Available2<Type> = {
    [Property in keyof Type]?: boolean;

    // Las siguientes variantes muestran los diferentes modificadores que se pueden utilizar:
    // -readonly [Property in keyof Type]: boolean;
    // +readonly [Property in keyof Type]: boolean;

    /* 
    Modificadores:
    - Con +?: Marca las propiedades como opcionales (pueden o no estar presentes en el objeto).
    - Con -readonly: Marca las propiedades como no solo lectura (se pueden modificar).
    - Con +readonly: Marca las propiedades como solo lectura (no se pueden modificar).
    */

}

// Creación de un objeto "availableCountryData2" con propiedades marcadas como disponibles y opcionales
const availableCountryData2: Available2<CountryData> = {
    languages: true,
    population: false,
}

// La propiedad "population" se marca como opcional y se puede asignar true
availableCountryData2.population = true;
