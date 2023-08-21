
function repeatHello(callback){
    setInterval(callback, 1000);
}

repeatHello(() => console.log('hello'));

//Lo que sucede es que se imprime en bucle hello, esto sucede porque setInterval lo que hace es repetir el callback cada 1000ms, pero no hay nada que pare la funcion por lo que se genera un bucle
