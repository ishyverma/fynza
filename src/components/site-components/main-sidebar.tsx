"use client";

import useSidebar from "@/app/hooks/use-sidebar";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../useable-components/accordion";
import Button from "../useable-components/button";
import Badge from "../useable-components/badge";

const sidebarElements = [
  {
    name: "Button",
    description: "Displays a button or a component that looks like a button.",
    codeStyle: `
import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex items-center justify-center gap-3">
      <Button intent="primary">Primary</Button>
      <Button intent="secondary">Secondary</Button>
      <Button intent="ghost">Ghost</Button>
      <Button intent="destructive">Destructive</Button>
      <Button intent="border">Border</Button>
      <Button intent="link">Link</Button>
    </div>
  )
}`,
    code: (
      <div className="flex items-center justify-center gap-3">
        <Button intent="primary">Primary</Button>
        <Button intent="secondary">Secondary</Button>
        <Button intent="ghost">Ghost</Button>
        <Button intent="destructive">Destructive</Button>
        <Button intent="border">Border</Button>
        <Button intent="link">Link</Button>
      </div>
    ),
  },
  {
    name: "Accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    codeStyle: (
`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}  `    
    ),
    code: (
      <Accordion>
        <AccordionItem>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    name: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    codeStyle: `
import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Badge intent="primary">Primary</Badge>
      <Badge intent="secondary">Secondary</Badge>
      <Badge intent="destructive">Destructive</Badge>
      <Badge intent="border">Border</Badge>
    </div>
  )
}`,
    code: (
      <div className="flex items-center justify-center gap-4">
        <Badge intent="primary">Primary</Badge>
        <Badge intent="secondary">Secondary</Badge>
        <Badge intent="destructive">Destructive</Badge>
        <Badge intent="border">Border</Badge>
      </div>
    ),
  },
];

const SidebarMenu = () => {
  const { changeItem, selectedItem } = useSidebar();
  const router = useRouter();

  return (
    <div className="h-screen pt-24 px-5 w-64 tracking-tight text-sm border-r border-dashed border-gray-600/70 space-y-4">
      <p className="font-medium px-2 text-[15px] underline underline-offset-3">
        Components
      </p>
      <ul className="space-y-2">
        {sidebarElements.sort((a, b) => a.name.localeCompare(b.name)).map((element, id) => (
          <li
            onClick={() => {
              changeItem?.(element.name, element.description, element.codeStyle, element.code);
              router.push(`/components/${element.name.toLowerCase()}`);
            }}
            key={id}
            className={`p-2 transition-all cursor-pointer hover:bg-gray-600/70 rounded-lg ${
              selectedItem?.name === element.name && "bg-gray-600/70"
            }`}
          >
            {element.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;