/*
 Estas cadenas de plantilla ofrecen una forma más legible
  y conveniente de crear y manipular cadenas de texto en comparación
   con los métodos tradicionales, como la concatenación de cadenas con el operador +.
*/

const nombre = 'Juan';
const edad = 30;

const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje);
/* 

En este ejemplo, las comillas inversas (``) se utilizan para delimitar la cadena de plantilla.
 Los valores de las variables nombre y edad se insertan en la cadena utilizando
  la sintaxis ${}. Esto permite que las variables se interpolen directamente 
  en la cadena de plantilla sin necesidad de concatenación.

Aquí hay algunas ventajas de usar Template Strings:

1.Legibilidad: Las cadenas de plantilla son más legibles que 
las cadenas concatenadas, especialmente cuando se 
deben mezclar valores y texto.

2.Multilínea: Las cadenas de plantilla pueden abarcar varias líneas
 sin necesidad de usar caracteres especiales como \n.

3.Expresiones: Además de las variables, también puedes incluir expresiones dentro
 de las ${} para realizar cálculos o llamadas a funciones directamente en la cadena de plantilla.

4.Etiquetado: Puedes utilizar una técnica llamada "tagged template" 
para personalizar cómo se procesa la cadena de plantilla.
 Esto es útil para implementar formateo personalizado o manipulaciones 
 adicionales en la cadena resultante.





Aquí tienes un ejemplo de una Template String con una expresión*/
const a = 10;
const b = 5;

const resultado = `La suma de ${a} y ${b} es ${a + b}.`;
console.log(resultado);


