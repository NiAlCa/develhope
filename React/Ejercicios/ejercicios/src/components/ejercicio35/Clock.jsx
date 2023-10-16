import "./Clock.scss";
import { useEffect, useState } from "react";

export function Clock(){

    const [clock, setClock] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setClock(new Date());
    }, 1000);
  }, []);



    return(
        <div className="clock">
            <h2>Hora:{clock.toLocaleTimeString()}</h2>
        </div>
    )
}