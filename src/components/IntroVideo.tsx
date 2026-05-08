import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import introVideo from "../../videos/Timeline34.mov";

interface IntroVideoProps {
  onComplete: () => void;
}

export default function IntroVideo({ onComplete }: IntroVideoProps) {

  const [showLogo, setShowLogo] = useState(false);
  const [isWiping, setIsWiping] = useState(false);

  useEffect(() => {

    const logoTimeout = setTimeout(() => {
      setShowLogo(true);
    }, 1200);

    const autoEndTimeout = setTimeout(() => {
      handleFinish();
    }, 7000);

    return () => {
      clearTimeout(logoTimeout);
      clearTimeout(autoEndTimeout);
    };

  }, []);

  const handleFinish = () => {

    setIsWiping(true);

    setTimeout(() => {
      onComplete();
    }, 1400);

  };

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        overflow-hidden
        bg-black
        transition-all
        duration-1000
        ${isWiping ? "scale-125 opacity-0" : "opacity-100"}
      `}
    >

      {/* FULLSCREEN VIDEO */}
      <video
        autoPlay
        muted
        playsInline
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          scale-[1.08]
          brightness-[0.5]
          contrast-[1.15]
          saturate-[1.2]
        "
        onEnded={handleFinish}
      >
        <source src={introVideo} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* GOLD AMBIENT LIGHT */}
      <div
        className="
          absolute
          top-[-15%]
          left-[-10%]
          w-[700px]
          h-[700px]
          rounded-full
          bg-yellow-400/20
          blur-[180px]
          animate-pulse
          z-[2]
        "
      />

      {/* ORANGE AMBIENT LIGHT */}
      <div
        className="
          absolute
          bottom-[-20%]
          right-[-10%]
          w-[700px]
          h-[700px]
          rounded-full
          bg-orange-500/20
          blur-[180px]
          animate-pulse
          z-[2]
        "
      />

      {/* CINEMATIC VIGNETTE */}
      <div
        className="
          absolute
          inset-0
          z-[2]
          bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.92)_100%)]
        "
      />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden z-[3]">

        <div className="absolute top-[10%] left-[15%] w-2 h-2 rounded-full bg-yellow-300 animate-ping opacity-70" />

        <div className="absolute top-[20%] right-[20%] w-3 h-3 rounded-full bg-orange-400 animate-bounce opacity-60" />

        <div className="absolute bottom-[15%] left-[20%] w-2 h-2 rounded-full bg-white animate-pulse opacity-40" />

        <div className="absolute bottom-[20%] right-[15%] w-4 h-4 rounded-full bg-yellow-200 animate-ping opacity-50" />

        <div className="absolute top-[50%] left-[50%] w-2 h-2 rounded-full bg-orange-300 animate-bounce opacity-40" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <AnimatePresence>

          {showLogo && !isWiping && (

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 1.4 }}
              className="space-y-8"
            >

              {/* SMALL TEXT */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="
                  uppercase
                  tracking-[0.6em]
                  text-[11px]
                  md:text-sm
                  text-yellow-300
                "
              >
                EST. 2020 · HYDERABAD
              </motion.p>

              {/* MAIN LOGO */}
              <div className="relative">

                <h1
                  className="
                    text-6xl
                    sm:text-7xl
                    md:text-8xl
                    lg:text-[140px]
                    font-serif
                    font-semibold
                    tracking-tight
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-yellow-200
                    via-yellow-400
                    to-orange-400
                    drop-shadow-[0_0_45px_rgba(255,170,0,0.45)]
                  "
                >
                  RECREATE
                </h1>

                <span
                  className="
                    absolute
                    -bottom-2
                    right-2
                    md:right-10
                    text-3xl
                    md:text-6xl
                    italic
                    text-orange-400
                    font-serif
                  "
                >
                  873
                </span>

              </div>

              {/* LINE */}
              <div className="flex items-center justify-center gap-4">

                <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-yellow-400" />

                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

                <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-yellow-400" />

              </div>

              {/* TAGLINE */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="
                  text-sm
                  md:text-xl
                  italic
                  tracking-[0.35em]
                  text-white/80
                "
              >
                Luxury Fashion Atelier
              </motion.p>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

      {/* SKIP BUTTON */}
      {!isWiping && (
        <button
          onClick={handleFinish}
          className="
            absolute
            bottom-10
            right-10
            z-20
            px-6
            py-3
            rounded-full
            border
            border-yellow-400/20
            bg-black/30
            backdrop-blur-xl
            text-white/80
            uppercase
            tracking-[0.35em]
            text-[10px]
            hover:bg-yellow-400
            hover:text-black
            transition-all
            duration-500
          "
        >
          Skip →
        </button>
      )}

      {/* BOTTOM LIGHT */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-32
          bg-gradient-to-t
          from-black
          to-transparent
          z-[2]
        "
      />

    </div>
  );
}