import { cva, VariantProps } from "class-variance-authority";

const badge = cva("inline-flex items-center text-xs p-1 px-3 justify-center font-semibold rounded-lg", {
  variants: {
    intent: {
      primary: ["bg-white text-black hover:bg-[#E2E2E2]"],
      secondary: ["bg-[#27272A] text-white hover:bg-[#212124]"],
      destructive: ["bg-[#7F1E1D] text-white hover:bg-[#731C1B]"],
      border: ["border border-[#27272A] text-white hover:bg-[#212124]"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof badge> & {
    children: React.ReactNode;
};

const Badge: React.FC<ButtonProps> = ({ intent, children, className, ...props }) => {
  return (
    <button className={badge({ intent, className })} {...props}>
      {children}
    </button>
  );
};

export default Badge;