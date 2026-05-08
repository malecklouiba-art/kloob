"use client";

import { useMemo, useState } from "react";
import { Hand, MessageCircle, Share2 } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Segment } from "@/components/ui/Segment";
import { Sheet } from "@/components/ui/Sheet";
import { Button } from "@/components/ui/Button";
import { feedPosts, currentUser, type FeedKind } from "@/lib/mock";
import { cn } from "@/lib/utils";

type Filter = "all" | FeedKind;

const filters = [
  { value: "all", label: "Tout" },
  { value: "request", label: "Demandes" },
  { value: "tip", label: "Bons plans" },
  { value: "announcement", label: "Annonces" },
] as const;

const kindBadge: Record<FeedKind, { label: string; variant: "navy" | "gold" | "default" }> = {
  request: { label: "Demande", variant: "navy" },
  tip: { label: "Bon plan", variant: "gold" },
  announcement: { label: "Annonce", variant: "default" },
};

export default function FeedPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [composerOpen, setComposerOpen] = useState(false);

  const visible = useMemo(
    () => (filter === "all" ? feedPosts : feedPosts.filter((p) => p.kind === filter)),
    [filter],
  );

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 lg:px-7 lg:py-9">
      <header className="mb-5">
        <h1 className="font-display text-title-1 text-text-primary">Actu</h1>
        <p className="mt-1 text-callout text-text-secondary">
          Le fil d'entraide du club, en direct.
        </p>
      </header>

      <div className="glass sticky top-0 z-30 -mx-4 mb-4 px-4 py-3 lg:-mx-7 lg:px-7">
        <div className="scrollbar-none flex overflow-x-auto">
          <Segment
            value={filter}
            onChange={(v) => setFilter(v as Filter)}
            options={filters as unknown as ReadonlyArray<{ value: Filter; label: string }>}
          />
        </div>
      </div>

      <button
        onClick={() => setComposerOpen(true)}
        className="mb-5 flex w-full items-center gap-3 rounded-md border border-border bg-surface p-3 text-left transition-colors duration-180 hover:bg-bg-grouped"
      >
        <Avatar name={currentUser.fullName} size={28} />
        <span className="text-callout text-text-tertiary">
          Quoi de neuf, {currentUser.name} ?
        </span>
      </button>

      <ul className="space-y-4">
        {visible.map((post) => {
          const k = kindBadge[post.kind];
          return (
            <li key={post.id}>
              <Card>
                <div className="mb-3 flex items-center gap-3">
                  <Avatar
                    name={post.author.name}
                    size={44}
                    founder={post.author.founder}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-headline text-text-primary">{post.author.name}</p>
                    <p className="text-footnote text-text-tertiary">
                      {post.author.skill} · {post.postedAt}
                    </p>
                  </div>
                  <Badge variant={k.variant}>{k.label}</Badge>
                </div>

                <p className="line-clamp-3 text-body text-text-primary">{post.body}</p>

                <div className="mt-4 flex items-center gap-5 text-text-secondary">
                  <button className="flex items-center gap-1.5 text-subhead transition-colors duration-180 hover:text-accent">
                    <Hand className="h-4 w-4" strokeWidth={1.5} />
                    J'aide
                    {post.helped > 0 && (
                      <span className="text-text-tertiary">· {post.helped}</span>
                    )}
                  </button>
                  <button className="flex items-center gap-1.5 text-subhead transition-colors duration-180 hover:text-text-primary">
                    <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                    Commenter
                    {post.replies > 0 && (
                      <span className="text-text-tertiary">· {post.replies}</span>
                    )}
                  </button>
                  <button
                    className={cn(
                      "ml-auto flex items-center gap-1.5 text-subhead",
                      "transition-colors duration-180 hover:text-text-primary",
                    )}
                  >
                    <Share2 className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>

      <Sheet open={composerOpen} onClose={() => setComposerOpen(false)} title="Nouveau post">
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" size="sm">Demande</Button>
          <Button variant="secondary" size="sm">Bon plan</Button>
          <Button variant="secondary" size="sm">Annonce</Button>
        </div>
        <textarea
          rows={5}
          placeholder="Partage avec le club…"
          className="mt-4 w-full resize-none rounded-md border border-border bg-bg-primary p-3 text-body text-text-primary outline-none focus:border-accent"
        />
        <div className="mt-4 flex gap-2">
          <Button variant="secondary" fullWidth onClick={() => setComposerOpen(false)}>
            Annuler
          </Button>
          <Button fullWidth>Publier</Button>
        </div>
      </Sheet>
    </div>
  );
}
