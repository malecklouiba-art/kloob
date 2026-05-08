"use client";

import { useState } from "react";
import { Pin, MessageSquare, Smile, ArrowUp } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { channelMessages, channelSections } from "@/lib/mock";
import { cn } from "@/lib/utils";

export default function CanalPage() {
  const [section, setSection] = useState<typeof channelSections[number]["key"]>(
    "entraide",
  );
  const [draft, setDraft] = useState("");

  return (
    <div className="flex h-svh flex-col bg-bg-primary">
      <header className="glass sticky top-0 z-10 border-b border-border px-4 py-3 lg:px-7">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-baseline justify-between gap-3">
            <h1 className="font-display text-title-2 text-text-primary"># Canal</h1>
            <p className="text-caption uppercase text-text-tertiary">
              48 membres en ligne
            </p>
          </div>
          <div className="scrollbar-none mt-3 flex gap-2 overflow-x-auto">
            {channelSections.map((s) => {
              const active = s.key === section;
              return (
                <button
                  key={s.key}
                  onClick={() => setSection(s.key)}
                  className={cn(
                    "shrink-0 rounded-full px-3 py-1 text-subhead font-medium transition-colors duration-180",
                    active
                      ? "bg-accent text-accent-on"
                      : "bg-bg-grouped text-text-secondary hover:text-text-primary",
                  )}
                >
                  #{s.label.toLowerCase()}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <ol className="mx-auto w-full max-w-3xl flex-1 space-y-5 overflow-y-auto px-4 py-5 lg:px-7">
        {channelMessages.map((m) => (
          <li key={m.id} className="flex gap-3">
            <Avatar name={m.author.name} size={44} founder={m.author.founder} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-2">
                <p className="text-headline text-text-primary">{m.author.name}</p>
                <span className="text-caption text-text-tertiary">{m.at}</span>
                {m.pinned && (
                  <Badge variant="gold">
                    <Pin className="mr-1 h-3 w-3" strokeWidth={2} />
                    Épinglé
                  </Badge>
                )}
              </div>
              <p className="mt-1 text-body text-text-primary">{m.body}</p>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                {m.reactions?.map((r) => (
                  <button
                    key={r.emoji}
                    className="flex items-center gap-1 rounded-full border border-border bg-surface px-2 py-0.5 text-footnote text-text-secondary transition-colors duration-180 hover:bg-bg-grouped"
                  >
                    <span>{r.emoji}</span>
                    <span className="font-mono">{r.count}</span>
                  </button>
                ))}
                <button
                  aria-label="Ajouter une réaction"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-text-tertiary transition-colors duration-180 hover:bg-bg-grouped hover:text-text-primary"
                >
                  <Smile className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
                {m.threadCount !== undefined && m.threadCount > 0 && (
                  <button className="flex items-center gap-1.5 rounded-full px-2 py-0.5 text-footnote text-accent transition-colors duration-180 hover:bg-accent/10">
                    <MessageSquare className="h-3.5 w-3.5" strokeWidth={1.5} />
                    {m.threadCount} {m.threadCount > 1 ? "réponses" : "réponse"}
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="glass border-t border-border p-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDraft("");
          }}
          className="mx-auto flex max-w-3xl items-end gap-2 rounded-xl border border-border bg-surface p-2"
        >
          <textarea
            rows={1}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={`Écris dans #${section}…`}
            className="max-h-32 flex-1 resize-none bg-transparent px-2 py-2 text-body text-text-primary outline-none placeholder:text-text-tertiary"
          />
          <button
            type="submit"
            aria-label="Envoyer"
            disabled={draft.trim().length === 0}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-on transition-all duration-180 disabled:opacity-40 active:scale-[0.95]"
          >
            <ArrowUp className="h-4 w-4" strokeWidth={2} />
          </button>
        </form>
        <p className="mt-2 text-center text-footnote text-text-tertiary">
          3 membres en train d'écrire
        </p>
      </div>
    </div>
  );
}
