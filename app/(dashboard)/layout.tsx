import Menu from "@/components/menu";
import { verifyToken } from "@/lib/verify-token";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { admin: tokenPayload } = await verifyToken();

  // Extract the userId from the decoded token
  const admin = tokenPayload?.id;

  if (!admin) {
    redirect("/login");
  }

  return (

<div className=" overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside
        className="
          fixed top-0 left-0
          h-screen
          w-56 lg:w-64 xl:w-72
          bg-white border-r
          p-4
          overflow-y-auto
          z-50
        "
      >
        <Link href="/dashboard" className="flex items-center gap-3 mb-6">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <span className="hidden lg:block font-bold text-lg">
            Rolling Grazing
          </span>
        </Link>

        <Menu />
      </aside>

      {/* Main content */}
     <main className="ml-56 lg:ml-64 xl:ml-72  overflow-hidden bg-gray-100">
        {children}
      </main>
    </div>
  );
}
