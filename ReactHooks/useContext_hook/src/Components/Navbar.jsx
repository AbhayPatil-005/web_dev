import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

const Navbar=()=>{
    const {theme, toggleTheme} = useContext(ThemeContext);
  return(
    <nav style={{ background: theme === "light" ? "#eee" : "#333", padding: "1rem" }}>
      <h2 style={{ color: theme === "light" ? "#000" : "#fff" }}>Navbar - {theme} mode</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>)

}
export default Navbar;