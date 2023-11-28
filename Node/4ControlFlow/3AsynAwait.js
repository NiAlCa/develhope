import * as fs from "node:fs/promises";

// Esta función es asíncrona, lo que significa que puede realizar operaciones que toman tiempo (como leer archivos) sin bloquear la ejecución del programa.
async function outputFile() {
  try {
    // 'await' pausa la ejecución de la función hasta que se complete la lectura del archivo. 
    // Esto hace que el código sea más legible y se comporte de manera similar al código síncrono.
    const file1Data = await fs.readFile("file-1.txt", { encoding: "utf8" });

    // Imprime los datos del primer archivo.
    console.log("file1Data", file1Data);

    // La siguiente lectura de archivo no se inicia hasta que la anterior esté completa.
    const file2Data = await fs.readFile("file-2.txt", { encoding: "utf8" });

    // Imprime los datos del segundo archivo.
    console.log("file2Data:", file2Data);

    // Lo mismo sucede aquí con el tercer archivo.
    const file3Data = await fs.readFile("file-3.txt", { encoding: "utf8" });

    // Imprime los datos del tercer archivo.
    console.log("file3Data:", file3Data);

  // Si ocurre un error en alguna de las operaciones de lectura de archivos, se captura aquí.
  } catch (error) {
    console.error(error);
  }
}

// Llama a la función outputFile. Como es asíncrona, se ejecutará en el fondo.
outputFile();


// Esta función también es asíncrona y demuestra una forma diferente de leer múltiples archivos.
async function outputFilesTogether(){
    try {
        // 'Promise.all' ejecuta todas las promesas en el arreglo de forma concurrente.
        // Esto significa que los archivos se leerán al mismo tiempo, no uno después del otro.
        const data = await Promise.all([
            fs.readFile("file-1.txt", { encoding: "utf8" }),
            fs.readFile("file-2.txt", { encoding: "utf8" }),
            fs.readFile("file-3.txt", { encoding: "utf8" }),
        ]);

        // Imprime los datos de todos los archivos juntos una vez que todos han sido leídos.
        console.log("data:", data)

    } catch (error) {
        // Captura cualquier error que pueda ocurrir durante la lectura de los archivos.
        console.error(error);
    }
}

// Similar a outputFile, esta función también se ejecuta de forma asíncrona.
outputFilesTogether();
