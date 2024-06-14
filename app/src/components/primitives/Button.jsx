import { cva } from "class-variance-authority";
import Link from "./Link";

const styles = cva(
  "inline-block px-3 py-1 cursor-pointer border-4 rounded-md transition-all focus:ring focus:ring-2 ring-offset-2 focus:outline-none font-semibold shadow-md",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white border-primary shadow-black/15 hover:bg-primary-dark focus:bg-primary-dark focus:shadow-none hover:shadow-none",
        secondary:
          "bg-secondary text-white border-secondary shadow-black/15 hover:bg-secondary-dark focus:bg-secondary-dark focus:shadow-none hover:shadow-none",
        borderPrimary:
          "border-primary text-primary hover:bg-primary shadow-black/15 hover:text-white focus:bg-primary focus:shadow-none hover:shadow-none",
        borderSecondary:
          "border-secondary text-secondary shadow-black/15 hover:bg-secondary hover:text-white focus:shadow-none hover:shadow-none",
        disabled: "cursor-not-allowed bg-gray-300 text-gray-500 border-gray-300 pointer-events-none",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      defaultVariants: {
        variant: "primary",
        size: "md",
      },
    },
  }
);

const Button = ({ className, variant, size, children, href, ...props }) => {
  if (href) {
    return (
      <Link
        className={styles({
          variant,
          size,
          className,
        })}
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={styles({
        variant,
        size,
        className,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
