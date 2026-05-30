import { Search } from "lucide-react";
import styles from "./InputSearch.module.css";

interface Props {
  className?: string;
  placeholder?: string;
}

export default function InputSearch({
  placeholder = "Buscar",
}: Props) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
      />
      <Search className={styles.search} />
    </div>
  );
}
