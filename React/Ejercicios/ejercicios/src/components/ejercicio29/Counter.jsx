import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({initialValue = 0}) {
  const [count, setCount] = useState(initialValue); //Debe ser una funcion ya que react solo lee los componentes, no los modifica. 

  function handleIncrement() {
    setCount((c) => c + 1);
  }

  function handleDecrement() {
    setCount((c) => c - 1);
  }

  function handleRes() {
    setCount(initialValue);
  }

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleRes}>Res</button>
      <CounterDisplay
      count={count}
      />
    </div>
  );
}


