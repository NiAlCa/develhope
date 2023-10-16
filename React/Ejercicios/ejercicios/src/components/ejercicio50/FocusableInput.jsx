import { useEffect, useRef } from "react";

export function FocusableInput(){

    const inputRef = useRef(null);
    const mountedRef = useRef(false);

    useEffect(() => {
       
        if (!mountedRef.current) {
          mountedRef.current = true;
          console.log("Componente montado por primera vez");
        } else {
          console.log("Componente montado nuevamente");
        }
    
        
        inputRef.current?.focus();
      }, []); 

    return(
        <div>
            <input type="text"/>
        </div>
    )
}