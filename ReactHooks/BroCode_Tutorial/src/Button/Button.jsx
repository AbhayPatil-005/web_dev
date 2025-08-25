// Now we will see how to use inline css in react.

const Button = () => {
    const styles ={
        backgroundColor : "hsl(225, 100%, 65%)",
        color : "white",
        padding : "10px 20px",
        border : "none",
        borderRadius :" 5px",
        cursor : "pointer",
    }

    return <button style={styles}>Click Me</button>;
    }
export default Button;

