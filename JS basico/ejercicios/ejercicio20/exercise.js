// Create a variable called `primitive` and assign it a value. Check if the value is number, string or boolean type and print it in the console.

let primitive = 0;

if(typeof(primitive) === "string"){
    console.log("es tipo string");
}else if(typeof(primitive) === "number"){
    console.log("es tipo number");
}else if(typeof(primitive) === "boolean"){
    console.log("es tipo boolean");
}else{
    console.log("El tipo de variable no existe");
}