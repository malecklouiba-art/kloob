"use client";

import { useState } from "react";
import { ArrowUp, Paperclip } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { conversations, sampleThread } from "@/lib/mock";
import { cn } from "@/lib/utils";

export default function MessagesPage() {
  const [activeId, setActiveId] = useState<string>("c1");
  const [draft, setDraft] = useState("");
  const active = conversations.find((c) => c.id === activeId) ?? conversations[0];

  return (
    <div className="flex h-svh w-full lg:h-[calc(100svh)]">
      {/* Conversations list */}
      <aside
        className={cn(
          "w-full border-r border-border bg-bg-elevated lg:w-80 lg:shrink-0",
          activeId ? "hidden lg:block" : "block",
        )}
      >
        <header className="px-4 py-5">
          <h1 className="font-display text-title-2 text-text-primary">Chat</h1>
        </header>
        <ul>
          {conversations.map((c) => {
            const isActive = c.id === activeId;
            return (
              <li key={c.id}>
                <button
                  onClick={() => setActiveId(c.id)}
                  className={cn(
                    "flex w-full items-center gap-3 px-4 py-3 text-left transition-colors duration-180",
                    isActive ? "bg-accent/10" : "hover:bg-bg-grouped",
                  )}
                >
                  <Avatar name={c.with.name} size={44} founder={c.with.founder} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="truncate text-headline text-text-primary">
                        {c.with.name}
                      </p>
                      <span className="shrink-0 text-caption text-text-tertiary">
                        {c.at}
                      </span>
                    </div>
                    <p className="truncate text-subhead text-text-secondary">
                      {c.preview}
                    </p>
                  </div>
                  {c.unread > 0 && (
                    <span className="ml-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent px-1.5 text-caption font-semibold text-accent-on">
                      {c.unread}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Conversation */}
      <section
        className={cn(
          "flex flex-1 flex-col bg-bg-primary",
          activeId ? "flex" : "hidden lg:flex",
        )}
      >
        <header className="glass sticky top-0 z-10 flex items-center gap-3 border-b border-border px-4 py-3">
          <button
            onClick={() => setActiveId("")}
            className="text-callout text-accent lg:hidden"
          >
            ‹
          </button>
          <Avatar name={active.with.name} size={28} founder={active.with.founder} />
          <div className="min-w-0 flex-1">
            <p className="truncate text-headline text-text-primary">
              {active.with.name}
            </p>
            <p className="truncate text-footnote text-text-tertiary">
              {active.with.skill}
            </p>
          </div>
        </header>

        <ol className="flex-1 space-y-2 overflow-y-auto px-4 py-4">
          {sampleThread.map((m, i) => {
            const prev = sampleThread[i - 1];
            const sameAuthor = prev?.fromMe === m.fromMe;
            return (
              <li
                key={m.id}
                className={cn(
                  "flex",
                  m.fromMe ? "justify-end" : "justify-start",
                  sameAuthor ? "mt-0.5" : "mt-2",
                )}
              >
                <div
                  className={cn(
                    "max-w-[78%] px-3.5 py-2 text-body",
                    m.fromMe
                      ? "bg-accent text-accent-on"
                      : "bg-bg-grouped text-text-primary",
                    "rounded-[18px]",
                    m.fromMe ? "rounded-br-[4px]" : "rounded-bl-[4px]",
                  )}
                >
                  {m.body}
                </div>
              </li>
            );
          })}
        </ol>

        <div className="glass border-t border-border p-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDraft("");
            }}
            className="flex items-end gap-2 rounded-xl border border-border bg-surface p-2"
          >
            <button
              type="button"
              aria-label="Joindre"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-text-tertiary hover:text-text-primary"
            >
              <Paperclip className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <textarea
              rows={1}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Écris un message…"
              className="max-h-32 flex-1 resize-none bg-transparent py-2 text-body text-text-primary outline-none placeholder:text-text-tertiary"
            />
            <button
              type="submit"
              aria-label="Envoyer"
              disabled={draft.trim().length === 0}
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-on transition-all duration-180",
                "disabled:opacity-40",
                "active:scale-[0.95]",
              )}
            >
              <ArrowUp className="h-4 w-4" strokeWidth={2} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
