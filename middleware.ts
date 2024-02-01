import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define paths that are considered public (accessible without a token)
  const isPublicPath =
    path === "/" || path === "/signup" || path === "/verifyemail";
  const apiPath = path.includes("/api");
  const token = request.cookies.get("token")?.value || "";

  if (path.includes("/dashboard")) {
    return;
  }

  if (apiPath) {
    return;
  }

  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  // Continue to the requested path if it's neither a public path nor an API path
  return;
}

// It specifies the paths for which this middleware should be executed.
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
