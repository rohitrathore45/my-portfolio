import { ArrowUp, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col items-center gap-6">

          {/* Name / Brand */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground">
              Rohit <span className="text-primary">Rathore</span>
            </h3>
            <p className="text-xs text-muted-foreground mt-1 tracking-widest uppercase">
              Backend · Full-Stack · AI
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {["#hero", "#about", "#projects", "#contact"].map((href) => (
              <a
                key={href}
                href={href}
                className="hover:text-primary transition-colors duration-200 capitalize"
              >
                {href.replace("#", "")}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-16 h-px bg-border" />

          {/* Thank you */}
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            Thank you for visiting my portfolio.{" "}
            <span className="text-foreground font-medium">
              Let's build something great together.
            </span>{" "}
            <Heart className="inline w-3.5 h-3.5 text-primary fill-primary mb-0.5" />
          </p>

          {/* Bottom row */}
          <div className="w-full flex flex-wrap justify-between items-center gap-4 pt-2">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Rohit Rathore. All rights reserved.
            </p>
            <a
              href="#hero"
              className="p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};