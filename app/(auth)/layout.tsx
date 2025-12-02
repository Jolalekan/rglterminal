import Image from "next/image";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}
export default async function AuthLayout({ children }: AuthLayoutProps) {
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div>
        <Image
          src="/logo.jpg"
          alt="logo"
          width={100}
          height={100}
          style={{ width: "100px", height: "100px", objectFit: "contain" }}
        />
      </div>
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
