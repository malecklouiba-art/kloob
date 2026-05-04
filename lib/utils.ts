import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function initialsFromName(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

const PASTELS = [
  "#FFE6D5",
  "#E2EBFF",
  "#E8F7E0",
  "#FFE9F1",
  "#FFF4D2",
  "#E5EEFD",
  "#F2E6FF",
];

export function pastelFromName(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) | 0;
  return PASTELS[Math.abs(hash) % PASTELS.length];
}
