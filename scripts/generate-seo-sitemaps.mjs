import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, "..");

function fileMTimeMs(filePath) {
  try {
    return fs.statSync(filePath).mtimeMs;
  } catch {
    return undefined;
  }
}

function toIsoDate(mtimeMs) {
  if (!mtimeMs) return undefined;
  return new Date(mtimeMs).toISOString().slice(0, 10);
}

function escapeXml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "<")
    .replaceAll(">", ">")
    .replaceAll('"', """)
    .replaceAll("'", "&apos;");
}

function getRoutesFromRouteTreeGen(routeTreePath) {
  const content = fs.readFileSync(routeTreePath, "utf8");
  const pathMatches = [
    ...content.matchAll(/\n\s*'([^']+)'\s*:\s*typeof\s+[A-Za-z0-9_]+/g),
  ];
  const paths = pathMatches.map((m) => m[1]);

  const uniq = Array.from(new Set(paths));
  uniq.sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));
  return uniq;
}

function mapPathToRouteFile(routePath) {
  const mapping = {
    "/": "src/routes/index.tsx",
    "/services": "src/routes/services.tsx",
    "/how-it-works": "src/routes/how-it-works.tsx",
    "/case-studies": "src/routes/case-studies.tsx",
    "/partners": "src/routes/partners.tsx",
    "/contact": "src/routes/contact.tsx",
  };

  const rel = mapping[routePath];
  if (!rel) return undefined;
  return path.join(projectRoot, rel);
}

function shouldNoIndex(routeSource) {
  return /noindex/i.test(routeSource);
}

function generate() {
  const siteUrl = process.env.SITE_URL || "https://fixcloudcost.com";

  const distDir = path.join(projectRoot, "dist");
  fs.mkdirSync(distDir, { recursive: true });

  const routeTreeGenPath = path.join(projectRoot, "src/routeTree.gen.ts");
  const routePaths = getRoutesFromRouteTreeGen(routeTreeGenPath);

  const urlEntries = [];
  for (const routePath of routePaths) {
    const routeFilePath = mapPathToRouteFile(routePath);
    if (!routeFilePath) continue;

    const routeSource = fs.readFileSync(routeFilePath, "utf8");
    if (shouldNoIndex(routeSource)) continue;

    urlEntries.push({
      loc: `${siteUrl}${routePath === "/" ? "/" : routePath}`,
      lastmod: toIsoDate(fileMTimeMs(routeFilePath)),
      changefreq: "weekly",
      priority: routePath === "/" ? "1.0" : "0.7",
    });
  }

  const urlsXml = urlEntries
    .map((e) => {
      const lastmodXml = e.lastmod
        ? `    <lastmod>${escapeXml(e.lastmod)}</lastmod>\n`
        : "";

      return (
        "  <url>\n" +
        `    <loc>${escapeXml(e.loc)}</loc>\n` +
        lastmodXml +
        `    <changefreq>${escapeXml(e.changefreq)}</changefreq>\n` +
        `    <priority>${escapeXml(e.priority)}</priority>\n` +
        "  </url>"
      );
    })
    .join("\n");

  const sitemapXml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urlsXml +
    `\n</urlset>\n`;

  const sitemapUrl = `${siteUrl}/sitemap.xml`;
  const robotsTxt = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${sitemapUrl}`,
    "",
  ].join("\n");

  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf8");
  fs.writeFileSync(path.join(distDir, "robots.txt"), robotsTxt, "utf8");

  console.log(`[seo] Wrote ${path.join(distDir, "sitemap.xml")}`);
  console.log(`[seo] Wrote ${path.join(distDir, "robots.txt")}`);
}

generate();

