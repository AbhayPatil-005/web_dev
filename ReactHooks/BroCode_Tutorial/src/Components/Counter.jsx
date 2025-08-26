import { useState } from "react"

const Counter = ()=>{
    const [count, setCount] = useState(0)
    const increment = ()=>{
        setCount(count + 1);
    }
    const reset = ()=>{ 
        setCount(0);
    }
    const decrement = ()=>{
        setCount(count-1);
    }
    return(
        <>
        <h1>Count : {count}</h1>    
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
        </>
    )   
}
export default Counter;

// This is a simple counter component that allows users to increment, decrement, 
// and reset a count value using useState.