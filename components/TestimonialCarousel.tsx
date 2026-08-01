"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

/** Carrousel de témoignages clients avec navigation clavier et pastilles. */
export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function go(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="relative min-h-[280px] overflow-hidden rounded-md border border-white/10 bg-ink-800 px-6 py-10 sm:px-14 sm:py-14">
        <Quote
          size={64}
          strokeWidth={1}
          className="absolute -left-2 -top-2 text-amber/10 sm:left-4 sm:top-4"
          aria-hidden="true"
        />
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -32 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <p className="text-balance font-display text-lg font-medium leading-relaxed text-bone sm:text-xl">
              « {current.quote} »
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-amber">{current.name}</p>
              <p className="text-sm text-bone-muted">{current.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2" role="tablist" aria-label="Sélection du témoignage">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              role="tab"
              aria-selected={i === index}
              aria-label={`Témoignage de ${t.name}`}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-amber" : "w-1.5 bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => go(index - 1)}
            aria-label="Témoignage précédent"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bone transition-colors duration-200 hover:border-amber/50 hover:text-amber"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Témoignage suivant"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bone transition-colors duration-200 hover:border-amber/50 hover:text-amber"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
