/*En TypeScript, las funciones son un concepto fundamental y se
 utilizan para encapsular un conjunto de instrucciones que realizan
  una tarea específica. Pueden tomar argumentos, realizar operaciones
   y devolver un resultado. Las funciones en TypeScript tienen un tipo 
   asociado que describe los tipos de argumentos que aceptan y el tipo
    de valor que devuelven. Aquí te explico las principales características
     y conceptos relacionados con las funciones en TypeScript:

1. Declaración de funciones:
   Puedes declarar funciones en TypeScript de varias maneras, pero las dos más comunes son:*/

  // - **Declaración de funciones con nombre:**
    
     function sumar(a: number, b: number): number {
       return a + b;
     }
    

  // - **Expresiones de función:**
    
     const sumar2 = function (a: number, b: number): number {
       return a + b;
     };
  

  // - **Funciones flecha:**

     const sumar3 = (a: number, b: number): number => a + b;


//2. Tipado de argumentos y retorno:
   //Puedes especificar los tipos de argumentos que una función acepta y el tipo de valor que devuelve. Esto ayuda a TypeScript a detectar errores en tiempo de compilación y proporciona una mejor documentación.


   function saludar4(nombre: string): string {
     return `Hola, ${nombre}!`;
   }


//3. Argumentos opcionales y valores por defecto:
  // Puedes declarar argumentos opcionales en una función mediante el uso del operador `?` o proporcionar valores por defecto.


   function saludar5(nombre: string, saludo: string = 'Hola'): string {
     return `${saludo}, ${nombre}!`;
   }


//4. Rest parameters:
  // Puedes usar el operador `...` para definir un parámetro que capture un número variable de argumentos en un array.

   function sumar6(...numeros: number[]): number {
     return numeros.reduce((total, num) => total + num, 0);
   }


//.5 Sobrecarga de funciones:
   //TypeScript permite definir múltiples firmas de función para una misma función. Esto es útil cuando una función puede comportarse de diferentes maneras según los argumentos.


   function area(forma: 'cuadrado', lado: number): number;
   function area2(forma: 'rectángulo', ancho: number, alto: number): number;
   function area3(forma: string, ...medidas: number[]): number {
     // Implementación para cada forma
   }

//6. Funciones genéricas:
//   Puedes crear funciones genéricas que funcionen con varios tipos de datos. Esto se logra utilizando parámetros de tipo.

   
   function repetir<T>(elemento: T, veces: number): T[] {
     return new Array(veces).fill(elemento);
   }

   const arr = repetir('Hola', 3); // arr es de tipo string[]
 

/*Estos son algunos de los conceptos básicos relacionados con las funciones en TypeScript. 
Las funciones son esenciales para organizar y reutilizar el código, y TypeScript proporciona
 una capa adicional de seguridad y documentación al respecto al permitirte especificar 
 tipos para los argumentos y los valores de retorno.*/