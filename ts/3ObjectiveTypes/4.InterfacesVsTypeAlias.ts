/* 
La sintaxis es muy similar 
*/

interface Country {
    name: string;
    code : string;
}

type Country2 = {
    name: string;
    code: string;
}

/* 
Son muy similares 

Realmente importa cual usemos? 

El manual explica que es principalmente una cuestio de preferencia, 

PERO hay una diferencia principal 


No podemos redefinir el alias del type country 

*/


interface Country {
    population: number;
}

type Country2 = {
    name: string;
    code: string;
}

