/* 
La API Fetch es una interfaz en JavaScript que proporciona una forma de realizar 
solicitudes de red (HTTP) desde un navegador web o un entorno de Node.js.
Se utiliza para recuperar recursos (como datos JSON, archivos, imágenes, etc.)
desde servidores web o para enviar datos a servidores remotos.
Fetch se ha convertido en la forma moderna de realizar solicitudes HTTP en JavaScript,
reemplazando en gran medida las técnicas más antiguas como XMLHttpRequest.

*/

/* 
Realizar una solicitud GET:
Puedes realizar una solicitud GET para recuperar datos de un servidor.


*/

fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo obtener la respuesta del servidor');
    }
    return response.json(); // Convierte la respuesta en un objeto JSON
  })
  .then(data => {
    console.log(data); // Haz algo con los datos recibidos
  })
  .catch(error => {
    console.error(error);
  });


  /*Realizar una solicitud POST:
Puedes usar Fetch para enviar datos al servidor mediante una solicitud POST. */

const dataToSend = {
    username: 'usuario',
    password: 'contraseña'
  };
  
  fetch('https://api.example.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo completar la solicitud');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Haz algo con la respuesta del servidor
    })
    .catch(error => {
      console.error(error);
    });

 /*   Manejo de respuestas:
La función fetch devuelve una promesa que se resuelve con un objeto Response.
 Puedes verificar si la solicitud fue exitosa (código de estado 200-299)
  y luego usar métodos como json(), text(), o blob()
   en el objeto Response para procesar la respuesta según su tipo*/

   /* 
   Manejo de errores:
Si la solicitud falla o el servidor devuelve un
 código de estado que indica un error, puedes atrapar el error usando .catch().
   
   */

 /*
 La API Fetch es versátil y admite muchas opciones y configuraciones avanzadas, 
 como el uso de encabezados personalizados, el manejo de cookies y
  la configuración de timeout. También se puede usar en entornos 
  de Node.js utilizando bibliotecas como node-fetch.

En resumen, la API Fetch es una poderosa herramienta para
 realizar solicitudes HTTP en JavaScript de manera asincrónica,
  lo que la convierte en una parte fundamental de la programación web moderna
 
 */



  // Dejo otra explicacion : 
  const cargarTodos = async () => {
    try {
      // Hacer una solicitud a la API utilizando Fetch
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
  
      // Convertir la respuesta en formato JSON
      const todos = await respuesta.json();
  
      // Crear una lista no ordenada (ul) en el documento
      const ul = document.createElement('ul');
      ul.classList.add('todo-list');
      container.appendChild(ul); // Supongo que tienes una variable 'container' definida en otro lugar
  
      // Seleccionar la lista creada anteriormente
      const todoList = document.querySelector('.todo-list');
  
      // Iterar a través de los datos obtenidos de la API
      todos.forEach(todo => {
        // Crear un elemento de lista (li) para cada tarea (todo) y establecer su texto
        const li = document.createElement('li');
        li.textContent = todo.title;
  
        // Agregar el elemento de lista a la lista no ordenada
        todoList.appendChild(li);
      });
    } catch (error) {
      // Manejar errores si ocurren durante la solicitud o el procesamiento de datos
      console.error('Ocurrió un error:', error);
    }
  };
  
  // Llamar a la función para cargar los datos al cargar la página
  cargarTodos();
  
  
 /*

En esta lección, puedes explicar los siguientes conceptos clave:

1. **fetch**: Este método se utiliza para hacer solicitudes HTTP a recursos en la web.
 Puedes mencionar que es una función asíncrona que devuelve una promesa y que se utiliza para obtener datos de una URL.

2. **await**: Explicar que estamos utilizando `await` para esperar a que la solicitud se complete
 y la respuesta se convierta en formato JSON antes de continuar.
 Esto asegura que no intentemos trabajar con los datos antes de que estén listos.

3. **Manejo de errores**: Destacar la importancia de rodear el código con un bloque
 `try...catch` para manejar cualquier error que pueda ocurrir durante la solicitud o el procesamiento de datos.

4. **Creación de elementos DOM**: Mostrar cómo crear elementos HTML 
dinámicamente en el documento utilizando `document.createElement()` y cómo agregar clases o contenido de texto a esos elementos.

5. **Agregar elementos al DOM**: Explicar cómo se agregan estos elementos
 recién creados al DOM utilizando el método `appendChild()`.

6. **Iteración a través de los datos**: Mostrar cómo se puede recorrer
 un array de datos obtenidos de la API y crear elementos de lista para cada elemento en el array.

7. **Selección de elementos existentes**: Mostrar cómo seleccionar
 elementos existentes en el DOM utilizando `document.querySelector()`.

8. **Gestión de errores**: Resaltar la importancia de manejar
 errores de manera adecuada para que el programa no falle en caso de que algo salga mal durante la solicitud o el procesamiento de datos.*/
