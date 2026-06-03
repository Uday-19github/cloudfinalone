import { createFileRoute, Link } from "@tanstack/react-router";
import discoveryCallImg from "@/assets/discovery call.png";
import readOnlyAccessImg from "@/assets/Read only access .png";
import partnerBiddingImg from "@/assets/Partner bidding.png";
import quoteComparisonImg from "@/assets/Quote comparison.png";
import signAndSaveImg from "@/assets/sign and save.png";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorksPage,
});

const FOREST = "#06402B";
const HEADING_LIME = "#5CB338";
const PAGE_BG = "#FDFCF8";
const TIMELINE_ORANGE = "#ff7a00";

type Step = {
  n: string;
  day: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  cardOnLeft: boolean;
};

const steps: Step[] = [
  {
    n: "01",
    day: "Day 1",
    title: "Discovery call",
    body: "A 20-minute call to understand your cloud footprint, contracts, and savings goals.",
    image: discoveryCallImg,
    imageAlt: "Discovery call illustration",
    cardOnLeft: true,
  },
  {
    n: "02",
    day: "Day 1–2",
    title: "Read-only billing access",
    body: "Connect AWS, Azure, or GCP via cross-account roles. We never touch workloads.",
    image: readOnlyAccessImg,
    imageAlt: "Read-only billing access illustration",
    cardOnLeft: false,
  },
  {
    n: "03",
    day: "Day 2–4",
    title: "Partner bidding",
    body: "Our vetted FinOps partner network competes for your spend with transparent, side-by-side proposals.",
    image: partnerBiddingImg,
    imageAlt: "Partner bidding illustration",
    cardOnLeft: true,
  },
  {
    n: "04",
    day: "Day 5",
    title: "Quote comparison",
    body: "We deliver a side-by-side breakdown of every offer with risk, term, and break-even analysis.",
    image: quoteComparisonImg,
    imageAlt: "Quote comparison illustration",
    cardOnLeft: false,
  },
  {
    n: "05",
    day: "Day 6–7",
    title: "Sign & save",
    body: "Pick the best deal. We handle paperwork, onboarding, and ongoing rebalancing.",
    image: signAndSaveImg,
    imageAlt: "Sign and save illustration",
    cardOnLeft: true,
  },
];

function TimelineNode() {
  return (
    <div
      className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center"
      aria-hidden
    >
      <div
        className="absolute inset-0 rounded-full border-2 border-dashed"
        style={{ borderColor: TIMELINE_ORANGE }}
      />
      <div
        className="relative h-3 w-3 rounded-full"
        style={{ backgroundColor: TIMELINE_ORANGE }}
      />
    </div>
  );
}

function ProcessCard({ step }: { step: Step }) {
  return (
    <article className="relative w-full min-h-[220px] max-w-[460px] rounded-[24px] border border-black/[0.05] bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
      <span
        className="pointer-events-none absolute right-6 top-6 select-none font-extrabold leading-none text-[#06402B]"
        style={{ fontSize: "72px", opacity: 0.06 }}
        aria-hidden
      >
        {step.n}
      </span>

      <div className="relative z-10 flex flex-col gap-3 pr-4">
        <span
          className="w-fit rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wide"
          style={{ backgroundColor: "#fff7ed", color: TIMELINE_ORANGE }}
        >
          {step.day}
        </span>
        <h3
          className="text-xl font-bold leading-snug tracking-tight sm:text-2xl"
          style={{ color: FOREST }}
        >
          {step.title}
        </h3>
        <p className="max-w-prose text-[15px] font-medium leading-relaxed text-[#57534E]">
          {step.body}
        </p>
      </div>
    </article>
  );
}

function StepIllustration({ step }: { step: Step }) {
  return (
    <img
      src={step.image}
      alt={step.imageAlt}
      width={260}
      height={260}
      className="h-auto w-[220px] max-w-full object-contain sm:w-[240px] lg:w-[260px]"
      loading="lazy"
      decoding="async"
    />
  );
}

