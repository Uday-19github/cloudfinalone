import { createFileRoute } from "@tanstack/react-router";
import { m } from "@/components/motion/MotionProvider";
import { FinalCTA } from "@/components/site/CTA";
import type { ServiceImageBlock } from "@/components/site/FeaturedSolutionsSection";
import { ServicesShowcase } from "@/components/site/ServicesShowcase";
import { PageWallpaper } from "@/components/site/PageWallpaper";
import { serviceCategories } from "@/data/services";
import { WALLPAPERS } from "@/lib/wallpaper";
import costPerfImg from "@/assets/Cost and performance optimization.jpeg";
import managedImg from "@/assets/Cloud Managed Services.jpeg";
import migrationImg from "@/assets/Cloud Migration.jpeg";
import architectureImg from "@/assets/Cloud Architech Design.png";
import devopsImg from "@/assets/Devops.png";
import securityImg from "@/assets/Security and compliance.png";
import awsArcImg from "@/assets/aws arc.jpeg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — fixcloudcost" },
      {
        name: "description",
        content:
          "Enterprise cloud services: cost optimization, managed operations, migration, architecture design, DevOps, security, and AWS Well-Architected reviews across AWS, Azure, and GCP.",
      },
      { property: "og:title", content: "Services — fixcloudcost" },
      {
        property: "og:description",
        content:
          "End-to-end cloud consulting and FinOps partner matching for AWS, Azure, and GCP.",
      },
    ],
  }),
  component: ServicesPage,
});

const serviceImages = [
  costPerfImg,
  managedImg,
  migrationImg,
  architectureImg,
  devopsImg,
  securityImg,
  awsArcImg,
] as const;

function buildServiceBlocks(): ServiceImageBlock[] {
  const blocks: ServiceImageBlock[] = [];
  let imageIndex = 0;
  let layoutIndex = 0;

  for (const category of serviceCategories) {
    for (const service of category.services) {
      blocks.push({
        service,
        image: serviceImages[imageIndex],
        imageRight: layoutIndex % 2 === 1,
      });
      imageIndex += 1;
      layoutIndex += 1;
    }
  }

  return blocks;
}

const serviceBlocks = buildServiceBlocks();

const particles = [
  { x: "7%", y: "22%", r: 2.5, dur: 7, del: 0 },
  { x: "91%", y: "14%", r: 2, dur: 9, del: 1.2 },
  { x: "18%", y: "74%", r: 3, dur: 8, del: 0.5 },
  { x: "82%", y: "68%", r: 2, dur: 6.5, del: 2 },
  { x: "49%", y: "8%", r: 2, dur: 7.5, del: 1.8 },
  { x: "63%", y: "88%", r: 2.5, dur: 8.5, del: 0.3 },
  { x: "34%", y: "55%", r: 1.5, dur: 6, del: 2.5 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function ServicesPage() {
  return (
    <>
      <PageWallpaper
        src={WALLPAPERS.services}
        className="section-paint"
        overlay={
          <>
            <div className="pointer-events-none absolute inset-0 bg-[rgba(248,246,239,0.82)]" />
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background: [
                  "radial-gradient(ellipse 72% 55% at 50% -8%, oklch(0.36 0.10 162 / 0.09) 0%, transparent 70%)",
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
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 pb-6 pt-14 text-center sm:pb-8 sm:pt-20 md:pb-10 md:pt-24">
          <m.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-primary">
              Our Services
            </span>
          </m.div>

          <m.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="hero-heading mt-5 sm:mt-7 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[4.25rem] font-black leading-[1.04] tracking-tight text-foreground"
          >
            Comprehensive Cloud{" "}
            <span className="text-gradient-hero">Consulting Solutions</span>
          </m.h1>

          <m.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 sm:mt-7 max-w-xl text-sm sm:text-[15px] md:text-base leading-relaxed text-muted-foreground"
          >
            From cost optimization to full infrastructure management — expert cloud consulting
            services tailored to your business needs.
          </m.p>

          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 sm:h-10"
            style={{
              background: "linear-gradient(to bottom, transparent, var(--color-background))",
            }}
          />
        </div>
      </PageWallpaper>

      <ServicesShowcase blocks={serviceBlocks} />

      <FinalCTA />
    </>
  );
}
