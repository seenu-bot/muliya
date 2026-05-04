import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.includes("banglore")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/banglore/g, "bangalore");
    return NextResponse.redirect(url, 301);
  }

  // Keep site functional while routes still live under the old folder name.
  if (pathname.includes("bangalore")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/bangalore/g, "banglore");
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
