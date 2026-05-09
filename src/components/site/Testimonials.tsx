import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import t1 from "@/assets/test-1.jpg";
import t2 from "@/assets/test-2.jpg";
import t3 from "@/assets/test-3.jpg";

const items = [
  {
    img: t1,
    name: "Sarah & Michael",
    trip: "Santorini Honeymoon",
    quote:
      "Every detail felt personal. This wasn't just a vacation—it became one of our life's best memories.",
  },
  {
    img: t2,
    name: "Priya & Arjun",
    trip: "Bali Honeymoon",
    quote: "Our Bali honeymoon exceeded every expectation. SkyRoute thought of things we hadn't.",
  },
  {
    img: t3,
    name: "The Müller Family",
    trip: "Maldives Family Escape",
    quote:
      "From the welcome flowers to the private island dinner — flawless. The kids still talk about it.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);
  const t = items[i];

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">Reviews</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold">
            Stories from our <span className="text-gradient-ocean">travelers</span>
          </h2>
        </div>

        <div className="mt-14 relative reveal">
          <div className="relative rounded-3xl bg-card shadow-lift p-8 lg:p-14 overflow-hidden">
            <Quote className="absolute -top-2 left-6 h-28 w-28 text-secondary" />
            <div className="relative grid lg:grid-cols-[180px_1fr] gap-8 items-center">
              <div className="relative mx-auto lg:mx-0">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-ocean to-teal blur-md opacity-40" />
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="relative h-36 w-36 rounded-full object-cover ring-4 ring-white shadow-soft"
                />
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 font-display text-2xl lg:text-3xl leading-snug">
                  “{t.quote}”
                </p>
                <div className="mt-6">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.trip}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
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
                  className={`h-2 rounded-full transition-all ${
                    k === i ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to ${k + 1}`}
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
