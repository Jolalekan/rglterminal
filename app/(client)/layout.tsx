import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import QuoteProvider from "../provider/quote-provider";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
       <>
      <QuoteProvider>
        <Navbar />
        {children}
        <Footer />
      </QuoteProvider>
    </>
  );
}
