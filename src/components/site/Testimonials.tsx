import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import t1 from "@/assets/test-1.jpg";
import t2 from "@/assets/test-2.jpg";
import t3 from "@/assets/test-3.jpg";

const items = [
  {
    img: t1,
    quote:
      "We thought we booked a vacation. What we got was a memory we'll talk about for years.",
    name: "Sarah & Michael",
    trip: "Santorini Escape • 2025",
  },
  {
    img: t2,
    quote: "Every detail was felt. Every sunset was earned. SkyRoute made us fall in love again.",
    name: "Priya & Arjun",
    trip: "Maldives Escape • 2025",
  },
  {
    img: t3,
    quote:
      "From welcome flowers to private island dinners — flawless. The kids still talk about it.",
    name: "The Wilson Family",
    trip: "Swiss Adventure • 2024",
  },
  {
    img: t1,
    quote: "I traveled solo and never felt alone. They thought of everything I didn't.",
    name: "Aanya R.",
    trip: "Kyoto Journey • 2024",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">Traveler Stories</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold">
            Memories that <span className="text-gradient-ocean">speak for themselves</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Not reviews. Stories from people who lived the journey.
          </p>
        </div>

        <div
          className="mt-12 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl">
            <div
              ref={trackRef}
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${i * 100}%)` }}
            >
              {items.map((t, k) => (
                <article key={k} className="min-w-full px-1">
                  <div className="group grid md:grid-cols-[1.1fr_1fr] gap-0 bg-card rounded-3xl overflow-hidden shadow-lift hover-lift">
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img
                        src={t.img}
                        alt={t.name}
                        loading="lazy"
                        className="img-zoom absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="relative p-7 lg:p-10 flex flex-col justify-center">
                      <Quote className="absolute top-5 right-5 h-14 w-14 text-secondary" />
                      <div className="flex items-center gap-1 text-gold">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="mt-5 font-display text-xl lg:text-2xl leading-snug">
                        "{t.quote}"
                      </p>
                      <div className="mt-6">
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-sm text-muted-foreground">📍 {t.trip}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="grid place-items-center h-11 w-11 rounded-full bg-card border border-border hover:bg-secondary transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Story ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    k === i ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="grid place-items-center h-11 w-11 rounded-full bg-card border border-border hover:bg-secondary transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
