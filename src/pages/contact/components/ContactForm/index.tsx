import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { Button, Input } from "../../../../components/ui";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.fieldGroup}>
        <label htmlFor="name" className={styles.label}>
          Nombre
        </label>
        <Input
          //   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onChange={handleChange}
          className={styles.input}
          placeholder="Tu nombre"
        />
      </div>
      <div className={styles.fieldGroup}>
        <label className={styles.label}>Correo</label>
        <Input
          type="email"
          onChange={handleChange}
          className={styles.input}
          placeholder="Ingresa tu correo"
        />
      </div>
      <div className={styles.fieldGroup}>
        <label className={styles.label}>Mensaje</label>
        <Input
          onChange={handleChange}
          className={styles.input}
          placeholder="Ingresa tu mensaje"
        />
      </div>
      <div className={styles.checkboxfieldGroup}>
        <Input
          type="checkbox"
          onChange={handleChange}
          className={styles.checkboxInput}
        />
        <label className={styles.label}>
          Estoy de acuerdo con los términos y condiciones.
        </label>
      </div>
      <Button type="submit" className={styles.button}>Enviar</Button>
    </form>
  );
}
