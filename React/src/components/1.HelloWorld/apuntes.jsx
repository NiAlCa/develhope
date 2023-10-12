/* Vamos a ver que son los componentes y como crear e renderizar uno 


 Un componentes es un modelo de un elemento de la interfaz de usuario 
 que podemos reutilizar tantas veces como sea necesario 

reglas de los componentes: 
1. El nombre del componente siempre debe comenzar con una letras mayuscula
2. El componente debe devolver algo que se pueda representar dentro de la
interfaz de usuario. existe la excepcion de que devuelva falso , nulo o indefinido y no 
existe la necesidad de que renderice en pantalla pero no es algo que se haga muy amenudo
y la ultima se desaconseja su uso. 
3. Deben devolver una etiqueta padre que reuna el resto de etiquetas hijas

const helloWorldElement = <HelloWorld />

las etiquetas no hay que abrirlas y cerrarlas <HelloWorld />

Se pueden mezclar los componentes de react con los componentes del DOM
const helloWorldElement = (

    <div>
    <HelloWorld />
    </div>

)


Los parentesis es para senalarle a javascript tu constante empieza aqui y acaba aqui
*/

//En este punto nos vamos al index..jsx de la carpeta src codigo 1 
