import { Link } from "react-router";
import styles from "./Navbar.module.css";
import { Heart, ShoppingBag } from "lucide-react";
import Dropdown from "../Dropdown";
// import { useSelector } from "react-redux";
// import type { RootState } from "../../../store/store";

export default function NavActions() {
  // const token = useSelector((state: RootState) => state.auth.accessToken);
  const links = [
    {
      path: "/profile",
      label: "Mi perfil"
    }
  ]
  
  return (
    <div className={styles.links}>
      <Link to={"/favorites"} aria-label={"Favoritos"}>
        <Heart className={styles.icon} />
      </Link>
      <Link to={"/car"} aria-label={"Carrito"}>
        <ShoppingBag className={styles.icon} />
      </Link>
      <Dropdown items={links} onSelect={() => {}} token={""} />
    </div>
  );
}
