export const runtime="edge"
import { KVNamespace } from "@cloudflare/workers-types";
type Props = {
    params: {
        slug: string
    }
}
export default async function CategopryPage({params}:Props){
    const { data } = (process.env as unknown as { data:KVNamespace });
    const homeData=await data.get('home_data');
    return (
        <div>
            <h1>{params.slug}</h1>
        </div>
    )


}