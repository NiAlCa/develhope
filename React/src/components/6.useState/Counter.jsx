import { useState } from "react";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export function Counter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)
    /* 
    La desestructuración se utiliza comúnmente con useState para extraer el estado actual
     y la función para actualizarlo (usualmente llamada setState). 
     Esto ayuda a trabajar de forma más cómoda con el estado en un componente funcional.
    
    En este ejemplo, useState(0) inicializa el estado counter a 0 y 
    devuelve una tupla que incluye el valor actual del estado (counter)
     y la función para actualizarlo (setCounter).
      La desestructuración se realiza en const [counter, setCounter] = useState(0),
       donde counter es el valor actual del estado y setCounter es la función para actualizarlo

    */
        //Use efect es de la clase 7.useEffect 
       useEffect(() => {
        console.log(`The value of the counter is ${counter}`)
       }, [counter, initialValue]); //En la array podemos poner todas las variables que queramos 
       //que react observe para ejecutar el efecto cada vez que cambie una de ellas 
       //En este caso solo necesitamos que counter o initialValue se ejecuten para poder ejecutar nuestra funcion
       //si los [] estuvieran vacios nuestro useEffect se ejecutaria al montar el componente 

       function handleCounterIncrement(){
        setCounter( (c) => c + 1)

       }

       function handleCounterDecrement(){
        setCounter( (c) => c - 1)

       }

       function handleCounterReset(){
        setCounter(initialValue)

       }

    return(
        <div>
            <p>I have counted to {counter}</p>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button> 
        </div>
    )

}

