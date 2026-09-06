import type { ComponentProps } from "react";
import styles from "./Input.module.css";
import clsx from "clsx";

type InputProps = ComponentProps<"input">;

export default function Input({ className, ...props }: InputProps) {
  return <input className={clsx(styles.input, className)} {...props} />;
}

