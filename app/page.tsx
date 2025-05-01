"use client";

import React, { useState, Suspense, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/shared/Header";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import TabStateProvider from "./components/TabStateProvider";

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

  // Refs for both pages
  const coffeePageRef = useRef<CoffeePageRef>(null);
  const roasteryPageRef = useRef<RoasteryPageRef>(null);

  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <TabStateProvider>
          {({
            activeTab,
            handleTabChange,
          }: {
            activeTab: "coffee" | "roastery";
            handleTabChange: (tab: "coffee" | "roastery") => void;
          }) => (
            <>
              <Header
                activeTab={activeTab}
                setActiveTab={handleTabChange}
                onScrollToProduct={() => {
                  if (activeTab === "coffee" && coffeePageRef.current) {
                    coffeePageRef.current.scrollToProduct();
                  } else if (
                    activeTab === "roastery" &&
                    roasteryPageRef.current
                  ) {
                    roasteryPageRef.current.scrollToProduct();
                  }
                }}
                onScrollToBuffet={() => {
                  if (activeTab === "coffee" && coffeePageRef.current) {
                    coffeePageRef.current.scrollToBuffet();
                  } else if (
                    activeTab === "roastery" &&
                    roasteryPageRef.current
                  ) {
                    roasteryPageRef.current.scrollToBuffet();
                  }
                }}
                onScrollToCustomRoasting={() => {
                  if (activeTab === "roastery" && roasteryPageRef.current) {
                    roasteryPageRef.current.scrollToCustomRoasting();
                  }
                }}
              />

              <AnimatePresence mode="wait">
                <Suspense
                  fallback={<div className="p-8 text-center">Loading...</div>}
                >
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
            </>
          )}
        </TabStateProvider>
      </Suspense>
    </div>
  );
}
