//Asi creamos un componente con props y lo usamos 

import { Link, useNavigate, useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function Welcome({age}){

    const { name = 'world' } = useParams();
    
    const navigate = useNavigate()


    function handleLoginButtonClick(){
        navigate('/login')
    }
    return (
         <div>
        <h2>Welcome, {name}!</h2>
        <p> u are {age} years old.</p>
        {/*Realmente dentro de los {} podriamos escribir lo que quisieramos de codigo 
        por ejemplo {age + 5} los props solo sirven para lectura no para cambiar codigo */}

        <Link to="/login">Login</Link>
        <button onClick={handleLoginButtonClick}>Enter the app</button>
        </div>)
}


//Nos vamos a app.jsx codigo 4