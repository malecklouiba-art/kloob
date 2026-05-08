"use client";

import { Settings, LogOut, Pencil } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScoreGauge } from "@/components/ui/ScoreGauge";
import { profile } from "@/lib/mock";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6 lg:px-7 lg:py-9">
      <header className="mb-6 flex items-start justify-between">
        <h1 className="font-display text-title-1 text-text-primary">Profil</h1>
        <button
          aria-label="Réglages"
          className="flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors duration-180 hover:bg-bg-grouped hover:text-text-primary"
        >
          <Settings className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </header>

      <Card elevated className="mb-5">
        <div className="flex items-start gap-4">
          <Avatar name={profile.fullName} size={64} founder={profile.founder} />
          <div className="min-w-0 flex-1">
            <p className="font-display text-title-2 text-text-primary">{profile.fullName}</p>
            <p className="text-footnote text-text-tertiary">
              {profile.city} · membre depuis {profile.joinedAt}
            </p>
            {profile.founder && (
              <div className="mt-2">
                <Badge variant="gold">Fondateur</Badge>
              </div>
            )}
          </div>
          <Button size="sm" variant="secondary" aria-label="Modifier">
            <Pencil className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Button>
        </div>

        <p className="mt-4 text-body text-text-primary">{profile.bio}</p>
      </Card>

      <Card glass className="mb-5">
        <div className="flex items-center justify-between">
          <p className="text-caption uppercase text-text-tertiary">Ce trimestre</p>
          <p className="text-footnote text-text-tertiary">
            {profile.lifetimeContributions} services depuis l'entrée
          </p>
        </div>
        <p className="mt-1 font-display text-title-2 text-text-primary">
          <span className="font-mono">{profile.trimesterScore}</span>
          <span className="text-text-tertiary"> / 100</span>
        </p>
        <ScoreGauge value={profile.trimesterScore} className="mt-3" />
      </Card>

      <section className="mb-5">
        <h2 className="mb-3 text-headline text-text-primary">Je propose</h2>
        <div className="flex flex-wrap gap-2">
          {profile.offered.map((s) => (
            <Badge key={s} variant="navy">{s}</Badge>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-3 text-headline text-text-primary">Je cherche</h2>
        <div className="flex flex-wrap gap-2">
          {profile.wanted.map((s) => (
            <Badge key={s} variant="default">{s}</Badge>
          ))}
        </div>
      </section>

      <section className="mb-7">
        <h2 className="mb-3 text-headline text-text-primary">Badges</h2>
        <div className="grid grid-cols-3 gap-3">
          {profile.badges.map((b) => (
            <Card key={b.key} className="flex flex-col items-center justify-center gap-2 p-4 text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 font-mono text-headline text-gold">
                ★
              </span>
              <p className="text-subhead text-text-primary">{b.label}</p>
            </Card>
          ))}
        </div>
      </section>

      <button className="flex w-full items-center justify-center gap-2 rounded-md py-3 text-callout text-danger transition-colors duration-180 hover:bg-danger/10">
        <LogOut className="h-4 w-4" strokeWidth={1.5} />
        Se déconnecter
      </button>
    </div>
  );
}
