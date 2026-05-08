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

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="relative z-10 text-center max-w-6xl"
        >
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

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-yellow-400" />

            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-yellow-400" />
          </div>

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
      </section>

      {/* CATEGORY SECTION */}
      <section className="py-32 px-6 max-w-7xl mx-auto">

        <div className="flex flex-col items-center mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Our Collections
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </div>

        {/* CATEGORY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="
                group
                relative
                h-[600px]
                rounded-[40px]
                overflow-hidden
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  transition-transform
                  duration-[2500ms]
                  group-hover:scale-125
                "
                style={{
                  backgroundImage: `url(${cat.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

              <div className="absolute inset-0 flex flex-col justify-end p-12 text-center items-center space-y-6">

                <h3
                  className="
                    text-4xl
                    md:text-5xl
                    font-serif
                    font-semibold
                    text-yellow-300
                  "
                >
                  {cat.title}
                </h3>

                <p className="text-sm italic text-white/70 tracking-widest leading-relaxed">
                  {cat.description}
                </p>

                <Link
                  to={`/category/${cat.id}`}
                  className="
                    px-8
                    py-3
                    rounded-full
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    border
                    border-yellow-500/30
                    text-yellow-300
                    bg-black/20
                  "
                >
                  Discover →
                </Link>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* COLLECTION SECTION */}
      <section
        ref={collectionRef}
        className="py-32 bg-black/40 backdrop-blur-3xl border-t border-white/5"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-12">

            <div>
              <h2 className="text-4xl md:text-6xl font-serif mb-4 text-white">
                Complete Anthology
              </h2>

              <p className="italic text-xl tracking-widest text-white/60">
                Handmade perfection for every occasion.
              </p>
            </div>

            <div className="flex items-center bg-white/5 backdrop-blur-xl p-2 rounded-full border border-white/10">

              {(["all", "men", "women", "kids"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.3em] transition-all ${
                    activeTab === tab
                      ? "bg-orange-500 text-white font-bold shadow-lg"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}

            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}

          </div>

          <div className="mt-24 text-center">

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="
                inline-flex
                items-center
                space-x-4
                px-12
                py-5
                border
                border-yellow-500/30
                text-yellow-400
                text-[10px]
                uppercase
                tracking-[0.4em]
                rounded-full
              "
            >
              <span>View All Artistry</span>

              <ShoppingBag className="w-4 h-4" />
            </motion.button>

          </div>

        </div>

      </section>

    </div>
  );
}