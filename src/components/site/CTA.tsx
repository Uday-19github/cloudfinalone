import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 pb-16 sm:pb-28">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-gradient-emerald-deep p-6 sm:p-12 md:p-20 text-primary-foreground shadow-emerald">
        <div className="absolute inset-0 bg-grid-dark opacity-35" />
        <div className="pointer-events-none absolute -right-28 -top-28 hidden h-80 w-80 rounded-full bg-gold/20 blur-2xl animate-orb md:block" />
        <div className="pointer-events-none absolute -left-28 -bottom-28 hidden h-80 w-80 rounded-full bg-primary-glow/30 blur-2xl animate-orb md:block" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.22em] backdrop-blur">
            <Sparkles className="h-3 sm:h-3.5 w-3 sm:w-3.5" /> Start optimizing today
          </span>
          <h2 className="mt-4 sm:mt-6 font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.02]">
            Ready to reduce your <span className="text-gradient-gold">cloud spend?</span>
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg text-primary-foreground/90">
            Get side-by-side savings proposals from top FinOps partners — in days, not months. No migrations. No lock-ins.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-2 sm:gap-3">
            <Link
              to="/contact"
              className="group btn-hero btn-hero-primary relative overflow-hidden w-full sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative inline-flex items-center gap-2">
                Get My Savings <ArrowRight className="h-4 w-4 transition-transform duration-300" />
              </span>
            </Link>
            <Link
              to="/how-it-works"
              className="btn-hero btn-hero-secondary w-full sm:w-auto"
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
