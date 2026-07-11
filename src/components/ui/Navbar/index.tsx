import NavLinks from "./NavLinks";
import styles from "./Navbar.module.css";
import { Logo } from "../../icons/logo";
import SearchInput from "../SearchInput";
import NavActions from "./NavActions";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <section className={styles.announcemmentBar}>
        <p>Ahorra un 20% con conjuntos apilables. Compra ahora.</p>
      </section>
      <nav className={styles.nav}>
        <Logo />
        <div className={styles.links}>
          <NavLinks />
        </div>
        <div className={styles.actions}>
          <SearchInput />
          <NavActions />
        </div>
      </nav>
    </header>
  );
}
