const user = {
  id: 1,
  name: "John",
  age: 25,
};



function recuperarUsuario() {

  const userJSON = localStorage.getItem('user');

    const user = JSON.parse(userJSON);


    console.log(user);
  
}


recuperarUsuario();
