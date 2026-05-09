import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Destinations } from "@/components/site/Destinations";
import { WhyUs } from "@/components/site/WhyUs";
import { Packages } from "@/components/site/Packages";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Process } from "@/components/site/Process";
import { CTABanner } from "@/components/site/CTABanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SkyRoute — Curated Luxury Travel Experiences" },
      {
        name: "description",
        content:
          "Handcrafted luxury journeys to Bali, Maldives, Switzerland, Japan and beyond. Personalized itineraries, premium stays, 24/7 support.",
      },
      { property: "og:title", content: "SkyRoute — Journeys Beyond Expectations" },
      {
        property: "og:description",
        content:
          "Curated travel experiences for couples, families and explorers. Personalized planning by SkyRoute.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Destinations />
      <WhyUs />
      <Packages />
      <Testimonials />
      <Gallery />
      <Process />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
