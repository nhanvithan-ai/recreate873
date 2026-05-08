import {
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Share2,
  Send
} from "lucide-react";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <footer className="relative bg-dawn border-t border-gold/20 pt-32 pb-12 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none">
        <img
          src="https://www.transparenttextures.com/patterns/mandala.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">

          {/* STORY */}
          <div className="space-y-8">
            <h3 className="text-2xl font-accent gold-gradient-text tracking-tighter">
              Our Story
            </h3>

            <p className="text-sm font-serif italic text-pearl/60 leading-relaxed">
              "Recreate873 was born in Hyderabad in 2020 with a single belief —
              that Indian traditional wear deserves to be worn every day."
            </p>
          </div>

          {/* ARTISANRY */}
          <div className="space-y-8">
            <h3 className="text-2xl font-accent gold-gradient-text tracking-tighter">
              Artisanry
            </h3>

            <p className="text-sm font-serif italic text-pearl/60 leading-relaxed">
              Every garment is crafted by skilled artisans from Varanasi,
              Kanchipuram, and Lucknow.
            </p>
          </div>

          {/* ETHICS */}
          <div className="space-y-8">
            <h3 className="text-2xl font-accent gold-gradient-text tracking-tighter">
              Ethics
            </h3>

            <div className="space-y-4">

              <div className="flex items-center space-x-4">
                <div className="w-1.5 h-1.5 rounded-full bg-ember" />

                <span className="text-[10px] uppercase tracking-widest font-bold text-pearl/60">
                  Fair Wages Above Market
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-1.5 h-1.5 rounded-full bg-ember" />

                <span className="text-[10px] uppercase tracking-widest font-bold text-pearl/60">
                  Plastic-Free Packaging
                </span>
              </div>

            </div>
          </div>

          {/* CONNECT */}
          <div className="space-y-8">

            <h3 className="text-2xl font-accent gold-gradient-text tracking-tighter">
              Connect
            </h3>

            <div className="space-y-4 text-sm font-serif italic text-pearl/60">

              <p className="flex items-center space-x-4">
                <MapPin className="w-4 h-4 text-gold shrink-0" />

                <span>Hyderabad, Telangana, India</span>
              </p>

              <p className="flex items-center space-x-4">
                <Mail className="w-4 h-4 text-gold shrink-0" />

                <span>recreate873@gmail.com</span>
              </p>

              {/* SOCIALS */}
              <div className="flex items-center space-x-6 pt-4">

                <a
                  href="https://instagram.com/recreate873"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:bg-gold/10 hover:text-gold transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="p-3 glass rounded-full hover:bg-gold/10 hover:text-gold transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="p-3 glass rounded-full hover:bg-gold/10 hover:text-gold transition-all"
                >
                  <Youtube className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="p-3 glass rounded-full hover:bg-gold/10 hover:text-gold transition-all"
                >
                  <Share2 className="w-5 h-5" />
                </a>

              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-16 border-t border-white/10 text-center">

          <h2 className="text-5xl md:text-7xl font-serif gold-gradient-text opacity-20">
            RECREATE873
          </h2>

          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/30">
            © 2025 Recreate873 · Crafted in Hyderabad
          </p>

        </div>

      </div>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/917075192712?text=Hi%20I%20am%20interested%20in%20your%20products"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed
          bottom-6
          right-6
          z-[999]
          w-16
          h-16
          rounded-full
          bg-[#25D366]
          flex
          items-center
          justify-center
          shadow-2xl
          hover:scale-110
          transition-all
          duration-300
        "
      >
        <svg
          fill="currentColor"
          width="30"
          height="30"
          viewBox="0 0 448 512"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.3 27 106.2 27 122.4 0 222-99.6 222-222 0-59.3-23.1-115.1-65.1-157.1z" />
        </svg>
      </a>

      <AnimatePresence>
        {activeModal && (
          <motion.div />
        )}
      </AnimatePresence>

    </footer>
  );
}