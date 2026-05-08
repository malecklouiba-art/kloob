"use client";

import { useMemo, useState } from "react";
import { Search, ArrowRight, MapPin } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Segment } from "@/components/ui/Segment";
import { serviceMembers } from "@/lib/mock";

type View = "wanted" | "offered" | "ongoing";

const segmentOptions = [
  { value: "wanted", label: "Je cherche" },
  { value: "offered", label: "Je propose" },
  { value: "ongoing", label: "En cours" },
] as const;

const ongoingExchanges = [
  { col: "Demandé", items: ["Relecture pitch deck — Inès"] },
  { col: "Accepté", items: ["Intro fond Seed — Sarah"] },
  { col: "En cours", items: ["Audit fiscal holding — Camille", "Recrutement Lead Dev — Hadrien"] },
  { col: "Terminé", items: ["Refonte LP — Léo"] },
];

export default function ServicesPage() {
  const [view, setView] = useState<View>("wanted");
  const [q, setQ] = useState("");

  const members = useMemo(
    () =>
      serviceMembers.filter((m) =>
        q.length === 0
          ? true
          : (m.name + m.skill + m.category).toLowerCase().includes(q.toLowerCase()),
      ),
    [q],
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 lg:px-7 lg:py-9">
      <header className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-title-1 text-text-primary">Échanges</h1>
          <p className="mt-1 text-callout text-text-secondary">
            Trouve le bon membre pour le bon besoin.
          </p>
        </div>
        <Segment
          value={view}
          onChange={(v) => setView(v as View)}
          options={segmentOptions as unknown as ReadonlyArray<{ value: View; label: string }>}
        />
      </header>

      {view !== "ongoing" && (
        <div className="mb-5 flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-3">
          <Search className="h-4 w-4 text-text-tertiary" strokeWidth={1.5} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Skill, catégorie, ville…"
            className="flex-1 bg-transparent text-body text-text-primary outline-none placeholder:text-text-tertiary"
          />
        </div>
      )}

      {view === "wanted" && (
        <ul className="space-y-3">
          {members.map((m) => (
            <li key={m.id}>
              <Card className="flex items-center gap-4">
                <Avatar name={m.name} size={44} founder={m.founder} />
                <div className="min-w-0 flex-1">
                  <p className="text-headline text-text-primary">{m.name}</p>
                  <p className="text-footnote text-text-tertiary">
                    {m.skill} · <span className="font-mono">{m.score}</span> pts
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-footnote text-text-tertiary">
                    <MapPin className="h-3 w-3" strokeWidth={1.5} />
                    {m.city}
                  </p>
                </div>
                <Button size="sm" variant="secondary">
                  Lui demander
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </Button>
              </Card>
            </li>
          ))}
          {members.length === 0 && (
            <p className="py-9 text-center text-body text-text-tertiary">
              Aucun membre ne correspond.
            </p>
          )}
        </ul>
      )}

      {view === "offered" && (
        <div className="grid gap-3 sm:grid-cols-2">
          {members.map((m) => (
            <Card key={m.id} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Avatar name={m.name} size={44} founder={m.founder} />
                <div className="min-w-0 flex-1">
                  <p className="text-headline text-text-primary">{m.name}</p>
                  <p className="text-footnote text-text-tertiary">{m.city}</p>
                </div>
                <Badge variant="navy">{m.category}</Badge>
              </div>
              <p className="text-body text-text-primary">{m.skill}</p>
              <Button size="sm" variant="secondary">
                Proposer un échange
              </Button>
            </Card>
          ))}
        </div>
      )}

      {view === "ongoing" && (
        <div className="-mx-4 grid grid-cols-2 gap-3 px-4 sm:grid-cols-4 lg:mx-0 lg:px-0">
          {ongoingExchanges.map((col) => (
            <section key={col.col}>
              <p className="mb-2 px-1 text-caption uppercase text-text-tertiary">{col.col}</p>
              <ul className="space-y-2">
                {col.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-sm border border-border bg-surface p-3 text-subhead text-text-primary"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
