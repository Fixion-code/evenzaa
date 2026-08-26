import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";
import { HOMEPAGE_GALLERY } from "@/lib/portfolio-images";
import { cloudinaryUrl } from "@/lib/cloudinary";

/**
 * Homepage Gallery — Shows 8 featured images (one per event category).
 * Links to the full /portfolio page for all 50 images with category filters.
 *
 * SEO highlights:
 * - Each img has unique alt text with event + team + location keywords
 * - <figure>/<figcaption> semantic structure for Google crawling
 * - Explicit width/height prevents CLS (Core Web Vitals)
 * - First 3 images load eagerly (LCP), rest lazy-load
 */
export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof HOMEPAGE_GALLERY)[0] | null>(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section
      id="gallery"
      aria-label="Evenza event portfolio highlights"
      className="section-padding bg-section-bg"
    >
      <SectionHeader
        kicker="Proof of Work"
        title={
          <>
            Moments we&apos;ve <span className="italic text-gold">crafted</span>
          </>
        }
        sub="Real events. Real teams. Real results — from concerts and destination weddings to corporate summits and political rallies across Rajasthan and India."
      />

      {/* ── Featured Image Grid (8 images, one per category) ── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 px-4 sm:px-6">
        {HOMEPAGE_GALLERY.map((img, idx) => (
          <motion.figure
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer bg-muted m-0"
            onClick={() => setSelectedImage(img)}
            aria-label={`View ${img.eventName} — ${img.location}`}
          >
            <img
              src={cloudinaryUrl(img.publicId, { width: 600, height: 400 })}
              alt={img.alt}
              title={`${img.eventName} — ${img.location}`}
              width={600}
              height={400}
              loading={idx < 4 ? "eager" : "lazy"}
              decoding="async"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            {/* Hidden figcaption crawled by Google */}
            <figcaption className="sr-only">{img.caption}</figcaption>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <ZoomIn className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-7 h-7 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 delay-100" />
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-gold text-xs font-semibold tracking-wider uppercase mb-1 block">
                  {img.category}
                </span>
                <p className="text-white text-sm font-medium leading-snug">
                  {img.eventName}
                </p>
                <p className="text-white/60 text-xs mt-0.5">{img.location}</p>
              </div>
            </div>
          </motion.figure>
        ))}
      </div>

      {/* ── View Full Portfolio CTA ── */}
      <div className="flex justify-center mt-10 px-4">
        <Link
          to="/portfolio"
          className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-transparent border-2 border-gold/60 text-gold font-semibold rounded-full hover:bg-gold hover:text-black transition-all duration-300 text-sm tracking-wide uppercase"
        >
          View Our Full Portfolio
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Enlarged view: ${selectedImage.eventName}`}
          >
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-50 p-2 rounded-full hover:bg-white/10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            <figure
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={cloudinaryUrl(selectedImage.publicId, { width: 1200, height: 800 })}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                loading="eager"
                className="max-w-full max-h-[72vh] object-contain rounded-md shadow-2xl mx-auto block"
              />
              <figcaption className="text-center mt-4 text-cream/80 text-sm px-4 leading-relaxed">
                <strong className="text-gold">
                  {selectedImage.eventName}, {selectedImage.location}:
                </strong>{" "}
                {selectedImage.caption}
              </figcaption>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
