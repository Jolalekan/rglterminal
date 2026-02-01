export function getStatusColor(status: string) {
  const colors: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-800",
    Pickedup: "bg-blue-100 text-blue-800",
    Transit: "bg-purple-100 text-purple-800",
    Shipped: "bg-indigo-100 text-indigo-800",
    Delivered: "bg-green-100 text-green-800",
    Failed: "bg-red-100 text-red-800",
    Returned: "bg-orange-100 text-orange-800",
    Cancelled: "bg-gray-100 text-gray-800",
  };
  return colors[status] || "bg-gray-100 text-gray-800";
}