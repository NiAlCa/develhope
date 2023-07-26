function sayHelloName(callback) {

 
        console.log("Hello");
        callback();
 

  }
  
  function printName() {

    console.log("Name");

  }
  


  setTimeout(function(){
    sayHelloName(printName);
    
  })
  
 



