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


async function enviarDatosAlServidor() {
  const url = 'https://ejemplo.com/api/endpoint';
  
  // Datos que deseamos enviar al servidor en formato JSON
  const data = {
    nombre: 'Juan',
    edad: 30
  };
  
  // Configuración de la solicitud, incluyendo el método POST y el cuerpo de datos
  const opciones = {
    method: 'POST', // Método HTTP
    headers: {
      'Content-Type': 'application/json' // Tipo de contenido que estamos enviando (JSON en este caso)
    },
    body: JSON.stringify(data) // Convertir los datos a formato JSON y enviarlos en el cuerpo de la solicitud
  };
  
  try {
    const response = await fetch(url, opciones); // Realizar la solicitud fetch y esperar la respuesta
    
    if (!response.ok) {
      throw new Error('Hubo un problema con la solicitud.');
    }
    
    const responseData = await response.json(); // Parsear la respuesta como JSON
    console.log(responseData); // Hacer algo con los datos de respuesta
  } catch (error) {
    console.error('Error:', error); // Manejar errores de la solicitud
  }
}

// Llamar a la función para enviar los datos al servidor
enviarDatosAlServidor();



/*

En este ejemplo, hemos definido una función llamada enviarDatosAlServidor
 como async. Dentro de esta función, realizamos la solicitud POST
  usando fetch y esperamos tanto la respuesta como la conversión de 
  la respuesta a JSON usando await. Esto hace que el código sea más
   legible y fácil de seguir, ya que parece que estamos escribiendo
    un flujo secuencial de operaciones.

Si se produce un error durante la solicitud o la respuesta,
 lo capturamos usando try...catch y lo manejamos en la sección catch.

Finalmente, llamamos a la función enviarDatosAlServidor 
para iniciar el proceso de envío de datos al servidor.
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
      todos.forEach(todos => {
        // Crear un elemento de lista (li) para cada tarea (todo) y establecer su texto
        const li = document.createElement('li');
        li.textContent = todos.title;
  
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




 

 // ejemplo practico de post 

 const enviarDatosAlServidor = async (event) => {
  event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

  const url = "https://jsonplaceholder.typicode.com/posts";

  // Obtener el valor del campo de título del formulario
  const data = {
    title: document.getElementById('todo-title').value,
  }

  // Configurar las opciones para la solicitud POST
  const opciones = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // Convertir el objeto de datos en formato JSON
  }

  // Verificar si el checkbox está marcado
  if (!document.getElementById('todo-completed').checked) {
    console.log('Marca el checkbox para completar la tarea.');
    return;
  } else {
    try {
      // Realizar la solicitud POST al servidor
      const envio = await fetch(url, opciones);

      // Verificar si la solicitud fue exitosa (código de respuesta 2xx)
      if (envio.ok) {
        console.log('Datos enviados exitosamente al servidor.');
      }
    } catch (error) {
      console.error('Ocurrió un error al enviar los datos:', error);
    }
  }
};

// Agregar un evento de clic al botón de envío del formulario
document.getElementById('submit-todo').addEventListener('click', enviarDatosAlServidor);


/*

En esta lección, puedes explicar los siguientes conceptos clave:

1. Prevenir la acción predeterminada del formulario: 
El primer paso utiliza event.preventDefault() para evitar
 que el formulario se envíe de forma tradicional,
  lo que recargaría la página.

2. **Solicitud POST**: Explicar que estamos realizando
 una solicitud POST al servidor. Un método POST se
  utiliza para enviar datos al servidor para crear o actualizar recursos.

3. **URL de destino**: Mostrar cómo definimos la URL 
de destino donde se enviarán los datos. En este caso,
 estamos utilizando "https://jsonplaceholder.typicode.com/posts" como ejemplo.

4. **Datos a enviar**: Mostrar cómo obtenemos los
 datos que se enviarán al servidor. En este caso,
  estamos extrayendo el valor del campo de título de un formulario.

5. **Opciones de la solicitud**: Explicar cómo 
configuramos las opciones de la solicitud, incluyendo
 el método, los encabezados (headers), y el cuerpo 
 (body) de la solicitud. En este caso, estamos enviando los datos en formato JSON.

6. **Verificación del checkbox**: Destacar que estamos 
verificando si un checkbox está marcado antes de
 enviar la solicitud. Esto es solo un ejemplo de
  cómo se pueden aplicar condiciones antes de realizar una solicitud.

7. **Manejo de errores**: Enseñar cómo manejamos
 errores utilizando un bloque `try...catch`
  alrededor de la solicitud `fetch`. Esto garantiz
  a que cualquier error durante la solicitud se capture y maneje adecuadamente.

8. **Evento de escucha**: Explicar cómo se agrega
 un evento de escucha al botón de envío del
  formulario para que la función `enviarDatosAlServidor`
   se ejecute cuando se hace clic en el botón.
*/