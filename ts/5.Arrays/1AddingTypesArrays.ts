/* Si deseas agregar tipos a un array en TypeScript, puedes hacerlo de varias maneras. A continuación, te mostraré algunos ejemplos:*/

/*1. **Array de tipos específicos:**

Si deseas que tu array contenga solo un tipo específico, puedes hacerlo de la siguiente manera:*/

const countries: string[] = ['china', 'italy', 'thailand', 'greece'];


/*En este caso, hemos declarado un array llamado `countries` que solo puede contener cadenas de texto (strings).*/

/*2. **Array de tipos múltiples:**

Si deseas que tu array pueda contener varios tipos de elementos, puedes utilizar la unión de tipos (`|`) de la siguiente manera:*/


const mixedArray: (string | number)[] = ['apple', 42, 'banana', 17];


/*En este ejemplo, el array `mixedArray` puede contener tanto strings como números.

3. **Array de tipos genéricos:**

Puedes utilizar tipos genéricos para permitir que el array contenga cualquier tipo. Esto se hace utilizando el tipo `any` o `<T>` para hacerlo más seguro:*/

const genericArray: any[] = ['apple', 42, 'banana', true];


//También puedes utilizar un tipo genérico para hacerlo más seguro:


const genericArray2: Array<string | number> = ['apple', 42, 'banana', 17];


/*4. **Array de objetos con tipos personalizados:**

Si deseas que tu array contenga objetos con propiedades específicas, puedes definir un tipo personalizado y usarlo:*/


type Country = { name: string, population: number };
const countries2: Country[] = [
    { name: 'China', population: 1444216107 },
    { name: 'Italy', population: 60461826 },
    { name: 'Thailand', population: 69428524 },
    { name: 'Greece', population: 10473455 }
];


/*En este ejemplo, hemos definido un tipo `Country` y luego usamos ese tipo para
 especificar el tipo de objetos en el array `countries`.

Estas son algunas de las formas en que puedes agregar tipos a un array 
en TypeScript. El enfoque que elijas dependerá de tus necesidades y de la estructura de tus datos.*/