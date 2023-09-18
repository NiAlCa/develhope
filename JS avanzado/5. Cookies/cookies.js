/*Los cookies en JavaScript (también conocidos como galletas en español) 
son pequeños archivos de texto que se utilizan para almacenar información
 en el navegador web del usuario. Estos cookies se pueden utilizar
  para varias cosas, como recordar la información de inicio de 
  sesión de un usuario, mantener un registro de las preferencias 
  del usuario en un sitio web o realizar un seguimiento de la actividad
   del usuario en el sitio.

Aquí hay algunas características clave de los cookies en JavaScript:

1. Almacenamiento de datos: Los cookies se utilizan para almacenar 
pequeñas cantidades de datos en el navegador del usuario.
 Estos datos se almacenan en forma de pares clave-valor y 
 pueden contener información como nombres de usuario,
  preferencias de idioma, carritos de compra en línea, etc.

2. Tamaño limitado: Los cookies tienen un tamaño máximo
 de almacenamiento, generalmente alrededor de 4 KB por 
 cookie. Esto significa que solo se pueden almacenar datos pequeños en ellos.

3. Persistencia: Los cookies pueden ser persistentes o 
de sesión. Los cookies persistentes permanecen en el
 navegador del usuario durante un período de tiempo 
 específico, incluso después de que el usuario cierre
  la ventana del navegador. Los cookies de sesión se 
  eliminan automáticamente cuando el usuario cierra 
  la ventana del navegador.

4. Seguridad: Los cookies son vulnerables a ataques 
de seguridad si no se utilizan de manera adecuada. 
Por esta razón, se deben tener precauciones para no 
almacenar información sensible o confidencial en cookies.
 Es importante asegurarse de que los cookies estén 
 protegidos contra la manipulación y el acceso no autorizado.

5. Acceso desde JavaScript: Puedes acceder y manipular 
cookies desde JavaScript utilizando el objeto `document.cookie`
 Puedes agregar nuevos cookies, modificarlos 
 o eliminarlos utilizando este objeto.

Aquí hay un ejemplo de cómo se puede establecer un cookie en JavaScript:*/


document.cookie = "nombre=Juan; expires=Thu, 06 Sep 2024 12:00:00 UTC; path=/";

/*
En este ejemplo, se está creando un cookie llamado "nombre" con el valor "Juan".
 El atributo "expires" indica la fecha de caducidad del cookie, y el atributo 
 "path" especifica en qué rutas del sitio web el cookie es válido.

Es importante tener en cuenta que los cookies tienen limitaciones y 
no son la mejor opción para almacenar grandes cantidades de datos o 
información sensible. Para el almacenamiento de datos más avanzado y 
seguro, se pueden considerar otras tecnologías como Web Storage o 
IndexedDB en combinación con medidas de seguridad adecuadas.*/