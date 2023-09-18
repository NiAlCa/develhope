const user = {
  id: 1,
  name: "John",
  age: 25,
};




function guardarUsuario() {

  const userJSON = JSON.stringify(user);

  localStorage.setItem('user', userJSON);
}

guardarUsuario();

