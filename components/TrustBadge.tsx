import type { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  label: string;
  detail?: string;
}

/** Badge de réassurance (agrément, certification, disponibilité). */
export function TrustBadge({ icon: Icon, label, detail }: TrustBadgeProps) {
  return (
    <div className="group flex items-center gap-3 rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-colors duration-200 hover:border-accent/30 hover:bg-white/[0.05]">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xs bg-accent/10 text-accent">
        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-bone">{label}</p>
        {detail ? <p className="mt-0.5 text-xs leading-snug text-bone-muted">{detail}</p> : null}
      </div>
    </div>
  );
}
