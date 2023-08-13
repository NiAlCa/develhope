/*/Una clase en JavaScript es una plantilla o modelo para crear objetos que 
comparten propiedades y métodos comunes. La sintaxis para declarar una 
clase se realiza mediante la palabra clave class, seguida del nombre de la clase 
y un bloque de código entre llaves que define su constructor y otros métodos.*/

class Person{
    constructor(name, age, nationality) {
        this.name = name;
        if(typeof(age) == "number"){
            this.age = age;
        } else {
            this.age = Number(age);
        }
        this.nationality = nationality;
    }
}

let greg = new Person("Greater", 28, "Us");

/* 
En este código, hemos definido una clase llamada Person. La clase tiene un constructor 
que se ejecutará automáticamente cuando se crea un nuevo objeto de tipo Person utilizando
 la palabra clave new. El constructor recibe tres parámetros: name, age y nationality.

this.name, this.age y this.nationality: Estas son las propiedades del objeto que se están 
asignando a los valores que se pasan como argumentos al constructor. Cuando se crea un 
objeto Person, sus propiedades se inicializan con los valores proporcionados.

La parte if (typeof(age) == "number") verifica si el tipo de age es un número. 
Si es así, asigna directamente el valor a this.age. Si age no es de tipo número 
(por ejemplo, si se pasa como una cadena), convertimos el valor a número
 usando Number(age) antes de asignarlo a this.age.

Después de definir la clase Person, hemos creado una instancia de Person llamada
 greg, pasando los valores "Greater", 28 y "Us" como argumentos al constructor.
*/

//ahora vamos a extender la clase


class Student extends Person{
    constructor(name, age, nationality, subject) {
        super(name, age, nationality);
        this.subject = subject;
        }

}

let susan = new Student("Susan", 30, "Uk", "English");


/* 
La clase Student extiende (hereda) la clase Person utilizando la palabra clave extends.
Esto significa que Student tiene todas las propiedades y métodos de la clase Person, 
además de las propias que definamos en la clase Student.

super(name, age, nationality): Llamamos al constructor de la clase Person utilizando super() 
para inicializar las propiedades name, age y nationality que pertenecen a la clase Person.

this.subject: Esta es una nueva propiedad específica de la clase Student que no existe en la 
clase Person. Aquí, estamos agregando la propiedad subject a los objetos creados con la clase Student.

Finalmente, hemos creado una instancia de Student llamada susan, pasando los valores "Susan",
 30, "Uk" y "English" como argumentos al constructor.
*/


/* 
En ECMAScript 2021 (ES12), se introdujo una nueva sintaxis para inicializar
 propiedades de clase directamente dentro de la definición de la clase. 
Esto se conoce como "class fields" o "campos de clase".
 Anteriormente, en versiones anteriores de JavaScript, 
 la inicialización de propiedades se realizaba dentro del constructor.

*/

class Person2{
    name = ""; //podemos predefinir campos de las propiedades 
    age = 0;
    nationality = "";

    constructor(name, age, nationality) {
        this.name = name;
        if(typeof(age) == "number"){
            this.age = age;
        } else {
            this.age = Number(age);
        }
        this.nationality = nationality;
    }
}

/* 
En este código, hemos definido una clase llamada Person2. Lo que es nuevo en esta sintaxis 
son las líneas que tienen name = "";, age = 0; y nationality = "";. Estas son "class fields"
 o campos de clase, y permiten que las propiedades del objeto se inicialicen directamente
  dentro de la definición de la clase, sin necesidad de hacerlo dentro del constructor.

Por ejemplo, cuando se crea una instancia de Person2, si no se proporcionan los valores 
para name, age y nationality, estos campos de clase se inicializarán 
con sus valores predeterminados ("", 0 y "", respectivamente).

*/


let john = new Person2("John", 30, "USA");
console.log(john); // Person2 { name: 'John', age: 30, nationality: 'USA' }

let anna = new Person2("Anna", "25", "Canada");
console.log(anna); // Person2 { name: 'Anna', age: 25, nationality: 'Canada' }

let unknownPerson = new Person2();
console.log(unknownPerson); // Person2 { name: '', age: 0, nationality: '' }


// Metodos estaticos 

/* 
Utilizamos static para definir un metodo estatico en una clase/
Al igual que en otros lenguajes de progrmaacion, un metodo estatico se llama directamente
sin instanciar la clase
Se suelen utilizar para crear ufunciones utiles en una aplicacion
no es necesario crear un objeto para llamar a un metodo estatico
*/


class Rectangulo { 
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static area(a, b){
        return a * b;
    }
    static perimetro(a, b){
        return a + a + b + b;
    }
}

let rectangulo1 = new Rectangulo(2 , 3);

/*console.log(rectangulo1.area(2, 3)); al intentar llamar al método estático area()
 a través de rectangulo1, obtendríamos un error, ya que los métodos
  estáticos no están disponibles en las instancias.*/
console.log(Rectangulo.area(2, 3))





