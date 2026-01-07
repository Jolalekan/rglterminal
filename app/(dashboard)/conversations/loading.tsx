import { LoadingState } from "@/components/loading-state";

export default function Loading() {
  return (
    <LoadingState 
      title="Loading conversation page..." 
      description="Please wait while we fetch your conversation page." 
    />
  );
}