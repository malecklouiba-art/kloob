"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Radio,
  Handshake,
  MessageCircle,
  User,
  Award,
  BookOpen,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const primary = [
  { href: "/home", label: "Accueil", icon: Home },
  { href: "/feed", label: "Actu", icon: Radio },
  { href: "/services", label: "Échanges", icon: Handshake },
  { href: "/messages", label: "Chat", icon: MessageCircle },
  { href: "/profile", label: "Profil", icon: User },
];

const secondary = [
  { href: "/score", label: "Score & badges", icon: Award },
  { href: "/charter", label: "Charte", icon: BookOpen },
  { href: "/events", label: "Événements", icon: Calendar },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-60 shrink-0 flex-col gap-5 border-r border-border bg-bg-elevated px-4 py-6">
      <Link href="/home" className="px-2">
        <span className="font-display text-title-3 tracking-tight text-text-primary">
          kloob<span className="text-gold">.</span>
        </span>
      </Link>

      <nav className="flex flex-col gap-1">
        {primary.map((item) => {
          const active = pathname === item.href || pathname?.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-callout font-medium transition-colors duration-180",
                active
                  ? "bg-accent/10 text-accent"
                  : "text-text-secondary hover:bg-bg-grouped hover:text-text-primary",
              )}
            >
              <Icon className="h-5 w-5" strokeWidth={1.5} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-2">
        <p className="px-3 pb-2 text-caption uppercase text-text-tertiary">
          Le club
        </p>
        <div className="flex flex-col gap-1">
          {secondary.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-callout font-medium transition-colors duration-180",
                  active
                    ? "bg-accent/10 text-accent"
                    : "text-text-secondary hover:bg-bg-grouped hover:text-text-primary",
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={1.5} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between px-3">
        <span className="text-footnote text-text-tertiary">v0.1 · Mai 2026</span>
        <ThemeToggle />
      </div>
    </aside>
  );
}
