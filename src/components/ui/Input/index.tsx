import type { ComponentProps } from "react";
import styles from "./Input.module.css";

interface InputProps extends ComponentProps<"input"> {
  placeholder?: string;
}

export default function Input({
  placeholder = "Placeholder",
  ...props
}: InputProps) {
  return (
    <input className={styles.input} placeholder={placeholder} {...props} />
  );
}
