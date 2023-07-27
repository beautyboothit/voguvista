export const runtime="edge"
type Props = {
    params: {
        slug: string
    }
}
export default function CategopryPage({params}:Props){
    return (
        <div>
            <h1>{params.slug}</h1>
        </div>
    )


}