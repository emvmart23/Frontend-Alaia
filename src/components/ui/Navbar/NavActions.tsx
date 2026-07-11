import { Link } from "react-router";
import { actions } from "./actions";
import styles from "./Navbar.module.css";

export default function NavActions() {
  return actions.map(({ id, path, icon: Icon, label }) => (
    <Link key={id} to={path} aria-label={label}>
      <Icon className={styles.icon} />
    </Link>
  ));
}