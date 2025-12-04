import { NextResponse } from "next/server";

export async function middleware(req) {

  const token = req.cookies.get("auth")?.value;

  if (token === "1") {

    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/products/:path*"],
};