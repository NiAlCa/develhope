import { LanguageContext } from "../ejercicio70/LanguageContext";
import "./Clock.scss";
import { useContext, useEffect, useState } from "react";

export function Clock(){

    const [clock, setClock] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setClock(new Date());
    }, 1000);
  }, []);

  const language = useContext(LanguageContext)



    return(
        <div className="clock">
            <h2>
              {language === 'en' ? 'Hello, World!' : 'Hola Mundo!'}
              
              
              {clock.toLocaleTimeString()}</h2>
        </div>
    )
}