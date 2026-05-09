import { MapPin, Calendar } from "lucide-react";
import bali from "@/assets/dest-bali.jpg";
import swiss from "@/assets/dest-switzerland.jpg";
import maldives from "@/assets/dest-maldives.jpg";
import paris from "@/assets/dest-paris.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import japan from "@/assets/dest-japan.jpg";

const items = [
  { img: bali, name: "Bali", country: "Indonesia", price: "₹49,999", days: "5 Days · 4 Nights" },
  { img: swiss, name: "Switzerland", country: "Europe", price: "₹1,49,999", days: "7 Days · 6 Nights" },
  { img: maldives, name: "Maldives", country: "Indian Ocean", price: "₹89,999", days: "5 Days · 4 Nights" },
  { img: paris, name: "Paris", country: "France", price: "₹1,19,000", days: "6 Days · 5 Nights" },
  { img: dubai, name: "Dubai", country: "UAE", price: "₹54,999", days: "5 Days · 4 Nights" },
  { img: japan, name: "Japan", country: "East Asia", price: "₹1,69,000", days: "8 Days · 7 Nights" },
];

export function Destinations() {
  return (
    <section id="destinations" className="relative py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">Destinations</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold">
            Destinations that <span className="text-gradient-ocean">inspire</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From tropical escapes to cultural wonders—each itinerary is carefully
            curated for moments worth remembering.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((d, i) => (
            <article
              key={d.name}
              className="group relative overflow-hidden rounded-3xl bg-card hover-lift shadow-soft reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={d.img}
                  alt={`${d.name}, ${d.country}`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="img-zoom h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium text-foreground">
                  <MapPin className="h-3.5 w-3.5 text-teal" /> {d.country}
                </span>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="font-display text-2xl font-semibold">{d.name}</h3>
                  <div className="mt-1 flex items-center justify-between text-sm text-white/90">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {d.days}
                    </span>
                    <span>
                      <span className="opacity-80">From </span>
                      <span className="font-semibold text-gold-soft">{d.price}</span>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
