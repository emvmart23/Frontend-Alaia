import { useState, type FocusEvent } from "react";
import styles from "./Dropdown.module.css";
import { UserRound } from "lucide-react";
import { Link } from "react-router";
import api from "../../../services/api";
import { useAppDispatch } from "../../../store/store";
import { logout } from "../../../store/slices/auth";
import { toast } from "sonner";

interface DropdownItem {
  label: string;
  path: string;
}

export default function Dropdown({
  token,
  items = [],
  onSelect,
}: {
  token: string;
  items?: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const dispatch = useAppDispatch();
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsOpen(false);
    if (onSelect) {
      onSelect(item);
    }
  };

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await api.post("/auth/logout");
      dispatch(logout());
      setIsOpen(false);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      toast.error('Error al cerrar sesión')
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.container} onBlur={handleBlur} tabIndex={0}>
      <div className={styles.buttonWrapper}>
        {!token ? (
          <UserRound className={styles.icon} onClick={toggleDropdown} />
        ) : (
          <Link to="/auth/sign-in">
            <UserRound className={styles.icon} />
          </Link>
        )}
      </div>

      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.menuGroup}>
            {items.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                onClick={() => handleSelect(item)}
                className={styles.itemButton}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <hr className={styles.divider} />
          <button onClick={handleLogout} className={styles.itemButton}>
            Cerrar sesion
          </button>
        </div>
      )}
    </div>
  );
}
