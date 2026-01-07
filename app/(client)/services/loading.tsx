import { LoadingState } from "@/components/loading-state";

export default function Loading() {
  return (
    <LoadingState 
      title="Loading services information..." 
      description="Please wait while we fetch your services information." 
    />
  );
}