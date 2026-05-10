import { ArrowUpRight, PhoneCall } from "lucide-react";
import romantic from "@/assets/pkg-romantic.jpg";
import family from "@/assets/pkg-family.jpg";
import solo from "@/assets/pkg-solo.jpg";
import luxury from "@/assets/destinations/pkg-luxury.jpg";

const items = [
  { img: romantic, t: "Romantic Escapes", d: "Perfect for honeymoons and anniversaries." },
  { img: family, t: "Family Adventures", d: "Moments your family will talk about forever." },
  { img: solo, t: "Solo Explorer Journeys", d: "Discover yourself while discovering the world." },
  { img: luxury, t: "Luxury Private Tours", d: "Exclusive journeys with elite comfort." },
];

export function Packages() {
  return (
    <section id="packages" className="py-24 lg:py-32" style={{ background: "var(--gradient-mist)" }}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">Packages</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold">
            Curated <span className="text-gradient-ocean">experiences</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Four signature collections — each a different way to fall in love with the world.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2">
          {items.map((p, i) => (
            <article
              key={p.t}
              className="group relative overflow-hidden rounded-3xl bg-card hover-lift glow-on-hover reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="img-zoom h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 grid place-items-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-foreground text-sm font-semibold shadow-lift translate-y-2 group-hover:translate-y-0 transition-transform duration-400"
                  >
                    <PhoneCall className="h-4 w-4 text-teal" /> Request a Callback
                  </a>
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-7 text-white flex items-end justify-between gap-4 group-hover:opacity-0 transition-opacity">
                <div>
                  <h3 className="font-display text-2xl font-semibold">{p.t}</h3>
                  <p className="mt-1 text-sm text-white/90 max-w-md">{p.d}</p>
                </div>
                <span className="grid place-items-center h-12 w-12 rounded-full bg-white/95 text-teal shadow-soft">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
