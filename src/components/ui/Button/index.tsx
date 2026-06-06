import type { ComponentProps } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
  outline?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  outline,
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(styles.button, styles[variant], outline && styles.outline, className)}
      {...rest}
    >
      {children}
    </button>
  );
}
