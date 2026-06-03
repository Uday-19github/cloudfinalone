import { FinalCTA } from "@/components/site/CTA";
import { Section } from "@/components/site/Section";
import { createFileRoute } from "@tanstack/react-router";
import { m } from "@/components/motion/MotionProvider";
import { PageWallpaper } from "@/components/site/PageWallpaper";
import { WALLPAPERS } from "@/lib/wallpaper";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — fixcloudcost" },
      {
        name: "description",
        content:
          "Meet our vetted FinOps partners competing to optimize your cloud spend across AWS, Azure, and GCP.",
      },
      { property: "og:title", content: "fixcloudcost FinOps Partner Network" },
      { property: "og:description", content: "Top FinOps experts across AWS, Azure and GCP." },
    ],
  }),
  component: PartnersPage,
});

type Partner = {
  id: string;
  label: string;
  spec: string;
  quote: string;
  body: string;
  recognition: string;
  color: string;
};

const partners: Partner[] = [
  {
    id: "partner-a",
    label: "Partner A",
    spec: "FREE CLOUD SAVINGS",
    quote: "Free cloud savings, security & visibility — one platform.",
    body: "Partner A helps companies save up to 60% on AWS, Azure, and GCP with zero platform cost, contracts, or engineering effort. Customers can connect within minutes and start optimizing immediately.",
    recognition: "Up to 60% cloud savings with zero platform cost",
    color: "#16A34A",
  },
  {
    id: "partner-b",
    label: "Partner B",
    spec: "AWS BILLING OPTIMIZATION",
    quote: "Enterprise AWS expertise with billing-level optimization.",
    body: "Partner B combines advanced AWS consulting with flat billing discounts — even for workloads already covered under Reserved Instances and Savings Plans.",
    recognition: "Discounts even on Reserved Instances and Savings Plans",
    color: "#2563EB",
  },
  {
    id: "partner-c",
    label: "Partner C",
    spec: "COMMITMENT SAVINGS",
    quote: "Commitment savings without customer risk.",
    body: "Partner C enables businesses to benefit from Reserved Instances and Savings Plans without managing long-term commitment risk themselves.",
    recognition: "Commitment savings without RI/SP ownership risk",
    color: "#059669",
  },
  {
    id: "partner-d",
    label: "Partner D",
    spec: "FLEXIBLE CLOUD PRICING",
    quote: "Enterprise pricing without long-term lock-in.",
    body: "Partner D allows organizations to access discounted multi-year cloud pricing without making long-term commitments or upfront purchases.",
    recognition: "Multi-year pricing without long-term commitments",
    color: "#7C3AED",
  },
  {
    id: "partner-e",
    label: "Partner E",
    spec: "AUTONOMOUS OPTIMIZATION",
    quote: "Autonomous cloud optimization with financial protection.",
    body: "Partner E automatically optimizes cloud commitments in real time and compensates customers for unused commitment value through cashback or credits.",
    recognition: "Autonomous optimization with cashback protection",
    color: "#4F46E5",
  },
  {
    id: "partner-f",
    label: "Partner F",
    spec: "KUBERNETES OPTIMIZATION",
    quote: "Autonomous Kubernetes cost optimization.",
    body: "Partner F specializes in Kubernetes optimization through automated node sizing, Spot orchestration, and workload balancing.",
    recognition: "Kubernetes-focused cloud optimization platform",
    color: "#0284C7",
  },
  {
    id: "partner-g",
    label: "Partner G",
    spec: "SAAS & CLOUD OPTIMIZATION",
    quote: "Unified SaaS and cloud spend optimization.",
    body: "Partner G helps organizations optimize SaaS subscriptions and cloud infrastructure spend while supporting startup cloud credit optimization across AWS, Azure, and GCP.",
    recognition: "SaaS optimization plus startup cloud credit support",
    color: "#0D9488",
  },
];

const cardAnim = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  whileHover: { y: -5 },
});

function PartnerCard({
  partner,
  index,
  className = "",
}: {
  partner: Partner;
  index: number;
  className?: string;
}) {
  return (
    <m.div
      key={partner.id}
      {...cardAnim(index)}
      className={`group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:border-transparent hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] ${className}`}
    >
      <h3
        className="font-display text-xl font-bold tracking-tight"
        style={{ color: partner.color }}
      >
        {partner.label}
      </h3>

      <span
        className="mt-3 w-fit rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide"
        style={{ background: `${partner.color}14`, color: partner.color }}
      >
        {partner.spec}
      </span>

      <div className="mt-3 flex flex-1 flex-col gap-2.5 text-sm leading-relaxed">
        <p className="font-semibold text-foreground">&ldquo;{partner.quote}&rdquo;</p>
        <p className="text-muted-foreground">{partner.body}</p>
      </div>
    </m.div>
  );
}

function PartnerQuickReference() {
  return (
    <div className="mt-12 sm:mt-16 md:mt-20">
      <h2 className="text-center font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Partner Quick Reference
      </h2>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card/80 shadow-soft sm:mt-8">
        <table className="hidden w-full border-collapse text-left text-sm md:table">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-5 py-3.5 font-semibold text-foreground sm:px-6 sm:py-4">Partner</th>
              <th className="px-5 py-3.5 font-semibold text-foreground sm:px-6 sm:py-4">
                Key Recognition
              </th>
            </tr>
          </thead>
          <tbody>
            {partners.map((p) => (
              <tr
                key={p.id}
                className="border-b border-border/80 transition-colors last:border-0 hover:bg-primary/[0.04]"
              >
                <td className="px-5 py-3.5 font-semibold text-foreground sm:px-6 sm:py-4">{p.label}</td>
                <td className="px-5 py-3.5 text-muted-foreground sm:px-6 sm:py-4">{p.recognition}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="divide-y divide-border md:hidden">
          {partners.map((p) => (
            <div
              key={p.id}
              className="px-4 py-4 transition-colors hover:bg-primary/[0.04] sm:px-5"
            >
              <p className="font-semibold text-foreground">{p.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.recognition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PartnersPage() {
  return (
    <>
      <PageWallpaper
        src={WALLPAPERS.partners}
        className="section-paint"
        overlay={
          <>
            <div className="pointer-events-none absolute inset-0 bg-[rgba(248,246,239,0.82)]" />
            <div className="absolute inset-0 bg-grid opacity-50" />
          </>
        }
      >
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20 md:py-32 text-center">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 sm:px-3 py-1 sm:py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary">
            Partner Network
          </span>
          <h1 className="mt-4 sm:mt-5 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Top FinOps experts, <span className="text-gradient">competing for you</span>
          </h1>
          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground">
            Every partner is vetted for technical depth, transparent pricing, and proven savings outcomes.
          </p>
        </div>
      </PageWallpaper>

      <Section>
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {partners.map((p, i) => (
            <PartnerCard
              key={p.id}
              partner={p}
              index={i}
              className={
                i === partners.length - 1
                  ? "sm:col-span-2 sm:max-w-md sm:justify-self-center lg:col-span-1 lg:col-start-2 lg:max-w-none"
                  : ""
              }
            />
          ))}
        </div>

        <PartnerQuickReference />
      </Section>

      <FinalCTA />
    </>
  );
}
