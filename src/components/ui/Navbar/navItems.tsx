import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

interface Props {
  id: number;
  path: string;
  title: string;
}

export default function NavItems({ links }: { links: Props[] }) {
  return links.map((link) => {
    return (
      <NavLink
        key={link.id}
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
