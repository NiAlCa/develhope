/* 

React roouter es una biblioteca de terceros que administra el enrutamiento 
dentro de nuestra aplicacion, react como tal no tiene una forma nativa
de manejar el enrutamiento, 

lo primero seria instalar la biblioteca

npm install --save react-router-dom 

existen realmente 2 paquetes para esto, pero nosotros usaremos el nombrado 

deberemos encerrar nuestro root con nuestro enrutamiento
<BrowserRouter>
<App />
</BrowserRouter>

podemos decir que es buena practica tener el app y el root en 2 archivos diferentes 

una vez hemos envuelto nuestra aplicacion dentro de un componente root
podemos empezar a definir roots 

un root es un componente que se procesa siempre que la ruta dentro de la 
barra de ubicacion en nuestro navegador coincida con algun tipo,
algun patron. 

podemos mostrar diferentes componentes dentro de nuestro navegador 
dependiendo del valor de nuestra url de direccion, el dominio 
permanecera y cambiaran lo que hay tras los slash /, eso 
lo podemos conseguir definiendo las roots 

una root es algo que se muestra en la pagina de nuestro navegador 

como navegamos de un camino al sigueinte? 

con html podemos hacerlo mediante <a> pero aqui 
vamos a ver como hacer esto sin que recargue la web
lo vamos a ver en welcome <Link></Link>

por supuesto hay momentos en los que podriamos querer 
navegar imperativo mas que declarativo
entonces habra a veces que queramos, por ejemplo
hacer click en un boton y que nos lleve a otra web 

podemos navegar imperativamente de una ruta a otra
usando el hook useNavigate


un marcador de posicion se define como una cadena, 
que comienza con el caracter clumna 

para crear una ruta segun datos del compoenente podemos 
usar useParams que podemos ver su uso en 2.0 props welcome.jsx 


tambien podemos tener un catalogo de rutas 
para hacer esto podemos, donde estamos definiendo nuestras rutas, 
podemos anidar una ruta dentro de otra y podemos hacer esto pasando 
la ruta como elemento secundario a un elemento de ruta principal 

*/