import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { useRef } from "react";

export function Counter({initialValue = 0}) {
  const [count, setCount] = useState(initialValue); //Debe ser una funcion ya que react solo lee los componentes, no los modifica. 

  useEffect(() => {
    console.log("Current counter value:", count);
  }, [count]);


  function handleIncrement() {
    setCount((c) => c + 1);
  }

  function handleDecrement() {
    setCount((c) => c - 1);
  }

  function handleRes() {
    setCount(initialValue);
  }
  
  const directionRef = useRef(null);
  
  useEffect(() => {
    if (!directionRef.current) {
      const direction = count > initialValue ? 'up' : 'down';
      console.log(`${direction}`);
    }
  }, [count, initialValue]);

  const style ={
    backgroundColor: 'orange',
    color: 'white',
    border: '3px solid black',
  }

  return (
    <div style={style}>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleRes}>Res</button>
      <CounterDisplay
      count={count}
      />
    </div>
  );
}




/* 
Modify the Counter component so that whenever the value of the counter changes, the value of a ref is updated to contain the direction of the change (i.e. "up" or "down") relative to the initialValue prop. Print the value of the ref to the console only when it's different from the previous value.

Modifique el componente del contador para que cada vez que cambie el valor del contador, el valor de una REF se actualice para contener la dirección del cambio (es decir, "arriba" o "abajo") en relación con el Prop. InitialValue.Imprima el valor de la Ref a la consola solo cuando sea diferente del valor anterior.



*/