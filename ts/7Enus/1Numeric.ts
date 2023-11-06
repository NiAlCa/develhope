/* 
Lección sobre Enumeraciones (Enums) en TypeScript

En esta lección, exploraremos una característica única de TypeScript llamada enumeraciones (enums). Las enumeraciones son una funcionalidad que no existe en JavaScript, pero que TypeScript agrega para permitirnos definir un conjunto de valores con nombre que no cambian.

*/

// Definición de una enumeración "Continent" que representa continentes con valores numéricos asociados
enum Continent {
    Asia,       // Valor 0
    Africa,     // Valor 1
    NorthAmerica, // Valor 2
    SouthAmerica, // Valor 3
    Antarctica, // Valor 4
    Europe,     // Valor 5
    Oceania,    // Valor 6
}

// Definición de la interfaz "Country" que utiliza la enumeración "Continent"
interface Country {
    name: string;
    code: string;
    currency: string;
    population: number;
    continent: Continent; // El continente ahora utiliza los valores de la enumeración "Continent"
}

// Creación de un array de objetos "countries" que representan diferentes países
const countries: Country[] = [
    {
        name: 'China',
        code: 'CN',
        currency: 'CNY',
        population: 1400,
        continent: Continent.Asia, // Usando valores de la enumeración "Continent"
    },
    {
        name: 'Spain',
        code: 'ES',
        currency: 'EUR',
        population: 47,
        continent: Continent.Europe, // Usando valores de la enumeración "Continent"
    },
    {
        name: 'France',
        code: 'FR',
        currency: 'EUR',
        population: 67,
        continent: Continent.Europe, // Usando valores de la enumeración "Continent"
    },
    {
        name: 'Italy',
        code: 'IT',
        currency: 'EUR',
        population: 60,
        continent: Continent.Europe, // Usando valores de la enumeración "Continent"
    },
    {
        name: 'United States of America',
        code: 'USA',
        currency: 'USD',
        population: 331,
        continent: Continent.NorthAmerica, // Usando valores de la enumeración "Continent"
    },
    {
        name: 'Japan',
        code: 'JPN',
        currency: 'JPY',
        population: 126,
        continent: Continent.Asia, // Usando valores de la enumeración "Continent"
    }
]

/* 
Enum Continent: Aquí definimos una enumeración llamada "Continent" que enumera
 varios continentes. Cada elemento de la enumeración tiene un valor numérico 
 asociado automáticamente, comenzando desde 0 para "Asia" y aumentando en 1 para 
 los elementos subsiguientes. Los valores numéricos son asignados automáticamente, 
 pero puedes asignar valores personalizados si lo deseas.

countries Array: Creamos un array "countries" que contiene objetos que representan
 diferentes países. Cada país tiene un nombre, un código, una moneda, una población
  y un continente asociado. Usamos los valores de la enumeración "Continent"
   para representar el continente de cada país.

*/

