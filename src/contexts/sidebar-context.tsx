"use client";

import React, { createContext, useContext, useState } from "react";

interface SidebarContextType {
  selectedItem: { name: string; description: string; codeStyle: string; code: React.ReactNode };
  changeItem: (name: string, description: string, codeStyle: string, code: React.ReactNode) => void;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedItem, setSelectedItem] = useState({
    name: "",
    description: "",
    codeStyle: "",
    code: null as React.ReactNode,
  });

  const changeItem = (name: string, description: string, codeStyle: string, code: React.ReactNode) => {
    setSelectedItem({ name, description, code, codeStyle });
  };

  return (
    <SidebarContext.Provider value={{ selectedItem, changeItem }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};