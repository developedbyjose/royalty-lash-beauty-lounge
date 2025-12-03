import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link, { type LinkProps } from "next/link";

type Variant = "primary" | "secondary";
type Size = "md" | "sm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const sizeClasses: Record<Size, string> = {
  md: "px-7 py-3 text-sm",
  sm: "px-4 py-1.5 text-xs",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#f36a52] via-[#f89a4b] to-[#f6c667] text-white shadow-md shadow-[#f36a52]/30 hover:shadow-lg hover:brightness-105",
  secondary:
    "border border-[#e0c9b8] bg-white/80 text-[#6f5140] shadow-sm hover:bg-white hover:border-[#d3b49f]",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${baseClasses} ${sizeClasses[size]} ${variants[variant]} ${className}`}
    />
  );
}

interface ButtonLinkProps extends LinkProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={`${baseClasses} ${sizeClasses[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
