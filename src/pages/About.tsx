import Layout from "@/components/Layout";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import ProjectGallery from "@/components/ProjectGallery";

const values = [
  { title: "Integrity First", description: "We tell you what your roof needs — not what inflates our invoice." },
  { title: "Craftsmanship Always", description: "Every seam, flashing, and ridge is installed with precision." },
  { title: "People Over Profit", description: "Our reputation is built on relationships, not transactions." },
  { title: "Built for Climate", description: "Materials and methods chosen for your specific environment." },
];

const About = () => (
  <Layout>
    {/* Hero Spacer */}
    <div className="h-20 md:h-24 bg-navy" />

    {/* Split Intro */}
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <ScrollFadeIn>
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-gold mb-4">About Dynarof</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Roofing with purpose,{" "}
            <span className="italic">not just permits.</span>
          </h1>
          <p className="text-muted-foreground font-body leading-relaxed">
            Dynarof was founded on a simple conviction: homeowners and businesses deserve roofing 
            partners who care about what goes above their heads as much as they do. We're not the 
            cheapest option — we're the last roofer you'll ever need to call. From inspection to 
            installation, our process is built around transparency, material quality, and 
            workmanship that speaks for itself decades after the invoice is paid.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.15}>
          <div className="relative aspect-[4/3] bg-navy flex items-center justify-center overflow-hidden">
            {/* Geometric gold frame accent */}
            <div className="absolute inset-6 md:inset-10 border-2 border-gold/30" />
            <div className="absolute inset-10 md:inset-16 border border-gold/15" />
            <div className="relative z-10 text-center px-8">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground italic leading-snug">
                Your Roof,<br />
                <span className="text-gold">Our Responsibility.</span>
              </p>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>

    {/* Values Strip */}
    <section className="bg-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <ScrollFadeIn>
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-gold mb-10">Our Values</p>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {values.map((v, i) => (
            <ScrollFadeIn key={i} delay={i * 0.1}>
              <div className="border-l-2 border-gold/40 pl-5">
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">{v.title}</h3>
                <p className="text-primary-foreground/50 font-body text-sm leading-relaxed">{v.description}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-gold mb-4">Our Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-14">
            Projects that speak for themselves.
          </h2>
        </ScrollFadeIn>
        <ProjectGallery />
      </div>
    </section>
  </Layout>
);

export default About;
