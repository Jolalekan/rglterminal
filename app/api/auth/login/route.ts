
import { compare } from "bcrypt";
import { generateTokens } from "@/lib/auth";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { verifyToken } from "@/lib/verify-token";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." },{status: 400});
    }

    
    // Normalize email
    const normalizedEmail = email.toLowerCase();

    const admin = await prismadb.admin.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

    if (!admin) {
      return NextResponse.json({ error: "admin not found." }, {status:404});
    }

    if (!admin?.password) {
      return NextResponse.json({ error: "Invalid credentials." }, {status:401});
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await compare(password, admin?.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid credentials." },{status: 401});
    }

    // Generate tokens
    const { accessToken } = generateTokens({
      id: admin.id,
      email: admin.email,
    });

// ✅ Return response with cookie
const response = NextResponse.json(
  {
    message: "Login successful",
    admin: {
      id: admin.id,
      email: admin.email,
    },
  },
  { status: 200 }
);

// set the auth cookie on the response
response.cookies.set({
  name: "auth-token",
  value: accessToken,
  httpOnly: true,
  path: "/",
  maxAge: 7 * 24 * 60 * 60, // 7 days
});

return response;
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ error: "Internal Server Error" }, {status: 500});
  }
}

  export async function GET(req: Request) {
    try {
      // ✅ Verify JWT Token
      const { admin:tokenPayload, error } = await verifyToken();
  
      if (error) {
        return NextResponse.json({ error: "Invalid token." }, {status:400});
      }
  
      // Extract the accountId from the decoded token
      const adminId = tokenPayload?.id;
  
      if (!adminId) {
        return NextResponse.json({ error: "admin ID is missing." },{status: 400});
      }
      // ✅ Fetch admin details from Prisma
      const admin = await prismadb.admin.findUnique({
        where: { id: adminId },
      });
  
      if (!admin) {
        return NextResponse.json({ error: "admin not found." },{status: 404});
      }
  
      return NextResponse.json({
        id:admin.id,
        email: admin.email,
      }); // Return admin data
    } catch (error) {
      console.error("Error fetching admin details:", error);
      return NextResponse.json({ error: "Internal Server Error" }, {status: 500});
    }
  }
  
 