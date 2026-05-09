import { MessageSquareHeart, Map, BadgeCheck, PlaneTakeoff } from "lucide-react";

const steps = [
  { icon: MessageSquareHeart, t: "Tell us your dream trip", d: "Share your ideas, vibe, and travel dates." },
  { icon: Map, t: "Get a personalized plan", d: "We design a tailored itinerary within 48 hours." },
  { icon: BadgeCheck, t: "Confirm your booking", d: "Secure payments. Everything organized for you." },
  { icon: PlaneTakeoff, t: "Travel stress-free", d: "Enjoy 24/7 concierge support throughout your trip." },
];

export function Process() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--gradient-mist)" }}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">Process</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold">
            How it <span className="text-gradient-ocean">works</span>
          </h2>
        </div>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent"
            aria-hidden
          />
          {steps.map((s, i) => (
            <div
              key={s.t}
              className="relative reveal text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative mx-auto h-24 w-24 rounded-full bg-white shadow-lift grid place-items-center">
                <s.icon className="h-9 w-9 text-teal" />
                <span className="absolute -top-2 -right-2 grid place-items-center h-8 w-8 rounded-full bg-gold text-foreground text-sm font-semibold shadow-soft">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs mx-auto">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
