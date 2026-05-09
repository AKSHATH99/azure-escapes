import { useEffect, useState } from "react";
import { MessageCircle, X, Phone, Mail, Send, MapPin } from "lucide-react";

export function ContactFAB() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Contact us"
        className={`fixed z-40 bottom-5 right-5 lg:bottom-7 lg:right-7 h-13 w-13 grid place-items-center rounded-full text-white transition-all duration-500 ${
          open ? "opacity-0 scale-50 pointer-events-none" : "opacity-100 scale-100"
        }`}
        style={{
          height: "3.25rem",
          width: "3.25rem",
          background: "var(--gradient-ocean)",
          boxShadow:
            "0 8px 24px -8px color-mix(in oklab, var(--ocean) 50%, transparent), 0 2px 6px rgba(0,0,0,0.08)",
        }}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="sr-only">Contact</span>
        <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-ocean" aria-hidden />
      </button>

      {/* Overlay + Modal */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" />

        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute bottom-5 right-5 lg:bottom-7 lg:right-7 w-[calc(100vw-2.5rem)] sm:w-[400px] max-h-[88vh] overflow-y-auto bg-card border border-border/60 rounded-3xl shadow-lift transition-all duration-400 ${
            open ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{ transformOrigin: "bottom right" }}
        >
          {/* Header */}
          <div className="relative p-5 pb-4" style={{ background: "var(--gradient-ocean)" }}>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 grid place-items-center h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 text-white transition"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="font-display text-xl font-semibold text-white">Let's plan together</h3>
            <p className="text-sm text-white/85 mt-0.5">Reply within 24 hours.</p>
          </div>

          {/* Quick contact */}
          <div className="px-5 pt-4 grid grid-cols-2 gap-2">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-3 py-2.5 text-sm hover:bg-secondary transition"
            >
              <span className="grid place-items-center h-8 w-8 rounded-lg bg-white text-teal">
                <Phone className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">Call</span>
                <span className="block font-medium text-xs">+91 98765 43210</span>
              </span>
            </a>
            <a
              href="mailto:hello@skyroute.com"
              className="flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-3 py-2.5 text-sm hover:bg-secondary transition"
            >
              <span className="grid place-items-center h-8 w-8 rounded-lg bg-white text-teal">
                <Mail className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">Email</span>
                <span className="block font-medium text-xs">hello@skyroute.com</span>
              </span>
            </a>
          </div>

          <div className="px-5 mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-teal" /> Mumbai · Mon–Sat 9 AM–7 PM
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setTimeout(() => {
                setOpen(false);
                setSubmitted(false);
              }, 1600);
            }}
            className="p-5 pt-4 grid gap-3"
          >
            <div className="relative">
              <div className="absolute -top-2 left-0 right-0 h-px bg-border" />
            </div>
            <input
              required
              placeholder="Your name"
              className="h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              className="h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              placeholder="Destination of interest"
              className="h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              rows={3}
              placeholder="Tell us about your dream trip…"
              className="rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-2 h-11 rounded-lg text-white text-sm font-semibold transition hover:brightness-110"
              style={{ background: "var(--gradient-ocean)" }}
            >
              <Send className="h-4 w-4" />
              {submitted ? "Sent — talk soon!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
