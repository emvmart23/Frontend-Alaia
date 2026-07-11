import { Search } from "lucide-react";
import styles from "./SearchInput.module.css";
import Input from "../Input";

export default function SearchInput() {
  return (
    <div className={styles.container}>
      <Input type="text" placeholder="Buscar" className={styles.input} />
      <Search className={styles.search} />
    </div>
  );
}
