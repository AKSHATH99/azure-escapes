import { Plane, Hotel, ShieldCheck, PhoneCall, Globe2, Gem } from "lucide-react";
import why from "@/assets/why-us.jpg";

const points = [
  { icon: Plane, t: "Personalized itineraries", d: "Plans built around your pace and dreams." },
  { icon: Hotel, t: "Premium stays", d: "Hand-picked boutique resorts and 5-star hotels." },
  { icon: ShieldCheck, t: "Safe & secure booking", d: "End-to-end protected payments and travel cover." },
  { icon: PhoneCall, t: "24/7 support", d: "A real human, anywhere in the world, anytime." },
  { icon: Globe2, t: "Global destination network", d: "Local partners across 50+ countries." },
  { icon: Gem, t: "Hidden gem experiences", d: "Private moments off the typical tourist map." },
];

export function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="relative reveal">
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={why}
              alt="Travel consultant helping a couple plan their trip"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-strong rounded-2xl px-5 py-4 shadow-soft">
            <div className="text-xs text-muted-foreground">Trusted by</div>
            <div className="font-display text-2xl font-semibold text-gradient-ocean">10,000+ travelers</div>
          </div>
          <div className="absolute -top-5 -left-4 sm:-left-6 glass-strong rounded-2xl px-5 py-4 shadow-soft hidden sm:block">
            <div className="text-xs text-muted-foreground">Avg. planning time</div>
            <div className="font-display text-xl font-semibold">Under 48 hours</div>
          </div>
        </div>

        <div>
          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">Why SkyRoute</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-semibold">
              Travel designed <span className="text-gradient-ocean">around you</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Every itinerary is a quiet conversation between your idea of a perfect
              trip and our network of trusted experts.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <div
                key={p.t}
                className="reveal group rounded-2xl border border-border/70 bg-card p-5 hover-lift"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-secondary text-teal group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <p.icon className="h-5 w-5" />
                </span>
                <div className="mt-4 font-semibold">{p.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
