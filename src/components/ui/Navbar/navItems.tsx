import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

interface Props {
  id: number;
  path: string;
  label: string;
}

interface NavItemsProps {
  links: Props[];
  white?: boolean;
}

export default function NavItems({ links, white = false }: NavItemsProps) {
  return links?.map((link) => {
    return (
      <NavLink
        key={link.id}
        className={({ isActive }) =>
          `${styles.link} ${white ? styles.linkWhite : ""} ${
            isActive ? styles.active : ""
          }`
        }
        to={link.path}
      >
        {link.label}
      </NavLink>
    );
  });
}
