import { useState } from "react";

export default function useCounter(initialValue =0 ){
    const [counter, setCounter] = useState(initialValue);
    
    const handleCounterIncrement = () => setCounter(counter + 1);
    const handleCounterDecrement = () => setCounter(counter - 1);
    const handleCounterReset = () => setCounter(initialValue);
    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset,
    }
}