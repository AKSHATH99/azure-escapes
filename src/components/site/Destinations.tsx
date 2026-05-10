import { MapPin, PhoneCall } from "lucide-react";
import indonesia from "@/assets/destinations/indonasia.jpg";
import swiss from "@/assets/destinations/dest-switzerland.jpg";
import maldives from "@/assets/destinations/dest-maldives.jpg";
import paris from "@/assets/destinations/dest-paris.jpg";
import dubai from "@/assets/destinations/dest-dubai.jpg";
import japan from "@/assets/destinations/japan.jpeg";
import santorini from "@/assets/destinations/dest-santorini.jpg";
import cappadocia from "@/assets/destinations/gal-cappadocia.jpg";
import iceland from "@/assets/destinations/pkg-luxury.jpg";
import europe from "@/assets/destinations/europe.jpg";

const items = [
  { img: indonesia, name: "Bali", country: "Indonesia", price: "₹49,999", days: "5D · 4N" },
  { img: europe, name: "Europe", country: "Europe", price: "₹1,49,999", days: "7D · 6N" },
  { img: maldives, name: "Maldives", country: "Indian Ocean", price: "₹89,999", days: "5D · 4N" },
  { img: paris, name: "Paris", country: "France", price: "₹1,19,000", days: "6D · 5N" },
  { img: dubai, name: "Dubai", country: "UAE", price: "₹54,999", days: "5D · 4N" },
  { img: japan, name: "Japan", country: "East Asia", price: "₹1,69,000", days: "8D · 7N" },
  { img: santorini, name: "Santorini", country: "Greece", price: "₹1,29,000", days: "6D · 5N" },
  { img: cappadocia, name: "Cappadocia", country: "Turkey", price: "₹79,999", days: "5D · 4N" },
  { img: iceland, name: "Iceland", country: "Nordic", price: "₹1,89,000", days: "7D · 6N" },
];

export function Destinations() {
  return (
    <section id="destinations" className="relative py-20 lg:py-28 bg-background">
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((d, i) => (
            <article
              key={d.name}
              className="group relative overflow-hidden rounded-2xl bg-card hover-lift shadow-soft reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-5/3 overflow-hidden">
                <img
                  src={d.img}
                  alt={`${d.name}, ${d.country}`}
                  loading="lazy"
                  className="img-zoom h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full glass text-[11px] font-medium text-foreground">
                  <MapPin className="h-3 w-3 text-teal" /> {d.country}
                </span>

                {/* Hover overlay with CTA */}
                <div className="absolute inset-0 bg-foreground/55 opacity-0 group-hover:opacity-100 transition-opacity duration-400 grid place-items-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-foreground text-sm font-semibold shadow-lift translate-y-2 group-hover:translate-y-0 transition-transform duration-400"
                  >
                    <PhoneCall className="h-4 w-4 text-teal" /> Request a Callback
                  </a>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white flex items-end justify-between gap-2 group-hover:opacity-0 transition-opacity">
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-tight">{d.name}</h3>
                    <div className="text-[11px] text-white/85">{d.days}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-white/75 uppercase tracking-wider">From</div>
                    <div className="font-semibold text-gold-soft text-sm">{d.price}</div>
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
