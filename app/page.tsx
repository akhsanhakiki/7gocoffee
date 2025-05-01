"use client";

import React, { useState, Suspense, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/shared/Header";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";

// Define the interfaces for the components
interface CoffeePageRef {
  scrollToProduct: () => void;
  scrollToBuffet: () => void;
}

interface RoasteryPageRef {
  scrollToProduct: () => void;
  scrollToBuffet: () => void;
  scrollToCustomRoasting: () => void;
}

// Import components with proper typing
const CoffeePage = dynamic(
  () => import("./components/7gocoffee/CoffeePage")
) as unknown as React.ForwardRefExoticComponent<
  React.RefAttributes<CoffeePageRef>
>;

const RoasteryPage = dynamic(
  () => import("./components/detakroastery/RoasteryPage")
) as unknown as React.ForwardRefExoticComponent<
  React.RefAttributes<RoasteryPageRef>
>;

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the tab from URL or default to "coffee"
  const initialTab =
    searchParams.get("tab") === "roastery" ? "roastery" : "coffee";
  const [activeTab, setActiveTab] = useState<"coffee" | "roastery">(initialTab);

  // Synchronize URL with tab state if they get out of sync
  useEffect(() => {
    const tabInUrl = searchParams.get("tab");
    const expectedUrlState = activeTab === "coffee" ? null : activeTab;

    if (tabInUrl !== expectedUrlState) {
      handleTabChange(activeTab);
    }
  }, [searchParams, activeTab]);

  // Refs for both pages
  const coffeePageRef = useRef<CoffeePageRef>(null);
  const roasteryPageRef = useRef<RoasteryPageRef>(null);

  // Function to scroll to sections in the active page
  const scrollToProduct = () => {
    if (activeTab === "coffee" && coffeePageRef.current) {
      coffeePageRef.current.scrollToProduct();
    } else if (activeTab === "roastery" && roasteryPageRef.current) {
      roasteryPageRef.current.scrollToProduct();
    }
  };

  const scrollToBuffet = () => {
    if (activeTab === "coffee" && coffeePageRef.current) {
      coffeePageRef.current.scrollToBuffet();
    } else if (activeTab === "roastery" && roasteryPageRef.current) {
      roasteryPageRef.current.scrollToBuffet();
    }
  };

  // Update URL when tab changes
  const handleTabChange = (tab: "coffee" | "roastery") => {
    setActiveTab(tab);

    // Create a new URLSearchParams object and set the tab
    const params = new URLSearchParams(searchParams.toString());
    if (tab === "coffee") {
      params.delete("tab"); // Default tab doesn't need URL param
    } else {
      params.set("tab", tab);
    }

    // Update URL without refreshing the page
    const newUrl = params.toString()
      ? `?${params.toString()}`
      : window.location.pathname;
    window.history.pushState({}, "", newUrl);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onScrollToProduct={scrollToProduct}
        onScrollToBuffet={scrollToBuffet}
        onScrollToCustomRoasting={() => {
          if (activeTab === "roastery" && roasteryPageRef.current) {
            roasteryPageRef.current.scrollToCustomRoasting();
          }
        }}
      />

      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
          {activeTab === "coffee" ? (
            <motion.div
              key="coffee"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CoffeePage ref={coffeePageRef} />
            </motion.div>
          ) : (
            <motion.div
              key="roastery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <RoasteryPage ref={roasteryPageRef} />
            </motion.div>
          )}
        </Suspense>
      </AnimatePresence>
    </div>
  );
}
