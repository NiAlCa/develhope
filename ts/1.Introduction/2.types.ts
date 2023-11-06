/*TypeScript es un lenguaje de programación que extiende JavaScript, 
agregando tipado estático opcional a la sintaxis flexible y dinámica
 de JavaScript. Los tipos en TypeScript ayudan a los desarrolladores
  a atrapar errores en tiempo de compilación y a mejorar la calidad 
  y mantenibilidad del código. Aquí hay una explicación de algunos tipos comunes en TypeScript:

1. **number**: Este tipo representa números, ya sea enteros o de punto flotante.*/


let edad: number = 25;

//2. **string**: Representa cadenas de texto.


let nombre: string = "Juan";

//3. **boolean**: Representa valores `true` o `false`.


let activo: boolean = true;


//4. **array**: Representa una colección de valores del mismo tipo. Puede declararse usando la notación de corchetes o la interfaz `Array<T>`.


let numeros: number[] = [1, 2, 3];
let frutas: Array<string> = ["manzana", "plátano"];


//5. **object**: Representa cualquier objeto JavaScript.


let persona: object = { nombre: "María", edad: 30 };


/*6. **tuple**: Un array de longitud fija donde cada elemento puede ser de un tipo diferente. 
Los tipos de cada elemento se definen en orden.*/


let coordenadas: [number, number] = [10, 20];


//7. **enum**: Permite definir un conjunto de valores constantes con nombres legibles.



enum Días {
  Lunes,
  Martes,
  Miércoles,
  Jueves,
  Viernes,
  Sábado,
  Domingo
}
let día: Días = Días.Lunes;


//8. **any**: Puede tomar cualquier tipo, desactivando la comprobación de tipos estáticos.
// Se debe usar con precaución, ya que puede eludir la seguridad de tipos de TypeScript.


let variable: any = "esto podría ser cualquier cosa";


/*9. **null y undefined**: Estos tipos representan los valores
 `null` y `undefined`, respectivamente.*/


let valorNulo: null = null;
let valorIndefinido: undefined = undefined;


/*10. **union types**: Permite que una variable pueda tener uno de varios tipos. Se usa con el operador `|`.*/


let resultado: number | string = 42;
resultado = "cuarenta y dos";


/*11. **type assertions**: Permite al desarrollador decirle al compilador que confíe en ellos en cuanto a un tipo específico.*/


let valor: any = "esto es una cadena";
let longitud: number = (valor as string).length;


/*12. **interfaces**: Definen una estructura de objetos con nombres de propiedades y tipos.*/

interface Persona {
  nombre: string;
  edad: number;
}


/*Estos son algunos de los tipos fundamentales en TypeScript. La ventaja principal de TypeScript es
 que te permite definir tipos personalizados y utilizar tipos compuestos para modelar datos de manera más precisa, lo que facilita el desarrollo de aplicaciones más seguras y mantenibles.*/