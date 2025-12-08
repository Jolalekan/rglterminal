export function generateSlug(name: string, email: string, type: string) {
  const cleanName = name?.toLowerCase().replace(/\s+/g, "-") || "guest";
  const emailUser = email?.split("@")[0]?.toLowerCase() || "unknown";
  const cleanType = type?.toLowerCase().replace(/\s+/g, "-");

  return `${cleanName}-${emailUser}-${cleanType}-${Date.now()}`;
}