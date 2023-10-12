/* 
Una de las diferencias más importantes entre HTML y JSX en este
regard es que mientras que un atributo de evento HTML espera una cadena
que contiene el código JS que se ejecutará cuando se produzca el evento, los accesorios de eventos en
Los elementos de reacción esperan una referencia a una función

Para llamar a una función cuando se desencadena un evento, una referencia a esa función
debe pasarse como valor al accesorio que expone ese evento en el
elemento relevante. Esta función se denomina controlador de eventos.
Un elemento no sabe, ni le importa, lo que sucede
cuando se desencadena un evento; Su única responsabilidad es notificar que el evento
se ha producido llamando a la función dada por su padre

*/