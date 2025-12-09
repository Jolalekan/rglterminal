import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("auth-token")?.value;

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.next(); // Allow request
  } catch (err) {
    console.error("Middleware error:", err);
    const response = NextResponse.redirect(new URL("/login", req.url));
    response.cookies.delete("auth-token");
    return response;
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/account/:path*",
  ],
};
