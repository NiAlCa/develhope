//Event-Driven programming

/* 
Programación Orientada a Eventos con EventEmitter
El módulo events en Node.js proporciona la clase EventEmitter,
 que es clave en la programación orientada a eventos.
  Este patrón se utiliza para manejar eventos de manera asincrónica.

*/

import { EventEmitter } from 'events';

// Crear una instancia de EventEmitter.
const emitter = new EventEmitter();

// Escuchar el evento 'data'. Cada vez que se emite, se ejecuta el callback asociado.
emitter.on("data", (data) => {
    console.log(data);
});

// Emitir el evento 'data' cada segundo con un mensaje.
setInterval(() => {
    emitter.emit("data", "This some data");
}, 1000);
/*

Aquí, emitter.on se usa para registrar un oyente (listener) 
que reacciona al evento 'data'. Cada vez que se emite 'data' 
con emitter.emit, se llama a la función asociada.
*/

/*

2. Streams en Node.js
Los streams son fundamentales en Node.js para manejar datos
 de manera eficiente, especialmente cuando se trata de grandes cantidades.
*/



import { createReadStream } from "fs";

// Crear un stream de lectura para un archivo.
const file = createReadStream("file-4.txt", { encoding: "utf8" });

// Manejar los datos recibidos en fragmentos (chunks).
file.on("data", (chunk) => {
    console.log("chunk:", chunk.toString("utf8"));
});

// Evento que se dispara al finalizar la lectura del archivo.
file.on("end", () => console.log("end of file read stream"));

// Manejar errores durante la lectura del archivo.
file.on("error", (error) => console.error(`error reading file: ${error}`));

/* 
Los streams son emitidos por varias interfaces en Node.js.
 Aquí, file.on('data', callback) se ejecuta cada vez 
 que se lee un fragmento de datos del archivo, 
 lo que permite procesar grandes archivos en partes manejables.

*/


/* 

RxJS (Reactive Extensions for JavaScript)
 es una biblioteca para programación reactiva 
 usando Observables, para facilitar la composición 
 de operaciones asíncronas y basadas en eventos.
*/

import { range, filter, map} from "rxjs";

range(1, 40)
    .pipe(
        filter((x) => x % 2 === 1),

        map((x) => x + x)
    )

    .subscribe({
        next: (x) => console.log("observer got a next value: " + x),
        error: (error) => console.error("Observer got an error:" + error),
        complete:() => console.log("Observer got a complete notification")
    })


    /* 
    En RxJS, range crea un observable que emite una secuencia de números. 
    pipe se utiliza para encadenar operadores como filter y map. 
    subscribe se utiliza para observar y reaccionar a los valores emitidos.

Cada uno de estos patrones tiene su propio conjunto de usos y ventajas.
 La programación orientada a eventos con EventEmitter es ideal para manejar eventos personalizados, 
 los streams en Node.js son excelentes para el manejo eficiente de datos,
  y RxJS ofrece una poderosa abstracción para lidiar con operaciones asíncronas y
   basadas en eventos de manera declarativa y funcional.
    
    */