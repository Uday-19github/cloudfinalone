import { m } from "@/components/motion/MotionProvider";
import { Check } from "lucide-react";
import type { ServiceBlockContent, ServiceImageBlock } from "./FeaturedSolutionsSection";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function serviceSlug(title: string) {
  return title.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase();
}

function SectionAmbient() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: [
            "radial-gradient(ellipse 80% 45% at 50% -5%, oklch(0.36 0.10 162 / 0.08) 0%, transparent 55%)",
            "radial-gradient(ellipse 40% 35% at 100% 50%, oklch(0.50 0.14 160 / 0.05) 0%, transparent 65%)",
            "radial-gradient(ellipse 35% 30% at 0% 70%, oklch(0.82 0.13 80 / 0.04) 0%, transparent 60%)",
          ].join(", "),
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" aria-hidden />
    </>
  );
}

function ServiceCopy({ service, id }: { service: ServiceBlockContent; id: string }) {
  return (
    <div className="relative">
      <h3
        id={id}
        className="font-display text-xl font-bold leading-snug tracking-tight text-foreground sm:text-2xl md:text-[1.65rem]"
      >
        {service.title}
      </h3>
      <p className="mt-2 text-sm font-semibold text-primary sm:text-[15px]">{service.desc}</p>
      <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
        {service.fullDesc}
      </p>
      <ul className="mt-4 flex flex-col gap-2.5 sm:mt-5">
        {service.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85 sm:text-[15px]"
          >
            <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-2.5 w-2.5 text-primary" strokeWidth={2.5} />
            </span>
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-xl border border-primary/12 bg-primary/[0.04] px-4 py-3.5 sm:mt-7 sm:px-5">
        <p className="text-sm font-medium leading-relaxed text-foreground/90">{service.focus}</p>
      </div>
    </div>
  );
}

function ServiceImage({
  src,
  alt,
  large,
}: {
  src: string;
  alt: string;
  large?: boolean;
}) {
  return (
    <div
      className={`group/img relative flex w-full items-center justify-center ${
        large ? "min-h-[220px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[380px]" : "min-h-[180px] sm:min-h-[220px]"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-[8%] rounded-[2rem] opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.50 0.14 160 / 0.28) 0%, transparent 68%)",
          filter: "blur(32px)",
        }}
        aria-hidden
      />
      <m.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`relative z-10 w-full object-contain drop-shadow-[0_28px_56px_-16px_oklch(0.32_0.09_162_/_0.35)] transition-transform duration-500 ease-out group-hover/img:scale-[1.02] ${
          large ? "max-h-[240px] sm:max-h-[300px] md:max-h-[360px] lg:max-h-[400px]" : "max-h-[200px] sm:max-h-[240px] md:max-h-[280px]"
        }`}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
      />
    </div>
  );
}

function IntegratedServiceRow({
  block,
  categoryId,
  index,
  largeImage,
}: {
  block: ServiceImageBlock;
  categoryId: string;
  index: number;
  largeImage?: boolean;
}) {
  const { service, image, imageRight } = block;
  const copyId = `${categoryId}-${serviceSlug(service.title)}`;

  return (
    <m.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease }}
      aria-labelledby={copyId}
      className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card/70 shadow-[0_8px_40px_-12px_oklch(0.32_0.09_162_/_0.18)] backdrop-blur-xl sm:rounded-[1.75rem]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent" />
      <div className="relative grid grid-cols-1 md:grid-cols-2">
        <div
          className={`order-1 flex items-center justify-center border-b border-primary/10 bg-gradient-to-b from-primary/[0.04] to-transparent p-6 sm:p-8 md:min-h-[380px] md:border-b-0 md:p-10 ${
            imageRight ? "md:order-2 md:border-l md:border-primary/10" : "md:border-r md:border-primary/10"
          }`}
        >
          <ServiceImage src={image} alt={service.title} large={largeImage} />
        </div>
        <div
          className={`order-2 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 ${
            imageRight ? "md:order-1" : ""
          }`}
        >
          <ServiceCopy service={service} id={copyId} />
        </div>
      </div>
    </m.article>
  );
}

type ServicesShowcaseProps = {
  blocks: ServiceImageBlock[];
};

export function ServicesShowcase({ blocks }: ServicesShowcaseProps) {
  return (
    <section className="relative overflow-hidden bg-background pb-14 pt-4 sm:pb-20 sm:pt-6 md:pb-24 md:pt-8">
      <SectionAmbient />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="flex flex-col gap-8 sm:gap-9 md:gap-10">
          {blocks.map((block, index) => (
            <IntegratedServiceRow
              key={block.service.title}
              block={block}
              categoryId={serviceSlug(block.service.title)}
              index={index}
              largeImage
            />
          ))}
        </div>
      </div>
    </section>
  );
}
