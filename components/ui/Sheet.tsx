"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface SheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Sheet({ open, onClose, children, title, className }: SheetProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <button
            aria-label="Fermer"
            className="absolute inset-0 bg-black/30"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ y: "100%", opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0.6 }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            className={cn(
              "relative w-full max-w-lg rounded-t-xl border-t border-border bg-bg-elevated p-5 shadow-elev-3",
              "sm:rounded-xl sm:border sm:p-6",
              className,
            )}
          >
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-border sm:hidden" />
            {title && (
              <h2 className="mb-3 font-display text-title-3 text-text-primary">{title}</h2>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
