/* 
 Al definir un tipo e objeto, podemos especificar 
 si las propiedades son opcionales y tambien las podemos 
 especificar si se les puede escribir. hacemos esto usando modificadores de propiedad


*/

//Optional properties 

/* 
Cuando definimos un tipo de objeto, como tenemos aqui,
por defecto cada propiedad se requiere. 



*/


type Country = {
    readonly name: string;
    readonly code: string;
    population?: number; // Para convertir esta variable en una propiedad opcional lo podemos hacer agrengando un ? 
}


const country: Country = { //aqui usariamos la interfaz y no tendriamos que definir las variables en cada bloque de codigo 
    name: "Nueva Zelanda",
    code: "NZ",
    population: 5000000 // La población es un ejemplo simplificado
}

function displayCountryDetails(country: Country) {

   
    console.log(country.name.toUpperCase()); 

    /*
    console.log(country.population * 1000000); 
    Si esto lo dejaramos asi, podria llevar a un error en el caso de no 
    definir population y se quedaria undefined, para solucionar ese 
    error crearemos un if para comprobar si population existe
    */ 

    if(typeof country.population === "number"){
        console.log(country.population * 1000000)
        
    }


  //  Si quisieramos asignar valores predefinidos lo hariamos de la siguienete manera
  //Lo veremos en  displayCountryDetails mas abajo. 
    
}

displayCountryDetails(country);



function displayCountryDetails2( {name, population = 0} : Country) { //De esta manera predefiniriamos 0 a population 

   
    console.log(country.name.toUpperCase()); 


   //Ya no necesitariamos el if, porque lo estamos predefiniendo 
        console.log(population * 1000000)
        



    
}

displayCountryDetails2(country)


//Read only properties 

/* 
Podemos cambiar las propiedades del objeto

*/
/*
country.name = "Thailand";

country.code = "TH"

/*

pero a lo mejor no queremos que se pueda cambiar, esto lo podemos hacer con 
readonly 

*/
