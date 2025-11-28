import Link from "next/link";

export default function ProductsPage(){
    const productIds = [1,2,3,4,5,6,7,8,9,10];
    return (<div>
        <h1>Products Page</h1>
        <ul>
            {productIds.map((id)=>(
                <li key={id}>
                    <Link href={`/products/${id}`} >
                        View Product {id}
                    </Link>
                </li>
            ))}
        </ul> 
    </div>)
}