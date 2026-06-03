import { existsSync } from "node:fs";
import { readdir, rename, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const targets = [
  path.join(root, "public"),
  path.join(root, "src", "assets"),
];

const WALLPAPERS = new Set([
  "hero-bg.png",
  "contact.png",
  "partners.png",
  "service-wallpaper.png",
  "how-it-works.png",
  "service wallpaper.png",
]);

const SKIP_FILES = new Set([
  "cloudcost-logo.png",
  "Cost and performance optimization.jpeg",
  "Cloud Managed Services.jpeg",
  "Cloud Migration.jpeg",
]);

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) return;
  if (SKIP_FILES.has(path.basename(filePath))) return;

  const base = filePath.slice(0, -ext.length);
  const webpPath = `${base}.webp`;
  const isWallpaper = WALLPAPERS.has(path.basename(filePath));
  const webpQuality = isWallpaper ? 80 : 85;
  const pngQuality = isWallpaper ? 78 : 85;

  const image = sharp(filePath);
  const meta = await image.metadata();

  await sharp(filePath)
    .webp({ quality: webpQuality, effort: 6 })
    .toFile(webpPath);

  const before = await stat(filePath);
  const pipeline = sharp(filePath);
  if (isWallpaper && meta.width && meta.width > 1920) {
    pipeline.resize({ width: 1920, withoutEnlargement: true });
  }
  const tmp = `${filePath}.opt.tmp`;
  await pipeline.png({ quality: pngQuality, compressionLevel: 9 }).toFile(tmp);
  await rename(tmp, filePath);
  const after = await stat(filePath);
  console.log(
    `optimized ${path.relative(root, filePath)} → webp, ${meta.width ?? "?"}x${meta.height ?? "?"} (${Math.round(before.size / 1024)}KB → ${Math.round(after.size / 1024)}KB)`,
  );
}

async function walk(dir) {
  if (!existsSync(dir)) return;
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else await optimizeFile(full);
  }
}

for (const dir of targets) {
  await walk(dir);
}
