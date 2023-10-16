import { useState } from "react";
import "./TodoList.scss";


export function TodoList(){

    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handlePush = (event) => {
        event.preventDefault(); 
        setItems(prevItems => [...prevItems, inputValue]);  
        setInputValue('');  
    }

    const handleReset = () =>{
        setItems([])
    }

    const handleRemove = () =>{
        if (items.length > 0) {
            const updatedItems = items.slice(1);  
            setItems(updatedItems); 
        }

    }

    return (
        <form onSubmit={handlePush} className="form">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Click Para añadir</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleRemove}>Eliminar</button>
        </form>
    )
}




/* 
Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable. The items state variable should be an array of strings. The TodoList component should also contain an input tag and a button. When the button is clicked, the event handler should add the value of the input tag to the items array.

Cree un componente Todolista que represente una etiqueta UL con una etiqueta LI para cada elemento contenido en la variable de estado de elementos.La variable de estado de los elementos debe ser una variedad de cadenas.El componente Todolista también debe contener una etiqueta de entrada y un botón.Cuando se hace clic en el botón, el controlador de eventos debe agregar el valor de la etiqueta de entrada a la matriz de elementos.

*/