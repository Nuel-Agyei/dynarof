import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const stats = [
  { value: "500+", label: "Roofs Completed" },
  { value: "10+", label: "Years of Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const features = [
  {
    title: "Built to Last, Not Just to Finish",
    description:
      "We engineer every roof with long-term durability in mind. Our process starts with material science and ends with craftsmanship that outlives warranties.",
  },
  {
    title: "Transparent From Estimate to Final Nail",
    description:
      "No hidden fees, no surprise line items. You'll know exactly what we're doing, why we're doing it, and what it costs — before a single shingle is laid.",
  },
  {
    title: "One Team, Start to Finish",
    description:
      "We don't sub out. Our crews are in-house, trained to our standards, and accountable to every detail. You deal with one team from inspection to completion.",
  },
];

const testimonials = [
  {
    quote: "Dynarof replaced our entire commercial roof in under a week. Zero disruptions, zero surprises. They're the only contractor I recommend now.",
    name: "Beatrice",
    title: "Property Manager, Lakeview Commercial",
  },
  {
    quote: "After two bad experiences with other roofers, Dynarof restored my faith. They were honest about what needed fixing and didn't upsell a thing.",
    name: "David",
    title: "Homeowner, Aurora",
  },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="hero-pattern relative min-h-screen flex items-center">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-0">
        <ScrollFadeIn>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] max-w-4xl text-balance">
            We Don't Just Cover Roofs.{" "}
            <span className="italic text-gold">We Protect What's Under Them.</span>
          </h1>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.15}>
          <p className="mt-6 text-primary-foreground/60 text-lg md:text-xl font-body max-w-xl">
            Your Roof, Our Responsibility.
          </p>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.3}>
          <Link
            to="/contact"
            className="inline-block mt-10 bg-gold text-primary-foreground px-8 py-4 text-sm font-semibold font-body tracking-wide hover:bg-gold-light transition-colors"
          >
            Get a Free Quote
          </Link>
        </ScrollFadeIn>
      </div>
    </section>

    {/* Trust Strip */}
    <section className="bg-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-primary-foreground/10">
        {stats.map((stat, i) => (
          <ScrollFadeIn key={i} delay={i * 0.1} className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">{stat.value}</div>
            <div className="mt-2 text-sm font-body text-primary-foreground/50 tracking-wide uppercase">{stat.label}</div>
          </ScrollFadeIn>
        ))}
      </div>
    </section>

    {/* Why Dynarof */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-gold mb-4">Why Dynarof</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground max-w-2xl leading-tight">
            A different kind of roofing company.
          </h2>
        </ScrollFadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feat, i) => (
            <ScrollFadeIn key={i} delay={i * 0.12}>
              <div className={`${i === 1 ? "md:mt-12" : i === 2 ? "md:mt-24" : ""}`}>
                <div className="w-10 h-0.5 bg-gold mb-6" />
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-snug mb-4">
                  {feat.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-gold mb-4">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What our clients say.
          </h2>
        </ScrollFadeIn>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <ScrollFadeIn key={i} delay={i * 0.12}>
              <div className="bg-navy p-8 md:p-10 relative">
                <span className="font-display text-6xl text-gold/30 absolute top-4 left-6 leading-none">"</span>
                <p className="text-primary-foreground/80 font-body text-base leading-relaxed mt-8 mb-8">
                  {t.quote}
                </p>
                <div>
                  <p className="text-primary-foreground font-body font-semibold text-sm">{t.name}</p>
                  <p className="text-primary-foreground/50 font-body text-xs mt-1">{t.title}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
