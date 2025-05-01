"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { useSearchParams } from "next/navigation";

type TabType = "coffee" | "roastery";

interface TabStateContextProps {
  activeTab: TabType;
  handleTabChange: (tab: TabType) => void;
}

interface TabStateProviderProps {
  children: (props: TabStateContextProps) => ReactNode;
}

const TabStateProvider: React.FC<TabStateProviderProps> = ({ children }) => {
  const searchParams = useSearchParams();

  // Get the tab from URL or default to "coffee"
  const initialTab =
    searchParams.get("tab") === "roastery" ? "roastery" : "coffee";
  const [activeTab, setActiveTab] = useState<TabType>(initialTab as TabType);

  // Synchronize URL with tab state if they get out of sync
  useEffect(() => {
    const tabInUrl = searchParams.get("tab");
    const expectedUrlState = activeTab === "coffee" ? null : activeTab;

    if (tabInUrl !== expectedUrlState) {
      handleTabChange(activeTab);
    }
  }, [searchParams, activeTab]);

  // Update URL when tab changes
  const handleTabChange = (tab: TabType) => {
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
    <>
      {children({
        activeTab,
        handleTabChange,
      })}
    </>
  );
};

export default TabStateProvider;
