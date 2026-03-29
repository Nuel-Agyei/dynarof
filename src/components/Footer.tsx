import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {/* Brand */}
        <div>
          <Link to="/" className="font-display text-2xl font-bold tracking-tight">
            Dyna<span className="text-gold">rof</span>
          </Link>
          <p className="mt-4 text-primary-foreground/60 text-sm font-body leading-relaxed max-w-xs">
            Your Roof, Our Responsibility. Professional roofing services built on trust, precision, and lasting quality.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-display text-sm font-semibold tracking-widest uppercase text-gold mb-6">Navigate</h4>
          <div className="space-y-3">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Blog", path: "/blog" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-semibold tracking-widest uppercase text-gold mb-6">Contact</h4>
          <div className="space-y-3 text-sm font-body text-primary-foreground/60">
            <p>Lashibi 19 Junction, Water Works</p>
            <p>Accra, Ghana</p>
            <p className="pt-2">
              <a href="tel:+233545824980" className="hover:text-primary-foreground transition-colors">+233 54 582 4980</a>
            </p>
            <p>
              <a href="mailto:dynarofroofingsystem@gmail.com" className="hover:text-primary-foreground transition-colors">hello@dynaroof.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-xs font-body text-primary-foreground/40">
        © {new Date().getFullYear()} Dynarof. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
