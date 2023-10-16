import { useState } from "react";
//Desde el ejercicio 42 al 45
function createData() {
    return {
      username: "",
      password: "",
      session: false,
    };
  }


export function Login(){

    const [data, setData] = useState(createData());

    function handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;

        setData((d) => {
            return{
                ...d,
                [name]: type === "checkbox" ? checked : value
            }
        });
    }

    const buttonDisabled = data.username === "" || data.password === "";

    function handleLogin(event){
        event.preventDefault();
        console.log('boton de login:', data) 
    }

    function handleReset(){
        setData(createData());
    }


    const style ={
        backgroundColor: data.password.length < 8 ? 'red' : 'green'
      }


    return(
        <div >
            <form onSubmit={handleLogin}>
                <input name="username" value={data.username} type="text" onChange={handleInputChange}/>
                <input name="password" value={data.password} type="password" onChange={handleInputChange}/>
                <input name="session" value={data.session} type="checkbox" onChange={handleInputChange}/>
                <button disabled={buttonDisabled} style={style}>login</button>
                <button onClick={handleReset}>Reset</button>
            </form>

        </div>
    )
}

/* 

Create a Login component containing three inputs: a username input, a password input and a remember checkbox. All three inputs should be controlled components.

Cree un componente de inicio de sesión que contenga tres entradas: una entrada de nombre de usuario, una entrada de contraseña y una casilla de verificación RECREY.Las tres entradas deben ser componentes controlados.


Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty. When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, passing it the state.

Agregue un botón "Iniciar sesión" al componente de inicio de sesión.Este botón debe deshabilitarse siempre que el nombre de usuario y las entradas de contraseña estén vacías.Cuando se hace clic, el controlador de eventos conectado al botón debe llamar a una función de onclogin pasada como un accesorio para el componente de inicio de sesión, pasando el estado.



Use the form element to handle the form's submission, and attach the onLogin event handler to the onSubmit event of the form element. How do you prevent the default behavior of the form element?

Use el elemento de formulario para manejar la presentación del formulario y adjunte el controlador de eventos Onlogin al evento ONSubmit del elemento de formulario.¿Cómo se prevé el comportamiento predeterminado del elemento de formulario?





*/