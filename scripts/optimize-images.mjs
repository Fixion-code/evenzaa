/**
 * optimize-images.mjs — Batch convert all portfolio images to optimized WebP
 *
 * Reads from: public/assets/img/portfolio/ (raw uploads)
 * Writes to:  public/assets/img/portfolio/optimized/ (WebP, two sizes)
 *
 * Produces two files per image:
 *   - [name].webp         (1200px wide — for lightbox/full view)
 *   - [name]-thumb.webp   (600px wide  — for gallery grid)
 *
 * Quality: 78 (sweet spot for event photography — sharp details, small files)
 */

import sharp from "sharp";
import { readdir, mkdir, stat } from "fs/promises";
import { join, parse } from "path";

const INPUT_DIR = "public/assets/img/portfolio";
const OUTPUT_DIR = "public/assets/img/portfolio/optimized";

const SIZES = [
  { suffix: "",       width: 1200 },  // Full size
  { suffix: "-thumb", width: 600  },  // Thumbnail
];

const QUALITY = 78;

// Supported input formats
const SUPPORTED = new Set([".jpg", ".jpeg", ".png", ".heic", ".webp", ".tiff", ".avif"]);

function normalizeFilename(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")       // spaces → hyphens
    .replace(/[()]/g, "")       // remove parentheses
    .replace(/-+/g, "-")        // collapse multiple hyphens
    .replace(/^-|-$/g, "");     // trim leading/trailing hyphens
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = await readdir(INPUT_DIR);
  const imageFiles = files.filter((f) => {
    const ext = parse(f).ext.toLowerCase();
    return SUPPORTED.has(ext);
  });

  console.log(`\n Found ${imageFiles.length} images to optimize\n`);

  let totalInputBytes = 0;
  let totalOutputBytes = 0;
  let processed = 0;
  const errors = [];

  for (const file of imageFiles) {
    const inputPath = join(INPUT_DIR, file);
    const { name } = parse(file);
    const cleanName = normalizeFilename(name);

    try {
      const inputStat = await stat(inputPath);
      totalInputBytes += inputStat.size;

      for (const { suffix, width } of SIZES) {
        const outputName = `${cleanName}${suffix}.webp`;
        const outputPath = join(OUTPUT_DIR, outputName);

        const result = await sharp(inputPath)
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: QUALITY, effort: 6 })
          .toFile(outputPath);

        totalOutputBytes += result.size;

        const reduction = Math.round((1 - result.size / inputStat.size) * 100);
        const sizeKB = Math.round(result.size / 1024);

        if (!suffix) {
          processed++;
          console.log(
            `  ${String(processed).padStart(2)}/${imageFiles.length} ` +
            `${cleanName}.webp => ${sizeKB} KB (${reduction}% smaller)`
          );
        }
      }
    } catch (err) {
      errors.push({ file, error: err.message });
      console.log(`  FAIL ${file}: ${err.message}`);
    }
  }

  const inputMB = (totalInputBytes / 1024 / 1024).toFixed(1);
  const outputMB = (totalOutputBytes / 1024 / 1024).toFixed(1);
  const totalReduction = Math.round((1 - totalOutputBytes / totalInputBytes) * 100);

  console.log(`\n${"=".repeat(60)}`);
  console.log(`  RESULTS`);
  console.log(`  Input:    ${inputMB} MB (${imageFiles.length} files)`);
  console.log(`  Output:   ${outputMB} MB (${processed * SIZES.length} WebP files)`);
  console.log(`  Saved:    ${totalReduction}% total size reduction`);
  if (errors.length > 0) {
    console.log(`  Errors:   ${errors.length} files failed`);
    errors.forEach((e) => console.log(`    -> ${e.file}: ${e.error}`));
  }
  console.log(`${"=".repeat(60)}\n`);
}

main().catch(console.error);
