export const SITE = {
  name: "fixcloudcost",
  url: "https://fixcloudcost.com",
  // Use a generic OG image; prefer a real hosted image if you have one.
  ogImage: "https://fixcloudcost.com/hero-bg.webp",
};

type SeoInput = {
  title: string;
  description: string;
  canonicalPath?: string; // e.g. "/services"
};

export function getCanonicalUrl(input?: { canonicalPath?: string }) {
  const path = input?.canonicalPath;
  if (!path) return SITE.url;
  if (path.startsWith("http")) return path;
  if (!path.startsWith("/")) return `${SITE.url}/${path}`;
  return `${SITE.url}${path}`;
}

export function getRobotsMeta() {
  // Keep it simple and safe for marketing pages
  return [{ name: "robots", content: "index,follow" }];
}

export function getOgTwitterMeta(input: SeoInput) {
  const canonical = getCanonicalUrl({ canonicalPath: input.canonicalPath });

  return [
    { property: "og:type", content: "website" },
    { property: "og:title", content: input.title },
    { property: "og:description", content: input.description },
    { property: "og:url", content: canonical },
    { property: "og:image", content: SITE.ogImage },
    { property: "og:image:alt", content: input.title },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: input.title },
    { name: "twitter:description", content: input.description },
    { name: "twitter:image", content: SITE.ogImage },
  ];
}

export function getJsonLdOrganization() {
  // JSON-LD is typically not dynamic per route; this is safe as a global default.
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: "https://fixcloudcost.com/logos/logo.png",
    sameAs: [],
  };

  return {
    script: {
      type: "application/ld+json",
      children: JSON.stringify(data),
    },
  };
}



