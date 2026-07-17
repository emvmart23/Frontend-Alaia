import { SignUpForm } from "../components";
import styles from "../../Auth.module.css";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/auth/sign-in" className={styles.backLink} aria-label="Volver a iniciar sesión">
          <ArrowLeftIcon size={20} />
        </Link>
        <h2>Crear cuenta</h2>
      </div>
      <p>Regístrate para crear tu cuenta</p>
      <SignUpForm />
    </div>
  );
}