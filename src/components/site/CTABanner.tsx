import { ArrowRight } from "lucide-react";
import bg from "@/assets/cta-family.jpg";

export function CTABanner() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      <img src={bg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-white/20" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <h2 className="text-4xl lg:text-6xl font-semibold leading-[1.05]">
            Your next adventure
            <br />
            <span className="text-gradient-ocean">starts today.</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/80 max-w-lg">
            Life is short. Collect memories, not things.
          </p>
          <a href="#contact" className="mt-8 inline-flex btn-gold">
            Book Your Free Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
