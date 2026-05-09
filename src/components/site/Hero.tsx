import { useEffect, useRef } from "react";
import { ArrowRight, Plane, Compass, BookOpen, Star, Globe, Users } from "lucide-react";
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
      <div ref={imgRef} className="absolute inset-0 will-change-transform animate-[heroZoom_18s_ease-out_forwards]">
        <img
          src={hero}
          alt="Traveler at a Santorini cliff edge during golden hour overlooking the Aegean Sea"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
      </div>
      {/* Left warm gradient for readability, right side clean */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(20,30,40,0.55)] via-[rgba(20,30,40,0.20)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/80 to-transparent" />

      {/* Floating icons */}
      <Plane className="hidden md:block absolute top-32 right-[12%] h-9 w-9 text-white/85 drop-shadow float-slow" />
      <Compass className="hidden md:block absolute bottom-44 left-[8%] h-10 w-10 text-white/85 drop-shadow float-med" />
      <BookOpen className="hidden md:block absolute top-44 left-[14%] h-7 w-7 text-white/80 drop-shadow float-slow" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-44 lg:pt-56 pb-20">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[5.25rem] font-semibold leading-[1.05] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] animate-[fadeUp_.9s_ease-out_both]">
            Explore the world,
            <br />
            create
            <span className="italic font-medium" style={{ color: "var(--gold)" }}> stories worth telling</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/95 drop-shadow animate-[fadeUp_.9s_ease-out_.15s_both]">
            Handcrafted travel experiences designed for dreamers, explorers, and
            unforgettable memories.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 animate-[fadeUp_.9s_ease-out_.3s_both]">
            <a href="#contact" className="btn-primary">
              Plan Your Journey <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#destinations" className="btn-ghost">
              Explore Destinations
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl animate-[fadeUp_.9s_ease-out_.5s_both]">
            {[
              { icon: Users, k: "10,000+", v: "Happy Travelers" },
              { icon: Globe, k: "50+", v: "Destinations" },
              { icon: Star, k: "4.9/5", v: "Guest Rating" },
            ].map((b) => (
              <div key={b.v} className="glass rounded-2xl px-5 py-4 flex items-center gap-3 shadow-soft">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/85 text-teal">
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

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
        @keyframes heroZoom { from { transform: scale(1); } to { transform: scale(1.06); } }
      `}</style>
    </section>
  );
}
