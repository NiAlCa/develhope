/*En esta lección, exploraremos cómo los genéricos nos permiten utilizar tipos de variables en otros tipos 
y cómo crear interfaces y alias de tipo genéricos. Vamos a analizar el código que proporcionaste:

Generic Interfaces

Primero, definimos una interfaz genérica llamada `Currency<Type>` que toma un parámetro de tipo 
`Type`. Esta interfaz representa un tipo de dato que tiene una propiedad `currency` de tipo `Type`.*/


interface Currency<Type> {
    currency: Type;
}


//Luego, utilizamos esta interfaz para crear dos tipos concretos: `CurrencyString` y `CurrencyObj`.


type CurrencyString = Currency<string>;
type CurrencyObj = Currency<{ name: string; code: string; }>;


/*- `CurrencyString` es un tipo concreto que tiene una propiedad `currency` de tipo `string`.
- `CurrencyObj` es un tipo concreto que tiene una propiedad `currency` de tipo de objeto `{ name: string; code: string; }`.

A continuación, creamos dos objetos `currencyObj1` y `currencyObj2` que cumplen con las definiciones de estos tipos concretos:*/


const currencyObj1: CurrencyString = { currency: "Baht" };
const currencyObj2 = {
    currency: { name: "Baht", code: "THB" }
};


/*`currencyObj1` es un objeto que tiene una propiedad `currency` de tipo `string`, mientras que `currencyObj2`
 es un objeto que tiene una propiedad `currency` de tipo `{ name: "Baht", code: "THB" }`.

 Generic Type Alias

Luego, definimos un alias de tipo genérico llamado `Currency2<Type>`, que es similar a la interfaz genérica que hemos creado.*/


type Currency2<Type> = {
    currency: Type;
}


/*También creamos un tipo concreto `CurrencyString2` basado en este alias de tipo:

*/
type CurrencyString2 = Currency<string>;


/*Al igual que con la interfaz, `CurrencyString2` representa un tipo con una propiedad `currency` de tipo `string`.

Finalmente, creamos un objeto `currencyObj3` que cumple con la definición del tipo `CurrencyString2`:
*/



/*`currencyObj3` es un objeto que tiene una propiedad `currency` de tipo `string`.

En resumen, en este código hemos demostrado cómo utilizar genéricos para crear interfaces
 y alias de tipo que pueden adaptarse a diferentes tipos de datos. Esto proporciona flexibilidad y reutilización en el diseño de nuestras estructuras de datos y tipos.*/