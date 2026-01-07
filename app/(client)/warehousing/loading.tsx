import { LoadingState } from "@/components/loading-state";

export default function Loading() {
  return (
    <LoadingState 
      title="Loading warehouse  information..." 
      description="Please wait while we fetch your warehouse information." 
    />
  );
}