import { Loader2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge("flex", className)}>
      <Loader2 className="size-full animate-spin"></Loader2>
    </div>
  );
};

export default Loader;
