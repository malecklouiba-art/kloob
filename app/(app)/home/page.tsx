"use client";

import { useState } from "react";
import {
  ChevronRight,
  HelpCircle,
  Sparkles,
  Calendar,
  UserPlus,
  ArrowRight,
} from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScoreGauge } from "@/components/ui/ScoreGauge";
import { ThemeToggle } from "@/components/shell/ThemeToggle";
import {
  currentUser,
  featuredRequest,
  nextRitual,
  topContributors,
  dailyQuote,
  openMatchingRequests,
} from "@/lib/mock";
import { cn } from "@/lib/utils";

const quickActions = [
  { key: "ask", label: "Demander de l'aide", Icon: HelpCircle },
  { key: "tip", label: "Partager un bon plan", Icon: Sparkles },
  { key: "agenda", label: "Voir l'agenda", Icon: Calendar },
  { key: "invite", label: "Inviter un proche", Icon: UserPlus },
];

export default function HomePage() {
  const [going, setGoing] = useState(nextRitual.going);

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 lg:px-7 lg:py-9">
      {/* Hello bar */}
      <header className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-display text-text-primary">
            Bonsoir, {currentUser.name}.
          </h1>
          <p className="mt-1 text-callout text-text-secondary">
            {openMatchingRequests} demandes ouvertes correspondent à tes skills aujourd'hui.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline-block"><ThemeToggle /></span>
          <Avatar name={currentUser.fullName} size={44} founder={currentUser.founder} />
        </div>
      </header>

      {/* Score card */}
      <Card glass className="mb-6">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-caption uppercase text-text-tertiary">Ce trimestre</p>
            <p className="mt-1 font-display text-title-2 text-text-primary">
              <span className="font-mono">{currentUser.trimesterScore}</span>
              <span className="text-text-tertiary"> / 100</span>
            </p>
            <ScoreGauge value={currentUser.trimesterScore} className="mt-3" />
          </div>
          <ChevronRight className="h-5 w-5 shrink-0 text-text-tertiary" strokeWidth={1.5} />
        </div>
      </Card>

      {/* Featured request */}
      <section className="mb-6">
        <h2 className="mb-3 font-display text-title-3 text-text-primary">
          Demande du jour
        </h2>
        <Card elevated className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar name={featuredRequest.author.name} size={44} />
            <div className="min-w-0 flex-1">
              <p className="text-headline text-text-primary">
                {featuredRequest.author.name}
              </p>
              <p className="text-footnote text-text-tertiary">
                {featuredRequest.author.skill} · {featuredRequest.postedAt}
              </p>
            </div>
            <Badge variant="navy">{featuredRequest.skill}</Badge>
          </div>
          <p className="text-body text-text-primary">{featuredRequest.body}</p>
          <Button fullWidth>
            Je peux aider
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Button>
        </Card>
      </section>

      {/* Quick actions */}
      <section className="mb-7">
        <div className="scrollbar-none -mx-4 flex gap-3 overflow-x-auto px-4 lg:mx-0 lg:px-0">
          {quickActions.map(({ key, label, Icon }) => (
            <button
              key={key}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2",
                "text-callout font-medium text-text-primary",
                "transition-all duration-180 hover:bg-bg-grouped active:scale-[0.97]",
              )}
            >
              <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Next ritual */}
      <section className="mb-7">
        <h2 className="mb-3 font-display text-title-3 text-text-primary">
          Prochain rituel
        </h2>
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-headline text-text-primary">{nextRitual.title}</p>
              <p className="mt-1 text-subhead text-text-secondary">{nextRitual.date}</p>
              <p className="text-subhead text-text-secondary">{nextRitual.location}</p>
              <p className="mt-3 text-footnote text-text-tertiary">
                {nextRitual.attendees}/{nextRitual.capacity} membres inscrits
              </p>
            </div>
            <Button
              variant={going ? "primary" : "secondary"}
              size="sm"
              onClick={() => setGoing((g) => !g)}
              aria-pressed={going}
            >
              {going ? "Je viens" : "Je viens ?"}
            </Button>
          </div>
        </Card>
      </section>

      {/* Top contributors */}
      <section className="mb-8">
        <h2 className="mb-3 font-display text-title-3 text-text-primary">
          Top contributeurs du mois
        </h2>
        <div className="scrollbar-none -mx-4 flex gap-5 overflow-x-auto px-4 lg:mx-0 lg:px-0">
          {topContributors.map((c) => (
            <div key={c.name} className="flex w-20 shrink-0 flex-col items-center gap-2 text-center">
              <Avatar name={c.name} size={64} founder={c.founder} />
              <p className="line-clamp-1 text-subhead font-medium text-text-primary">
                {c.name.split(" ")[0]}
              </p>
              <p className="text-caption uppercase text-text-tertiary">
                {c.services} services
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Daily quote */}
      <section className="py-9 text-center">
        <p className="mx-auto max-w-md font-display text-title-3 italic text-text-secondary">
          « {dailyQuote} »
        </p>
        <p className="mt-3 text-caption uppercase text-text-tertiary">
          Charte Kloob
        </p>
      </section>
    </div>
  );
}
