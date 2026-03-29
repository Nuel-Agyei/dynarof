import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { blogPosts } from "./Blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="h-20 md:h-24 bg-navy" />
        <div className="section-padding text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Post not found.</h1>
          <Link to="/blog" className="text-gold font-body mt-4 inline-block">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  // Simple markdown-like rendering for bold text
  const renderContent = (text: string) => {
    return text.split("\n\n").map((paragraph, i) => {
      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        const heading = paragraph.slice(2, -2);
        return (
          <h3 key={i} className="font-display text-xl md:text-2xl font-semibold text-foreground mt-10 mb-4">
            {heading}
          </h3>
        );
      }
      // Handle inline bold
      const parts = paragraph.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className="text-muted-foreground font-body text-base leading-[1.8] mb-5">
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={j} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <Layout>
      <div className="h-20 md:h-24 bg-navy" />

      <article className="section-padding bg-background">
        <div className="max-w-[680px] mx-auto">
          <ScrollFadeIn>
            <Link to="/blog" className="text-gold font-body text-sm font-semibold tracking-wide hover:text-gold-light transition-colors mb-8 inline-block">
              ← Back to Blog
            </Link>
            <p className="text-xs font-body text-muted-foreground tracking-wide uppercase mb-4">{post.date}</p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              {post.title}
            </h1>
            <div className="w-16 h-0.5 bg-gold mb-10" />
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.15}>
            <div>{renderContent(post.content)}</div>
          </ScrollFadeIn>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
