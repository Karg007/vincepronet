import * as React from "react";
import { cn } from "@/lib/utils";
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn("flex w-full rounded-2xl border px-3 py-2 text-sm outline-none focus:border-[#15B3C0] min-h-[120px]", className)} {...props}/>
  )
);
Textarea.displayName = "Textarea";
