import { SignUpForm } from "../components";
import styles from "../../Auth.module.css";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <h2>Crear cuenta</h2>
      <p>Regístrate para crear tu cuenta</p>
      <SignUpForm/>
    </div>
  );
}
