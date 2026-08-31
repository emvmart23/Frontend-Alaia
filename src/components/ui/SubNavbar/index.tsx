import NavItems from "../Navbar/navItems"
import { subRoutes } from "./subRoutes"
import styles from "./SubNavbar.module.css"

export default function SubNavbar() {

    return (
        <nav className={styles.nav}>
            <div className={styles.links}>
                <NavItems links={subRoutes} />
            </div>
        </nav>
    )
}
