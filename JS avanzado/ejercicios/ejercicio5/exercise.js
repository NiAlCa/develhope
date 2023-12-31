class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {

  static calculate(figure) {
    if (figure instanceof Square) {
      return figure.side * figure.side;
    } else if (figure instanceof Rectangle) {
      return figure.width * figure.height;
    } else if (figure instanceof Circle) {
      return Math.PI * figure.radius * figure.radius;
    } 
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));

/* 
# instanceof Operator

Defina una clase llamada `AreaCalculator`. Dentro de él, crea un método estático que te permita calcular el área de la figura geométrica pasada como parámetro. El método te permitirá calcular el área del cuadrado, el rectángulo y el círculo.

Define a class called `AreaCalculator`. Inside it, create a static method that let you calculate the area of the geometric figure passed as parameter. The method will let you calculate the square, the rectangle and the circle area.

class Square {
constructor(side) {
this.side = side;
}
}

class Rectangle {
constructor(width, height) {
this.width = width;
this.height = height;
}
}

class Circle {
constructor(radius) {
this.radius = radius;
}
}

class AreaCalculator {
// ...
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));






*/