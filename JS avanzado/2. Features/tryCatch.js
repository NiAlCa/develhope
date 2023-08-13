/* 
try y catch en JavaScript. Estos bloques son utilizados
 para manejar errores y excepciones en el código, 
 lo que permite que tu programa pueda continuar
  ejecutándose de manera controlada en lugar 
  de detenerse por completo debido a un error.

try {
  // Código que podría generar un error
} catch (error) {
  // Código que se ejecuta si ocurre un error
}



*/ 

/* 
Aquí tienes una descripción más detallada de cada parte:

Try Block (Bloque try):
Dentro del bloque try, colocas el código que podría generar una
 excepción o error. Si ocurre un error en este bloque,
  se detendrá la ejecución normal del programa y se pasará al bloque catch.

Catch Block (Bloque catch):
Dentro del bloque catch, defines qué hacer en caso de 
que ocurra un error en el bloque try. El bloque catch toma
 un parámetro, comúnmente llamado error, que contendrá
  información sobre la excepción que se produjo.
   Puedes utilizar esta información para diagnosticar y manejar el error adecuadamente.

*/

try {
    // Intentamos dividir 10 por 0, lo que generará un error de división por cero
    let result = 10 / 0;
    console.log(result); // Esta línea nunca se ejecutará debido al error
  } catch (error) {
    console.error("Se produjo un error:", error);
  }

  //tambien se puede usar un finally 
/* 

try {
  // Código que podría generar un error
} catch (error) {
  // Código que se ejecuta si ocurre un error
} finally {
  // Código que se ejecuta siempre, independientemente de si hubo un error o no
}


*/

  try {
    console.log("Intentando realizar una operación");
    // Simulamos un error al dividir por cero
    let result = 10 / 0;
  } catch (error) {
    console.error("Se produjo un error:", error);
  } finally {
    console.log("Bloque finally: Esto se ejecutará sin importar el resultado");
  }
  
  