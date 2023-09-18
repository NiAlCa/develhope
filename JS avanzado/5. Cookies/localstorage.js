/*Por supuesto, el `localStorage` y el `sessionStorage` son dos mecanismos de
 almacenamiento en el lado del cliente que permiten a
  las aplicaciones web almacenar datos de manera 
  persistente o temporal en el navegador del usuario.
   A continuación, te explicaré cómo funcionan y cuándo debes usar cada uno de ellos.

**localStorage:**

- `localStorage` es un objeto que permite almacenar datos
 de manera persistente en el navegador del usuario.

- Los datos almacenados en `localStorage` no tienen
 una fecha de expiración y persisten incluso después de que el navegador se cierre y se reinicie.

- Los datos almacenados en `localStorage` están
 disponibles para todas las pestañas y ventanas del mismo dominio web.

**Ejemplo de uso de localStorage:**
*/

// Almacenar un valor en localStorage
localStorage.setItem('nombre', 'Juan');

// Recuperar un valor de localStorage
const nombre = localStorage.getItem('nombre');

// Eliminar un valor de localStorage
localStorage.removeItem('nombre');


/*
**sessionStorage:**

- `sessionStorage` es similar a `localStorage`, pero
 los datos almacenados en `sessionStorage` son de alcance de sesión.

- Los datos almacenados en `sessionStorage` solo persisten durante 
la duración de la sesión actual del navegador. Si el usuario cierra
 la pestaña o el navegador, los datos se eliminan.

- Los datos almacenados en `sessionStorage` solo están disponibles
 para la pestaña o ventana que los creó. Otras pestañas o ventanas
  del mismo dominio no pueden acceder a estos datos.


**Ejemplo de uso de sessionStorage:***/


// Almacenar un valor en sessionStorage
sessionStorage.setItem('colorFondo', 'azul');

// Recuperar un valor de sessionStorage
const colorFondo = sessionStorage.getItem('colorFondo');

// Eliminar un valor de sessionStorage
sessionStorage.removeItem('colorFondo');

/*
**Cuándo usar `localStorage` o `sessionStorage`:**

- `localStorage` es adecuado para almacenar datos que deben persistir a través
 de sesiones del navegador y estar disponibles en todas las pestañas y ventanas.
 Ejemplos de uso incluyen preferencias de usuario, información de inicio
  de sesión automático, o datos de configuración.


- `sessionStorage` es útil cuando necesitas almacenar datos temporales que
 deben estar disponibles solo durante la sesión actual del navegador.
  Esto puede ser útil para almacenar datos temporales de formularios o información de navegación.

**Importante:** Ten en cuenta que ambos métodos tienen limitaciones
 en cuanto a la cantidad de datos que pueden almacenar
  (generalmente alrededor de 5-10 MB por dominio, pero varía según el navegador).
   Además, no debes almacenar información sensible o
    crítica en el lado del cliente, ya que los datos 
    almacenados en el cliente pueden ser manipulados fácilmente por usuarios maliciosos.

En resumen, `localStorage` y `sessionStorage` son herramientas 
útiles para almacenar datos en el lado del cliente en una aplicación web.
 Debes elegir el que mejor se adapte a tus necesidades de almacenamiento y duración de los datos.*/