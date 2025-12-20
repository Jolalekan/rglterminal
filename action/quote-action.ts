import prismadb from "@/lib/prismadb";

export const getQuoteStatusCounts = async () => {
  try {
    const [total, newCount, readCount, respondedCount] = await Promise.all([
      prismadb.quoteRequest.count(),
      prismadb.quoteRequest.count({ where: { status: "New" } }),
      prismadb.quoteRequest.count({ where: { status: "Read" } }),
      prismadb.quoteRequest.count({ where: { status: "Responded" } })
    ]);
    
    return {
      total,
      new: newCount,
      read: readCount,
      responded: respondedCount
    };
  } catch (error) {
    console.error("Error fetching quote stats:", error);
    return { total: 0, new: 0, read: 0, responded: 0 };
  }
};