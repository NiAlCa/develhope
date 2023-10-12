/* 
Los hooks de react son una caracteristica de react 
que hace posible hacor cosas que una funcion 
esto no es posible porque los hooks son funciones 
que nos permiten conectarnos a las parrtes internas de react 
nos permiten comunicarnos con react y senalarle a react que 
vamos a hacer algo que necesita la atencion de react 
para que react pueda realizarun seguimiento de ciertas cosas y recordar
ciertos valores para que puedan persistir de un renderizado al sigueinte 

Nos permiten comunicarnos con react uy senalarle a react que 
vamos a hacer algo que necesita la atencion de react, para
que react pueda realizar un seguimiento de ciertas cosas y 
recordar ciertos valores para que puedan persistiir de un renderiznado
al siguiente 

podremos hacer cosas como ejecutar funciones de efectos secundarios desde 
un componente de funcion normal y almacenar en cache otros, almacenar en cache 
algunos valores, almacenar en cache funciones y hacer otras cosas

al usar hooks podemos engancharnos a este comportamineto y podemos 
acceder a las partes a las partes internas de react a traves de una 
sintaxis facil de usar y una api facil de usar 

los hooks son funciones que react expone para que podamos
importar estas funciones desde la biblioteca de react

hay mas pero estos son los principales:


useState:Es un hook que nos permitira adminitrar el estado de un componente

useEffect: Es un hook que nos permitira ejecutar efectos secundarios dentro de un componente
Por lo que nos permitira ejecutar accioens cada vez que ocurra algo

useContext:Es un hook que nos permitira acceder al valor de un contexto

useRef:Es un hook que nos permitira acceder a los nodos DOM creados por React cada
vez que muestra algo en pantalla 

useMemo: Es un hook que nos permitira memorizar calculosos costosos 

Como podemos ver todos tienen la misma convencion, empiezna todos con use
 Los hooks solo podran ser llamados desde el nivel superior de su componente de funcion,
 se deben llamar en el mismo orden y el orden de estos siempre se debe llamar 


 */