"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, PhoneCall, ShieldCheck, X } from "lucide-react";
import { navServices, PHONE_EMERGENCY } from "@/lib/data";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-panel py-3" : "bg-transparent py-5"
      )}
    >
      <nav className="container-elvez flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-bone">
          <span className="flex h-9 w-9 items-center justify-center rounded-xs bg-accent text-ink-950">
            <ShieldCheck size={20} strokeWidth={2} aria-hidden="true" />
          </span>
          Elvez
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-xs px-4 py-2 text-sm font-medium text-bone-muted transition-colors duration-200 hover:text-bone"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Nos services
              <ChevronDown size={15} className={cn("transition-transform duration-200", servicesOpen && "rotate-180")} aria-hidden="true" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
                >
                  <div className="glass-panel overflow-hidden rounded-md p-2 shadow-elev-3">
                    {navServices.map(({ slug, title, tagline, icon: Icon }) => (
                      <Link
                        key={slug}
                        href={`/services/${slug}`}
                        className="flex items-start gap-3 rounded-sm px-3 py-3 transition-colors duration-150 hover:bg-white/5"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xs bg-accent/10 text-accent">
                          <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-bone">{title}</span>
                          <span className="block text-xs text-bone-muted">{tagline}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xs px-4 py-2 text-sm font-medium text-bone-muted transition-colors duration-200 hover:text-bone"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={`tel:${PHONE_EMERGENCY.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-bone-muted transition-colors duration-200 hover:text-accent"
          >
            <PhoneCall size={16} aria-hidden="true" />
            {PHONE_EMERGENCY}
          </Link>
          <Link
            href="/contact"
            className="rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-accent-glow transition-all duration-200 hover:bg-accent-400"
          >
            Devis rapide
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xs text-bone lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="container-elvez flex flex-col gap-1 pb-6 pt-4">
              <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-bone-faint">
                Nos services
              </p>
              {navServices.map(({ slug, title, icon: Icon }) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="flex items-center gap-3 rounded-sm px-3 py-3 text-sm font-medium text-bone hover:bg-white/5"
                >
                  <Icon size={18} className="text-accent" aria-hidden="true" />
                  {title}
                </Link>
              ))}
              <div className="my-2 h-px bg-white/10" />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-sm px-3 py-3 text-sm font-medium text-bone hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-3 flex items-center justify-center rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-ink-950"
              >
                Devis rapide
              </Link>
              <Link
                href={`tel:${PHONE_EMERGENCY.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-sm border border-accent/30 px-5 py-3 text-sm font-semibold text-accent"
              >
                <PhoneCall size={16} aria-hidden="true" />
                Urgence 24/7
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
