import styles from './Button.module.css';
// if we want to use css module then we have to import it like this and use it like className={styles.button}
const Button = () => {
    return <button className={styles.button}>Click Me</button>;
    }
export default Button;

// This how we use css module in react