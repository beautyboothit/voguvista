import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function middleware(request: NextRequest) {
  if (!request.cookies.has("userId")) {
    let id = uuidv4();
    request.cookies.set("userId", id);
  }

  return NextResponse.next();
}
