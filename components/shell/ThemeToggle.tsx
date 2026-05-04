"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = (localStorage.getItem("kloob-theme") as Theme | null) ?? null;
    const initial: Theme =
      stored ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("kloob-theme", next);
  };

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Passer en clair" : "Passer en sombre"}
      onClick={toggle}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full text-text-secondary",
        "transition-colors duration-180 hover:bg-bg-grouped hover:text-text-primary",
        "active:scale-[0.95]",
        className,
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" strokeWidth={1.5} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.5} />
      )}
    </button>
  );
}
