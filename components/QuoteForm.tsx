"use client";

import { useState, type FormEvent } from "react";
import { HardHat, PartyPopper, ShieldCheck, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceOptions = [
  { value: "btp-chantiers", label: "BTP & Chantiers", icon: HardHat },
  { value: "evenementiel", label: "Événementiel", icon: PartyPopper },
  { value: "gardiennage", label: "Gardiennage", icon: ShieldCheck },
] as const;

interface QuoteFormProps {
  compact?: boolean;
  defaultService?: string;
  className?: string;
}

type Status = "idle" | "submitting" | "success";

/**
 * Formulaire de demande de devis. La sélection du type de prestation en amont
 * (cartes radio) pré-qualifie la demande avant les champs de contexte/contact.
 */
export function QuoteForm({ compact = false, defaultService, className }: QuoteFormProps) {
  const [service, setService] = useState<string>(defaultService ?? "");
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Intégration backend/CRM à brancher ici (API route, email transactionnel, etc.)
    window.setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className={cn("flex flex-col items-center gap-3 rounded-md border border-amber/30 bg-amber/5 px-6 py-12 text-center", className)}>
        <CheckCircle2 size={40} className="text-amber" aria-hidden="true" />
        <p className="font-display text-xl font-bold text-bone">Demande envoyée</p>
        <p className="max-w-sm text-sm text-bone-muted">
          Un conseiller Elvez vous recontacte sous 24h ouvrées. Pour une urgence, appelez directement notre astreinte.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-bone">
          Type de prestation <span className="text-amber">*</span>
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {serviceOptions.map(({ value, label, icon: Icon }) => {
            const active = service === value;
            return (
              <label
                key={value}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-sm border px-4 py-3.5 transition-all duration-200",
                  active
                    ? "border-amber bg-amber/10 text-bone"
                    : "border-white/10 bg-white/[0.02] text-bone-muted hover:border-white/25"
                )}
              >
                <input
                  type="radio"
                  name="service"
                  value={value}
                  checked={active}
                  onChange={() => setService(value)}
                  className="sr-only"
                  required
                />
                <Icon size={20} className={active ? "text-amber" : "text-bone-faint"} aria-hidden="true" />
                <span className="text-sm font-medium">{label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className={cn("grid gap-5", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-bone">
            Nom / société <span className="text-amber">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-bone placeholder:text-bone-faint focus:border-amber/60 focus:bg-white/[0.04] focus:outline-none"
            placeholder="Votre nom ou raison sociale"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-bone">
            Téléphone <span className="text-amber">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-bone placeholder:text-bone-faint focus:border-amber/60 focus:bg-white/[0.04] focus:outline-none"
            placeholder="06 00 00 00 00"
          />
        </div>
        <div>
          <label htmlFor="dates" className="mb-1.5 block text-sm font-semibold text-bone">
            Dates souhaitées
          </label>
          <input
            id="dates"
            name="dates"
            type="text"
            className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-bone placeholder:text-bone-faint focus:border-amber/60 focus:bg-white/[0.04] focus:outline-none"
            placeholder="Ex : à partir du 15/09"
          />
        </div>
        <div>
          <label htmlFor="location" className="mb-1.5 block text-sm font-semibold text-bone">
            Lieu d'intervention
          </label>
          <input
            id="location"
            name="location"
            type="text"
            className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-bone placeholder:text-bone-faint focus:border-amber/60 focus:bg-white/[0.04] focus:outline-none"
            placeholder="Ville, Bouches-du-Rhône"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-bone">
          Votre besoin
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 2 : 4}
          className="w-full resize-none rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-bone placeholder:text-bone-faint focus:border-amber/60 focus:bg-white/[0.04] focus:outline-none"
          placeholder="Décrivez brièvement votre besoin (nombre d'agents, contexte, contraintes...)"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-amber px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-amber-glow transition-all duration-200 ease-sharp hover:bg-amber-400 disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Envoi en cours…
          </>
        ) : (
          "Demander mon devis"
        )}
      </button>
      <p className="text-xs text-bone-faint">
        Réponse sous 24h ouvrées. Vos données ne sont utilisées que pour traiter votre demande.
      </p>
    </form>
  );
}
