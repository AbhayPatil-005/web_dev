import Image from "next/image";

export async function generateMetadata({params}){
    const { id } = await params;

    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await res.json();
    return {
    "title": `${product.title} - Products Store`,
    }
}

const productpage=async({params})=>{

    const {id} = await params;
    const res = await fetch(`https://dummyjson.com/products/${id}`,{
        cache:"force-cache",
    })

    const product = await res.json();

    return (
        <div>
            <h1>{product.title}</h1>
            <Image src={"/image.png"} 
                alt="product"
                width={500}
                height={500}
            />
            <p>{product.description}</p>
            <p><strong>Price: </strong> ${product.price}</p>
            <a href='/products'> Back to products</a>
        </div>
    )
}

export default productpage;