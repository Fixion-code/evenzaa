import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, MessageSquare } from "lucide-react";
import { WHATSAPP, PHONE_TEL } from "@/lib/constants";
import { toast } from "sonner";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleWhatsAppRedirect = () => {
    setIsRedirecting(true);
    toast.success("Connecting to WhatsApp...", {
      description: "Redirecting you to our chat securely.",
      icon: <MessageCircle className="w-4 h-4 text-green-500" />,
    });
    
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP}`, "_blank");
      setIsRedirecting(false);
      setIsOpen(false);
    }, 1200);
  };

  const handleCallRedirect = () => {
    toast.info("Initiating call...", {
      description: "Opening your phone dialer.",
      icon: <Phone className="w-4 h-4 text-blue-500" />,
    });
    setTimeout(() => {
      window.location.href = `tel:${PHONE_TEL}`;
      setIsOpen(false);
    }, 800);
  };

  // Close when clicking outside or hitting Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3"
          >
            {/* WhatsApp Option */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppRedirect}
              disabled={isRedirecting}
              className="flex items-center gap-3 bg-card text-foreground px-4 py-3 rounded-full shadow-lg border border-border hover:border-green-500 hover:text-green-600 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center relative z-10 shrink-0">
                {isRedirecting ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <MessageCircle className="w-4 h-4" />
                )}
              </div>
              <span className="font-medium text-sm pr-2 relative z-10">WhatsApp Us</span>
            </motion.button>

            {/* Call Option */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCallRedirect}
              className="flex items-center gap-3 bg-card text-foreground px-4 py-3 rounded-full shadow-lg border border-border hover:border-blue-500 hover:text-blue-600 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center relative z-10 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-medium text-sm pr-2 relative z-10">Call Us</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gold text-white shadow-xl shadow-gold/20 flex items-center justify-center relative z-10 hover:shadow-gold/40 transition-shadow duration-300"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulsing ring behind the button */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-20" />
        )}
      </motion.button>
    </div>
  );
}
