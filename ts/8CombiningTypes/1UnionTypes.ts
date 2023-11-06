/* 
Lección sobre Tipos de Unión en TypeScript

En esta lección, aprenderemos cómo combinar dos o más tipos en un nuevo tipo conocido como tipo de unión (union type).

*/

// Definición del tipo de unión "Population" que puede contener valores de tipo cadena, número o booleano
type Population = string | number | boolean;

// Declaración de variables de tipo "Population"
let population1: Population = 54_230_562;
let population2: Population = "2,941,238";
let population3: Population = false;

// Veamos cómo funcionan los tipos de unión en funciones

// Función "outputValue" que acepta valores de tipo número o cadena
function outputValue(value: number | string) {
    console.log(`The value is ${value}`);
}

outputValue(654_654_684);
outputValue('Indian rupee');

// El siguiente código generaría un error, ya que el tipo boolean no está permitido aquí
// outputValue(true);

// Función "outputLanguages" que acepta valores de tipo cadena o un array de cadenas
function outputLanguages(languages: string | string[]) {
    if (Array.isArray(languages)) {
        console.log(`Languages: ${languages.join(', ')}`);
    }
}

outputLanguages(['Thai', 'Isan', 'Pak Tai']);
outputLanguages('English');

/* 
Los tipos de unión nos permiten definir variables o parámetros que pueden contener varios tipos de valores.
En la función "outputLanguages", utilizamos una comprobación para asegurarnos de que el valor sea un array de cadenas antes de mostrarlo.
Esto demuestra cómo los tipos de unión pueden hacer que el código sea más flexible y versátil.
*/

