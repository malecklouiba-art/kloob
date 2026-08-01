import { MapPin } from "lucide-react";

interface UseCaseCardProps {
  title: string;
  description: string;
  index: number;
}

/** Carte "cas d'usage local" présentée sur les pages secteurs. */
export function UseCaseCard({ title, description, index }: UseCaseCardProps) {
  return (
    <div className="rounded-md border border-white/10 bg-ink-800 p-6 transition-colors duration-200 hover:border-accent/30">
      <div className="flex items-center gap-2 text-accent">
        <MapPin size={16} aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-wider">Cas n°{index + 1}</span>
      </div>
      <h3 className="mt-3 font-display text-lg font-bold text-bone">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-bone-muted">{description}</p>
    </div>
  );
}
