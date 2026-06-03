import { m } from "@/components/motion/MotionProvider";
import { Check } from "lucide-react";

export type ServiceBlockContent = {
  title: string;
  desc: string;
  fullDesc: string;
  bullets: string[];
  focus: string;
};

export type ServiceImageBlock = {
  service: ServiceBlockContent;
  image: string;
  imageRight: boolean;
};

export type ServiceCategoryGroup = {
  id: string;
  label: string;
  description: string;
  blocks: ServiceImageBlock[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function FeaturedBlock({
  service,
  image,
  imageRight,
  index,
  displayIndex,
}: {
  service: ServiceBlockContent;
  image: string;
  imageRight: boolean;
  index: number;
  displayIndex: string;
}) {
  return (
    <m.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.6, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14"
      aria-labelledby={`service-${displayIndex}`}
    >
      <div
        className={`order-1 flex justify-center px-2 sm:px-4 ${imageRight ? "md:order-2" : "md:order-1"}`}
      >
        <div className="group relative w-full max-w-[min(100%,440px)]">
          <div
            className="pointer-events-none absolute inset-6 rounded-[2rem] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.50 0.14 160 / 0.22) 0%, transparent 72%)",
              filter: "blur(28px)",
            }}
            aria-hidden
          />
          <m.div
            className="relative animate-float rounded-2xl border border-primary/10 bg-gradient-to-b from-card to-primary/[0.03] p-5 shadow-soft sm:rounded-[1.75rem] sm:p-6"
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 260, damping: 22 } }}
          >
            <img
              src={image}
              alt={service.title}
              loading="lazy"
              decoding="async"
              className="relative z-10 w-full object-contain drop-shadow-[0_20px_40px_-12px_oklch(0.32_0.09_162_/_0.25)]"
            />
          </m.div>
        </div>
      </div>

      <div className={`order-2 ${imageRight ? "md:order-1" : "md:order-2"}`}>
        <div className="relative glass-panel overflow-hidden rounded-2xl border border-primary/12 bg-card/80 p-6 shadow-soft backdrop-blur-md transition-shadow duration-300 hover:border-primary/20 hover:shadow-[0_24px_64px_-24px_oklch(0.32_0.09_162_/_0.22)] sm:rounded-[1.75rem] sm:p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent sm:rounded-[1.75rem]" />
          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <p className="text-[11px] font-bold tabular-nums tracking-[0.2em] text-primary/60 sm:text-xs">
                {displayIndex}
              </p>
            </div>
            <h3
              id={`service-${displayIndex}`}
              className="mt-1 font-display text-xl font-bold leading-snug tracking-tight text-foreground sm:text-2xl md:text-[1.65rem]"
            >
              {service.title}
            </h3>
            <p className="mt-2 text-sm font-semibold text-primary sm:text-[15px]">{service.desc}</p>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {service.fullDesc}
            </p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/50 sm:text-xs">
              What&apos;s included
            </p>
            <ul className="mt-3 flex flex-col gap-2.5">
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
        </div>
      </div>
    </m.article>
  );
}

function CategoryHeader({
  label,
  description,
  index,
}: {
  label: string;
  description: string;
  index: number;
}) {
  return (
    <m.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={index > 0 ? "mt-4 border-t border-border/60 pt-14 sm:pt-16 md:pt-20" : ""}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/80 sm:text-xs">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {label}
          </h3>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-[15px] sm:text-right">
          {description}
        </p>
      </div>
    </m.div>
  );
}

type FeaturedSolutionsSectionProps = {
  blocks?: ServiceImageBlock[];
  categories?: ServiceCategoryGroup[];
  badge?: string;
  title?: string;
  subtitle?: string;
  showIntro?: boolean;
};

export function FeaturedSolutionsSection({
  blocks,
  categories,
  badge = "FEATURED SOLUTIONS",
  title = "Enterprise Cloud Optimization Services",
  subtitle = "Smart cloud infrastructure solutions designed for performance, scalability, and cost efficiency.",
  showIntro = true,
}: FeaturedSolutionsSectionProps) {
  const flatBlocks =
    categories?.flatMap((c) => c.blocks) ?? blocks ?? [];

  let globalIndex = 0;

  return (
    <section className="relative overflow-hidden bg-background py-14 sm:py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: [
            "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.36 0.10 162 / 0.09) 0%, transparent 65%)",
            "radial-gradient(ellipse 45% 40% at 100% 60%, oklch(0.50 0.14 160 / 0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse 40% 35% at 0% 80%, oklch(0.82 0.13 80 / 0.05) 0%, transparent 65%)",
          ].join(", "),
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" aria-hidden />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8">
        {showIntro && (
          <m.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 md:mb-20"
          >
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:px-4 sm:text-[11px] sm:tracking-[0.22em]">
              {badge}
            </span>
            <h2 className="mt-5 font-display text-3xl font-black leading-[1.06] tracking-tight text-foreground sm:mt-6 sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg">
              {subtitle}
            </p>
          </m.div>
        )}

        {categories ? (
          <div className="flex flex-col gap-12 sm:gap-14 md:gap-16">
            {categories.map((category, catIndex) => (
              <div key={category.id} id={category.id} className="scroll-mt-28">
                <CategoryHeader
                  label={category.label}
                  description={category.description}
                  index={catIndex}
                />
                <div className="mt-10 flex flex-col gap-14 sm:mt-12 sm:gap-16 md:gap-20 lg:gap-24">
                  {category.blocks.map((block) => {
                    globalIndex += 1;
                    const displayIndex = String(globalIndex).padStart(2, "0");
                    const blockIndex = globalIndex - 1;
                    return (
                      <FeaturedBlock
                        key={block.service.title}
                        service={block.service}
                        image={block.image}
                        imageRight={block.imageRight}
                        index={blockIndex}
                        displayIndex={displayIndex}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-14 sm:gap-16 md:gap-20 lg:gap-24">
            {flatBlocks.map((block, i) => (
              <FeaturedBlock
                key={block.service.title}
                service={block.service}
                image={block.image}
                imageRight={block.imageRight}
                index={i}
                displayIndex={String(i + 1).padStart(2, "0")}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
