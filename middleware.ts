import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.includes("banglore")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/banglore/g, "bangalore");
    return NextResponse.redirect(url, 301);
  }

  if (pathname.endsWith("/collections/indian-bridal") || pathname.endsWith("/collections/bridal-wedding-jewellery-bangalore")) {
    const url = request.nextUrl.clone();
    url.pathname = "/bridal-wedding-jewellery-bangalore";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
