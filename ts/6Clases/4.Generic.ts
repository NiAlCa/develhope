/* 
Lección sobre Clases Genéricas en TypeScript

En esta lección, exploraremos cómo crear una clase genérica en TypeScript.
 Una clase genérica es una plantilla de clase que puede trabajar
  con diferentes tipos de datos sin especificar un tipo concreto
   al definirla. Esto ofrece una mayor flexibilidad y reutilización de código.

*/

// Definición de una clase genérica "Country" que acepta un tipo "LanguageType" para los idiomas
class Country<LanguageType> {
    name: string;
    code: string;
    languages: LanguageType[] = [];

    constructor(name: string, code: string) {
        this.name = name;
        this.code = code;
    }

    addLanguage(language: LanguageType) {
        this.languages.push(language);
    }
}

// Creación de una instancia de la clase "Country" con tipo de datos "string" para los idiomas
const india = new Country<string>('India', 'IN');
india.addLanguage('Hindi');
india.addLanguage('English');

// Creación de una instancia de la clase "Country" con tipo de datos "number" para los idiomas
const japan = new Country<number>('Japan', 'JP');
japan.addLanguage(1); // Ejemplo de idioma representado por un número

// Ahora, podemos usar la misma clase genérica para trabajar con diferentes tipos de idiomas