function ProcessRow({ step, showMobileLine }: { step: Step; showMobileLine: boolean }) {
  const card = <ProcessCard step={step} />;
  const illustration = <StepIllustration step={step} />;

  return (
    <div className="relative">
      {/* Mobile: timeline + card then image */}
      <div className="flex gap-5 md:hidden">
        <div className="relative flex w-10 shrink-0 flex-col items-center">
          {showMobileLine ? (
            <div
              className="absolute left-1/2 top-10 bottom-0 w-0.5 -translate-x-1/2"
              style={{ backgroundColor: TIMELINE_ORANGE }}
              aria-hidden
            />
          ) : null}
          <TimelineNode />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-8">
          {card}
          <div className="flex justify-center sm:justify-start">{illustration}</div>
        </div>
      </div>

      {/* Desktop: alternating card | timeline | illustration */}
      <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)] md:items-center md:gap-x-16 lg:gap-x-20">
        <div
          className={`flex min-h-[220px] items-center ${
            step.cardOnLeft ? "justify-end" : "justify-end"
          }`}
        >
          {step.cardOnLeft ? card : illustration}
        </div>

        <div className="flex items-center justify-center">
          <TimelineNode />
        </div>

        <div
          className={`flex min-h-[220px] items-center ${
            step.cardOnLeft ? "justify-start" : "justify-start"
          }`}
        >
          {step.cardOnLeft ? illustration : card}
        </div>
      </div>
    </div>
  );
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute -left-[8%] top-[14%] h-[min(42vw,320px)] w-[min(70vw,520px)] rounded-[50%] border border-[#06402B]/[0.055]"
        style={{ transform: "rotate(-8deg)" }}
      />
      <div
        className="absolute -right-[6%] top-[38%] h-[min(36vw,280px)] w-[min(62vw,440px)] rounded-[50%] border border-[#06402B]/[0.045]"
        style={{ transform: "rotate(6deg)" }}
      />
    </div>
  );
}

function BottomWave() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-[min(28vh,200px)] opacity-[0.14]"
      aria-hidden
    >
      <svg className="h-full w-full" viewBox="0 0 1440 200" preserveAspectRatio="none" fill="none">
        <path
          d="M0 120 C 240 40 480 180 720 100 C 960 20 1200 160 1440 80 L 1440 200 L 0 200 Z"
          fill="#06402B"
        />
        <path
          d="M0 150 C 280 90 520 170 780 110 C 1040 50 1280 130 1440 100 L 1440 200 L 0 200 Z"
          fill="#9CCC65"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}

function HowItWorksPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden font-sans"
      style={{ backgroundColor: PAGE_BG }}
    >
      <BackgroundDecor />
      <BottomWave />

      <section className="relative z-[1] mx-auto max-w-[1280px] px-4 pb-28 pt-14 sm:px-6 sm:pb-32 sm:pt-20 md:px-8 md:pt-24">
        <div className="mb-16 max-w-2xl text-left sm:mb-20 md:mb-28">
          <span className="inline-block rounded-full border border-[#BBF7D0] bg-[#DCFCE7] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#06402B] sm:text-[11px]">
            OUR PROCESS
          </span>
          <h1
            className="mt-8 text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight sm:mt-10"
            style={{ color: FOREST }}
          >
            Your savings journey{" "}
            <span className="whitespace-nowrap" style={{ color: HEADING_LIME }}>
              in 7 days.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base font-medium leading-relaxed text-[#57534E] sm:mt-8 sm:text-[17px]">
            A clear, no-nonsense process.
            <br />
            No migrations. No infra changes.
            <br />
            Just smarter pricing.
          </p>
        </div>

        <div className="relative mx-auto max-w-[1100px]">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 md:block"
            style={{ backgroundColor: TIMELINE_ORANGE }}
            aria-hidden
          />

          <div className="flex flex-col gap-20 md:gap-[100px] lg:gap-[120px]">
            {steps.map((step, i) => (
              <ProcessRow key={step.n} step={step} showMobileLine={i < steps.length - 1} />
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:mt-24 md:mt-32 md:flex-row md:gap-6">
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center rounded-full px-10 py-4 text-base font-bold text-white shadow-[0_14px_36px_rgba(6,64,43,0.28)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06402B] focus-visible:ring-offset-2 sm:w-auto sm:px-12 sm:py-[1.125rem] sm:text-lg"
            style={{ backgroundColor: FOREST }}
          >
            Start the process →
          </Link>
          <Link
            to="/partners"
            className="inline-flex w-full items-center justify-center rounded-full border border-[#D6D3D1] bg-white px-10 py-4 text-base font-bold transition hover:bg-[#FAFAF9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06402B] focus-visible:ring-offset-2 sm:w-auto sm:px-12 sm:py-[1.125rem] sm:text-lg"
            style={{ color: FOREST }}
          >
            See who&apos;s in the network
          </Link>
        </div>
      </section>
    </main>
  );
}
