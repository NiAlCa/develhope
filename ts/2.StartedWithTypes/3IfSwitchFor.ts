

/*1. **`if` en TypeScript:**
   `if` es una estructura de control condicional que permite ejecutar un bloque
    de código si una condición es verdadera. En TypeScript, puedes utilizar `if`
     de la misma manera que en JavaScript para tomar decisiones en función de 
     expresiones booleanas. Aquí hay un ejemplo:*/

   let edad: number = 18;

   if (edad >= 18) {
       console.log("Eres mayor de edad");
   } else {
       console.log("Eres menor de edad");
   }


 // TypeScript verificará que la expresión en el `if` sea de tipo booleano.

/*2. **`switch` en TypeScript:**
   `switch` es otra estructura de control que permite seleccionar una de varias
    opciones según el valor de una expresión. En TypeScript, `switch` puede
     trabajar con tipos específicos y discriminar uniones de tipos 
     (utilizando patrones de control de flujo). Aquí hay un ejemplo:*/


   let color = "Rojo";

   switch (color) {
       case "Rojo":
           console.log("El color es rojo");
           break;
       case "Verde":
           console.log("El color es verde");
           break;
       case "Azul":
           console.log("El color es azul");
           break;
       default:
           console.log("Color desconocido");
   }


  // TypeScript garantiza que solo manejes los valores que están en la unión de tipos especificada.

/*3. **`for` en TypeScript:**
   `for` es una estructura de control de bucle que se utiliza para repetir un bloque
    de código una cantidad determinada de veces o para recorrer elementos de una
     secuencia, como un arreglo. En TypeScript, puedes usar `for` de la misma
      manera que en JavaScript. Aquí hay un ejemplo de un bucle `for` para recorrer un arreglo de números:*/


   let numeros: number[] = [1, 2, 3, 4, 5];

   for (let i = 0; i < numeros.length; i++) {
       console.log(numeros[i]);
   }


 /* TypeScript te ayuda a asegurarte de que los índices y valores sean del tipo correcto.

En resumen, en TypeScript, estas estructuras de control (`if`, `switch`, y `for`)
 funcionan de manera similar a JavaScript, pero TypeScript agrega un nivel de 
 seguridad adicional al proporcionar verificaciones de tipos durante la
  compilación para garantizar que el código cumpla con las reglas de tipos definidas.
   Esto ayuda a evitar errores comunes relacionados con los tipos de datos en tiempo de ejecución.*/