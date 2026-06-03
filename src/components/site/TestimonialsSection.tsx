import { memo } from "react";
import { m } from "@/components/motion/MotionProvider";
import { Quote } from "lucide-react";
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials";

function TestimonialScrollCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="group relative flex w-[min(88vw,380px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-primary/15 bg-card/80 p-6 shadow-soft backdrop-blur-md transition-shadow duration-300 hover:border-primary/28 hover:shadow-[0_20px_56px_-16px_oklch(0.32_0.09_162_/_0.18)] sm:w-[420px] sm:p-8">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.035] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, oklch(0.50 0.14 160) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15">
        <Quote className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden />
      </div>
      <div className="relative h-0.5 w-10 rounded-full bg-gradient-to-r from-primary/60 to-primary/10" />
      <p className="relative mt-5 flex-1 text-[15px] leading-relaxed text-foreground/90 sm:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="relative mt-6 border-t border-border/60 pt-5 text-sm font-semibold text-foreground">
        — {testimonial.attribution}
      </footer>
    </blockquote>
  );
}

export const TestimonialsSection = memo(function TestimonialsSection() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      aria-label="Client testimonials"
      className="relative overflow-hidden bg-background py-12 sm:py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: [
            "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.36 0.10 162 / 0.10) 0%, transparent 70%)",
            "radial-gradient(ellipse 40% 35% at 100% 80%, oklch(0.50 0.14 160 / 0.06) 0%, transparent 65%)",
          ].join(", "),
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-[min(90%,32rem)] -translate-x-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.58 0.15 160 / 0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <m.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:px-4 sm:text-[11px] sm:tracking-[0.22em]"
          >
            CLIENT TESTIMONIALS
          </m.span>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-3xl font-black leading-[1.06] tracking-tight text-foreground sm:mt-6 sm:text-4xl md:text-5xl"
          >
            Trusted by Growing Cloud-First Companies
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg"
          >
            Real feedback from startups and enterprises optimizing AWS costs with FixCloudCost.
          </m.p>
        </div>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="marquee-track flex w-max animate-marquee items-stretch gap-5 py-2 pl-2 [animation-duration:55s] hover:[animation-play-state:paused] sm:gap-6">
            {items.map((testimonial, i) => (
              <TestimonialScrollCard key={`${testimonial.attribution}-${i}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
