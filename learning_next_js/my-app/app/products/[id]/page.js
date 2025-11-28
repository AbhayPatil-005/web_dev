

const productpage=async({params})=>{

    const {id} = await params;
    return (
        <>
        <h1>
            Content coming soon: {id}

            </h1></>
    )
}

export default productpage;