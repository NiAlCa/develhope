/* 
Lección sobre Strings enums (Enums) en TypeScript

En esta lección, exploraremos una característica única de TypeScript llamada strings enums (enums). 

*/

// Definición de una strings enum "Continent" con valores de strings asociados
enum Continent {
    Asia = 'Asia',      
    Africa = 'Africa',    
    NorthAmerica = 'North America',
    SouthAmerica = 'South America', 
    Antarctica = 'Antarctica', 
    Europe = 'Europe',     
    Oceania = 'Oceania',     
}


interface Country {
    name: string;
    code: string;
    currency: string;
    population: number;
    continent: Continent; 
}


const countries: Country[] = [
    {
        name: 'China',
        code: 'CN',
        currency: 'CNY',
        population: 1400,
        continent: Continent.Asia, 
    },
    {
        name: 'Spain',
        code: 'ES',
        currency: 'EUR',
        population: 47,
        continent: Continent.Europe, 
    },
    {
        name: 'France',
        code: 'FR',
        currency: 'EUR',
        population: 67,
        continent: Continent.Europe, 
    },
    {
        name: 'Italy',
        code: 'IT',
        currency: 'EUR',
        population: 60,
        continent: Continent.Europe,  
    },
    {
        name: 'United States of America',
        code: 'USA',
        currency: 'USD',
        population: 331,
        continent: Continent.NorthAmerica,
    },
    {
        name: 'Japan',
        code: 'JPN',
        currency: 'JPY',
        population: 126,
        continent: Continent.Asia, 
    }
]

