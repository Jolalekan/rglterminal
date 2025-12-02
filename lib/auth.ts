import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is not defined");
}

export const generateTokens = (user: { id: number; email: string; }) => {
  const accessToken = jwt.sign(
    { id: user.id, email: user.email}, // Include user data in the payload
    JWT_SECRET,
    { expiresIn: "7d" } //
  );

  
  return { accessToken };
};