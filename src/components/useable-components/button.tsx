import { cva, VariantProps } from "class-variance-authority";

const button = cva("inline-flex items-center justify-center font-medium text-sm rounded-lg", {
  variants: {
    intent: {
      primary: ["bg-white text-black hover:bg-[#E2E2E2]"],
      secondary: ["bg-[#27272A] text-white hover:bg-[#212124]"],
      destructive: ["bg-[#7F1E1D] text-white hover:bg-[#731C1B]"],
      ghost: ["bg-transparent text-white hover:bg-[#27272A]"],
      border: ["border border-[#27272A] text-white hover:bg-[#212124]"],
      link: ["text-white hover:underline underline-offset-3"]
    },
    size: {
      small: ["text-sm py-1 px-2"],
      medium: ["text-base py-2 px-4"],
      large: ["text-lg py-3 px-6"],
      icon: ["p-2"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ intent, size, children, className, ...props }) => {
  return (
    <button className={button({ intent, size, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;