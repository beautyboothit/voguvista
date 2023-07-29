export const runtime = "edge";
import { set } from "@/lib/kv";
import { NextResponse } from "next/server";
export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
  ) {
    const slug = params.slug // 'a', 'b', or 'c'
    const res = await fetch(process.env.API_ENDPOINT + "products/" + slug);
    const product = await res.json();
    const response= await set('product_'+slug,{ product: product.data[0] });
    return NextResponse.json({ success: response });
  }