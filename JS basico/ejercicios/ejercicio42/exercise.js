let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = {};

for (let key in user) {
  newUser[key] = user[key];
}

newUser.name = "Paolo";

console.log(newUser);
console.log(user);


/* 
In the code below we have an object literal called `user` tha has two properties: `name` and `age`. If we try to create a `newUser` starting from `user` and, after that, we try to change the name, you'll notice that even the original `user` has been modified. How can we modify the name of `newUser` without changing the name of `user`?

En el siguiente código tenemos un objeto literal llamado `usuario` que tiene dos propiedades: `nombre` y `edad`. Si intentamos crear un `nuevoUsuario` a partir de `usuario` y, después de eso, intentamos cambiar el nombre, notará que incluso el `usuario` original ha sido modificado. ¿Cómo podemos modificar el nombre de `nuevoUsuario` sin cambiar el nombre de `usuario`?

*/