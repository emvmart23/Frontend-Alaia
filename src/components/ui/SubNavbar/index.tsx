import NavItems from "../Navbar/navItems";
import { subNavRoutes } from "./subNavRoutes";
import styles from "./SubNavbar.module.css";

export default function SubNavbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <NavItems links={subNavRoutes} white={true} />
      </div>
    </nav>
  );
}
