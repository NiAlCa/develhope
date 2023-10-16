import { useState } from "react";
import {HelloWorldName} from "../ejercicio2,3y4/HelloWorldName";

export function InteractiveWelcome() {
    const [name, setName] = useState('');
    
    const handleInputName = (event) => {
        setName(event.target.value);
    }

    return(
        <div>
            <form>
            <input type="text" name="text" value={name} onChange={handleInputName} placeholder="Introduce tu nombre"/>
            <HelloWorldName
            name={name}
            />
            </form>
        </div>
    )
}

/* 
Create an InteractiveWelcome component that renders an input tag and the Welcome component
. Pass the current content of the input tag to the name prop of the Welcome component.
 The input tag should be a controlled component.

Cree un componente de bienvenida interactiva que haga una etiqueta de entrada y el componente de bienvenida
.Pase el contenido actual de la etiqueta de entrada al accesorio de nombre del componente de bienvenida.
 La etiqueta de entrada debe ser un componente controlado.




*/