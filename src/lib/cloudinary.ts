/**
 * cloudinary.ts — Evenza Image CDN Utility
 *
 * All production images are served from Cloudinary, not Google Drive.
 * This utility builds optimized URLs with automatic format (WebP/AVIF)
 * and quality selection based on visitor's browser.
 *
 * Setup:
 *  1. Create a free account at https://cloudinary.com
 *  2. Replace CLOUD_NAME below with your actual cloud name (found in dashboard)
 *  3. Upload images to Cloudinary under the folder structure:
 *       evenza/concerts/
 *       evenza/weddings/
 *       evenza/corporate/
 *       evenza/exhibitions/
 *       evenza/political-rallies/
 *
 * Naming convention for uploaded files:
 *   [category]-[event-name]-[city]-[role].webp
 *   e.g. concert-manpower-jaipur-ushering-crew.webp
 */

// ── Replace this with your Cloudinary cloud name ──────────────────────────────
const CLOUD_NAME = "YOUR_CLOUD_NAME";
// ─────────────────────────────────────────────────────────────────────────────

const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export interface CloudinaryOptions {
  /** Output width in pixels */
  width?: number;
  /** Output height in pixels */
  height?: number;
  /**
   * Quality: "auto" lets Cloudinary pick the best value.
   * Numbers 1–100 for manual control.
   */
  quality?: "auto" | number;
  /**
   * Format: "auto" serves WebP to Chrome, AVIF to modern browsers,
   * and JPEG as a fallback for older browsers — all automatically.
   */
  format?: "auto" | "webp" | "avif" | "jpg";
  /** Crop mode */
  crop?: "fill" | "fit" | "scale" | "thumb" | "pad";
  /** Focus point for smart cropping */
  gravity?: "auto" | "face" | "faces" | "center" | "north" | "south";
}

/**
 * Generates an SEO-optimised Cloudinary delivery URL.
 *
 * @param publicId - Cloudinary public_id (path WITHOUT leading slash or extension).
 *   Example: "evenza/weddings/destination-wedding-udaipur-vip-servers"
 * @param options  - Image transformation options
 *
 * @example
 * // Thumbnail for gallery grid
 * cloudinaryUrl("evenza/concerts/concert-jaipur-crew", { width: 600, height: 400 })
 *
 * // Full size for lightbox
 * cloudinaryUrl("evenza/concerts/concert-jaipur-crew", { width: 1200, height: 800 })
 */
export function cloudinaryUrl(
  publicId: string,
  options: CloudinaryOptions = {}
): string {
  const {
    width,
    height,
    quality = "auto",
    format = "auto",
    crop = "fill",
    gravity = "auto",
  } = options;

  const transforms: string[] = [
    `q_${quality}`,
    `f_${format}`,
    `c_${crop}`,
    `g_${gravity}`,
  ];

  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);

  // Remove trailing slash from publicId if present
  const cleanId = publicId.replace(/^\//, "");

  return `${BASE_URL}/${transforms.join(",")}/v1/${cleanId}`;
}

/**
 * Generates a srcSet string for responsive images.
 * Use in conjunction with the sizes attribute for best results.
 *
 * @example
 * <img
 *   src={cloudinaryUrl(id, { width: 600 })}
 *   srcSet={cloudinarySrcSet(id, [400, 600, 900, 1200])}
 *   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
 * />
 */
export function cloudinarySrcSet(
  publicId: string,
  widths: number[],
  options: Omit<CloudinaryOptions, "width"> = {}
): string {
  return widths
    .map((w) => `${cloudinaryUrl(publicId, { ...options, width: w })} ${w}w`)
    .join(", ");
}