//Metodos y propiedades privadas.
/*

 Las propiedades y métodos privados están destinados a ser utilizados solo dentro
  de la propia clase en la que se definen y no se pueden acceder desde fuera de la clase
 Esto ayuda a evitar conflictos y manipulaciones no deseadas desde el exterior.
*/
class Person3 {
    name = "";   
    #age = 0; // Propiedad privada

    constructor(name, age, nationality) {
        this.name = name;
        if (typeof(age) == "number") {
            this.#age = age;
        } else {
            this.#age = Number(age);
        }
        this.nationality = nationality;
    }

    sayAge() {
        return "i am" + this.#age + "Years old";
    }
}

/* 
En esta definición de clase, la propiedad #age se declara
 como una propiedad privada utilizando la sintaxis #age.
  Esto significa que solo puede ser accedida y modificada dentro de la misma clase Person3.
   No se puede acceder a esta propiedad desde fuera de la clase, lo que proporciona un nivel de encapsulación y privacidad.

*/







//setter y getters

/* 
los getter y setters son métodos especiales que permiten controlar el acceso
 y la modificación de las propiedades de un objeto. Son útiles para implementar
  lógica personalizada al obtener y establecer valores en las propiedades de una clase. 
  Aquí está el ejemplo que proporcionaste y cómo funcionan los getter y setters en él:

*/

class Person3 {
    name = "";   
    _age = 0; // Las propiedades protegidas deben tener un guion delante del nombre, por convencion
    nationality = "";

    constructor(name, age, nationality) {
        this.name = name;
        if (typeof(age) == "number") {
            this._age = age;
        } else {
            this._age = Number(age);
        }
        this.nationality = nationality;
    }

    sayAge() {
        return "i am" + this._age + "Years old";
    }

    set age(newVal){
        if(newVal < 1){
            this._age = 1;
        } else if (newVal > 110){
            this._age = 109;
        }else{
            this._age = newVal;
        }

    }

    get age() { //Si solo incluiriamos el getter convertiriamos a la propiedad en una de solo lectura
        return this._age;
    }
}

/* 
En este ejemplo, el objeto Person3 tiene una propiedad
 _age y métodos getter y setter para dicha propiedad. Veamos cómo funcionan:

Setter (set): El setter te permite controlar cómo se asigna un valor a una propiedad.
 En este caso, el setter age verifica si el valor que se está asignando está dentro de 
 ciertos límites (entre 1 y 110). Si el valor es menor a 1, se establece como 1; 
 si es mayor a 110, se establece como 109; de lo contrario, se establece el valor proporcionado.

Getter (get): El getter te permite controlar cómo se obtiene un valor de una propiedad.
 En este ejemplo, el getter age simplemente devuelve el valor de la propiedad _age.

Estos métodos getter y setter permiten un acceso controlado y encapsulado 
a la propiedad _age de un objeto Person3. Puedes utilizarlos de la siguiente manera:

*/


const person = new Person3("John", 30, "USA");

console.log(person.age); // Utilizando el getter
// Output: 30

person.age = 25; // Utilizando el setter
console.log(person.age);
// Output: 25

person.age = -5; // El setter ajusta el valor a 1
console.log(person.age);
// Output: 1

person.age = 120; // El setter ajusta el valor a 109
console.log(person.age);
// Output: 109



//extender contruccion de clases

/* 
En JavaScript, puedes extender (heredar) una clase existente para crear una nueva
 clase con propiedades y métodos adicionales. La nueva clase heredará
  las propiedades y métodos de la clase base y podrás agregarle nuevas funcionalidades.

*/
class MyArray extends Array {
    sum(){
        return this.reduce((a,b) => a + b);
    }
}

let arr = new MyArray(2, 3, 4, 5, 6)
console.log(arr.sum());
let origArr = new MyArray(1, 2, 3, 4, 5, 6);

/*
en este ejemplo, se define una nueva clase llamada MyArray que extiende
 la clase incorporada Array. Esto significa que MyArray heredará todas
  las propiedades y métodos de Array, y además podrás agregarle tus propios 
  métodos y propiedades.

*/


//instanceof 

/*

El operador instanceof es un operador en JavaScript que se utiliza para comprobar
 si un objeto es una instancia de una clase o constructor específico. En otras palabras
 , te permite determinar si un objeto se creó a partir de una clase
  en particular o si hereda directa o indirectamente de esa clase.
*/

class Animal {}

class Dog extends Animal {}

const myDog = new Dog();

console.log(myDog instanceof Dog); // true
console.log(myDog instanceof Animal); // true
console.log(myDog instanceof Object); // true (todos los objetos heredan de Object)
console.log(myDog instanceof Array); // false


/* 
myDog instanceof Dog devuelve true, ya que myDog es una instancia de la clase Dog.
myDog instanceof Animal también devuelve true, ya que Dog extiende Animal y myDog es una instancia de Dog, lo que significa que también es una instancia de Animal.
myDog instanceof Object devuelve true, ya que todos los objetos en JavaScript heredan de la clase Object.
myDog instanceof Array devuelve false, ya que myDog no es una instancia de Array

*/
