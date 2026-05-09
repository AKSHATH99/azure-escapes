import { Compass, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-11 w-11 rounded-2xl bg-primary text-primary-foreground">
                <Compass className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-xl font-semibold">SkyRoute</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Journeys Beyond Expectations
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm">
              Creating journeys worth remembering — one carefully designed
              experience at a time.
            </p>
          </div>

          {[
            { h: "Company", l: ["About", "Packages", "Contact"] },
            { h: "Legal", l: ["Privacy Policy", "Terms", "Cookies"] },
            { h: "Explore", l: ["Destinations", "Experiences", "Reviews"] },
          ].map((c) => (
            <div key={c.h}>
              <div className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">{c.h}</div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.l.map((x) => (
                  <li key={x}>
                    <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SkyRoute Travel Co. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid place-items-center h-10 w-10 rounded-full bg-secondary text-teal hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
