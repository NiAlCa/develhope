function sum(...num) {
    return num.reduce((arg, num) => arg + num);
}

console.log(sum(1, 2, 3, 4, 5));


/*
The sum function has a high numbers of parameters. How can we improve the code in order to make it accept any amount of numbers to sum as its argument?


La función suma tiene un alto número de parámetros. ¿Cómo podemos mejorar el código para que acepte cualquier cantidad de números para sumar como argumento?

*/