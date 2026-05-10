import { MapPin } from "lucide-react";
import g1 from "@/assets/gal-cappadocia.jpg";
import g2 from "@/assets/gal-maldives-dinner.jpg";
import g3 from "@/assets/gal-skiing.jpg";
import g4 from "@/assets/gal-cherry.jpg";
import g5 from "@/assets/gal-desert.jpg";
import g6 from "@/assets/gal-greece.jpg";

const items = [
  { img: g1, loc: "Cappadocia, Turkey", span: "row-span-2" },
  { img: g2, loc: "Maldives" },
  { img: g4, loc: "Kyoto, Japan" },
  { img: g3, loc: "Swiss Alps", span: "row-span-2" },
  { img: g5, loc: "Dubai Desert" },
  { img: g6, loc: "Santorini, Greece" },
];

export function Gallery() {
  return (
    <section id="experiences" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">Gallery</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold">
            Moments worth <span className="text-gradient-ocean">traveling for</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4 lg:gap-5">
          {items.map((g, i) => (
            <figure
              key={g.loc}
              className={`group relative overflow-hidden rounded-3xl shadow-soft hover-lift reveal ${g.span ?? ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={g.img}
                alt={g.loc}
                loading="lazy"
                className="img-zoom absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <MapPin className="h-3.5 w-3.5 text-teal" /> {g.loc}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
