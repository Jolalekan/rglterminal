import { LoadingState } from "@/components/loading-state";

export default function Loading() {
  return (
    <LoadingState 
      title="Loading Contact Information..." 
      description="Please wait while we fetch your contact information." 
    />
  );
}