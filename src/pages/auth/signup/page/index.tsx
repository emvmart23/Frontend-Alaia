import { Input } from "../../../../components/ui";
import styles from "./SignUp.module.css";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <h2>Crear cuenta</h2>
      <p>Regístrate para crear tu cuenta</p>

      <form className={styles.form}>
        <div>
          <label>Nombre</label>
          <Input id="firstName" type="text" placeholder="Tu nombre" />
        </div>
        <div>
          <label>Apellido</label>
          <Input id="lastName" type="text" placeholder="Tu apellido" />
        </div>
        <div>
          <label>Correo electrónico</label>
          <Input id="email" type="email" placeholder="Tu correo electrónico" />
        </div>
        <div>
          <label>Contraseña</label>
          <Input id="password" type="password" placeholder="Tu contraseña" />
        </div>
        <div>
          <label>Repetir contraseña</label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Repite tu contraseña"
          />
        </div>
      </form>
    </div>
  );
}
