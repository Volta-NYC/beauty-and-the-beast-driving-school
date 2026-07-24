import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  const filtered = inputs.filter((input): input is string => typeof input === "string" && input.length > 0)
  return twMerge(...filtered)
}