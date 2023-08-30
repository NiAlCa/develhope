

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
.catch((err) => console.err(err))
.finally(() => console.log('Se ha finalizado el ejercicio'));



/* 

Starting from the previous exercise, try to better handle all
errors through the `Error` class and the `catch` method. Also add the `finally` method.



A partir del ejercicio anterior, intente manejar mejor todos los errores 
mediante la clase `Error` y el método `catch`. También agregue el método "finalmente".


*/
