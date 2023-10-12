/* 
Cuando se desencadena un evento, tambien queremos saber como se 
ha desencadenado el evento, que tipo de informacion viene con el evento

es posible que queramos saber no solo que el evento en si 
sucedio, sino que tambien querriamos saber que boton se presiono
en el mouse para hacer clic en el boton, que texto ingreso el usuario 
dentro de un campo de text o cuantos dedos tocaron la pantalla

entonces, necesitamos poder extraer estos datos de un objeto de evento 
,todos los controladores de eventos reciben un objeto de evento que 
contiene la informacion sobre el evento que se ha activado  

cada vez que recibe un evento dentro de un controlador de eventos
en react, en realidad esta recibiendo un objeto del tipo SyntheticEvent.
este es una estructura normalizada que define un objeto que es el mismo
en todos los navegadores 
*/