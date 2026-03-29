import Layout from "@/components/Layout";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const Contact = () => (
  <Layout>
    <div className="h-20 md:h-24 bg-navy" />

    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-gold mb-4">Contact</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Let's talk about your roof.
          </h1>
          <p className="text-muted-foreground font-body mb-12 max-w-xl">
            Fill out the form below and we'll get back to you within one business day with a free, no-obligation assessment.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.15}>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-border bg-background px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full border border-border bg-background px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="(303) 555-1234"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-border bg-background px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-gold transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-2">How can we help?</label>
              <textarea
                rows={5}
                className="w-full border border-border bg-background px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Tell us about your project or concern..."
              />
            </div>
            <button
              type="submit"
              className="bg-gold text-primary-foreground px-8 py-4 text-sm font-semibold font-body tracking-wide hover:bg-gold-light transition-colors"
            >
              Send Request
            </button>
          </form>
        </ScrollFadeIn>
      </div>
    </section>
  </Layout>
);

export default Contact;
