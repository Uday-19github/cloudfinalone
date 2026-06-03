import { Link } from "@tanstack/react-router";
import { AnimatePresence, m } from "@/components/motion/MotionProvider";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import cloudcostLogo from "../../assets/cloudcost-logo.png";
import { BRAND_ALT, BrandName } from "./BrandName";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/partners", label: "Partners" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-300 ${scrolled ? "glass border-b border-border/50 shadow-soft" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 text-base font-semibold text-foreground hover:opacity-85 transition-opacity flex-shrink-0">
          <img
            src={cloudcostLogo}
            alt={BRAND_ALT}
            className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            width="180"
            height="44"
          />
          <BrandName className="hidden sm:inline whitespace-nowrap text-base sm:text-lg md:text-xl" />
        </Link>

        <nav className="hidden items-center gap-1 sm:gap-1.5 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[status=active]:text-primary data-[status=active]:shadow-[inset_0_-1px_0_0] data-[status=active]:shadow-primary/40"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-emerald-deep px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-emerald transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((current) => !current)}
          className="md:hidden rounded-full border border-border/70 bg-background/90 p-2 shadow-sm backdrop-blur transition-all duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring flex-shrink-0"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            id="mobile-nav"
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-4 sm:px-6 py-3 sm:py-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-emerald-deep px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-emerald transition-transform duration-200 hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
