import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo7goCoffee from "../7gocoffee/Logo7goCoffee";
import LogoDetak7goRoastery from "../detakroastery/LogoDetak7goRoastery";
import WhatsappIcon from "../7gocoffee/WhatsappIcon";

interface HeaderProps {
  activeTab: "coffee" | "roastery";
  setActiveTab: (tab: "coffee" | "roastery") => void;
  onScrollToProduct?: () => void;
  onScrollToBuffet?: () => void;
  onScrollToCustomRoasting?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onScrollToProduct,
  onScrollToBuffet,
  onScrollToCustomRoasting,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isCoffee = activeTab === "coffee";
  const activeColor = isCoffee ? "#20748F" : "#83360D";
  const inactiveColor = isCoffee ? "text-gray-500" : "text-gray-500";
  const buttonBg = isCoffee ? "bg-[#20748F]" : "bg-[#83360D]";
  const buttonHoverBg = isCoffee ? "hover:bg-[#18647D]" : "hover:bg-[#6D2E0B]";

  // Function to handle mobile menu item click - closes menu after action
  const handleMobileMenuItemClick = (action?: () => void) => {
    if (action) {
      action();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="sticky top-0 z-50 w-full bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Area - Switches based on active tab */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => setActiveTab("coffee")}
            className={`transition-opacity duration-300 ${
              activeTab === "coffee"
                ? "opacity-100"
                : "opacity-50 hover:opacity-75"
            }`}
          >
            <Logo7goCoffee className="h-10 w-auto" />
          </button>
          <button
            onClick={() => setActiveTab("roastery")}
            className={`transition-opacity duration-300 ${
              activeTab === "roastery"
                ? "opacity-100"
                : "opacity-50 hover:opacity-75"
            }`}
          >
            <LogoDetak7goRoastery className="h-10 w-auto" />
          </button>
        </div>

        <div className="flex flex-row gap-6">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={onScrollToProduct}
              className={`text-sm font-medium hover:text-${activeColor} transition-colors ${inactiveColor} cursor-pointer`}
            >
              Produk
            </button>

            {isCoffee ? (
              <button
                onClick={onScrollToBuffet}
                className={`text-sm font-medium hover:text-${activeColor} transition-colors ${inactiveColor} cursor-pointer`}
              >
                Coffee Buffet
              </button>
            ) : (
              <>
                <button
                  onClick={onScrollToCustomRoasting}
                  className={`text-sm font-medium hover:text-${activeColor} transition-colors ${inactiveColor} cursor-pointer`}
                >
                  Custom Roasting
                </button>
                <button
                  onClick={onScrollToBuffet}
                  className={`text-sm font-medium hover:text-${activeColor} transition-colors ${inactiveColor} cursor-pointer`}
                >
                  Mesin Roasting
                </button>
              </>
            )}
          </nav>

          {/* Order Button */}
          <button
            className={`hidden md:flex items-center gap-2 ${buttonBg} text-white text-sm font-medium px-5 py-2 rounded-full ${buttonHoverBg} transition-colors`}
            onClick={() => window.open("https://wa.me/6285156056072", "_blank")}
          >
            <WhatsappIcon className="w-4 h-4" />
            Order Sekarang
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className={`p-2 rounded-md ${buttonBg} text-white`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Menu Icon - changes to X when menu is open */}
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => handleMobileMenuItemClick(onScrollToProduct)}
                className={`text-sm font-medium p-2 border-b border-gray-100 text-left ${
                  isCoffee ? "text-[#20748F]" : "text-[#83360D]"
                }`}
              >
                Produk
              </button>

              {isCoffee ? (
                <button
                  onClick={() => handleMobileMenuItemClick(onScrollToBuffet)}
                  className="text-sm font-medium p-2 border-b border-gray-100 text-left text-[#20748F]"
                >
                  Coffee Buffet
                </button>
              ) : (
                <>
                  <button
                    onClick={() =>
                      handleMobileMenuItemClick(onScrollToCustomRoasting)
                    }
                    className="text-sm font-medium p-2 border-b border-gray-100 text-left text-[#83360D]"
                  >
                    Custom Roasting
                  </button>
                  <button
                    onClick={() => handleMobileMenuItemClick(onScrollToBuffet)}
                    className="text-sm font-medium p-2 border-b border-gray-100 text-left text-[#83360D]"
                  >
                    Mesin Roasting
                  </button>
                </>
              )}

              <button
                className={`flex items-center gap-2 ${buttonBg} text-white text-sm font-medium px-5 py-3 rounded-full ${buttonHoverBg} transition-colors mt-2`}
                onClick={() => {
                  window.open("https://wa.me/6285156056072", "_blank");
                  setIsMobileMenuOpen(false);
                }}
              >
                <WhatsappIcon className="w-4 h-4" />
                Order Sekarang
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
