/*
Siempre hay que usar una etiqueta de formulario ya que implementa
algunas funcionalidades que, de lo contrario, tendria que implementar
usted mismo, y es semanticamente correcta, lo que significa que 
el software de accesibilidad entanda que el contenido de una etiqueta
de formulario es algo que requiera una entrada del usuario y puede
aptovechar esta informacion para ayudar 

Los formularios no controloados son componentes que mantienen su propio estado
y no dependel del padre para saber que deben mostrar 
y que sucede cuando el usuario intenta interactuar con ellos 

entonces, el componente principal, para poder acceder a los valores contenidos 
dentro de las entradas, las entradas no controladas de un formulario, debe tener 
una forma de acceder directamente a los elementos DOM que forman el formulario
y leer sus valores

los formularios no controloados tienen sus ventajas, pero no tienen ninguna personalizacion

e pueden usar siempre que no necesite tener un control profundo sobre
como aparecen sus entradas y como se comportan sus formualrios, segun los
 valores contenidos en sus entradas
*/