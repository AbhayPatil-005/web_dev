export async function generateMetadata({params}){
    return {
    "title": `Hello, ${params.name}`,
        openGraph: {
            images: ['/some-specific-page-image.jpg', ...previousImages],
        },
    }
}
export default function HelloPage({params}){
    return (
        <H1>Welcome, {params.name}</H1>
    )
}