import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import styles from "./InputPassword.module.css";
import clsx from "clsx";

interface Props {
  className?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
}

export default function InputPassword({
  className,
  placeholder = "contraseña",
  disabled,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.container}>
      <Input
       className={clsx(className)}
       type={showPassword ? "text" : "password"}
       placeholder={placeholder}
       disabled={disabled}/>
      <Button
        type="button"
        className={styles.button}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
      </Button>
    </div>
  );
}
