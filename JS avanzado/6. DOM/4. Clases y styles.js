/*
la apariencia y el comportamiento de elementos HTML en tu página web.*/

/*El DOM (Document Object Model)** es una representación en forma de árbol de la estructura
 de tu documento HTML. Cada elemento HTML es un nodo en este árbol,
  y puedes acceder y modificar estos nodos utilizando JavaScript.

Hay dos aspectos clave que podemos abordar cuando se trata de
 editar el DOM en relación con clases y estilos:

**1. Editar Clases (Class Names):**
   - Puedes cambiar las clases de un elemento HTML usando la propiedad `className` o mejor aún, `classList`.
   - `className` te permite asignar una cadena de clases directamente, pero ten cuidado porque sobrescribirá cualquier clase existente.
   - `classList` es más versátil. Te permite agregar, quitar o verificar clases sin afectar las clases existentes.

*/

// Obtén un elemento por su id
const elemento = document.getElementById('miElemento');

// Agrega una clase
elemento.classList.add('nuevaClase');

// Quita una clase
elemento.classList.remove('claseExistente');


const tieneClase = elemento.classList.contains('otraClase');

/*
**2. Editar Estilos (Styles):**
   - Puedes cambiar los estilos de un
    elemento HTML utilizando la propiedad `style`.

   - La propiedad `style` te permite acceder y
    modificar estilos individuales en línea para un elemento.

   - Modificar el estilo directamente es útil
    para cambios simples, pero para aplicaciones más 
    complejas, es preferible utilizar CSS y clases en su lugar.
*/


// Obtén un elemento por su id
const elemento2 = document.getElementById('miElemento');

// Cambia el color de fondo
elemento.style.backgroundColor = 'red';

// Cambia el tamaño de fuente
elemento.style.fontSize = '16px';

// Puedes hacer cambios más complejos utilizando propiedades de estilo específicas.

/*
Es importante recordar que, aunque puedes realizar cambios en el DOM con JavaScript,
 se recomienda utilizar CSS para estilos y JavaScript para la lógica y la interacción. 
 Mantener una separación adecuada entre estructura (HTML), estilo (CSS) y comportamiento (JavaScript)
  es una práctica recomendada para desarrollar sitios web más mantenibles y escalables.

Espero que esta explicación te haya ayudado a comprender cómo editar las clases y los estilos del
DOM en JavaScript. Si tienes más preguntas o necesitas ejemplos adicionales, ¡no dudes en preguntar!*/