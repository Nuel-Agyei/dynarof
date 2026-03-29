import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const services = [
  {
    name: "Residential Roofing",
    description:
      "Full roof replacements, repairs, and new installations for homes of all sizes. We work with asphalt, architectural shingles, cedar shake, and synthetic slate to match your aesthetic and budget.",
  },
  {
    name: "Commercial Roofing",
    description:
      "Flat and low-slope systems including TPO, EPDM, and modified bitumen. Designed for warehouses, office buildings, retail spaces, and multi-unit properties with minimal operational disruption.",
  },
  {
    name: "Roof Inspections",
    description:
      "Comprehensive assessments for real estate transactions, storm damage claims, and preventive maintenance. We deliver detailed reports with photographic documentation and clear recommendations.",
  },
  {
    name: "Emergency Repairs",
    description:
      "When storms hit, we respond fast. Our crews are available for emergency tarping, leak resolution, and rapid structural repairs to protect your property from further damage.",
  },
  {
    name: "Metal Roofing",
    description:
      "Standing seam and corrugated metal systems built for longevity. Ideal for Colorado's weather extremes — hail-resistant, energy-efficient, and backed by 40+ year material warranties.",
  },
  {
    name: "Gutter & Drainage Systems",
    description:
      "Seamless aluminum gutters, downspout routing, and drainage solutions to protect your foundation and landscaping. Properly integrated with every roofing project we complete.",
  },
];

const Services = () => (
  <Layout>
    <div className="h-20 md:h-24 bg-navy" />

    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-gold mb-4">Our Services</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl mb-16">
            Everything your roof needs.{" "}
            <span className="italic">Nothing it doesn't.</span>
          </h1>
        </ScrollFadeIn>

        <div className="space-y-0">
          {services.map((s, i) => (
            <ScrollFadeIn key={i} delay={i * 0.08}>
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 md:gap-12 py-8 md:py-10 border-b border-gold/20 first:border-t">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">{s.name}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.description}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="bg-navy">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-24 text-center">
        <ScrollFadeIn>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to get started?
          </h2>
          <p className="text-primary-foreground/60 font-body mb-10 max-w-md mx-auto">
            Request a free, no-obligation quote. We'll assess your roof and provide a transparent proposal within 48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold text-primary-foreground px-8 py-4 text-sm font-semibold font-body tracking-wide hover:bg-gold-light transition-colors"
          >
            Get a Free Quote
          </Link>
        </ScrollFadeIn>
      </div>
    </section>
  </Layout>
);

export default Services;
