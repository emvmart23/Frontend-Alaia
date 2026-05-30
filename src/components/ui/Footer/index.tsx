import Logo from "../../icons/logo";
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <figure>
          <Logo />
        </figure>
        <ul>
          <li></li>
        </ul>
        <small>© 2025 Alaia. Todos los derechos reservados.</small>
    </footer>
  )
}
