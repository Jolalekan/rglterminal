import { LoadingState } from "@/components/loading-state";

export default function Loading() {
  return (
    <LoadingState 
      title="Loading terminal information..." 
      description="Please wait while we fetch your terminal information." 
    />
  );
}