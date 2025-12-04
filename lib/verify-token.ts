
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET_KEY = process.env.JWT_SECRET!;

interface DecodedToken {
  id: string;
  email: string;
}

export async function verifyToken() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;

    if (!token) {
      return { error: "Unauthorized: No token provided", status: 401, admin: null };
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY) as DecodedToken;
      return { admin: decoded };
    } catch (error) {
      if ((error as Error).name === "TokenExpiredError") {
        return { error: "TokenExpired", status: 401, admin: null };
      }
      return { error: "Unauthorized: Invalid token", status: 401, admin: null };
    }
  } catch (error) {
    console.error("Token verification error:", error);
    return { error: "Unauthorized: Invalid token", status: 401, admin: null };
  }
}

// import jwt from "jsonwebtoken";
// import { cookies } from "next/headers";

// const SECRET_KEY = process.env.JWT_SECRET!;

// interface DecodedToken {
//   id: string;
//   email: string;
// }

// export async function verifyToken(req?: Request) {
//   try {
//     let token: string | null = null;

//     // ✅ Option 1: Check for Bearer token in Authorization header
//     const authHeader = req?.headers.get("Authorization");
//     if (authHeader && authHeader.startsWith("Bearer ")) {
//       token = authHeader.split(" ")[1];
//     }

//     // ✅ Option 2: Check for cookie (fallback or primary for browser requests)
//     if (!token) {
//       const cookieStore = await cookies();
//       token = cookieStore.get("auth-token")?.value || null;
//     }

//     // If no token found in either location
//     if (!token) {
//       return { error: "Unauthorized: No token provided", status: 401 };
//     }

//     try {
//       // Verify the token and decode its payload
//       const decoded = jwt.verify(token, SECRET_KEY) as DecodedToken;

//       // Return the decoded admin information
//       return { admin: decoded };
//     } catch (error) {
//       // Handle specific JWT errors
//       if ((error as Error).name === "TokenExpiredError") {
//         return { error: "TokenExpired", status: 401 };
//       }
//       return { error: "Unauthorized: Invalid token", status: 401 };
//     }
//   } catch (error) {
//     console.error("Token verification error:", error);
//     return { error: "Unauthorized: Invalid token", status: 401 };
//   }
// }
