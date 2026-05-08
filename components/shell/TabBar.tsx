"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Radio, Handshake, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/home", label: "Accueil", icon: Home },
  { href: "/feed", label: "Actu", icon: Radio },
  { href: "/services", label: "Échanges", icon: Handshake },
  { href: "/messages", label: "Chat", icon: MessageCircle },
  { href: "/profile", label: "Profil", icon: User },
];

export function TabBar() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Navigation"
      className="glass fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-border px-2 pb-[env(safe-area-inset-bottom)] pt-2 lg:hidden"
    >
      {items.map((item) => {
        const active = pathname === item.href || pathname?.startsWith(item.href + "/");
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-1 flex-col items-center gap-1 rounded-md py-1 transition-colors duration-180",
              active ? "text-accent" : "text-text-tertiary",
            )}
          >
            <Icon className="h-6 w-6" strokeWidth={1.5} />
            <span className="text-caption uppercase">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
