/* 

console.error(): Este método se utiliza para imprimir mensajes de error en la consola. Los mensajes de error suelen destacarse visualmente y, en algunos navegadores, se muestran con un ícono de error. Es útil para registrar problemas graves en tu código, como excepciones no controladas o situaciones inesperadas.

Ejemplo:

*/

const resultado = 10 / 0;
if (resultado === Infinity) {
  console.error("División por cero detectada");
}


/*
console.warn(): Este método se utiliza para imprimir mensajes de advertencia en la consola. Los mensajes de advertencia suelen destacarse visualmente y, en algunos navegadores, se muestran con un ícono de advertencia. Puedes usarlo para indicar situaciones que no son errores críticos pero que podrían necesitar atención.

Ejemplo:

*/

const saldo = -100;
if (saldo < 0) {
  console.warn("Saldo negativo detectado");
}



/* 
console.time() y console.timeEnd(): Estos métodos se utilizan para medir el tiempo de ejecución de un bloque de código. console.time() inicia un temporizador y console.timeEnd() detiene el temporizador y muestra la duración en la consola. Esto es útil para identificar qué partes de tu código son más lentas y pueden necesitar optimización.

Ejemplo:

*/

setTimeout(() => console.timeEnd(), 500)
