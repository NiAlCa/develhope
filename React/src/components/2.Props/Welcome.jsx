//Asi creamos un componente con props y lo usamos 

// eslint-disable-next-line react/prop-types
export function Welcome({ name , age}){
    return <div>
        <h2>Welcome, {name}!</h2>
        <p> u are {age} years old.</p>
        {/*Realmente dentro de los {} podriamos escribir lo que quisieramos de codigo 
        por ejemplo {age + 5} los props solo sirven para lectura no para cambiar codigo */}
        </div>
}


//Nos vamos a app.jsx codigo 4