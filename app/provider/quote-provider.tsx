"use client";

import { createContext, useContext, useState } from "react";
import QuoteForm from "@/components/quote-form";

type QuoteContextType = {
  openQuote: () => void;
};

const QuoteContext = createContext<QuoteContextType | null>(null);

export const useQuote = () => {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used inside QuoteProvider");
  return ctx;
};

export default function QuoteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <QuoteContext.Provider value={{ openQuote: () => setOpen(true) }}>
      {children}

      <QuoteForm
        open={open}
        onOpenChange={() => setOpen(false)}
      />
    </QuoteContext.Provider>
  );
}
