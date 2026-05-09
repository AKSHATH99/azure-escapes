import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.22em] text-teal font-semibold">Contact</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-semibold">
            Let's plan your <span className="text-gradient-ocean">dream trip</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Reach out and a senior travel designer will be in touch within 24 hours.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: Mail, label: "Email", value: "hello@skyroute.com" },
              { icon: MapPin, label: "Office", value: "Mumbai, India" },
              { icon: Clock, label: "Hours", value: "Mon–Sat · 9 AM – 7 PM" },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-border/70 bg-card p-5 flex items-center gap-4 hover-lift">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-secondary text-teal">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="reveal rounded-3xl bg-card shadow-lift p-7 lg:p-10 border border-border/60"
        >
          <h3 className="font-display text-2xl font-semibold">Inquiry form</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tell us a little about your trip. We'll handle the rest.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Full Name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Phone Number" name="phone" />
            <Field label="Destination Interest" name="destination" placeholder="Bali, Maldives…" />
            <Field label="Travel Dates" name="dates" placeholder="e.g. Dec 2026" />
            <Field label="Number of Travelers" name="travelers" type="number" />
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                Budget Range
              </label>
              <select className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Under ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000 – ₹2,50,000</option>
                <option>₹2,50,000+</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                Special Requests
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Anniversary trip, vegetarian meals, accessible rooms…"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-7 w-full inline-flex items-center justify-center gap-2 h-12 rounded-lg text-white text-sm font-semibold transition hover:brightness-110"
            style={{ background: "var(--gradient-ocean)" }}
          >
            <Send className="h-4 w-4" />
            {submitted ? "Thank you — we'll be in touch!" : "Plan My Dream Vacation"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
