import { LoadingState } from "@/components/loading-state";

export default function Loading() {
  return (
    <LoadingState 
      title="Loading shipping information..." 
      description="Please wait while we fetch your shipping information." 
    />
  );
}