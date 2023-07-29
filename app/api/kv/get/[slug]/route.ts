export const runtime = "edge";
import { get } from "@/lib/kv";
import { NextResponse } from "next/server";
export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
  ) {
    const response=await get(params.slug);
    return NextResponse.json({ data: response });
  }