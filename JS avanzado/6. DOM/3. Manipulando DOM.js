/*
(Document Object Model) utilizando JavaScript. 
La manipulación del DOM implica agregar, modificar 
o eliminar elementos y atributos en una página web.
 Aquí te daré una introducción a las operaciones básicas
  de manipulación de nodos.

### 1. Crear nuevos elementos

Puedes crear nuevos elementos en el DOM utilizando el método 
`document.createElement()`. Luego, puedes configurar atributos
 y contenido para ese elemento y agregarlo al DOM. Aquí hay un ejemplo:*/


// Crear un nuevo elemento <p>
var nuevoParrafo = document.createElement("p");

// Configurar el contenido del párrafo
nuevoParrafo.textContent = "Este es un nuevo párrafo.";

// Agregar el párrafo al DOM
document.body.appendChild(nuevoParrafo);

/*
### 2. Modificar atributos y contenido

Puedes modificar atributos y contenido de elementos
 existentes utilizando propiedades como `textContent`,
  `innerHTML`, `setAttribute()`, entre otros. Aquí hay un ejemplo:*/


// Obtener un elemento existente por su ID
var miElemento = document.getElementById("miDiv");

// Modificar el contenido del elemento
miElemento.textContent = "Nuevo contenido";

// Modificar un atributo (por ejemplo, el atributo src de una imagen)
var miImagen = document.getElementById("miImagen");
miImagen.setAttribute("src", "nueva-imagen.jpg");

/*
### 3. Agregar y eliminar elementos

Puedes agregar elementos a un nodo padre utilizando métodos como 
`appendChild()`, `insertBefore()`, `insertAdjacentHTML()`, 
etc. Del mismo modo, puedes eliminar elementos utilizando
 `removeChild()` o `remove()`. Aquí tienes un ejemplo de cómo agregar y eliminar elementos:*/


// Crear un nuevo elemento <li>
var nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Nuevo elemento de lista";

// Agregar el elemento al final de una lista
var lista = document.getElementById("miLista");
lista.appendChild(nuevoElemento);

// Eliminar un elemento de la lista
var elementoAEliminar = document.getElementById("elementoEliminar");
lista.removeChild(elementoAEliminar);

/*
### 4. Clonar nodos

Puedes clonar elementos en el DOM utilizando el método 
`cloneNode()`. Esto crea una copia independiente 
del elemento que puedes agregar o modificar sin afectar al original. Aquí hay un ejemplo:*/


// Obtener un elemento existente
var original = document.getElementById("originalElement");

// Clonar el elemento
var copia = original.cloneNode(true);

// Modificar la copia
copia.textContent = "Este es un clon del elemento original";

// Agregar la copia al DOM
document.body.appendChild(copia);

/* Recuerda que todas estas operaciones de manipulación
 de nodos deben realizarse después de que el documento
  esté completamente cargado para garantizar que los elementos
   existan en el DOM. Puedes lograr esto utilizando el evento
    `DOMContentLoaded` o ubicando tu código JavaScript 
    al final del documento HTML justo antes de cerrar el `</body>`.

La manipulación del DOM es una parte esencial del desarrollo 
web, y estas son solo algunas de las operaciones básicas
 que puedes realizar para interactuar con los elementos de una página web.*/