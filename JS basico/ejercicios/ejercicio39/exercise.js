function multiplyByTwo(value) {
  let number = 2;
  function inner(){
    console.log(value * number);
  }
  inner();
}

multiplyByTwo(4);



/*

# Exercise Closures

Write a new `closure`: create a function called `multiplyByTwo` that takes is one parameter.
Inside the `multiplyByTwo` function, create a function called `inner`. This function will take care of multiplying the parameter passed as input and multiply it by the variable named `number`
Print in the console the function output.

Example: `multiplyByTwo(4)()`, result: `8`

Tips:

- You can learn more about the topic with this article: https://www.freecodecamp.org/news/closures-in-javascript/




# Cierres de ejercicio

Escriba un nuevo `cierre`: cree una función llamada `multiplyByTwo` que tome un parámetro.
Dentro de la función `multiplyByTwo`, cree una función llamada `inner`. Esta función se encargará de multiplicar el parámetro pasado como entrada y multiplicarlo por la variable llamada `number`
Imprime en la consola la salida de la función.

Ejemplo: `multiplyByTwo(4)()`, resultado: `8`

Consejos:

- Puedes aprender más sobre el tema con este artículo: https://www.freecodecamp.org/news/closures-in-javascript/

*/ 