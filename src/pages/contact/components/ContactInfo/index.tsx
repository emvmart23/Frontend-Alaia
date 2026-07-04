import { CircleCheck, MapPin } from "lucide-react";
import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  const servicios = [
    "Mejorar la usabilidad de tu producto jjjjj",
    "Involucrar a los usuarios a un nivel",
    "Reducir el tiempo sdsdsdsdsdsdsdsddddd",
    "Equilibrar las necesidades de los usuarios co",
  ];

  return (
    <div className={styles.contactInfo}>
      <h2 className={styles.title}>Con nuestros servicios tu puedes</h2>
      <ul className={styles.list}>
        {servicios.map((texto, index) => (
          <li className={styles.item} key={index}>
            <CircleCheck size={20} color="#333" strokeWidth={1.5} />
            <span>{texto}</span>
          </li>
        ))}
      </ul>
      <div>
        <h2 className={styles.title}>
          <MapPin size={15} /> Peru
        </h2>
        <p className={styles.address}>
          Mz U lt 9 trebol azul, <br />
          calle morro de arica, <br />
          San Juan de Miraflores
        </p>
      </div>
    </div>
  );
}
