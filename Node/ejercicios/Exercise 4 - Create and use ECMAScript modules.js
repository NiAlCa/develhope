/*Exercise 4 - Create and use ECMAScript modules

Create a script that uses export default to export a function.
Create another script that uses import to import the function and then calls it.*/

function sayHello() {
    console.log("Hello from myModule!");
}

module.exports = sayHello;
