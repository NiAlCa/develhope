/* 
Hay momentos en los que es posible que dee acceder
directamente a los elemntos DOM representados 
por su aplicacion React

hemos visto como acceder al elemento que desencadeno el evento
usando la propiedad event.target 

tambien hemos visto que podemos acceder al elemento al que se adjunta
el evento usando la propiedad event.currentTarget

pero habra momentos en los que podriaoms querer acceder al elemento directamente
fuera de un controlador de eventos, podremos hacerlo usando refs  

los refs nos permiten acceder a la referencia de un nodo DOM 
directamente e interactuar con este nodo, directamente mediante el 
uso de una API imperativa en lugar de una declarativa 


*/