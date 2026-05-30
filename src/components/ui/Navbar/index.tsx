import NavLinks from "./NavLinks";
import styles from "./Navbar.module.css";
import Logo from "../../icons/logo";
import InputSearch from "../InputSearch";
import { ShoppingBag } from "lucide-react";
import Button from "../Button";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <Logo />
      </figure>
      <nav className={styles.nav}>
        <InputSearch />
        <div className={styles.links}>
          <NavLinks />
        </div>
        <div className={styles.actions}>
          <Button
            variant="primary"
            outline={true} 
            >
              Inicia sesion
          </Button>
          <ShoppingBag className={styles.bag}/>
        </div>
      </nav>
    </header>
  );
}
