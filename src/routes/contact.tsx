import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageWallpaper } from "@/components/site/PageWallpaper";
import { WALLPAPERS } from "@/lib/wallpaper";
import { ShieldCheck, Mail, CheckCircle2, Phone, MapPin, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact fixcloudcost — Get Your Cloud Savings Report" },
      { name: "description", content: "Reduce your cloud spend with expert guidance. Get competing FinOps quotes from top partners within days. No commitment, no infrastructure changes." },
      { property: "og:title", content: "Contact fixcloudcost — Cloud Cost Optimization" },
      { property: "og:description", content: "Get competing FinOps quotes for your AWS, Azure or GCP spend." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().min(1, "Required").max(120),
  provider: z.enum(["AWS", "Azure", "GCP", "Multi-cloud"]),
  spend: z.string().trim().min(1, "Required").max(60),
  message: z.string().trim().max(1000).optional(),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd.entries()));
    
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      setIsLoading(false);
      return;
    }

    setErrors({});

    try {
      const response = await fetch("https://formspree.io/f/mvzlqjlj", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: fd,
      });

      if (response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
      } else {
        setSubmitError("Failed to submit form. Please try again.");
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <PageWallpaper
        src={WALLPAPERS.contact}
        className="section-paint"
        overlay={
          <>
            <div className="pointer-events-none absolute inset-0 bg-[rgba(248,246,239,0.82)]" />
            <div className="absolute inset-0 bg-grid opacity-50" />
          </>
        }
      >
        <div className="relative mx-auto grid max-w-[1280px] gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20 lg:py-28 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Contact Us
            </span>
            <h1 className="mt-5 text-3xl sm:text-4xl font-bold md:text-5xl">
              Get your <span className="text-gradient">savings report</span>
            </h1>
            <p className="mt-5 max-w-md text-muted-foreground">
              Share a few details and we'll match you with FinOps experts. Receive competing optimization quotes within days.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Read-only billing access only", "No infrastructure changes", "No lock-ins or penalties", "Expert quotes in 5–7 days"].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" /> {p}
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="mt-12 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Phone</p>
                  <a href="tel:8851283166" className="text-sm font-medium hover:text-primary transition-colors">
                    +91 88512 83166
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</p>
                  <a href="mailto:sales@fixcloudcost.com" className="text-sm font-medium hover:text-primary transition-colors">
                    sales@fixcloudcost.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Address</p>
                  <p className="text-sm">
                    SF-02, D-10, Pandav Nagar,<br />
                    New Delhi - 110092
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4 text-sm text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
              Your data is encrypted and never shared without consent.
            </div>
          </div>

          <div className="glass-panel rounded-2xl sm:rounded-[2rem] border border-border p-5 sm:p-8 md:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-2xl font-bold">Thank you!</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  We've received your details. Our team will review your information and reach out within 24 hours with next steps and initial recommendations.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                {submitError && (
                  <div role="alert" className="flex items-center gap-3 rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    {submitError}
                  </div>
                )}
                <Field label="Full Name" name="name" error={errors.name} />
                <Field label="Work Email" name="email" type="email" error={errors.email} />
                <Field label="Company" name="company" error={errors.company} />
                <div>
                  <label htmlFor="provider" className="mb-2 block text-sm font-semibold text-foreground">Cloud Provider</label>
                  <select
                    id="provider"
                    name="provider"
                    defaultValue="AWS"
                    aria-invalid={errors.provider ? true : undefined}
                    aria-describedby={errors.provider ? "provider-error" : undefined}
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  >
                    <option>AWS</option>
                    <option>Azure</option>
                    <option>GCP</option>
                    <option>Multi-cloud</option>
                  </select>
                  {errors.provider && (
                    <p id="provider-error" className="mt-1 text-xs text-destructive">{errors.provider}</p>
                  )}
                </div>
                <Field label="Monthly Cloud Spend" name="spend" placeholder="e.g., $25,000" error={errors.spend} />
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">Message <span className="text-muted-foreground">(optional)</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={1000}
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                  {errors.message && <p id="message-error" className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-2 w-full rounded-full bg-gradient-emerald-deep px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-emerald transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isLoading ? "Submitting..." : "Get My Savings Report"}
                </button>
              </form>
            )}
          </div>
        </div>
      </PageWallpaper>
    </>
  );
}

function Field({
  label, name, type = "text", placeholder, error,
}: { label: string; name: string; type?: string; placeholder?: string; error?: string }) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-foreground">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        autoComplete={name === "email" ? "email" : name === "name" ? "name" : name === "company" ? "organization" : undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
      {error && <p id={errorId} className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
