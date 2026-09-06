import { Link } from "react-router";
import styles from "./Navbar.module.css";
import { Heart, ShoppingBag } from "lucide-react";
import UserDropdown from "../UserDropdown";
import { subNavRoutes } from "../SubNavbar/subNavRoutes";
// import { useSelector } from "react-redux";
// import type { RootState } from "../../../store/store";

export default function NavActions() {
  // const token = useSelector((state: RootState) => state.auth.accessToken);

  return (
    <div className={styles.links}>
      <Link to={"/favorites"} aria-label={"Favoritos"}>
        <Heart className={styles.icon} />
      </Link>
      <Link to={"/car"} aria-label={"Carrito"}>
        <ShoppingBag className={styles.icon} />
      </Link>
      <UserDropdown items={subNavRoutes} onSelect={() => {}} token={""} />
    </div>
  );
}
