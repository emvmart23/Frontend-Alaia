import { footerData } from "../../../mockData/footer";
import styles from "./Footer.module.css";
import { Logo } from "../../icons/logo";
import Button from "../Button";
import Input from "../Input";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footerTop}>
          <div className={styles.container}>
            <figure className={styles.logo}>
              <Logo width="130" />
            </figure>

            <nav className={styles.footerNav}>
              <h3>Colecciones</h3>
              <ul>
                {footerData.collections.map((collection) => (
                  <li key={collection}>{collection}</li>
                ))}
              </ul>
            </nav>

            <nav className={styles.footerNav}>
              <h3>Ayuda</h3>
              <ul>
                {footerData.help.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.subscribe}>
            <h3>Únete a Alaia</h3>
            <Input type="email" placeholder="Tu correo" readOnly />
            <Button className={styles.button} outline={true} type="button">
              Suscríbete ahora
            </Button>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <small>© 2025 Alaia. Todos los derechos reservados.</small>

          <nav aria-label="Redes sociales">
            <ul>
              {footerData.socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <li key={index}>
                    <a
                      href={social.aria}
                      target="_blank"
                      aria-label={social.aria}
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
