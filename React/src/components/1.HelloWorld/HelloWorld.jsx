/*Asi se definiria un componente */

import { LanguageContext } from "../14.Context/LenguageContex";
import { useContext } from "react";


export function HelloWorld() {
     const language = useContext(LanguageContext)
    return <h2>{language === 'en' ? 'Hello, World!' : 'Ciao, Mondo!'}</h2>;
}

