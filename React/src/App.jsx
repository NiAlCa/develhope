//Codigo 2 seguimos del index.jsx

import { HelloWorld } from "./components/1.HelloWorld.jsx/HelloWorld";
import { Welcome } from "./components/2.Props/Welcome";

/*Realmente para mostrar en pantalla lo mostraremos desde este archivo 
que usaremos de punto intermedio, solo deberiamos tener que renderizar un solo componente dentro
de l araiz de nuestra aplicacion en este caso el componente raiz que vamos a renderizar
en nuestra raiz va a ser App*/

export function App(){
    return(
        <div>
            <h1>My awesome Application</h1>
            <hr/>
            <HelloWorld />

            {/* codigo 4
            Aqui estamos viendo como usar el componente y su pront
            */}
            <Welcome 
            name = "Nico" //de esta manera agregariamos un string
            age ={10} //de esta manera agregariamos un numero
            />

            {/* 
            vamos a reutilizar el componente
            */}

            <Welcome
            name = "Laura"
            age ={110}
            />

            {/*Fin 2 props */}
        </div>
    )
}

//Ahora volvemos al index.jsx codigo 3