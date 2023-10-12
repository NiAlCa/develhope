import { useEffect, useState } from "react";

export function Clock() {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        console.log(`setting up clocl interval`)
        
        const intervalId = setInterval(() =>{
            console.log(`updating date...`)

            setDate(new Date())
        }, 1000)

        return () => {
            console.log(`Clearin clock interva`)
            clearInterval(intervalId)


            /* 
La funcion de limpieza que podemos devolver de un efecto secundario, en realidad
es algo que debemos usar cada vez que nuestro efecto secundario hace
algo que podria seguir ejecuntandose despues de que nuestro componente se 
desmonte o despues de que se ejecute el siguiente efecto secundario
            
            */
        }
    }, [])

    return(
        <div>
            <p>Current time: {date.toLocaleDateString()}</p>
        </div>
    )


}

/* 
La mayoria de veces no se devolvera una funcion de limpieza, no porque 
no tenga operacion que aun puedan estar ejecutandose cuando el componente este 
desmontado, sino porque incluso si estas operaciones estan ejecutandose cuando el 
componente este desmontado, haran absolutamnete ninguna diferencia 

pero en realidad es algo bastante raro usar una funcion de limpieza 
existe esta herramienta pero que no te quite el sueno usarla o no 
*/