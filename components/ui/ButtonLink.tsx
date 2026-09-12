import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import SmartLink from "./SmartLink";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "md" | "sm";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-accent font-bold text-canvas hover:bg-accent-hover",
  secondary:
    "border border-line-strong text-ink hover:border-accent hover:text-accent",
  ghost: "border border-transparent text-ink-2 hover:bg-surface-2 hover:text-ink",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-10 px-4 text-sm",
  sm: "h-8 px-3 text-[13px]",
};

export function buttonClasses(
  variant: ButtonVariant = "secondary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-sm whitespace-nowrap transition-colors",
    variants[variant],
    sizes[size],
    className,
  );
}

type Props = ComponentProps<typeof SmartLink> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Optional key hint rendered as [k] before the label. */
  keyHint?: string;
};

export default function ButtonLink({
  variant = "secondary",
  size = "md",
  keyHint,
  className,
  children,
  ...rest
}: Props) {
  return (
    <SmartLink className={buttonClasses(variant, size, className)} {...rest}>
      {keyHint && (
        <span
          aria-hidden="true"
          className={variant === "primary" ? "opacity-70" : "text-muted"}
        >
          [{keyHint}]
        </span>
      )}
      {children}
    </SmartLink>
  );
}
