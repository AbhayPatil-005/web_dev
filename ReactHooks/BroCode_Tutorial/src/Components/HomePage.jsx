// This how we can do conditional rendering in React
const HomePage = (props) => {
    const info = props.isLoggedIn
    if(info){
        return <h1>Welcome to the Homepage!</h1>
    }else{
        return <h1>Please log in to continue.</h1> 
    }
}

export default HomePage