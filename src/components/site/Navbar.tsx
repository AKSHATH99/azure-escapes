import { useEffect, useState } from "react";
import { Compass, Menu, X, Phone, Mail } from "lucide-react";

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
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto px-5 lg:px-7 transition-all duration-500 border border-black/5`}
        style={{
          width: "92%",
          maxWidth: "1200px",
          background: "#FAF8F5",
          backdropFilter: "saturate(160%) blur(14px)",
          WebkitBackdropFilter: "saturate(160%) blur(14px)",
          borderRadius: "30px",
          boxShadow: scrolled
            ? "0 10px 30px -12px rgba(15, 23, 42, 0.18)"
            : "0 6px 20px -10px rgba(15, 23, 42, 0.12)",
        }}
      >
        <div className={`flex items-center justify-between gap-6 transition-all ${scrolled ? "py-1.5" : "py-2.5"}`}>
          <a href="#top" className="flex items-center gap-3 group">
            <span className="grid place-items-center h-10 w-10 rounded-2xl bg-primary text-primary-foreground shadow-soft">
              <Compass className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold tracking-tight" style={{ color: "#1E293B" }}>
                SkyRoute
              </span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Journeys Beyond Expectations
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3.5 py-2 text-sm font-medium transition-colors group"
                style={{ color: "#1E293B" }}
              >
                <span className="group-hover:text-teal transition-colors">{l.label}</span>
                <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-teal scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3 text-xs font-medium" style={{ color: "#1E293B" }}>
              <a href="tel:+919876543210" className="inline-flex items-center gap-1.5 hover:text-teal transition-colors">
                <Phone className="h-3.5 w-3.5 text-teal" /> +91 98765 43210
              </a>
              <span className="h-3 w-px bg-black/15" />
              <a href="mailto:hello@skyroute.com" className="inline-flex items-center gap-1.5 hover:text-teal transition-colors">
                <Mail className="h-3.5 w-3.5 text-teal" /> hello@skyroute.com
              </a>
            </div>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden grid place-items-center h-10 w-10 rounded-full bg-secondary text-foreground"
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
                className="px-4 py-3 rounded-xl hover:bg-black/5"
                style={{ color: "#1E293B" }}
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
