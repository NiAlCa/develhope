//Codigo 1 seguimos lo puesto en apuntes.jsx de la carpeta apuntes 

//De esta manera importariamos un archivo
import { App } from "./App"
import { HelloWorld } from "./components/1.HelloWorld/HelloWorld" //no es necesario usar la extension, tipo .js .jsx
//De esta manera traemos la api de react al dom
import { createRoot } from "react-dom/client"
import { Root } from "./components/17.ReactRouter/Root"

const helloWorldElement = <HelloWorld/>
 
//De esta manera creamos un puntero al div principal del html 
const rootElement = document.getElementById(`root`)
//De esta manera al usamos la api para senalar un elemento del html
const root = createRoot(rootElement)

//ahora usaremos una funcion de root. para renderizar nuestro helloworld

root.render(helloWorldElement) 

/*Ahora, por supuesto, cuando escribe un punto de entrada
para su aplicacion, no va a hacer todos estos pasajes usando
variables intermedias y todas estas cosas
*/
//se haria en una linea de tal manera 
createRoot(document.getElementById('root')).render(<HelloWorld />)
 

/* 
Realmente nuestra aplicacion probablemente tendra mas de un componente, y 
nunca deberias de tener que llamar a create root o al metodo render en 
el objeto raiz 
*/ //nos vamos a al archivo app.jsx codigo 2 

//codigo 3 venimos de app.jsx 

createRoot(document.getElementById('root')).render(<Root />)

//Fin 1.Hello world

//Inicio 2.Props

