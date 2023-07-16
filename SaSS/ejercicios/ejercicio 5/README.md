
Add a new section to the layout as the picture displays. 
The boxes are squares of 45px per side (to be converted into rem) and their alignment is performed with flex rules.
The background color, the color, and the font-size can be handled using the flow control (@for, @if, etc...) and the darken and lighten methods (the numbers have a multiplier equal to 5) 
In particular, you need to create the classes .fs-1rem, .fs-2rem e .fs-3rem using @each
The added colors are black and white only



Agregue una nueva sección al diseño a medida que se muestra la imagen. 
Las cajas son cuadrados de 45px por lado (para ser convertidos en rem) y su alineación se realiza con reglas flexibles.
El color de fondo, el color y el tamaño de fuente se pueden manejar usando el control de flujo (@for, @if, etc.) y los métodos de oscurecimiento y aclarado (los números tienen un multiplicador igual a 5) 
En particular, debe crear las clases .fs-1rem, .fs-2rem e .fs-3rem utilizando @each
Los colores añadidos son solo blanco y negro



**Suggerimento (da inserire a parte e quindi da rimuovere dal readme)**
@for $var from 1 to 20 {
...
@if $var == 10 {
...


    }
}
