import { LoadingState } from "@/components/loading-state";

export default function Loading() {
  return (
    <LoadingState 
      title="Loading storage information..." 
      description="Please wait while we fetch your storage information." 
    />
  );
}