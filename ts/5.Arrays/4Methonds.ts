/* 
Lección sobre Métodos de Matrices en TypeScript

En esta lección, exploraremos cuatro métodos diferentes para trabajar con matrices en TypeScript:

1. `find`
2. `filter`
3. `forEach`
4. `map`

*/

// Definición de la interfaz "Country"
interface Country {
    name: string;
    code: string;
    currency: string;
    population: number;
}

// Creación de una matriz de países
const countries: Country[] = [
    {
        name: 'China',
        code: 'CN',
        currency: 'CNY',
        population: 1400,
    },
    {
        name: 'Spain',
        code: 'ES',
        currency: 'EUR',
        population: 47,
    },
    {
        name: 'France',
        code: 'FR',
        currency: 'EUR',
        population: 67,
    },
    {
        name: 'Italy',
        code: 'IT',
        currency: 'EUR',
        population: 60,
    },
    {
        name: 'United States of America',
        code: 'USA',
        currency: 'USD',
        population: 331,
    },
    {
        name: 'Japan',
        code: 'JPN',
        currency: 'JPY',
        population: 126,
    }
]

/* 
Método `find`:

Usaremos el método `find` para buscar un elemento en nuestra matriz que cumpla con ciertas condiciones.
*/

const japan = countries.find((country) => {
    return country.code === "JPN";
})

console.log(japan?.population);

/* 
Método `filter`:

Usaremos el método `filter` para crear una nueva matriz que contiene elementos que cumplen ciertas condiciones.
*/

const populationsOverOneMillion = countries.filter((country) => {
    return country.population > 1;
})

console.log(populationsOverOneMillion);

/* 
Método `forEach`:

Usaremos el método `forEach` para iterar sobre la matriz y realizar una acción para cada elemento.
*/

countries.forEach((country) => {
    console.log(`The ${country.currency} is the official currency of ${country.name}`);
})

/* 
Método `map`:

Usaremos el método `map` para crear una nueva array transformando los elementos originales.
*/

const countryPopulations = countries.map((country) => {
    return {
        country: country.name,
        population: country.population
    }
})

console.log(countryPopulations);
