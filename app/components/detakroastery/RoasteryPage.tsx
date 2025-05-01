import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LogoDetak7goRoastery from "./LogoDetak7goRoastery";
import Footer from "../shared/Footer";
import WhatsappIcon from "../7gocoffee/WhatsappIcon";
import GojekIcon from "../7gocoffee/GojekIcon";
import InstagramIcon from "../7gocoffee/InstagramIcon";
import ShopeeIcon from "./shopee";

interface RoasteryPageRef {
  scrollToProduct: () => void;
  scrollToBuffet: () => void;
  scrollToCustomRoasting: () => void;
}

const RoasteryPage = forwardRef<RoasteryPageRef, {}>((props, ref) => {
  // Refs for scrolling
  const productSectionRef = useRef<HTMLDivElement>(null);
  const coffeeBuffetSectionRef = useRef<HTMLDivElement>(null);
  const customRoastingSectionRef = useRef<HTMLDivElement>(null);

  // State for expand/collapse coffee beans
  const [showAllBeans, setShowAllBeans] = useState(false);

  // State for carousel indexes
  const [beanSlideIndex, setBeanSlideIndex] = useState(0);
  const [roastLevelIndex, setRoastLevelIndex] = useState(0);

  // Coffee beans product data
  const coffeeBeansData = [
    {
      id: 1,
      name: "Cikuray",
      desc: "100% Arabica dengan citarasa sweet caramel, banana, dan sweet lime",
      origin: "Kab. Bandung, Jawa Barat",
      image: "/images/detak7goroastery/cikuray.png",
      originalPrice: 52000,
      price: 45000,
    },
    {
      id: 2,
      name: "Dampit",
      desc: "100% Robusta dengan citarasa chocolate, bittersweet, dan hints of caramel",
      origin: "Malang, Jawa Timur",
      image: "/images/detak7goroastery/dampit.png",
      originalPrice: 50000,
      price: 42000,
    },
    {
      id: 3,
      name: "Detak 37",
      desc: "30% Robusta 70% Arabica, house blend dengan karakter seimbang",
      origin: "Bandung, Jawa Barat",
      image: "/images/detak7goroastery/detak37.png",
      originalPrice: 48000,
      price: 40000,
    },
    {
      id: 4,
      name: "Detak 55",
      desc: "50% Robusta 50% Arabica, rasa seimbang dengan body sedang",
      origin: "Bandung, Jawa Barat",
      image: "/images/detak7goroastery/detak55.png",
      originalPrice: 49000,
      price: 42000,
    },
    {
      id: 5,
      name: "Detak 73",
      desc: "70% Robusta 30% Arabica, rasa kuat dengan body penuh",
      origin: "Bandung, Jawa Barat",
      image: "/images/detak7goroastery/detak73.png",
      originalPrice: 47000,
      price: 41000,
    },
    {
      id: 6,
      name: "Garut",
      desc: "100% Robusta dengan bright fruit, creamy body, dan hint of spice",
      origin: "Garut Cikuray, Jawa Barat",
      image: "/images/detak7goroastery/garut.png",
      originalPrice: 52000,
      price: 46000,
    },
    {
      id: 7,
      name: "Gayo",
      desc: "100% Arabica dengan karakter winey, bittersweet, dan grapes",
      origin: "Aceh, Sumatra",
      image: "/images/detak7goroastery/gayo.png",
      originalPrice: 55000,
      price: 48000,
    },
    {
      id: 8,
      name: "Halu",
      desc: "100% Arabica dengan citarasa floral, bright citrus, dan honeyed hug",
      origin: "Kab. Bandung, Jawa Barat",
      image: "/images/detak7goroastery/halu.png",
      originalPrice: 54000,
      price: 47000,
    },
    {
      id: 9,
      name: "Klasik Robusta",
      desc: "100% Robusta dengan citarasa chocolate, bittersweet, dan caramel",
      origin: "Bandung, Jawa Barat",
      image: "/images/detak7goroastery/klasikrobusta.png",
      originalPrice: 46000,
      price: 40000,
    },
    {
      id: 10,
      name: "Lanang",
      desc: "100% Robusta dengan bold earthy punch, spice, dan wood notes",
      origin: "Bandung, Jawa Barat",
      image: "/images/detak7goroastery/lanang.png",
      originalPrice: 53000,
      price: 47000,
    },
    {
      id: 11,
      name: "Manglayang",
      desc: "100% Arabica dengan citarasa pineapple, red apple, dan palm sugar",
      origin: "Kab. Bandung, Jawa Barat",
      image: "/images/detak7goroastery/manglayang.png",
      originalPrice: 51000,
      price: 45000,
    },
    {
      id: 12,
      name: "Puntang",
      desc: "100% Arabica dengan citarasa strawberry, pineapple, dan greengrape",
      origin: "Kab. Bandung, Jawa Barat",
      image: "/images/detak7goroastery/puntang.png",
      originalPrice: 52000,
      price: 46000,
    },
    {
      id: 13,
      name: "Super Detak",
      desc: "House blend spesial dengan secret recipe dari Detak Roastery",
      origin: "Bandung, Jawa Barat",
      image: "/images/detak7goroastery/superdetak.png",
      originalPrice: 56000,
      price: 49000,
    },
    {
      id: 14,
      name: "Temanggung",
      desc: "100% Robusta dengan citarasa earthy, chocolatey, dan fruity kick",
      origin: "Kab. Bandung, Jawa Barat",
      image: "/images/detak7goroastery/temanggung.png",
      originalPrice: 48000,
      price: 42000,
    },
  ];

  // Expose scroll methods to parent component
  useImperativeHandle(ref, () => ({
    scrollToProduct: () => {
      if (productSectionRef.current) {
        const yOffset = -80; // Account for header height
        const element = productSectionRef.current;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    },
    scrollToBuffet: () => {
      if (coffeeBuffetSectionRef.current) {
        const yOffset = -80; // Account for header height
        const element = coffeeBuffetSectionRef.current;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    },
    scrollToCustomRoasting: () => {
      if (customRoastingSectionRef.current) {
        const yOffset = -80; // Account for header height
        const element = customRoastingSectionRef.current;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    },
  }));

  // Display all beans or just the first 4
  const displayedBeans = showAllBeans
    ? coffeeBeansData
    : coffeeBeansData.slice(0, 4);

  // Handlers for swipe navigation
  const nextBeanSlide = () => {
    setBeanSlideIndex((prevIndex) =>
      prevIndex === displayedBeans.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevBeanSlide = () => {
    setBeanSlideIndex((prevIndex) =>
      prevIndex === 0 ? displayedBeans.length - 1 : prevIndex - 1
    );
  };

  const nextRoastLevelSlide = () => {
    setRoastLevelIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  const prevRoastLevelSlide = () => {
    setRoastLevelIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-white pb-24 overflow-hidden">
        <div className="container mx-auto px-4 pt-8 pb-20">
          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center justify-center mt-24 md:mt-16">
            <div className="max-w-2xl mb-8 md:mb-0 lg:w-xl md:w-svw ">
              <h1 className="text-2xl font-medium text-black mb-2">
                Detak <span className="text-[#83360D]">7GO</span> Roastery
              </h1>
              <div className="mb-6">
                <div className="text-5xl md:text-6xl font-bold mb-1">
                  <span className="text-black">Hand-Roasted</span>{" "}
                  <span className="text-[#83360D]">Coffee Beans</span>{" "}
                  <span className="text-black">for a</span>{" "}
                  <span className="text-[#83360D]">Bold Brew</span>
                </div>
              </div>

              {/* Coffee Bean Bag Image for Mobile - Show below title */}
              <div className="block md:hidden mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 w-full h-full bg-[#83360D] rounded-full opacity-10 blur-3xl"></div>
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut",
                    }}
                    className="relative z-0"
                  >
                    <Image
                      src="/images/detak7goroastery/Group 142.png"
                      alt="Detak 7GO Roastery Coffee Beans"
                      width={350}
                      height={350}
                      className="drop-shadow-2xl mx-auto"
                      priority
                    />
                  </motion.div>
                </motion.div>
              </div>

              <p className="text-black mb-8 text-lg ">
                Discover our artisanal roast that reveals each bean's unique
                flavor. From selection to roast, we ensure quality at every
                step.
              </p>
              <motion.button
                className="bg-[#83360D] text-white px-8 py-3 rounded-full hover:bg-[#6D2E0B] transition-colors font-medium text-lg flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open("https://wa.me/6285156056072", "_blank")
                }
              >
                <WhatsappIcon className="w-6 h-6 text-white" />
                Order Sekarang
              </motion.button>
            </div>

            {/* Coffee Bean Bag Image for Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mt-12 md:mt-0 md:ml-6 hidden md:block"
            >
              {/* Brown background for bag */}
              <div className="absolute inset-0 w-full h-full bg-[#83360D] rounded-full opacity-10 blur-3xl"></div>

              {/* Coffee bag with animation */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="relative z-0"
              >
                <Image
                  src="/images/detak7goroastery/Group 142.png"
                  alt="Detak 7GO Roastery Coffee Beans"
                  width={450}
                  height={550}
                  className="drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Detak 7GO Roastery Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F8EFEA]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14 text-black">
            Kenapa 7GO Roastery
          </h2>

          <div className="relative flex justify-center items-center">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 z-0">
              <Image
                src="/images/7gocoffee/jug-pattern.svg"
                alt="Background Pattern"
                width={1000}
                height={600}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-5xl mx-auto">
              {/* Coffee Bag Feature Display */}
              <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2">
                  <Image
                    src="/images/detak7goroastery/bags.png"
                    alt="Detak 7GO Coffee Beans"
                    width={800}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>

                <div className="space-y-12 md:w-1/2">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#83360D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        Berkualitas Baik
                      </h3>
                      <p className="text-black">
                        Pilih biji kopi berkualitas tinggi yang diproses dengan
                        hati-hati untuk hasil terbaik.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C4835F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        Konsistensi Rasa
                      </h3>
                      <p className="text-black">
                        Memastikan bahwa setiap batch memiliki profil rasa yang
                        konsisten untuk pengalaman terbaik.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#83360D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        Roasting Kustom
                      </h3>
                      <p className="text-black">
                        Sesuaikan tingkat sangrai agar cocok dengan preferensi
                        rasa pelanggan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Beans Menu Section */}
      <section
        id="productSection"
        ref={productSectionRef}
        className="py-16 bg-gradient-to-b from-[#F8EFEA] to-[#FFF8F2] flex justify-center"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16">
            <h3 className="text-xl text-[#83360D] font-medium mb-2">
              Bold Beans of Indonesia
            </h3>
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-bold text-black">
                Detak Coffee Beans
              </h2>
              <motion.button
                className="text-[#83360D] font-medium px-6 py-2 rounded-full border border-[#83360D] hover:bg-[#83360D] hover:text-white transition-colors hidden sm:block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllBeans(!showAllBeans)}
              >
                {showAllBeans ? "Sembunyikan" : "Tampilkan Semua"}
              </motion.button>
            </div>
          </div>

          {/* Desktop View - Grid Layout */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedBeans.map((item) => (
              <motion.div
                key={`beans-desktop-${item.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[#FBF7F2] rounded-t-2xl">
                  <div className="flex justify-center h-56 w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={250}
                      height={250}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-xl mb-1 text-black">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">{item.desc}</p>
                  <p className="text-xs text-gray-500 mb-4">
                    Origin: {item.origin}
                  </p>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 line-through">
                      Rp{item.originalPrice.toLocaleString()}
                    </span>
                    <span className="font-bold text-lg text-[#83360D]">
                      Rp{item.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View - Carousel */}
          <div className="block sm:hidden">
            <div className="relative">
              {/* Swipe Navigation Buttons */}
              <button
                onClick={prevBeanSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                onClick={nextBeanSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>

              {/* Carousel Container */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{ x: `-${beanSlideIndex * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe =
                      Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 400;
                    if (swipe) {
                      if (offset.x > 0) {
                        prevBeanSlide();
                      } else {
                        nextBeanSlide();
                      }
                    }
                  }}
                >
                  {displayedBeans.map((item) => (
                    <motion.div
                      key={`beans-mobile-${item.id}`}
                      className="min-w-full px-4"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                        <div className="bg-[#FBF7F2] rounded-t-2xl">
                          <div className="flex justify-center h-56 w-full">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={250}
                              height={250}
                              className="w-full h-full object-contain p-2"
                            />
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-xl mb-1 text-black">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600 mb-1">
                            {item.desc}
                          </p>
                          <p className="text-xs text-gray-500 mb-4">
                            Origin: {item.origin}
                          </p>
                          <div className="flex flex-col">
                            <span className="text-sm text-gray-500 line-through">
                              Rp{item.originalPrice.toLocaleString()}
                            </span>
                            <span className="font-bold text-lg text-[#83360D]">
                              Rp{item.price.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Dot Navigation */}
            <div className="flex justify-center mt-6 gap-2">
              {displayedBeans.map((_, index) => (
                <button
                  key={`bean-dot-${index}`}
                  onClick={() => setBeanSlideIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === beanSlideIndex ? "bg-[#83360D]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Custom Roasting Section */}
          <div
            className="mb-16 mt-24"
            ref={customRoastingSectionRef}
            id="customRoastingSection"
          >
            <h3 className="text-xl text-[#83360D] font-medium mb-2">
              Sesuaikan Rasa, Ciptakan Kualitas
            </h3>
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-bold text-black">
                Jasa Custom Roasting Kopi
              </h2>
            </div>
          </div>

          {/* Desktop View - Grid Layout */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Light",
                desc: "Kopi dengan karakter ringan, asam yang lebih tinggi dan rasa buah yang menonjol",
              },
              {
                name: "Medium",
                desc: "Keseimbangan sempurna antara rasa, aroma, dan tingkat keasaman",
              },
              {
                name: "Medium to Dark",
                desc: "Rasa lebih kaya dengan sedikit kepahitan dan aroma kuat",
              },
              {
                name: "Dark",
                desc: "Rasa bold dengan karakter smoky dan tingkat keasaman rendah",
              },
            ].map((item, index) => (
              <motion.div
                key={`roast-desktop-${index}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className=" bg-[#FBF7F2] rounded-t-2xl">
                  <div className="flex justify-center h-44 w-full">
                    <Image
                      src={
                        item.name === "Medium to Dark"
                          ? "/images/detak7goroastery/mtd.png"
                          : `/images/detak7goroastery/${item.name.toLowerCase()}.png`
                      }
                      alt={item.name}
                      width={180}
                      height={180}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-xl mb-1 text-black">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View - Carousel for Roast Levels */}
          <div className="block sm:hidden">
            <div className="relative">
              {/* Swipe Navigation Buttons */}
              <button
                onClick={prevRoastLevelSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                onClick={nextRoastLevelSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>

              {/* Carousel Container */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{ x: `-${roastLevelIndex * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe =
                      Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 400;
                    if (swipe) {
                      if (offset.x > 0) {
                        prevRoastLevelSlide();
                      } else {
                        nextRoastLevelSlide();
                      }
                    }
                  }}
                >
                  {[
                    {
                      name: "Light",
                      desc: "Kopi dengan karakter ringan, asam yang lebih tinggi dan rasa buah yang menonjol",
                    },
                    {
                      name: "Medium",
                      desc: "Keseimbangan sempurna antara rasa, aroma, dan tingkat keasaman",
                    },
                    {
                      name: "Medium to Dark",
                      desc: "Rasa lebih kaya dengan sedikit kepahitan dan aroma kuat",
                    },
                    {
                      name: "Dark",
                      desc: "Rasa bold dengan karakter smoky dan tingkat keasaman rendah",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={`roast-mobile-${index}`}
                      className="min-w-full px-4"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                        <div className="bg-[#FBF7F2] rounded-t-2xl">
                          <div className="flex justify-center h-44 w-full">
                            <Image
                              src={
                                item.name === "Medium to Dark"
                                  ? "/images/detak7goroastery/mtd.png"
                                  : `/images/detak7goroastery/${item.name.toLowerCase()}.png`
                              }
                              alt={item.name}
                              width={180}
                              height={180}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-xl mb-1 text-black">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600 mb-4">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Dot Navigation */}
            <div className="flex justify-center mt-6 gap-2">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={`roast-dot-${index}`}
                  onClick={() => setRoastLevelIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === roastLevelIndex ? "bg-[#83360D]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-black text-lg max-w-4xl mx-auto">
              Rasakan pengalaman kopi yang diracik khusus untuk selera Anda.
              Dengan layanan custom roasting kami, setiap biji kopi dipanggang
              sesuai preferensi Anda – dari light roast yang lembut hingga dark
              roast yang penuh karakter.
            </p>
            <motion.button
              className="mt-8 bg-[#83360D] text-white px-8 py-3 rounded-full hover:bg-[#6D2E0B] transition-colors font-medium text-lg flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open("https://wa.me/6285156056072", "_blank")
              }
            >
              <WhatsappIcon className="w-6 h-6 text-white" />
              Custom Roasting Kopi Sekarang!
            </motion.button>
          </div>
        </div>
      </section>

      {/* Online Order Section */}
      <section className="py-12 ">
        <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-[#83360D] to-[#6D2E0B] rounded-3xl">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-0 text-white">
              Pembelian Online Melalui:
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#"
                className="bg-white text-black px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  window.open("https://id.shp.ee/DyR3BWq", "_blank")
                }
              >
                <ShopeeIcon className="w-6 h-6" />
                <span className="font-medium">Order via Shopee</span>
              </motion.a>
              <motion.a
                href="#"
                className="bg-white text-black px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  window.open("https://wa.me/6285156056072", "_blank")
                }
              >
                <WhatsappIcon className="w-6 h-6 text-green-500" />
                <span className="font-medium">Order via WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Machines Section */}
      <section
        id="coffeeBuffetSection"
        ref={coffeeBuffetSectionRef}
        className="py-16 bg-gradient-to-b from-white to-[#F8EFEA] flex justify-center"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <h3 className="text-xl text-[#83360D] font-medium mb-2">
              Coffee Machinery for Sale
            </h3>
            <h2 className="text-4xl font-bold text-black mb-4">
              Jual Mesin Roasting
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <p className="text-black text-lg mb-6">
                Ingin kopi yang benar-benar disesuaikan dengan preferensi Anda?
                Kami siap membantu Anda memilih peralatan yang tepat, dari
                penggiling hingga mesin roasting.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#83360D] mt-2"></div>
                  <span className="text-black">Mesin Premium Berkualitas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#83360D] mt-2"></div>
                  <span className="text-black">
                    Durabilitas & Presisi Tinggi
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#83360D] mt-2"></div>
                  <span className="text-black">
                    Garansi & Layanan Purna Jual
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#83360D] mt-2"></div>
                  <span className="text-black">
                    Pelatihan Penggunaan Gratis
                  </span>
                </li>
              </ul>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 bg-[#83360D] text-white px-8 py-3 rounded-full hover:bg-[#6D2E0B] transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <WhatsappIcon fill="white" className="w-6 h-6" />
                <span className="font-medium">Hubungi Tim Kami</span>
              </motion.a>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <Image
                src="/images/detak7goroastery/Coffee Roasting Machine (1).jpg"
                alt="Roasting Machine 1"
                width={300}
                height={200}
                className="rounded-xl object-cover h-48 w-full shadow-md"
              />
              <Image
                src="/images/detak7goroastery/Coffee Roasting Machine (2).jpg"
                alt="Roasting Machine 2"
                width={300}
                height={200}
                className="rounded-xl object-cover h-48 w-full shadow-md"
              />
              <Image
                src="/images/detak7goroastery/Coffee Roasting Machine.jpg"
                alt="Roasting Machine 3"
                width={620}
                height={200}
                className="rounded-xl object-cover h-48 w-full col-span-2 shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact Section */}
      <Footer
        bgColor="bg-[#83360D]"
        textColor="text-white"
        accentColor="text-[#83360D]"
        variant="roastery"
      />
    </div>
  );
});

RoasteryPage.displayName = "RoasteryPage";

export default RoasteryPage;
