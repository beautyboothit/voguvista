import { KVNamespace } from "@cloudflare/workers-types";
export const  get =async(key:string)=>{
    const { data } = (process.env as unknown as { data:KVNamespace });
    const res= await data.get(key);
    return JSON.parse(res!);
}
export const  set =async(key:string,value:any)=>{
    const { data } = (process.env as unknown as { data:KVNamespace });
    const res= await data.put(key,JSON.stringify(value));
}