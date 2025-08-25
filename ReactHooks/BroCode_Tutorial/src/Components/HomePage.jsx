// This how we can do conditional rendering using ternary operator in React
const HomePage = (props) => {
    const info = props.isLoggedIn

    const logged = <h2 id="logged">Welcome back!</h2>;

    const notLogged = <h2 id="not-logged">Please log in to continue</h2>;

    return info ? logged : notLogged
}

export default HomePage