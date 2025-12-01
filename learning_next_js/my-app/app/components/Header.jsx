

const Header=()=>{
    return(<header>

        
        <nav style={{ display:"flex", justifyContent:"space-evenly", padding: 16, background: "#f3f3f3" }}>
            <h1>My store header</h1> 
            <a href="/" style={{ marginRight: 12 }}>Home</a>
            <a href="/products">Products</a>
        </nav>
    </header>)
}

export default Header;