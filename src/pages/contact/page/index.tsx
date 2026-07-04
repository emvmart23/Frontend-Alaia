import ContactChannels from "../components/ContactChannels";
import { ContactForm, ContactInfo } from "../components/index";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactHeader}>
        <span>CONTACTANOS</span>
        <h2>Ponte en contacto con nosotros</h2>
        <p>
          Para consultas sobre pedidos, envíos y devoluciones, ayuda con la
          cuenta y productos, <br /> complete el siguiente formulario.
        </p>
      </div>
      <div className={styles.contactGrid}>
        <div className={styles.formColumn}>
          <ContactForm />
          <ContactChannels />
        </div>
        <ContactInfo />
      </div>
    </section>
  );
}
