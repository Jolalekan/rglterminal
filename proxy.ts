import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("auth-token")?.value;
  const {pathname} = req.nextUrl;

  const protectedRoutes =[
    "/dashboard",
    "/admin"
  ];

  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const authRoutes = ["/login", "/register"];
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));

  // If no token, redirect to login
   if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If user has a valid token
  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      
      // If logged in and trying to access login/register, redirect to dashboard
      if (isAuthRoute) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
      
      // Allow access to protected routes
      return NextResponse.next();
    } catch (err) {
      console.error("Invalid token:", err);
      // Token is invalid, delete it
      const response = isProtectedRoute 
        ? NextResponse.redirect(new URL("/login", req.url))
        : NextResponse.next();
      response.cookies.delete("auth-token");
      return response;
    }
  }

    if (isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/account/:path*",
    "/login",
    "/register"
  ],
};
