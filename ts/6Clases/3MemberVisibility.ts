/* 
Lección sobre Control de Visibilidad de Miembros en Clases de TypeScript

Hasta ahora, hemos visto que todos los miembros de nuestras clases son públicos por defecto,
 lo que significa que se pueden acceder desde fuera de la clase. En esta lección,
  aprenderemos cómo controlar la visibilidad de los miembros de una clase.

*/

// Importamos todo el código de la clase "Country" que se define anteriormente

class Country {
    protected readonly name: string = ""; // Ahora, el campo "name" es protegido
    readonly code: string = ""; 
    population: number;
    protected languages: string[] = []; // Ahora, el campo "languages" es protegido

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
