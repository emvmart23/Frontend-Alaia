import { NavLink } from "react-router";
import { links } from "./links";
import styles from "./Navbar.module.css";

export default function NavLinks() {
  return links.map((link) => {
    return (
      <NavLink
        key={link.path}
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
        to={link.path}
      >
        {link.title}
      </NavLink>
    );
  });
}
