import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const blogPosts = [
  {
    slug: "5-signs-your-roof-needs-immediate-attention",
    title: "5 Signs Your Roof Needs Immediate Attention",
    excerpt: "Ignoring early warning signs can turn a simple repair into a full replacement. Here's what to watch for before it's too late.",
    date: "March 12, 2026",
    content: `Your roof doesn't fail overnight. It sends signals — subtle at first, then impossible to ignore. The difference between a $500 repair and a $15,000 replacement often comes down to catching those signals early.

**1. Curling or Buckling Shingles**

When shingles start to curl at the edges or buckle in the middle, it's a clear sign of weathering or improper ventilation. This compromises your roof's ability to shed water and can lead to leaks within months. If you see this pattern across multiple areas, it's time to call a professional.

**2. Granules in Your Gutters**

Asphalt shingles shed granules as they age. A few here and there is normal for a new roof. But if your gutters are filling up with coarse, sand-like material, your shingles are losing their protective coating. This accelerates UV damage and shortens your roof's remaining lifespan dramatically.

**3. Daylight Through the Attic**

Step into your attic on a sunny day. If you can see pinpricks of light through the roof boards, water can get in too. This often indicates deteriorated underlayment or missing shingles that aren't visible from the ground.

**4. Sagging Roof Deck**

A roof should follow a straight, even line. If you notice any sagging — even slight — it could indicate structural damage from prolonged moisture exposure. This is not a cosmetic issue. A sagging deck can compromise the integrity of your entire roof system and, in extreme cases, pose a safety risk.

**5. Rising Energy Bills**

If your heating or cooling costs are climbing without explanation, your roof may be the culprit. Poor insulation, ventilation issues, or gaps in the roof system allow conditioned air to escape. A professional roof inspection can identify whether your roof is contributing to energy loss.

**The Bottom Line**

None of these signs require panic — but all of them require action. A qualified roofing professional can assess the severity and recommend the most cost-effective solution. At Dynarof, we provide free inspections with photographic documentation so you know exactly where you stand.`,
  },
  {
    slug: "how-we-choose-materials",
    title: "How We Choose Materials: Quality Over Cost at Dynarof",
    excerpt: "Cutting corners on materials is the most expensive decision a roofer can make. Here's how we source and select every component.",
    date: "February 28, 2026",
    content: `In an industry where the lowest bid often wins, material quality is the first thing to get compromised. At Dynarof, we've built our reputation on the opposite approach: we choose materials that perform, not materials that look good on a spreadsheet.

**Starting With Climate, Not Catalogs**

Colorado's Front Range sees everything — hail, UV exposure, freeze-thaw cycles, high winds, and heavy snow loads. We don't pick materials based on national averages. We select based on micro-climate data specific to your property's location, elevation, and exposure.

**Manufacturer Relationships Matter**

We maintain direct relationships with manufacturers like CertainTeed, Owens Corning, and ATAS International. This gives us access to extended warranty programs, technical support during complex installations, and early access to new product lines. When we recommend a material, we've already vetted it with the people who made it.

**The True Cost of "Saving Money"**

A cheaper shingle might save $800 on installation day. But if it fails five years early, you're looking at full tear-off and replacement costs that dwarf the original savings. We calculate total cost of ownership — including expected maintenance, warranty coverage, and projected lifespan — before recommending any system.

**Our Standard Isn't the Minimum**

Building code sets the floor. We aim well above it. Our standard underlayment, for example, exceeds code requirements by using synthetic materials with higher tear strength and UV resistance. Our flashing details follow manufacturer best practices, not just "good enough" methods.

**Testing Before Trusting**

When we evaluate a new product, we don't just read the spec sheet. We install it on test sections, monitor performance through at least one full weather cycle, and gather feedback from our installation crews. Only then does it earn a place in our material library.

**The Dynarof Promise**

Every material we use is one we'd put on our own homes. That's not marketing — it's the standard we hold ourselves to. When we hand you a proposal, every line item has been chosen with purpose, and we're happy to explain exactly why.`,
  },
];

const Blog = () => (
  <Layout>
    <div className="h-20 md:h-24 bg-navy" />

    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-gold mb-4">Blog</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground italic mb-16">
            From the Roof Down
          </h1>
        </ScrollFadeIn>

        <div className="space-y-0">
          {blogPosts.map((post, i) => (
            <ScrollFadeIn key={post.slug} delay={i * 0.12}>
              <article className="py-10 md:py-14 border-b border-gold/20 first:border-t">
                <p className="text-xs font-body text-muted-foreground tracking-wide uppercase mb-3">{post.date}</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-snug mb-3">
                  {post.title}
                </h2>
                <p className="text-muted-foreground font-body text-base leading-relaxed mb-5 max-w-2xl">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-gold font-body text-sm font-semibold tracking-wide hover:text-gold-light transition-colors"
                >
                  Read More →
                </Link>
              </article>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
