export default async function ProductPage({ params }) {
    const {id} =  await params
    return (
    <div>
      <h1>Product Details for ID: {id}</h1>
      <a href="/products">Back to products</a>
    </div>
  );
}