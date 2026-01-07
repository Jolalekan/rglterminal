import { LoadingState } from "@/components/loading-state";

export default function Loading() {
  return (
    <LoadingState 
      title="Loading careers pages..." 
      description="Please wait while we fetch your careers pages." 
    />
  );
}