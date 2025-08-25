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

// This inline styling is not recommended for large projects 
// but it is good for small projects or for quick prototyping.

/*
* Lets see syntaxes of css in inline, html, and its own css syntax
* Inline css using js -> backgroundColor : "hsl(225, 100%, 65%)", (like js object)
* Html css -> background-color : "hsl(225, 100%, 65%)" (each attribute is separated by semicolon)
* Css file : background-color : hsl(225, 100%, 65%);
 */