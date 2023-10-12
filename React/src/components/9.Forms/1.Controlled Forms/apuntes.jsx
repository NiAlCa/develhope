/* 
Cuando se escribe una aplicacion react, a menudo tendra que 
crear formularios porque los formularios son la forma
 mas facil para que el usuario interactue con la aplicacion 

un formulario es una especie de pagina donde el usuario puede ingresar
datos mediante el uso de campos de texto
mediante el uso de casillas de verifiacion 
mediante el uso de botones de opciones
menus desplegables y cosas por el estilo 

los formularios en react construyen utilizando 
componentes conrtolados o componentes no controlados 

un componente controlado es un componente que no mantiene 
un estado interno de su contenido, sino que dependa del componente
principal para proporcionarle el valor actual y notifica
al principal tan pronto como el usuario intenta cambiarlo
que significa esto ?

significa que un componente controlado es un componente que
 recibe del padre el valor que necesita mostrar al usuario
  y notifica al padre tran pronto como el usuario intenta
   escribir algo dentro del componente mismo, para interactuar
    con el valor contenido dentro el componente mismo. 

  Si la entrada es un componente controlado, no mantiene un estado
interno de lo que se escribe dentro de la entrada, sino que recibe
el valor del padre y tan pronto como el usuario 
intenta escribir algo dentro del campo de texto, notifica al 
padre que el usuario ha escrito algo y el que, para que el padre
pueda actualizar su estado interno y decirle a la entrada
que valor debe mostrar en el campo de texto 

entonces, un componente controlado es un componente que depende
completamente del padre para mantener el estado y decirle lo que 
necesita mostrar dentro de el 
un componente controlado le ofrece un control completo 
sobe lo que puede mostrar dentro de la entrada y que deberia
suceder cuando el usuario interactua con la entrada


onChange en react se activa tan pronto como cambia el valor
dentro de un aentrada, tan pronto como un usuario escriba 
algo dentro de la entrad. En react OnChange se comporta igual
que onInput 
*/




/*
Un componente no controlado mantiene un estado interno del valor
que contiene y no notifica a nadie cuando el usuario esta 
interactuando con este contenido
Puede notificar al padre cuando el usuario interactua con el contenido pero 
no tiene porque hacerlo 

Entonces un componente no controlado es un componente que implementa
por completo la logica necesaria para mantener su estado interno 
y actualizar su estado interno 

es un componente que no depende de un componente principal para mantener el
estado, sino que mantiene el estado completamnete dentro de si mismo 


*/

/*
Siempre hay que usar una etiqueta de formulario ya que implementa
algunas funcionalidades que, de lo contrario, tendria que implementar
usted mismo, y es semanticamente correcta, lo que significa que 
el software de accesibilidad entanda que el contenido de una etiqueta
de formulario es algo que requiera una entrada del usuario y puede
aptovechar esta informacion para ayudar 
*/