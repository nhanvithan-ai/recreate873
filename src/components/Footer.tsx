import { Mail, MapPin, Instagram, Facebook, Youtube, Share2, Send } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <footer className="relative bg-dawn border-t border-gold/20 pt-32 pb-12 overflow-hidden">
      
      {/* Mandala Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none rotate-infinite">
        <img
          src="https://www.transparenttextures.com/patterns/mandala.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">

          {/* Column 1 */}
          <div className="space-y-8">
            <h3 className="text-2xl font-accent gold-gradient-text tracking-tighter">
              Our Story
            </h3>

            <p className="text-sm font-serif italic text-pearl/60 leading-relaxed">
              "Recreate873 was born in Hyderabad in 2020 with a single belief —
              that Indian traditional wear deserves to be worn every day."
            </p>

            <button
              onClick={() => setActiveModal("story")}
              className="text-[10px] font-accent text-gold hover:text-ember transition-colors uppercase tracking-[0.3em] flex items-center space-x-2"
            >
              <span>Read Manifest →</span>
            </button>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            <h3 className="text-2xl font-accent gold-gradient-text tracking-tighter">
              Artisanry
            </h3>

            <p className="text-sm font-serif italic text-pearl/60 leading-relaxed">
              Every garment is crafted by skilled artisans from Varanasi,
              Kanchipuram, and Lucknow.
            </p>

            <button
              onClick={() => setActiveModal("artisanry")}
              className="text-[10px] font-accent text-gold hover:text-ember transition-colors uppercase tracking-[0.3em] flex items-center space-x-4"
            >
              <span className="flex items-center space-x-2">
                <span>Weave</span>
                <div className="w-4 h-px bg-gold/40" />
                <span>Craft</span>
                <div className="w-4 h-px bg-gold/40" />
                <span>Wear</span>
              </span>
            </button>
          </div>

          {/* Column 3 */}
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
                  100% Plastic-Free Packs
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-1.5 h-1.5 rounded-full bg-ember" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-pearl/60">
                  GOTS Organic Fabrics
                </span>
              </div>

            </div>
          </div>

          {/* Column 4 */}
          <div className="space-y-8">
            <h3 className="text-2xl font-accent gold-gradient-text tracking-tighter">
              Connect
            </h3>

            <div className="space-y-4 text-sm font-serif italic text-pearl/60">

              <p className="flex items-center space-x-4 hover:text-gold transition-colors cursor-pointer">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </p>

              <p className="flex items-center space-x-4 hover:text-gold transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>recreate873@gmail.com</span>
              </p>

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

        {/* Newsletter / Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 pt-32 border-t border-white/5">

          <div className="space-y-10">

            <div>
              <h4 className="text-3xl font-serif text-pearl">
                Artisan Direct
              </h4>

              <p className="font-label text-silk italic text-lg mt-2">
                Inquire about custom tailoring or bridal couture.
              </p>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Gilded Name"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-sm focus:border-gold transition-all outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Oracle"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-sm focus:border-gold transition-all outline-none"
                />

              </div>

              <textarea
                placeholder="Your message for our artisans..."
                rows={1}
                className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-sm focus:border-gold transition-all outline-none min-h-[120px]"
              />

              <button
                className="
                  w-full
                  sm:w-auto
                  px-12
                  py-5
                  bg-gradient-to-r
                  from-ember
                  to-glow
                  text-dawn
                  font-accent
                  text-[10px]
                  uppercase
                  tracking-[0.4em]
                  font-bold
                  rounded-2xl
                  shadow-xl
                  shadow-ember/20
                  hover:scale-[1.02]
                  transition-all
                  flex
                  items-center
                  justify-center
                  space-x-4
                "
              >
                <Send className="w-4 h-4" />
                <span>Dispatch Message</span>
              </button>

            </form>

          </div>

          {/* Branding */}
          <div className="flex flex-col justify-end text-center lg:text-right space-y-8">

            <h2 className="text-6xl md:text-8xl font-display gold-gradient-text opacity-10 leading-none">
              RECREATE
              <br />
              873
            </h2>

            <div className="space-y-2">

              <p className="text-[10px] font-accent text-white/20 uppercase tracking-[0.3em]">
                © 2025 Recreate873. All rights reserved.
              </p>

              <p className="text-[10px] font-accent text-white/20 uppercase tracking-[0.3em]">
                Crafted with <span className="text-ember">♡</span> in Hyderabad
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* WORKING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/917075192712?text=Hi%20I%20am%20interested%20in%20your%20products"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          fixed
          bottom-6
          right-6
          md:bottom-10
          md:right-10
          z-[999]
          w-16
          h-16
          bg-[#25D366]
          text-white
          rounded-full
          flex
          items-center
          justify-center
          shadow-2xl
          cursor-pointer
          hover:scale-110
          active:scale-95
          transition-all
          duration-300
        "
      >

        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />

        <svg
          fill="currentColor"
          width="30"
          height="30"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.3 27 106.2 27 122.4 0 222-99.6 222-222 0-59.3-23.1-115.1-65.1-157.1z" />
        </svg>

      </a>

      {/* MODALS */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6"
          >
            <div
              className="absolute inset-0 bg-dawn/90 backdrop-blur-xl"
              onClick={() => setActiveModal(null)}
            />

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-2xl w-full glass p-12 rounded-[50px] border-gold/20 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-8 right-8 text-pearl/40 hover:text-gold uppercase text-[10px] tracking-widest font-bold"
              >
                Close ×
              </button>

              <h3 className="text-4xl font-serif text-gold mb-8 italic">
                {activeModal === "story"
                  ? "The Manifest"
                  : activeModal === "artisanry"
                  ? "The Alchemy"
                  : "The Ethos"}
              </h3>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </footer>
  );
}