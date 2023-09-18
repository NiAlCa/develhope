/*Los ES Modules (ECMAScript Modules), a menudo conocidos como "módulos"
 en JavaScript, son una forma de organizar y reutilizar el código 
 en aplicaciones JavaScript modernas. Estos módulos permiten dividir 
 tu código en archivos separados y exportar/importar variables, funciones
  y clases entre ellos de manera eficiente. Los ES Modules se introdujeron
   en ECMAScript 6 (también conocido como ES6) y han ganado popularidad
    rápidamente debido a su capacidad para mejorar la modularidad y la estructura del código.

Aquí tienes una explicación detallada de cómo funcionan los ES Modules:*/
/*
1. **Creación de un Módulo**:
   - Para crear un módulo, simplemente creas 
   un archivo JavaScript separado
    (por ejemplo, "mi-modulo.js") y escribes tu código dentro de él.*/

  
   // mi-modulo.js
   export const miVariable = 42;
   export function miFuncion() {
     // ...
   }

/*
2. **Exportar Funcionalidad**:
   - Dentro del módulo, puedes exportar variables,
    funciones, clases, etc., utilizando la palabra
     clave `export`. Puedes exportar uno o más elementos desde un módulo.

3. **Importar Funcionalidad**:
   - Para utilizar la funcionalidad exportada desde otro 
   módulo, debes importarla en el archivo donde la necesitas.
    Esto se hace utilizando la palabra clave `import`.
 */

   // otro-archivo.js
   import { miVariable, miFuncion } from './mi-modulo.js';

   console.log(miVariable); // 42
   miFuncion(); // Llama a la función desde el módulo
  
/*
4. **Módulos Predeterminados**:
   - Además de exportar e importar elementos específicos,
    también puedes tener un valor predeterminado exportado 
    desde un módulo. Esto se hace utilizando `export default`.
*/
   
   // mi-modulo.js
   export default function() {
     // ...
   }


 
   // otro-archivo.js
   import miFuncion from './mi-modulo.js';

   miFuncion(); // Llama a la función predeterminada

/*
5. **Relaciones de Importación/Exportación**:
   - Puedes importar elementos desde varios módulos 
   en un solo archivo y crear una red de dependencias clara y organizada.

6. **Carga de Módulos**:
   - Los navegadores modernos y Node.js admiten la 
   carga de módulos mediante las sentencias `import` 
   y `export`. No es necesario usar herramientas de transpilación como Babel en la mayoría de los casos.

7. **Extensiones de Archivo**:
   - En los navegadores, es común que los módulos tengan 
   extensiones de archivo como `.js`. En Node.js, también 
   puedes usar extensiones o importar módulos sin ellas.

En resumen, los ES Modules en JavaScript brindan una forma 
poderosa y organizada de estructurar tu código en aplicaciones
 web y de servidor. Facilitan la modularidad, la reutilización
  de código y la gestión de dependencias, lo que ayuda a mantener
   el código más limpio y mantenible en proyectos grandes y complejos.*/