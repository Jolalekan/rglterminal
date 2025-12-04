import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is not defined");
}

export const generateTokens = (admin: { id: string; email: string; }) => {
  const accessToken = jwt.sign(
    { id: admin.id, email: admin.email}, // Include user data in the payload
    JWT_SECRET,
    { expiresIn: "7d" } //
  );

  
  return { accessToken };
};