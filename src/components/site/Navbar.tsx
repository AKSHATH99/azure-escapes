import { useEffect, useState } from "react";
import { Compass, Menu, X } from "lucide-react";

const links = [
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Experiences", href: "#experiences" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 lg:px-8 transition-all duration-500 ${
          scrolled
            ? "rounded-2xl glass-strong shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-6 py-2">
          <a href="#top" className="flex items-center gap-3 group">
            <span
              className={`grid place-items-center h-11 w-11 rounded-2xl transition-all ${
                scrolled ? "bg-primary text-primary-foreground" : "bg-white/85 text-primary"
              } shadow-soft`}
            >
              <Compass className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span
                className={`block font-display text-xl font-semibold tracking-tight ${
                  scrolled ? "text-foreground" : "text-white drop-shadow"
                }`}
              >
                SkyRoute
              </span>
              <span
                className={`block text-[11px] uppercase tracking-[0.18em] ${
                  scrolled ? "text-muted-foreground" : "text-white/85"
                }`}
              >
                Journeys Beyond Expectations
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  scrolled
                    ? "text-foreground/80 hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 text-sm">
              Plan My Trip
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className={`lg:hidden grid place-items-center h-10 w-10 rounded-full ${
                scrolled ? "bg-secondary text-foreground" : "bg-white/85 text-primary"
              }`}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 pt-2 grid gap-1 animate-fade-in">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-foreground/85 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
