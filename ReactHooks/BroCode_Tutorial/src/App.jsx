// Conditional Rendering in React = Rendering components or elements based on certain conditions.

import HomePage from "./Components/HomePage"
import { useState } from "react"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
    <HomePage isLoggedIn={isLoggedIn}/>
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log In/Log Out</button>
    </>
  )
}

export default App
