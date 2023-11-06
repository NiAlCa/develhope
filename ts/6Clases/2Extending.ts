/* 
Lección sobre Herencia de Clases en TypeScript

En esta lección, aprenderemos cómo crear una nueva clase secundaria basada en 
una clase existente. La nueva clase heredará todos los métodos, constructores y campos de la clase base.

*/

// Importamos todo el código de la clase "Country" que se define anteriormente

class Country {
    readonly name: string = "";
    readonly code: string = ""; 
    population: number;
    languages: string[] = [];

    constructor(name: string, code: string) {
        this.name = name;
        this.code = code;
    }

    addLanguage(language: string) {
        this.languages.push(language);
    }

    describeLanguages(): string {
        return `The languages spoken in ${this.name} include: ${this.languages.join(', ')}`;
    }
}

// Creación de una instancia de la clase "Country" para representar Nigeria
const nigeria = new Country('Nigeria', 'NG');
nigeria.addLanguage('Igbo');
nigeria.addLanguage('Yoruba');
nigeria.addLanguage('Spanish');
nigeria.addLanguage('English');

const description = nigeria.describeLanguages();

// Creación de la clase secundaria "CountryWithCurrency" que hereda de la clase "Country"
class CountryWithCurrency extends Country {

    currency: Currency;

    constructor(name: string, code: string, currency: Currency) {
        super(name, code); // Llama al constructor de la clase base "Country"
        this.currency = currency;
    }

    describeCurrency(): string {
        return `The currency of ${this.name} is ${this.currency.name}`;
    }
}

// Definición de la interfaz "Currency"
interface Currency { 
    name: string;
    code: string;
    symbol: string;
}

// Creación de una instancia de la clase "CountryWithCurrency" para representar Colombia
const colombiaCurrency: Currency = {
    name: 'Colombian Peso',
    code: 'COP',
    symbol: '$',
}

const colombia = new CountryWithCurrency('Colombia', 'CO', colombiaCurrency);
colombia.addLanguage('Spanish');
colombia.addLanguage('English');

console.log(colombia);

const colombianLanguages = colombia.describeLanguages();
console.log(colombianLanguages);

const colombiaCurrencyDescribe = colombia.describeCurrency();
console.log(colombiaCurrencyDescribe);
