import { KVNamespace } from "@cloudflare/workers-types";
export const  get =async(key:string)=>{
    const { data } = (process.env as unknown as { data:KVNamespace });
    try{
        const res= await data.get(key);
    return JSON.parse(res!);
    }
    catch(e){
        return null;
    }
}
export const  set =async(key:string,value:any)=>{
    const { data } = (process.env as unknown as { data:KVNamespace });
    try{
        const res= await data.put(key,JSON.stringify(value));
    }
    catch(e){

    }
}