import { useState, useRef } from "react";
import { ArrowDown, ShoppingBag } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../data";
import ProductCard from "../components/ProductCard";
import ThreeBackground from "../components/ThreeBackground";
import ParticleEmbers from "../components/ParticleEmbers";
import { motion, useScroll } from "motion/react";
import { Link } from "react-router-dom";
import timelineVideo from "../../videos/Timeline34.mov";

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "all" | "men" | "women" | "kids"
  >("all");

  const collectionRef = useRef<HTMLDivElement>(null);

  useScroll({
    target: collectionRef,
    offset: ["start end", "end start"]
  });

  const filteredProducts =
    activeTab === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  const scrollToCollection = () => {
    collectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="relative bg-black overflow-hidden">
      <ThreeBackground />
      <ParticleEmbers />

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center px-6 pt-24">

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
            brightness-[0.42]
            contrast-[1.05]
            saturate-[1.05]
            will-change-transform
            transform-gpu
          "
        >
          <source src={timelineVideo} type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />

        {/* GOLD LIGHT */}
        <div
          className="
            absolute
            top-[-20%]
            left-[-10%]
            w-[700px]
            h-[700px]
            bg-yellow-400/20
            blur-[180px]
            rounded-full
            animate-pulse
            z-[2]
          "
        />

        {/* ORANGE LIGHT */}
        <div
          className="
            absolute
            bottom-[-20%]
            right-[-10%]
            w-[700px]
            h-[700px]
            bg-orange-500/20
            blur-[180px]
            rounded-full
            animate-pulse
            z-[2]
          "
        />

        {/* CENTER GLOW */}
        <div
          className="
            absolute
            inset-0
            opacity-40
            bg-[radial-gradient(circle_at_center,rgba(255,180,0,0.15),transparent_60%)]
            animate-pulse
            z-[2]
          "
        />

        {/* FLOATING PARTICLES */}
        <div className="absolute inset-0 overflow-hidden z-[2]">
          <div className="absolute top-[10%] left-[15%] w-2 h-2 rounded-full bg-yellow-300 animate-ping opacity-70" />

          <div className="absolute top-[25%] right-[20%] w-3 h-3 rounded-full bg-orange-400 animate-bounce opacity-60" />

          <div className="absolute bottom-[18%] left-[25%] w-2 h-2 rounded-full bg-white animate-pulse opacity-50" />

          <div className="absolute bottom-[22%] right-[15%] w-4 h-4 rounded-full bg-yellow-200 animate-ping opacity-40" />

          <div className="absolute top-[50%] left-[50%] w-2 h-2 rounded-full bg-orange-300 animate-bounce opacity-40" />
        </div>

        {/* VIGNETTE */}
        <div
          className="
            absolute
            inset-0
            z-[2]
            bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.92)_100%)]
          "
        />

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="relative z-10 text-center max-w-6xl"
        >

          {/* SUBTITLE */}
          <p
            className="
              uppercase
              tracking-[0.5em]
              text-[11px]
              md:text-sm
              text-yellow-300
              mb-6
              font-light
            "
          >
            EST. 2020 · HYDERABAD
          </p>

          {/* MAIN TITLE */}
          <div className="relative">
            <h1
              className="
                text-6xl
                sm:text-7xl
                md:text-8xl
                lg:text-[140px]
                leading-none
                font-serif
                font-semibold
                tracking-tight
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-yellow-200
                via-yellow-400
                to-orange-400
                drop-shadow-[0_0_45px_rgba(255,170,0,0.35)]
              "
            >
              RECREATE
            </h1>

            <span
              className="
                absolute
                -bottom-1
                right-1
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
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-yellow-400" />

            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-yellow-400" />
          </div>

          {/* TAGLINE */}
          <p
            className="
              mt-8
              text-base
              md:text-2xl
              italic
              tracking-[0.25em]
              text-white/80
              font-light
            "
          >
            Where Tradition Meets Artistry
          </p>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={scrollToCollection}
            className="
              mt-14
              px-10
              py-5
              rounded-full
              border
              border-yellow-400/30
              bg-black/30
              backdrop-blur-xl
              text-yellow-300
              uppercase
              tracking-[0.3em]
              text-xs
              hover:bg-yellow-400
              hover:text-black
              transition-all
              duration-500
              shadow-[0_0_40px_rgba(255,200,0,0.15)]
            "
          >
            <div className="flex items-center gap-3">
              <span>Explore Collection</span>
              <ArrowDown className="w-4 h-4" />
            </div>
          </motion.button>

        </motion.div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-yellow-400 to-transparent mb-3" />

            <span
              className="
                text-white/50
                text-[10px]
                tracking-[0.4em]
                uppercase
              "
            >
              Scroll
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}