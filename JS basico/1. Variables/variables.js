/*Para las variables a dia de hoy se usa let */

let objetcLength = 10; 

/*tras declarar la variable, podemos reasignarle otro dato */

objetcLength = 8;  

//const /*las constantes como su propio nombre indica son valores que no pueden variar */

const websiteName = "http://google.com";

//var /*var es similar a let solo que es una forma de llamar a las variables que se puede considerar anticuada */

var objectWidth = 10;

/* con console.log imprimimos por la terminal lo que nos interese del codigo */

console.log(websiteName);


/* 
No debes usar otros caracteres porque pueden causar errores o ser difíciles de entender para una audiencia internacional.

No use guiones bajos al comienzo de los nombres de las variables — esto se usa en ciertas construcciones de JavaScript para significar cosas específicas, por lo que puede resultar confuso.

No uses números al comienzo de las variables. Esto no está permitido y provoca un error.

Una convención segura a seguir es la llamada "minúscula mayúsculas intercaladas", en la que se juntan varias palabras con minúsculas para la primera palabra completa y luego en mayúsculas las primeras letras de las siguientes palabras. Así lo hemos estado haciendo en nuestros nombres de variables en el artículo hasta ahora.

Haz que los nombres de las variables sean intuitivos, para que describan los datos que contienen. No uses solo letras/números o frases grandes y largas.

Las variables distinguen entre mayúsculas y minúsculas — por lo tanto myage es una variable diferente de myAge.

Un último punto: también debes evitar el uso de palabras reservadas de JavaScript como nombres de variables — con esto, nos referimos a las palabras que componen la sintaxis real de JavaScript. Por lo tanto, no puedes usar palabras como var, function, let y for como nombres de variables. Los navegadores las reconocen como elementos de código diferentes, por lo que obtendrás errores.

*/