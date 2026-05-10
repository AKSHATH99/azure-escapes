import { PhoneCall, Sun, Snowflake, Heart, Users } from "lucide-react";
import summer from "@/assets/pkg-romantic.jpg";
import winter from "@/assets/dest-switzerland.jpg";
import honeymoon from "@/assets/gal-maldives-dinner.jpg";
import family from "@/assets/cta-family.jpg";

const offers = [
  {
    img: summer,
    icon: Sun,
    tag: "Summer 2026",
    title: "Summer Escape",
    text: "Island sunsets, ocean breeze, unforgettable escapes.",
    urgency: "Only 8 slots left",
  },
  {
    img: winter,
    icon: Snowflake,
    tag: "December Special",
    title: "Winter Wonderland",
    text: "Snow-covered adventures and magical alpine memories.",
    urgency: "Selling Fast",
  },
  {
    img: honeymoon,
    icon: Heart,
    tag: "Best Seller",
    title: "Honeymoon Collection",
    text: "Romantic journeys designed for your first forever memories.",
    urgency: "Most Booked",
  },
  {
    img: family,
    icon: Users,
    tag: "Peak Season",
    title: "Family Adventure",
    text: "Because the best memories are shared.",
    urgency: "Limited Dates",
  },
];

export function SeasonalOffers() {
  return (
    <section id="offers" className="py-20 lg:py-28" style={{ background: "var(--gradient-mist)" }}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">Special Offers</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold">
            Limited-Time Journeys <span className="text-gradient-ocean">You'll Never Forget</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Handpicked experiences crafted for every season, every story, and every traveler.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((o, i) => (
            <article
              key={o.title}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover-lift reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <img src={o.img} alt={o.title} loading="lazy" className="img-zoom h-full w-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

                {/* Urgency pill */}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-gold/95 text-foreground text-[10px] font-bold uppercase tracking-wider shadow-soft">
                  {o.urgency}
                </span>

                {/* Tag */}
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass text-[11px] font-semibold text-foreground transition-all group-hover:shadow-gold group-hover:bg-white">
                  <o.icon className="h-3.5 w-3.5 text-teal" /> {o.tag}
                </span>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display text-2xl font-semibold leading-tight">{o.title}</h3>
                  <p className="mt-1.5 text-sm text-white/90">{o.text}</p>

                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white text-foreground text-xs font-semibold shadow-soft opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-teal" /> Request a Callback
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
