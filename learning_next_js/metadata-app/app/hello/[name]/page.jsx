export async function generateMetadata({params}){
    return {
    "title": `Hello, ${params.name}`,
    }
}
export default function HelloPage({params}){
    return (
        <H1>Welcome, {params.name}</H1>
    )
}