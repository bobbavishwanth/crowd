import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/*
 Utility helper for handling class names in the project.
 Combines multiple class values into a single string.
 Useful for conditional styling in React components.
 Also resolves conflicting Tailwind CSS classes.
*/
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Import clsx: used to conditionally combine class names
// Example: clsx("btn", isActive && "btn-active")
import { clsx } from "clsx";

// Import tailwind-merge: resolves conflicts between Tailwind classes
// Example: "p-2 p-4" -> "p-4"
import { twMerge } from "tailwind-merge";

/**
 * cn (class names) utility function
 *
 * Purpose:
 * This function is a helper used across the project to safely combine
 * multiple CSS class names, especially when using Tailwind CSS.
 *
 * Why it exists:
 * - React components often need dynamic class names
 * - Tailwind classes can conflict (e.g., p-2 and p-4)
 * - This function merges them and removes conflicts
 *
 * What it does:
 * 1. clsx() combines class names conditionally
 * 2. twMerge() removes conflicting Tailwind classes
 *
 * Example usage in components:
 *
 * className={cn(
 *   "p-2 text-white",
 *   isActive && "bg-blue-500",
 *   isDisabled && "opacity-50"
 * )}
 *
 * If conflicting Tailwind classes appear:
 * cn("p-2", "p-4") -> "p-4"
 *
 * This function is typically imported like:
 * import { cn } from "@/lib/utils"
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}