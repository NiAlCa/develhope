/*
Cuando tratamos con arboles de componentes que tienen 
una profundidad muy alta, hay momentos en los que 
necesitamos pasar datos desde un componente superior a uno 
inferior o viceversa 

podriamos hacerlo mediante props pero estos deberian de pasarse
por cada componente hasta la fuente de datos. A parte de ser
engorroso causa mucho ruido en nuestro codigo 


Este problema se resuelve con la apo de context, que proporciona
una forma de pasar datos desde el arbol de componentes sin tener
que pasar por toda la cadena. 

el provider es el contenedor del valor que queremos consumir y 
consumer es un objeto que nos permite acceder al valor del contenido
dentro del contedenedor, dentro del provider

la funcion de creacion de contexto recibira un solo parametro, que es el 
valor predeterminado para el valor que queremos pasar dentro de este contexto y 
devuelve un objeto llamado contexto  


En este proveedor podriamos poner dentro cualquier valor dentro 

*/