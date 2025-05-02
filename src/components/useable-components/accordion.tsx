import { ChevronDown } from "lucide-react";
import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionContextType {
  openItem: string | null;
  setOpenItem: (id: string | null) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

interface AccordionItemContextType {
  id: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionItemContext = createContext<AccordionItemContextType | undefined>(undefined);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("useAccordion must be used within an <Accordion>");
  return context;
};

const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);
  if (!context) throw new Error("useAccordionItem must be used within an <AccordionItem>");
  return context;
};

export const Accordion = ({ 
  children,
  type = "single" 
}: { 
  children: React.ReactNode;
  type?: "single" | "multiple";
}) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className="accordion w-96 max-w-96">{children}</div>
    </AccordionContext.Provider>
  );
};

let itemIdCounter = 0;

export const AccordionItem = ({ children }: { children: React.ReactNode }) => {
  const [id] = useState(() => `accordion-item-${itemIdCounter++}`);
  const { openItem, setOpenItem } = useAccordion();
  const isOpen = openItem === id;

  const toggleOpen = () => {
    setOpenItem(isOpen ? null : id);
  };

  return (
    <AccordionItemContext.Provider value={{ id, isOpen, toggleOpen }}>
      <div className="accordion-item border-b border-[#27272A] last:border-none mt-2 pb-2">
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

export const AccordionTrigger = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, toggleOpen } = useAccordionItem();

  return (
    <button
      className="flex items-center justify-between cursor-pointer w-full py-2 group text-left font-medium"
      onClick={toggleOpen}
      aria-expanded={isOpen}
    >
      <span className="text-sm group-hover:underline">{children}</span>
      <motion.div
        initial={false}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
      >
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </motion.div>
    </button>
  );
};

export const AccordionContent = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useAccordionItem();

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: "auto", 
            opacity: 1,
            transition: {
              height: { 
                duration: 0.2,
                ease: [0.4, 0.0, 0.2, 1]
              },
              opacity: { 
                duration: 0.2,
                ease: [0.4, 0.0, 0.2, 1] 
              }
            }
          }}
          exit={{ 
            height: 0, 
            opacity: 0,
            transition: {
              height: { 
                duration: 0.2,
                ease: [0.4, 0.0, 0.2, 1]
              },
              opacity: { 
                duration: 0.1,
                ease: [0.4, 0.0, 0.2, 1] 
              }
            }
          }}
          className="overflow-hidden"
        >
          <div className="pt-1 pb-2 text-sm">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};