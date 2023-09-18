/*
 Los eventos son acciones que ocurren en el navegador, como hacer clic en un
  botón, mover el ratón, escribir en un campo de texto, entre otros.
   Puedes usar JavaScript para detectar y responder a estos eventos de forma dinámica.

**Manejando Eventos:**

1. **Añadir un Event Listener:**
   - Para manejar un evento, primero necesitas seleccionar el elemento HTML 
   al que deseas asociar el evento. Puedes hacerlo utilizando métodos
    como `getElementById`, `querySelector`, o seleccionando elementos
     por etiqueta o clase.
   - Luego, puedes agregar un "event listener" al elemento seleccionado.
    Un "event listener" es una función que se ejecutará cuando 
    ocurra un evento específico en el elemento.

Ejemplo de cómo agregar un event listener a un botón:*/


// Obtén un botón por su id
const miBoton = document.getElementById('miBoton');

// Agrega un event listener para el evento "click"
miBoton.addEventListener('click', function() {
  alert('¡Haz hecho clic en el botón!');
});

/*
2. **Tipos de Eventos:**
   - Hay una amplia variedad de eventos disponibles en el
    DOM, como 'click', 'mouseenter', 'keydown', 'submit',
     etc. Puedes elegir el evento que sea relevante para
      tu aplicación y agregar un listener para ese evento en particular.

Ejemplo de escuchar el evento de tecla presionada:*/

document.addEventListener('keydown', function(event) {
  console.log(`Tecla presionada: ${event.key}`);
});

/*
**Objeto de Evento:**
- Cuando se ejecuta un evento, se crea un objeto de
 evento que contiene información sobre el evento en 
 sí. Puedes acceder a esta información dentro de tu función de manejo de eventos.

Ejemplo de cómo acceder a la información del objeto de evento:*/


miBoton.addEventListener('click', function(event) {
  // Acceder al objetivo (el elemento que desencadenó el evento)
  const elemento = event.target;
  
  // Acceder al tipo de evento
  const tipoDeEvento = event.type;
  
  // Acceder a las coordenadas del puntero del ratón cuando se hizo clic
  const coordenadasX = event.clientX;
  const coordenadasY = event.clientY;
  
  console.log(`Elemento: ${elemento}, Tipo de evento: ${tipoDeEvento}, Coordenadas: (${coordenadasX},${coordenadasY})`);
});

/*
**Prevenir Comportamiento Predeterminado:**
- A veces, es necesario evitar el comportamiento predeterminado
 de un evento, como evitar que un formulario se envíe
  o que un enlace siga un enlace. Para hacerlo, puedes usar el método `preventDefault()` en el objeto de evento.

Ejemplo de cómo prevenir el envío de un formulario:*/


const miFormulario = document.getElementById('miFormulario');

miFormulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío predeterminado del formulario
  // Realiza otras acciones aquí
});

/*
Esto es solo una introducción a los eventos del DOM en JavaScript.
 Los eventos son fundamentales para crear aplicaciones web interactivas 
 y dinámicas. Puedes explorar más eventos y técnicas avanzadas a 
 medida que adquieras más experiencia en JavaScript.
 ¡Espero que esta explicación te ayude a comprender mejor cómo funcionan los eventos en el DOM!*/



 