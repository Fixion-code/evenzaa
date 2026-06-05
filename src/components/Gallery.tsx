import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const GALLERY_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop", alt: "Wedding Event", category: "Weddings" },
  { id: 2, src: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop", alt: "Corporate Event", category: "Corporate" },
  { id: 3, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop", alt: "Music Festival", category: "Concerts" },
  { id: 4, src: "https://images.unsplash.com/photo-1519167758481-83f5c12047ce?q=80&w=800&auto=format&fit=crop", alt: "Exhibition", category: "Exhibitions" },
  { id: 5, src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&auto=format&fit=crop", alt: "Party Setup", category: "Private Parties" },
  { id: 6, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop", alt: "Conference", category: "Corporate" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="section-padding bg-section-bg">
      <SectionHeader
        kicker="Our Work"
        title={
          <>
            Moments we've <span className="italic text-gold">crafted</span>
          </>
        }
        sub="A glimpse into the diverse events and experiences brought to life by Evenza's dedicated hospitality and manpower teams."
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-4 sm:px-6">
        {GALLERY_IMAGES.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer bg-muted"
            onClick={() => setSelectedImage(img.src)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <ZoomIn className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 delay-100" />
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-gold text-xs font-semibold tracking-wider uppercase mb-1 block">
                  {img.category}
                </span>
                <h3 className="text-white text-lg font-medium">
                  {img.alt}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-50 p-2"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
