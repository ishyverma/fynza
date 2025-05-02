"use client";

import useSidebar from "@/app/hooks/use-sidebar";
import { CodeCard } from "@/components/site-components/code-card";
import MainCard from "@/components/site-components/main-card";
import React, { useState } from "react";

type Selected = "preview" | "code";

type Props = {};

const ComponentName = (props: Props) => {
  const { selectedItem } = useSidebar();
  const [selected, setSelected] = useState<Selected>("preview");

  return (
    <div>
      <p className="text-4xl font-bold tracking-tighter max-w-2xl w-2xl">
        {selectedItem?.name[0]?.toUpperCase()}
        {selectedItem?.name.slice(1)}
      </p>
      <p className="text-lg text-[#7F7F86] tracking-tight pt-3">
        {selectedItem?.description}
      </p>
      <div className="flex items-center gap-5 font-semibold tracking-tight mt-4">
        <div className="cursor-pointer" onClick={() => setSelected("preview")}>
          <p>Preview</p>
          {selected === "preview" && <div className="bg-white h-[2px] w-full rounded" />}
        </div>
        <div className="cursor-pointer" onClick={() => setSelected("code")}>
          <p>Code</p>
          {selected === "code" && <div className="bg-white h-[2px] w-full rounded" />}
        </div>
      </div>
      <div className="bg-gray-600/70 w-full h-px" />
      {selected === "preview" ? (
        <MainCard>{selectedItem?.code}</MainCard>
      ) : (
        <CodeCard language="tsx" code={selectedItem?.codeStyle} />
      )}
    </div>
  );
};

export default ComponentName;
