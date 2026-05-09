import { useEffect, useRef } from "react";
import { ArrowRight, MapPin, Plane, Compass, BookOpen, Star, Globe, Users } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const y = window.scrollY;
      imgRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(${1 + y * 0.0004})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <img
          src={hero}
          alt="Couple at golden hour overlooking Santorini's turquoise sea"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/5 to-white/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent" />

      {/* Floating icons */}
      <Plane className="hidden md:block absolute top-32 right-[12%] h-9 w-9 text-white/85 drop-shadow float-slow" />
      <Compass className="hidden md:block absolute bottom-44 left-[8%] h-10 w-10 text-white/85 drop-shadow float-med" />
      <BookOpen className="hidden md:block absolute top-44 left-[14%] h-7 w-7 text-white/80 drop-shadow float-slow" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-44 lg:pt-56 pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium tracking-wide text-teal">
            <MapPin className="h-3.5 w-3.5" /> Curated by SkyRoute · Est. 2014
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.25)]">
            Explore the world,
            <br />
            <span className="text-gradient-gold">one extraordinary journey</span>
            <br />
            at a time.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/95 drop-shadow">
            Handcrafted travel experiences designed for dreamers, explorers, and
            unforgettable memories.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-gold">
              Start Your Journey <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#destinations" className="btn-ghost">
              View Destinations
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
            {[
              { icon: Users, k: "10,000+", v: "Happy Travelers" },
              { icon: Globe, k: "50+", v: "Countries Covered" },
              { icon: Star, k: "4.9/5", v: "Guest Rating" },
            ].map((b) => (
              <div key={b.v} className="glass rounded-2xl px-5 py-4 flex items-center gap-3">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/80 text-teal">
                  <b.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-xl font-semibold text-foreground">{b.k}</div>
                  <div className="text-xs text-muted-foreground">{b.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
