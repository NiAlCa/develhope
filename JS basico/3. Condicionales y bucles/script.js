let num = 9;

let conditionA = num > 2;
let conditionB = num < 8;

// operador ternario (?)
let str = conditionA && conditionB ? "in bound" : "out  of bounds";

/*Si la condición es true, el operador retorna el valor de la condtitionA; de lo contrario, devuelve el valor de conditionB */




// if else
let str2 = "";
if(conditionA && conditionB) {
    str2 = "Verdadero"
    //si las condiciones son verdaderas se ejecutara este bloque 
}else{
    str2 = "Falso"
    //si las condiciones son falsas se ejecutara este bloque
}
// podemos anadir mas if 


let str3 = "";
if(conditionA && conditionB) {
    str3 = "Verdadero";
    //si las condiciones son verdaderas se ejecutara este bloque 
}else if(conditionA || conditionB){
    str3 = "SECUNDA CONDICIO VERDADERA";
    //si las primeras condiciones son falsas pero estas secundas son verdaderas se ejecutara este codigo 
}else{
    //si la secunda condicion tampoco se cumple se ejecuta este bloque 
    str3 = "Falso"
}



//Switch 
/*Lo que hace switch es muy parecido a if, pero cuando se ejecuta una igualdad, se ejecuta el resto del codigo */
switch(num){ //convocamos el switch 
    case 1://le damos los casos y el codigo en caso de que se cumpla
        console.log("one!");
        break; //si se ejecuta nuestro codigo, con break paramos el codigo y asi evitamos que siga ejecutando hacia abajo
    case 2: //si fuese el caso 2, se ejecutaria hasta default porque no hay ningun break. 
        console.log("twp"); 
    case 3:
        console.log("three");
    default: //podemos preparar un default para que se ejecute en caso de ser todo falso.
        console.log("dafault")
}

//Bucles


/*for loop
for(initalize our iterator; set our stopping condition; update our iterator)
*/ //la variable i solo existe dentro del contexto del bucle, fuera de este no. pero podemos coger una variable ya declarada y esta si que se existira fuera del bucle . 


 

/*while loop */