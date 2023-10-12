/* 
useEffect es un hook que nos permite ejecutar efectos secundarios
dentro de nuestro componentes. Nos permite reaccionar al cambio 
de algunas variables dentro de nuestro codigo 


useEffect recibe dos parametros, el primero es la funcion que 
queremos que se ejecute cada vez que algo cambie 
y el segundo parametro es una matriz de valores que queremos que 
reaccionen para monitorear
Entonces cada vrz que cambie cualquiera de estos valores dentro de la matriz, 
se ejecutara la funcion que hemos pasado a useEffect

Volvemos al counter.jsx de la carpeta 6.useState para ver como aplicar e usar
el useEffect 


useEffect es un gancho que recibe un efecto secundario que devuelve una funcion de limpieza 

La funcion de limpieza que podemos devolver de un efecto secundario, en realidad
es algo que debemos usar cada vez que nuestro efecto secundario hace
algo que podria seguir ejecuntandose despues de que nuestro componente se 
desmonte o despues de que se ejecute el siguiente efecto secundario
*/