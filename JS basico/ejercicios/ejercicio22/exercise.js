let primitive = "a";



switch(typeof(primitive)){
    case "number":
        console.log("es tipo number");
        break;
    case "string":
        console.log("es tipo string");
        break;
    case "boolean":
        console.log("es tipo boolean");
        break;
    default:
        console.log("El tipo de variable no existe");

}