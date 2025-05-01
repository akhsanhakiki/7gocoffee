import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Logo7goCoffee from "./Logo7goCoffee";
import Footer from "../shared/Footer";
import WhatsappIcon from "./WhatsappIcon";
import GojekIcon from "./GojekIcon";
import InstagramIcon from "./InstagramIcon";

interface CoffeePageRef {
  scrollToProduct: () => void;
  scrollToBuffet: () => void;
  scrollToCustomRoasting: () => void;
}

const CoffeePage = forwardRef<CoffeePageRef, {}>((props, ref) => {
  // Refs for scrolling
  const productSectionRef = useRef<HTMLDivElement>(null);
  const coffeeBuffetSectionRef = useRef<HTMLDivElement>(null);

  // State for carousel indexes
  const [espressoIndex, setEspressoIndex] = useState(0);
  const [specialtyIndex, setSpecialtyIndex] = useState(0);

  // Define product data
  const espressoProducts = [
    {
      name: "7GO Artisan",
      img: "/images/7gocoffee/7go-artisan.png",
      desc: "Signature house blend espresso dengan cita rasa khas 7GO Coffee",
      price: "20.000",
      discPrice: "16.000",
    },
    {
      name: "Americano",
      img: "/images/7gocoffee/americano.png",
      desc: "Espresso dengan tambahan air panas, memberikan rasa kopi yang ringan namun kuat",
      price: "25.000",
      discPrice: "16.000",
    },
    {
      name: "Little Rookie",
      img: "/images/7gocoffee/little-rookie.png",
      desc: "Kopi susu dengan campuran espresso yang seimbang, cocok untuk pemula",
      price: "25.000",
      discPrice: "16.000",
    },
    {
      name: "Oatcraft",
      img: "/images/7gocoffee/oatcraft.png",
      desc: "Espresso dengan susu oat, pilihan sehat dan lembut dengan tekstur creamy",
      price: "28.000",
      discPrice: "20.000",
    },
    {
      name: "White Awakening",
      img: "/images/7gocoffee/white-awakening.png",
      desc: "Flat white dengan microfoam susu yang halus dan double shot espresso",
      price: "27.000",
      discPrice: "18.000",
    },
  ];

  const specialtyProducts = [
    {
      name: "Matcha Latte",
      img: "/images/7gocoffee/matcha.png",
      desc: "Green tea premium dengan susu yang lembut, kaya antioksidan",
      price: "27.000",
      discPrice: "18.000",
    },
    {
      name: "Milk Tea",
      img: "/images/7gocoffee/milk-tea.png",
      desc: "Teh dengan campuran susu creamy yang menyegarkan dan manis",
      price: "25.000",
      discPrice: "16.000",
    },
    {
      name: "Taro Latte",
      img: "/images/7gocoffee/taro-latte.png",
      desc: "Minuman berbahan dasar taro dengan susu, rasa manis dan lembut",
      price: "28.000",
      discPrice: "20.000",
    },
    {
      name: "Choco Latte",
      img: "/images/7gocoffee/choco-latte.png",
      desc: "Cokelat premium dengan susu, perpaduan yang klasik dan menenangkan",
      price: "26.000",
      discPrice: "17.000",
    },
  ];

  // Mobile menu handling function
  const handleMobileMenuClick = (
    targetRef: React.RefObject<HTMLDivElement | null>
  ) => {
    if (targetRef && targetRef.current) {
      const yOffset = -80; // Account for header height
      const element = targetRef.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  // Expose scroll methods to parent component
  useImperativeHandle(ref, () => ({
    scrollToProduct: () => {
      handleMobileMenuClick(productSectionRef);
    },
    scrollToBuffet: () => {
      handleMobileMenuClick(coffeeBuffetSectionRef);
    },
    scrollToCustomRoasting: () => {
      // For consistency in interface, but not used in this component
      handleMobileMenuClick(productSectionRef);
    },
  }));

  // Handlers for swipe navigation
  const nextEspressoSlide = () => {
    setEspressoIndex((prevIndex) =>
      prevIndex === espressoProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevEspressoSlide = () => {
    setEspressoIndex((prevIndex) =>
      prevIndex === 0 ? espressoProducts.length - 1 : prevIndex - 1
    );
  };

  const nextSpecialtySlide = () => {
    setSpecialtyIndex((prevIndex) =>
      prevIndex === specialtyProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSpecialtySlide = () => {
    setSpecialtyIndex((prevIndex) =>
      prevIndex === 0 ? specialtyProducts.length - 1 : prevIndex - 1
    );
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
                7GO <span className="text-[#20748F]">Coffee</span> Blend
              </h1>
              <div className="mb-6">
                <div className="text-5xl md:text-6xl font-bold mb-1">
                  <span className="text-black">Crafted with</span>{" "}
                  <span className="text-[#20748F]">Passion</span>{" "}
                  <span className="text-black">Brewed with</span>{" "}
                  <span className="text-[#20748F]">Precision</span>
                </div>
              </div>

              {/* Coffee Cup Image for Mobile - Show between title and description */}
              <div className="block md:hidden mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 w-full h-full bg-[#20748F] rounded-full opacity-10 blur-3xl"></div>
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
                      src="/images/7gocoffee/cup7go.png"
                      alt="7GO Coffee Cup"
                      width={350}
                      height={350}
                      className="drop-shadow-2xl mx-auto"
                      priority
                    />
                  </motion.div>
                </motion.div>
              </div>

              <p className="text-black mb-8 text-lg ">
                Setiap cangkir yang kami sajikan adalah hasil dari dedikasi
                tanpa kompromi, menghadirkan rasa terbaik untuk setiap momen
                Anda.
              </p>
              <motion.button
                className="bg-[#20748F] text-white px-8 py-3 rounded-full hover:bg-[#186278] transition-colors font-medium text-lg flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open("https://wa.me/6285156056072", "_blank")
                }
              >
                <WhatsappIcon className="w-6 h-6" />
                Order Sekarang
              </motion.button>
            </div>

            {/* Coffee Cup Image for Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mt-12 md:mt-0 md:ml-6 hidden md:block"
            >
              {/* Blue background for cup */}
              <div className="absolute inset-0 w-full h-full bg-[#20748F] rounded-full opacity-10 blur-3xl"></div>

              {/* Coffee cup with animation */}
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
                  src="/images/7gocoffee/cup7go.png"
                  alt="7GO Coffee Cup"
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

      {/* Why 7GO Coffee Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F5FAFC]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14 text-black">
            Kenapa 7GO Coffee
          </h2>

          <div className="relative flex justify-center items-center">
            {/* Main content */}
            <div className="relative z-10 max-w-5xl mx-auto">
              {/* Coffee Cup Feature Display */}
              <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2">
                  <Image
                    src="/images/7gocoffee/hot-americano.png"
                    alt="7GO Coffee Cup"
                    width={800}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>

                <div className="space-y-12 md:w-1/2">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#20748F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        Biji Kopi Terbaik
                      </h3>
                      <p className="text-black">
                        Biji kopi pilihan memastikan kualitas dan cita rasa yang
                        konsisten di setiap cangkirnya
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#7FB9CF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        Proses Roasting Khusus
                      </h3>
                      <p className="text-black">
                        Menghasilkan berbagai profil rasa – dari ringan dan
                        fruity hingga bold dan kompleks
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#20748F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        Praktis & Ramah Lingkungan
                      </h3>
                      <p className="text-black">
                        Kemasan on-the-go yang mudah dibawa + terbuat dari bahan
                        ramah lingkungan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Menu Sections */}
      <section
        id="productSection"
        ref={productSectionRef}
        className="py-16 bg-gradient-to-b from-[#F5FAFC] to-[#F8F8F8] flex justify-center"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16">
            <h3 className="text-xl text-[#20748F] font-medium mb-2">
              Caffeine Elixir
            </h3>
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-bold text-black">Espresso Base</h2>
              {/* "Tampilkan Semua" button removed from mobile view */}
            </div>
          </div>

          {/* Desktop View - Grid Layout */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {espressoProducts.slice(0, 4).map((item, index) => (
              <motion.div
                key={`espresso-desktop-${index}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-6 bg-[#FBF7F2] rounded-t-2xl">
                  <div className="flex justify-center">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={180}
                      height={180}
                      className="h-44 object-contain"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-xl mb-1 text-black">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 line-through">
                      Rp{item.price}
                    </span>
                    <span className="font-bold text-lg text-[#A24D24]">
                      Rp{item.discPrice}
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
                onClick={prevEspressoSlide}
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
                onClick={nextEspressoSlide}
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
                  animate={{ x: `-${espressoIndex * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe =
                      Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 400;
                    if (swipe) {
                      if (offset.x > 0) {
                        prevEspressoSlide();
                      } else {
                        nextEspressoSlide();
                      }
                    }
                  }}
                >
                  {espressoProducts.map((item, index) => (
                    <motion.div
                      key={`espresso-mobile-${index}`}
                      className="min-w-full px-4"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                        <div className="p-6 bg-[#FBF7F2] rounded-t-2xl">
                          <div className="flex justify-center">
                            <Image
                              src={item.img}
                              alt={item.name}
                              width={180}
                              height={180}
                              className="h-44 object-contain"
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
                          <div className="flex flex-col">
                            <span className="text-sm text-gray-500 line-through">
                              Rp{item.price}
                            </span>
                            <span className="font-bold text-lg text-[#A24D24]">
                              Rp{item.discPrice}
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
              {espressoProducts.map((_, index) => (
                <button
                  key={`espresso-dot-${index}`}
                  onClick={() => setEspressoIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === espressoIndex ? "bg-[#20748F]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mb-16 mt-16">
            <h3 className="text-xl text-[#20748F] font-medium mb-2">
              Refreshment Oasis
            </h3>
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-bold text-black">
                Non-Coffee Favorites
              </h2>
              <motion.button
                className="text-[#20748F] font-medium px-6 py-2 rounded-full border border-[#20748F] hover:bg-[#20748F] hover:text-white transition-colors hidden sm:block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Tampilkan Semua
              </motion.button>
            </div>
          </div>

          {/* Desktop View - Grid Layout */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyProducts.map((item, index) => (
              <motion.div
                key={`specialty-desktop-${index}`}
                className="bg-[#E9F4FA] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-6 rounded-t-2xl">
                  <div className="flex justify-center">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={180}
                      height={180}
                      className="h-44 object-contain"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-xl mb-1 text-black">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 line-through">
                      Rp{item.price}
                    </span>
                    <span className="font-bold text-lg text-[#A24D24]">
                      Rp{item.discPrice}
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
                onClick={prevSpecialtySlide}
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
                onClick={nextSpecialtySlide}
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
                  animate={{ x: `-${specialtyIndex * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe =
                      Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 400;
                    if (swipe) {
                      if (offset.x > 0) {
                        prevSpecialtySlide();
                      } else {
                        nextSpecialtySlide();
                      }
                    }
                  }}
                >
                  {specialtyProducts.map((item, index) => (
                    <motion.div
                      key={`specialty-mobile-${index}`}
                      className="min-w-full px-4"
                    >
                      <div className="bg-[#E9F4FA] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                        <div className="p-6 rounded-t-2xl">
                          <div className="flex justify-center">
                            <Image
                              src={item.img}
                              alt={item.name}
                              width={180}
                              height={180}
                              className="h-44 object-contain"
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
                          <div className="flex flex-col">
                            <span className="text-sm text-gray-500 line-through">
                              Rp{item.price}
                            </span>
                            <span className="font-bold text-lg text-[#A24D24]">
                              Rp{item.discPrice}
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
              {specialtyProducts.map((_, index) => (
                <button
                  key={`specialty-dot-${index}`}
                  onClick={() => setSpecialtyIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === specialtyIndex ? "bg-[#20748F]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Online Order Section */}
      <section className="py-12 ">
        <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-[#20748F] to-[#186278] rounded-3xl">
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
                  window.open("https://gofood.link/a/PZ15t4J", "_blank")
                }
              >
                <GojekIcon fill="#00AA13" width={30} height={30} />
                <span className="font-medium">Order via Gojek</span>
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

      {/* Coffee Buffet Section */}
      <section
        id="coffeeBuffetSection"
        ref={coffeeBuffetSectionRef}
        className="py-16 bg-gradient-to-b from-white to-[#F5FAFC] flex justify-center"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <h3 className="text-xl text-[#20748F] font-medium mb-2">
              Caffeine Bonanza
            </h3>
            <h2 className="text-4xl font-bold text-black mb-4">
              Coffee Buffet Catering
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <p className="text-black text-lg mb-6">
                Siap memanjakan tamu Anda dengan cita rasa kopi autentik.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#20748F] mt-2"></div>
                  <span className="text-black">Personalisasi Menu Kopi</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#20748F] mt-2"></div>
                  <span className="text-black">Kualitas Bahan Premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#20748F] mt-2"></div>
                  <span className="text-black">
                    Efisien & Cepat dalam Penyajian
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#20748F] mt-2"></div>
                  <span className="text-black">
                    Setup Booth Estetis dan Menarik
                  </span>
                </li>
              </ul>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 bg-[#20748F] text-white px-8 py-3 rounded-full hover:bg-[#186278] transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <WhatsappIcon className="w-6 h-6 text-white" />
                <span className="font-medium">Hubungi Tim Kami</span>
              </motion.a>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <Image
                src="/images/7gocoffee/catering-pic.png"
                alt="Coffee Buffet 1"
                width={300}
                height={200}
                className="rounded-xl object-cover h-48 w-full shadow-md"
              />
              <Image
                src="/images/7gocoffee/catering-pic-2.png"
                alt="Coffee Buffet 2"
                width={300}
                height={200}
                className="rounded-xl object-cover h-48 w-full shadow-md"
              />
              <Image
                src="/images/7gocoffee/catering-pic-3.png"
                alt="Coffee Buffet 3"
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
        bgColor="bg-[#20748F]"
        textColor="text-white"
        accentColor="text-[#20748F]"
        onScrollToProduct={() =>
          productSectionRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        onScrollToBuffet={() =>
          coffeeBuffetSectionRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        variant="coffee"
      />
    </div>
  );
});

CoffeePage.displayName = "CoffeePage";

export default CoffeePage;
