import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/*
 Utility helper for handling class names in the project.
 Combines multiple class values into a single string.
 Useful for conditional styling in React components.
 Also resolves conflicting Tailwind CSS classes.
*/
export function cn(...inputs: unknown[]) {
  return twMerge(clsx(inputs));
}