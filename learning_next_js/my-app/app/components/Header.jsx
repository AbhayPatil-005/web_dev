import Image from "next/image";

const Header=()=>{
    return(<header>

        
        <nav style={{ display:"flex", gap:"50px", padding: 16, background: "var(--background)" }}>
            
                <Image src={'/image2.png'} height={10} width={20} alt="logo" />
                <h1>My store header</h1> 
            <a href="/" style={{ marginRight: 12 }}>Home</a>
            <a href="/products">Products</a>
        </nav>
    </header>)
}

export default Header;