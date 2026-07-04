import NavLinks from "./NavLinks";
import styles from "./Navbar.module.css";
import { Logo } from "../../icons/logo";
import SearchInput from "../SearchInput";
import { Heart, ShoppingBag } from "lucide-react";
import Button from "../Button";

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
          <Button variant="primary" outline={true} className={styles.button}>
            Inicia sesion
          </Button>
          <Heart className={styles.heart} />
          <ShoppingBag className={styles.bag} />
        </div>
      </nav>
    </header>
  );
}
