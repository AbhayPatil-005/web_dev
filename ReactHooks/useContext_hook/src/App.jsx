import Navbar from "./Components/Navbar";
import { useState } from "react";
import ThemeContext from "./Context/ThemeContext";

function App() {
  const[theme, setTheme] = useState('light');
  const toggleTheme = () =>{
    setTheme((prev)=>(prev==='light'?'dark':'light'));
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <Navbar/>
    </ThemeContext.Provider>
  )
}

export default App
