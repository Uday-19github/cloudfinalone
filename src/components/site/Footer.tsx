import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import cloudcostLogo from "../../assets/cloudcost-logo.png";
import { BRAND_ALT, BrandName } from "./BrandName";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-[1280px] gap-8 sm:gap-10 px-4 sm:px-6 md:px-8 py-10 sm:py-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display text-base sm:text-lg font-bold hover:opacity-85 transition-opacity">
            <img
              src={cloudcostLogo}
              alt={BRAND_ALT}
              className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              width="160"
              height="36"
              loading="lazy"
              decoding="async"
            />
            <BrandName className="hidden sm:inline text-base sm:text-lg" />
          </Link>
          <p className="mt-3 sm:mt-4 max-w-sm text-xs sm:text-sm text-muted-foreground">
            Transform your cloud infrastructure with enterprise-grade consulting services. Cost optimization, migration, architecture design, and 24/7 managed operations.
          </p>
          <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
              <Phone className="h-4 w-4 text-primary flex-shrink-0" />
              <a href="tel:8851283166" className="hover:text-foreground transition-colors">
                +91 88512 83166
              </a>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
              <Mail className="h-4 w-4 text-primary flex-shrink-0" />
              <a href="mailto:sales@fixcloudcost.com" className="hover:text-foreground transition-colors">
                sales@fixcloudcost.com
              </a>
            </div>
            <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-muted-foreground">
                SF-02, D-10, Pandav Nagar,<br />
                New Delhi - 110092
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xs sm:text-sm font-semibold">Product</h4>
          <ul className="mt-2.5 sm:mt-3 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
            <li><Link to="/how-it-works" className="hover:text-foreground transition-colors">How it works</Link></li>
            <li><Link to="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link></li>
            <li><Link to="/partners" className="hover:text-foreground transition-colors">Partners</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs sm:text-sm font-semibold">Company</h4>
          <ul className="mt-2.5 sm:mt-3 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            <li><span className="text-muted-foreground/80">Privacy</span></li>
            <li><span className="text-muted-foreground/80">Terms</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-3 sm:py-5 text-center text-[10px] sm:text-xs text-muted-foreground">
        © {new Date().getFullYear()}{" "}
        <BrandName className="text-[10px] sm:text-xs font-semibold" />. All rights reserved.
      </div>
    </footer>
  );
}
