import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GojekIcon from "../7gocoffee/GojekIcon";
import WhatsappIcon from "../7gocoffee/WhatsappIcon";
import InstagramIcon from "../7gocoffee/InstagramIcon";
import ShopeeIcon from "../detakroastery/shopee";

interface FooterProps {
  bgColor: string;
  textColor: string;
  accentColor: string;
  onScrollToProduct?: () => void;
  onScrollToBuffet?: () => void;
  variant?: "coffee" | "roastery";
}

const Footer: React.FC<FooterProps> = ({
  bgColor,
  textColor,
  accentColor,
  onScrollToProduct,
  onScrollToBuffet,
  variant = "coffee", // Default to coffee variant
}) => {
  return (
    <section className={`py-16 ${bgColor} ${textColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="max-w-lg mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Punya Pertanyaan, Konsultasi Kopi atau Kerjasama?
            </h2>
            <motion.button
              className={`bg-white ${accentColor} px-6 py-3 rounded-full hover:bg-gray-100 transition-colors`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() =>
                window.open("https://wa.me/6285156056072", "_blank")
              }
            >
              Hubungi Kami!
            </motion.button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg overflow-hidden h-64">
              {/* Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9632444611975!2d107.6703935!3d-6.897984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7c77c49765b%3A0x7cb21e0dcd2bdd7c!2sJl.%20AH.%20Nasution%20No.109%2C%20Sukamiskin%2C%20Kec.%20Arcamanik%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040195!5e0!3m2!1sen!2sid!4v1717159879876!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold mb-2">7GO Group</h3>
            <p className="text-sm mb-1">Jl. AH. Nasution No.109, Sukamiskin</p>
            <p className="text-sm">
              Kec. Arcamanik, Kota Bandung, Jawa Barat 40195
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Our Location</h3>
            <p
              className="text-sm mb-1 cursor-pointer hover:underline"
              onClick={onScrollToProduct}
            >
              Produk
            </p>
            <p
              className="text-sm mb-1 cursor-pointer hover:underline"
              onClick={onScrollToBuffet}
            >
              Coffee Buffet
            </p>
            <p className="text-sm">Jl. Cihampelas, Bandung</p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex gap-4">
            {/* Social Media Icons */}

            <motion.div
              className="h-10 w-10 rounded-full bg-white flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() =>
                window.open(
                  variant === "coffee"
                    ? "https://gofood.link/a/PZ15t4J"
                    : "https://id.shp.ee/DyR3BWq",
                  "_blank"
                )
              }
            >
              {variant === "coffee" ? (
                <GojekIcon fill="#00AA13" width={20} height={20} />
              ) : (
                <ShopeeIcon className="w-5 h-5" />
              )}
            </motion.div>
            <motion.div
              className="h-10 w-10 rounded-full bg-white flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() =>
                window.open("https://wa.me/6285156056072", "_blank")
              }
            >
              <WhatsappIcon className="w-4 h-4 text-green-500" />
            </motion.div>
            <motion.div
              className="h-10 w-10 rounded-full bg-white flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() =>
                window.open("https://www.instagram.com/7gocoffee", "_blank")
              }
            >
              <InstagramIcon fill="#E1306C" width={18} height={18} />
            </motion.div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm">
          <p>7GO Group ©2024 All right reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
