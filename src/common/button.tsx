import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { BiCaretDown } from "react-icons/bi";
import { RxArrowBottomRight } from "react-icons/rx";

interface ButtonOptions {
  /**
   * Button display variants
   * @default "outline"
   * @type ButtonVariant
   */
  variant?: ButtonVariant;
  icon?: IconVariant;
}

type Ref = HTMLButtonElement;

type ButtonVariant = "outline" | "solid";

type IconVariant = "caret" | "arrow";

const getVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case "solid":
      return "bg-slate-900 text-white uppercase font-medium";
    default:
      return undefined;
  }
};

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    variant = "outline",
    icon = false,
    className,
    children,
    ...rest
  } = props;
  return (
    <button
      ref={ref}
      className={twMerge(
        "text-black font-semibold tracking-wider text-sm py-2 px-6 rounded-full border border-neutral-300 h-fit flex items-center gap-2",
        getVariant(variant),
        className
      )}
      {...rest}
    >
      {children}
      {icon === "caret" ? (
        <BiCaretDown />
      ) : icon === "arrow" ? (
        <RxArrowBottomRight />
      ) : null}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
