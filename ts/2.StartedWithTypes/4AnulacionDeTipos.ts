/*En TypeScript, los tipos son fundamentales para garantizar la seguridad y
la robustez del código. Sin embargo, en algunas situaciones, es posible 
que desees anular o anotar explícitamente el tipo de una variable, una 
función o una expresión cuando TypeScript infiere un tipo que no es
 el que deseas. A continuación, te mostraré algunas formas de hacerlo:

/*1. Anotaciones de tipo explícitas:
   Puedes anotar explícitamente el tipo de una variable utilizando
    la sintaxis `:` seguida del tipo deseado. Esto anulará cualquier
     tipo inferido. Por ejemplo:*/

   
   let myVariable: number = 42; // Anotando el tipo explícitamente como number
  

/*2. Assertion de tipo (Type Assertion):
   Puedes usar la aserción de tipo (también conocida como "type casting")
    para forzar un tipo específico. Esto se hace añadiendo `<tipo>`
     o `valor as tipo` a una expresión. Sin embargo, ten en cuenta que esto no cambia el tipo en tiempo de ejecución y es potencialmente peligroso si no se hace correctamente:*/

  
   let someValue: any = "esto es una cadena";
   let strLength: number = (someValue as string).length;
  

  // Otra forma de realizar la aserción de tipo es:

  
   let someValue2: any = "esto es una cadena";
   let strLength2: number = <string>someValue.length;
  

/*3. Desactivar la inferencia de tipo (NoImplicitAny):
   Puedes desactivar la inferencia de tipo estableciendo la opción `noImplicitAny`
    en tu archivo `tsconfig.json` a `false`. Sin embargo, esto no se recomienda 
    en la mayoría de los casos, ya que TypeScript es menos útil sin la inferencia 
    de tipo. En su lugar, es preferible anotar explícitamente los tipos cuando sea necesario.*/

/*4. Uso de `any`:
   Si deseas deshabilitar completamente la verificación de tipos para una variable 
   o expresión, puedes usar el tipo `any`. Esto permitirá que la variable o 
   expresión tenga cualquier tipo, pero debes usarlo con precaución, ya que pierdes la seguridad de tipos:*/

   
   let myVariable2: any = 42; // myVariable puede ser de cualquier tipo


/*En general, es una buena práctica permitir que TypeScript haga su trabajo de inferir 
tipos siempre que sea posible, ya que esto te ayudará a detectar errores en tu 
código de manera temprana. Solo anula los tipos cuando sea realmente necesario 
y asegúrate de hacerlo de manera segura para evitar errores en tiempo de ejecución.*/