import { Mail, MapPin, Instagram, Facebook, Youtube, Share2, Send } from "lucide-react";

                <a href="#" className="p-3 glass rounded-full hover:bg-gold/10 hover:text-gold transition-all">
                  <Share2 className="w-5 h-5" />
                </a>
              </div>
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
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.3 27 106.2 27 122.4 0 222-99.6 222-222 0-59.3-23.1-115.1-65.1-157.1z"/>
        </svg>
      </a>

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
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}