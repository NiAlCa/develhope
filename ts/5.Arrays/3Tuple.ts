/*Las tuplas son una estructura de datos que te permite almacenar un conjunto fijo de elementos
 con tipos específicos en un orden determinado. En tu código, has definido el tipo 
 `CountryPopulation` como una tupla que contiene una cadena (nombre del país)
  y un número (población del país).*/

/*Aquí tienes una descripción de las partes clave de tu código:

1. **Definición de tipo de tupla:**/
   
   type CountryPopulation = [string, number]


   /*Esto define un tipo llamado `CountryPopulation`, que representa una tupla con 
   una cadena (nombre del país) y un número (población del país). Puedes utilizar
    este tipo para declarar variables que contendrán tuplas con esta estructura.*/

/*2. **Declaración de una variable usando el tipo de tupla:***/


   const population: CountryPopulation = ["China", 1_123_123]


   /*Aquí, has declarado una variable llamada `population` con el tipo `CountryPopulation`
    y le has asignado una tupla que contiene el nombre "China" y la población
     1,123,123. La tupla sigue el orden de elementos definido en el tipo.

3. **Creación de un array de tuplas:***/


   const population2: Array<CountryPopulation> = [
       ["China", 1_123_123],
       ["Narnia", 987]
   ]


 /*  En este fragmento, has declarado una variable `population2` como un array
  que contiene tuplas del tipo `CountryPopulation`. En este caso, has creado un 
  array con dos tuplas, una para "China" y otra para "Narnia".

Recuerda que las tuplas son útiles cuando necesitas mantener un orden específico
 de elementos con tipos diferentes, como en este caso, donde el nombre del país 
 es una cadena y la población es un número. También puedes hacer que las tuplas
  sean de solo lectura, como mencionaste, agregando `readonly` antes de la definición del tipo.

Si tienes alguna pregunta o deseas explorar más sobre las tuplas en TypeScript,
 no dudes en preguntar. ¡Estoy aquí para ayudarte en tu clase!*/