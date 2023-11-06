/* 
Lección sobre Clases en TypeScript

En esta lección, aprenderemos acerca de las clases en TypeScript.
 Puedes pensar en las clases como plantillas para crear objetos. TypeScript agrega tipos y algunas características adicionales al lenguaje JavaScript.

*/

// Declaración de una clase llamada "Country"
class Country {
    readonly name: string = "";
    readonly code: string = ""; 
    population: number;
    languages: string[] = [];

    constructor(name: string, code: string) {
        /* El constructor se ejecuta automáticamente cuando se crea una instancia de la clase. 
        Cualquier código dentro de este constructor se utiliza para configurar la instancia de la clase. */
        this.name = name;
        this.code = code;
        /* Aquí estamos tomando los parámetros pasados al constructor y asignándolos a las variables 
        de la instancia de la clase "Country". Esto permite inicializar los campos de la clase 
        con valores específicos al crear una instancia. */
    }

    addLanguage(language: string) {
        /* Método "addLanguage": Agrega un idioma a la lista de idiomas del país. */
        this.languages.push(language);
    }

    describeLanguages(): string {
        /* Método "describeLanguages": Devuelve una cadena que describe los idiomas hablados en el país. */
        return `The languages spoken in ${this.name} include: ${this.languages.join(', ')}`;
    }
}

// Creación de una instancia de la clase "Country" para representar Nigeria
const nigeria = new Country('Nigeria', 'NG');

// Intento de modificar una propiedad "readonly" (esto está comentado porque no es válido)
// nigeria.name = 'Podemos cambiar el país cuando queramos';

// Agregar varios idiomas a la instancia de "Country" para Nigeria
nigeria.addLanguage('Hausa');
nigeria.addLanguage('Igbo');
nigeria.addLanguage('Yoruba');
nigeria.addLanguage('Spanish');
nigeria.addLanguage('English');

/* 
Ten en cuenta que las propiedades "readonly" no se pueden modificar después de la inicialización, 
como se muestra en el comentario anterior. Esto garantiza que los datos básicos de un país 
como el nombre y el código no cambien una vez que se establecen. */

// Ejemplo de cómo se podrían establecer otras propiedades (esto está comentado porque no es válido)
/* 
nigeria.name = 'Nigeria';
nigeria.code = 'NG';
nigeria.population = 123123123;
*/

const description = nigeria.describeLanguages();

