// this hows to create a button component with a click event
const Button = ()=>{
    const handleClick=()=>{
        console.log("Button Clicked")
    }
    return <button onClick={handleClick}>Click Me</button>
}

export default Button;

// we can also use arrow function directly in the onClick event
// return <button onClick={()=>console.log("Button Clicked")}>Click Me</button>