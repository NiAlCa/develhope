
/* 
"callback" se refiere a una función que se pasa como argumento
 a otra función y se ejecutará en algún momento posterior, 
 a menudo después de que ocurra algún evento o se complete alguna operación

*/

function repeat(callback, n) {
    let id = setInterval(callback, 500); // Establece un intervalo para llamar al callback cada 500 ms.
    setTimeout(() => clearInterval(id), 500 * n); // Después de 500 * n ms, se detiene el intervalo.
}

repeat(() => console.log("hi"), 3); // Llama a la función repeat con un callback que imprime "hi" y n = 3.


/* 

La función repeat se define con dos parámetros: callback y n.

Dentro de la función repeat, se utiliza setInterval para establecer 
un intervalo que ejecutará el callback proporcionado cada
 500 milisegundos (0.5 segundos). El valor de retorno
  de setInterval es un ID que identifica el intervalo creado.

Luego, se utiliza setTimeout para programar la ejecución
 de una función después de un cierto período de tiempo.
  En este caso, se establece un tiempo de espera de
   500 * n milisegundos antes de que se ejecute la función proporcionada como argumento.

El callback dado en el ejemplo simplemente
 imprime "hi" en la consola.

Finalmente, se llama a la función repeat con el 
callback que imprime "hi" y n establecido en 3.

Aquí está cómo se ejecutaría en términos de tiempo:

El intervalo iniciará llamando al callback cada 500 ms (0.5 segundos),
 lo que resultará en tres impresiones de "hi" en la 
 consola durante un período de 1.5 segundos.

Después de 500 * 3 ms (1.5 segundos), el setTimeout se activará y llamará a clearInterval(id), lo que detendrá el intervalo que llamaba al callback.
*/