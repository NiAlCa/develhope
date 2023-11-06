
/* en TypeScript, los "Generics" son una característica que te permite escribir 
código que es reutilizable y flexible al mismo tiempo. Te permiten crear funciones
, clases o interfaces que funcionan con diferentes tipos de datos sin especificar 
el tipo de datos de antemano. En lugar de utilizar un tipo de dato concreto, 
puedes utilizar un parámetro de tipo genérico, que se representa comúnmente
 con la letra "T" o cualquier otro identificador descriptivo.*/

//Veamos el código de ejemplo que proporcionaste:


const identity = <Type>(value: Type): Type => value;


/*Aquí, hemos definido una función llamada `identity` que toma un argumento llamado 
`value`. Hemos usado `<Type>` entre paréntesis angulares para indicar que `Type`
 es un parámetro genérico. Esto significa que la función `identity` puede aceptar
  cualquier tipo de dato como argumento y devolverá el mismo tipo de dato.
   La función simplemente devuelve el argumento sin hacer nada más.
    Esto es útil cuando quieres preservar el tipo de dato original.

Luego, utilizamos esta función con diferentes tipos de datos:*/


let output1 = identity("india"); // output1 es de tipo string
let output2 = identity(1_123);   // output2 es de tipo number
let output3 = identity(true);    // output3 es de tipo boolean


/**Como puedes ver, las variables `output1`, `output2` y `output3` tienen el mismo tipo que los argumentos que les pasamos.

Ahora, echemos un vistazo a la función `identityMultiple`:*/


function identityMultiple<Type1, Type2>(value1: Type1, value2: Type2): [value1: Type1, value2: Type2] {
    return [value1, value2];
}
/*

En esta función, hemos declarado dos parámetros genéricos,
 `Type1` y `Type2`. La función toma dos valores como entrada
  y devuelve un arreglo que contiene ambos valores.
   La anotación `[value1: Type1, value2: Type2]`
    indica que el arreglo contendrá los valores con los tipos de datos correspondientes.

Finalmente, utilizamos la función `identityMultiple` con tipos específicos:
*/

let output4 = identityMultiple<boolean, string>(true, "123");

/*
Aquí, hemos especificado los tipos de datos boolean y string al llamar 
a la función `identityMultiple`. Como resultado, `output4` es un arreglo 
con el primer elemento de tipo boolean y el segundo elemento de tipo string.

En resumen, los "Generics" en TypeScript te permiten escribir código más 
genérico y reutilizable al permitirte trabajar con diferentes tipos de datos 
de manera flexible. Puedes usar parámetros genéricos para escribir funciones 
y clases que funcionen con una variedad de tipos de datos sin tener que 
definir el tipo de dato de antemano.*/