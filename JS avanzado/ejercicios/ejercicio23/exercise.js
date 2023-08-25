const isLogged = true;
let randNum = 0;

let miPromesa = new Promise((resolve, reject) => {

 

  if(isLogged == true) {

    randNum = Math.floor(Math.random() * 10);
    resolve(randNum);

  }else{
    reject('No esta loggeado');
  }
});


let miPromesa2 = new Promise((resolve, reject) => {

  if(randNum > 0.5) {
    resolve({
      nombre: "John",
       edad: 24});
    }else{
      reject("Invalid");
    }
});


miPromesa
  .then((resolve) => {console.log(resolve)
  return miPromesa2})
    .then((resolve) => console.log(resolve))
.catch((err) => console.log(err))




/* 

Escribimos una segunda `promesa` que toma una variable de tipo número
 como parámetro. Si el parámetro de entrada es mayor a 0.5, 
 en la resolución debemos devolver los siguientes datos:
  `{nombre: "John", edad: 24}`, de lo contrario debemos enviar un `error`.

Una vez hecho esto, intente encadenar las promesas para eventualmente
 devolver el objeto final `{nombre: "John", edad: 24}`




We write a second `promise` that takes a variable of type number as a parameter
. If the input parameter is greater than 0.5,
 in the resolve we must return the following data: `{name: "John", age: 24}`, otherwise we must dispatch an `error`.


Once this is done, try to chain the promises to eventually return the final object `{name: "John", age: 24}`

Tips:

- If in doubt, watch the lesson
- To understand how they work, you can try adding `setTimeout` to the promise functions





*/