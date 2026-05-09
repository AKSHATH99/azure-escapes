import { useState } from "react";
import { MapPin, Calendar } from "lucide-react";
import bali from "@/assets/dest-bali.jpg";
import swiss from "@/assets/dest-switzerland.jpg";
import swissSki from "@/assets/gal-skiing.jpg";
import maldives from "@/assets/dest-maldives.jpg";
import maldivesDinner from "@/assets/gal-maldives-dinner.jpg";
import japan from "@/assets/dest-japan.jpg";
import cherry from "@/assets/gal-cherry.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import desert from "@/assets/gal-desert.jpg";
import paris from "@/assets/dest-paris.jpg";
import greece from "@/assets/gal-greece.jpg";
import cappadocia from "@/assets/gal-cappadocia.jpg";

type Memory = {
  img: string;
  loc: string;
  date: string;
  tag: "Bali" | "Switzerland" | "Maldives" | "Japan" | "Dubai" | "Paris";
  span?: string;
};

const memories: Memory[] = [
  { img: bali, loc: "Ubud, Bali", date: "Summer 2025", tag: "Bali", span: "row-span-2" },
  { img: swissSki, loc: "Zermatt, Switzerland", date: "Winter 2024", tag: "Switzerland" },
  { img: maldivesDinner, loc: "Maldives", date: "Spring 2025", tag: "Maldives" },
  { img: cherry, loc: "Kyoto, Japan", date: "Spring 2024", tag: "Japan", span: "row-span-2" },
  { img: desert, loc: "Dubai Desert", date: "Autumn 2024", tag: "Dubai" },
  { img: greece, loc: "Santorini route", date: "Summer 2025", tag: "Paris" },
  { img: cappadocia, loc: "Cappadocia stopover", date: "Autumn 2024", tag: "Japan" },
  { img: maldives, loc: "Malé Atoll", date: "Winter 2025", tag: "Maldives", span: "row-span-2" },
  { img: paris, loc: "Paris, France", date: "Spring 2025", tag: "Paris" },
  { img: swiss, loc: "Lucerne, Switzerland", date: "Summer 2024", tag: "Switzerland" },
  { img: japan, loc: "Tokyo, Japan", date: "Autumn 2025", tag: "Japan" },
  { img: dubai, loc: "Burj Khalifa, Dubai", date: "Winter 2024", tag: "Dubai" },
];

const filters = ["All", "Bali", "Switzerland", "Maldives", "Japan", "Dubai", "Paris"] as const;

export function MemoryWall() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? memories : memories.filter((m) => m.tag === active);

  return (
    <section id="experiences" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">Traveler Memory Wall</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold">
            Real journeys. <span className="text-gradient-ocean">Real memories.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Moments captured by travelers who trusted us with their stories.
          </p>
        </div>

        {/* Filter chips */}
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-foreground/75 hover:bg-secondary/70 border border-border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-3 lg:gap-4">
          {visible.map((m, i) => (
            <figure
              key={`${m.loc}-${i}`}
              className={`group relative overflow-hidden rounded-2xl shadow-soft hover-lift ${m.span ?? ""}`}
              style={{ animation: `fade-in .5s ease both`, animationDelay: `${i * 40}ms` }}
            >
              <img
                src={m.img}
                alt={m.loc}
                loading="lazy"
                className="img-zoom absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <figcaption className="absolute inset-x-3 bottom-3 text-white translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <div className="inline-flex items-center gap-1.5 text-xs font-medium">
                  <MapPin className="h-3.5 w-3.5 text-gold-soft" /> {m.loc}
                </div>
                <div className="mt-0.5 inline-flex items-center gap-1.5 text-[11px] text-white/85">
                  <Calendar className="h-3 w-3" /> {m.date}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
