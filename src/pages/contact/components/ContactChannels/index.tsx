import { Mail, Phone } from "lucide-react";
import styles from "./ContactChannels.module.css"
export default function ContactChannels() {
  return (
    <div className={styles.channels}>
      <h3 className={styles.title}>También puedes contactarnos vía</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.iconWrapper}>
            <Mail size={20} />
          </span>
          <span>contact.growthux@gmail.com</span>
        </li>
        <li className={styles.item}>
          <span className={styles.iconWrapper}>
            <Phone size={20} />
          </span>
          <span>+51 XXX XXX XXX</span>
        </li>
      </ul>
    </div>
  )
}
