import { createFileRoute, Link } from "@tanstack/react-router";
import { m } from "@/components/motion/MotionProvider";
import { PageWallpaper } from "@/components/site/PageWallpaper";
import {
  ArrowRight,
  BarChart3,
  Cloud,
  DollarSign,
  Server,
  TrendingDown,
  Zap,
} from "lucide-react";
import { AGGREGATE_METRICS, CASE_STUDIES, type CaseStudy } from "@/data/case-studies";
import { WALLPAPERS } from "@/lib/wallpaper";

const CARD_ICONS = [Cloud, Server, BarChart3, Zap, TrendingDown, DollarSign, Cloud] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = (i: number) => ({
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  },
});

const particles = [
  { x: "7%", y: "22%", r: 2.5, dur: 7, del: 0 },
  { x: "91%", y: "14%", r: 2, dur: 9, del: 1.2 },
  { x: "18%", y: "74%", r: 3, dur: 8, del: 0.5 },
  { x: "82%", y: "68%", r: 2, dur: 6.5, del: 2 },
  { x: "49%", y: "8%", r: 2, dur: 7.5, del: 1.8 },
  { x: "63%", y: "88%", r: 2.5, dur: 8.5, del: 0.3 },
];

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — fixcloudcost" },
      {
        name: "description",
        content:
          "Real cloud cost optimization results. How companies reduced AWS spend and improved operational efficiency using FixCloudCost.",
      },
      { property: "og:title", content: "Case Studies — fixcloudcost" },
      {
        property: "og:description",
        content: "Enterprise AWS cost optimization case studies and measurable FinOps outcomes.",
      },
    ],
  }),
  component: CaseStudiesPage,
});

function BulletList({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="mt-3 flex flex-col gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/85 sm:text-sm"
        >
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const Icon = CARD_ICONS[index % CARD_ICONS.length];

  return (
    <m.article
      variants={stagger(index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-48px" }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 22 } }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-6 shadow-soft backdrop-blur-md transition-shadow duration-300 hover:border-primary/25 hover:shadow-[0_24px_64px_-20px_oklch(0.32_0.09_162_/_0.22)] sm:rounded-[1.75rem] sm:p-8 md:p-9"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-[1.75rem]" />
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, oklch(0.50 0.14 160) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          {study.industry ? (
            <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-[11px]">
              {study.industry}
            </span>
          ) : null}
          {study.title ? (
            <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight text-foreground sm:text-2xl">
              {study.title}
            </h3>
          ) : null}
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/18 to-primary/6 ring-1 ring-primary/12 sm:h-14 sm:w-14">
          <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" strokeWidth={1.75} />
        </div>
      </div>

      <div className="relative mt-6 space-y-5 border-t border-border/60 pt-6">
        {study.challenge ? (
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Challenge</h4>
            <p className="mt-3 text-[13px] leading-relaxed text-foreground/85 sm:text-sm">
              {study.challenge}
            </p>
          </div>
        ) : null}
        {study.solution.length > 0 ? (
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              FixCloudCost Solution
            </h4>
            <BulletList items={study.solution} />
          </div>
        ) : null}
        {study.results.length > 0 ? (
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Results</h4>
            <BulletList items={study.results} />
          </div>
        ) : null}
      </div>
    </m.article>
  );
}

function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <PageWallpaper
        src={WALLPAPERS.caseStudies}
        className="section-paint"
        overlay={
          <>
            <div className="pointer-events-none absolute inset-0 bg-[rgba(248,246,239,0.82)]" />
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background: [
                  "radial-gradient(ellipse 72% 55% at 50% -8%, oklch(0.36 0.10 162 / 0.13) 0%, transparent 70%)",
                  "radial-gradient(ellipse 50% 40% at 90% 50%, oklch(0.82 0.13 80 / 0.08) 0%, transparent 65%)",
                  "radial-gradient(ellipse 45% 35% at 10% 80%, oklch(0.50 0.14 160 / 0.07) 0%, transparent 65%)",
                ].join(", "),
              }}
            />
            <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
            {particles.map((p, idx) => (
              <span
                key={idx}
                aria-hidden
                className="particle-float pointer-events-none absolute rounded-full bg-primary/30"
                style={{
                  left: p.x,
                  top: p.y,
                  width: p.r * 2,
                  height: p.r * 2,
                  animationDuration: `${p.dur}s`,
                  animationDelay: `${p.del}s`,
                }}
              />
            ))}
          </>
        }
      >
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-28 md:py-36">
          <m.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:px-4 sm:text-xs sm:tracking-[0.24em]">
              CASE STUDIES
            </span>
          </m.div>
          <m.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="hero-heading mt-5 font-display text-3xl font-black leading-[1.04] tracking-tight text-foreground sm:mt-7 sm:text-4xl md:text-5xl lg:text-[4.25rem]"
          >
            Real Cloud Cost Optimization{" "}
            <span className="text-gradient-hero">Results</span>
          </m.h1>
          <m.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-7 sm:text-[15px] md:text-base"
          >
            How companies reduced AWS spend, optimized infrastructure, and improved operational
            efficiency using FixCloudCost.
          </m.p>
        </div>
      </PageWallpaper>

      {/* Case studies grid */}
      <section className="mx-auto max-w-[1280px] px-4 pb-6 pt-4 sm:px-6 md:px-8 md:pb-10">
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={`case-study-${i}`} study={study} index={i} />
          ))}
        </div>
      </section>

      {/* Aggregate metrics */}
      <section className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-20 md:px-8 md:py-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-emerald-deep p-6 shadow-emerald sm:p-10 md:p-14">
          <div className="absolute inset-0 bg-grid-dark opacity-25" />
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[min(100%,36rem)] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.58 0.15 160 / 0.35) 0%, transparent 70%)",
              filter: "blur(24px)",
            }}
          />
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {AGGREGATE_METRICS.map((metric, i) => (
              <m.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/12 bg-white/10 p-5 text-center backdrop-blur-md transition-colors duration-300 hover:border-white/22 hover:bg-white/14 sm:p-6"
              >
                <p className="font-display text-3xl font-black leading-none text-primary-foreground sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/80 sm:text-[13px]">
                  {metric.label}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 pb-16 sm:pb-28">
        <div
          className="relative overflow-hidden rounded-[2rem]"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.07 162) 0%, oklch(0.28 0.09 162) 40%, oklch(0.20 0.06 165) 100%)",
          }}
        >
          <div className="absolute inset-0 bg-grid-dark opacity-25" />
          <div
            className="pointer-events-none absolute left-1/2 -top-32 h-80 w-96 -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.50 0.14 160 / 0.28) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-3xl px-5 py-12 text-center text-primary-foreground sm:px-8 sm:py-16 md:py-24">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-display text-3xl font-black leading-[1.04] tracking-tight sm:text-4xl md:text-5xl">
                Ready to optimize your AWS costs?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm text-primary-foreground/90 sm:text-base md:text-lg">
                Get side-by-side savings proposals from top FinOps partners — in days, not months.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
                <Link
                  to="/contact"
                  className="btn-hero btn-hero-primary relative w-full overflow-hidden sm:w-auto"
                >
                  <span className="relative inline-flex items-center gap-2">
                    Get My Savings <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <Link
                  to="/how-it-works"
                  className="btn-hero btn-hero-secondary w-full sm:w-auto"
                >
                  How It Works
                </Link>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </>
  );
}
