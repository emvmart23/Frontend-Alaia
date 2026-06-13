import type { ComponentProps } from "react";
import styles from "./Badge.module.css";
import clsx from "clsx";

interface BadgeProps extends ComponentProps<"span"> {
  variant?: "default" | "secondary" | "destructive";
}

export default function Badge({
  variant = "default",
  className,
  ...rest
}: BadgeProps) {
  return <span className={clsx(styles[variant], styles.badge, className)} {...rest} />;
}
