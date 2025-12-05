import Link from "next/link";

export const metadata ={
  "title":"Products Store - Products List"
}

export default async function ProductsPage(){
    const res = await fetch("https://dummyjson.com/products",{
        cache:"force-cache"
    })

    const data =  await res.json();
    const products =  data.products;

    return (
        <div className="p-5px">
            <h1>Products</h1>
            <ul className="m-8">
                {products.map((product)=>(
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`} >
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul> 
        </div>)
}