import { Link } from "react-router";
import { Button, Input, InputPassword } from "../../../../components/ui";
import styles from "../../Auth.module.css";
export default function SignIn() {
  return (
    <div className={styles.container}>
      <h2>Iniciar sesion</h2>
      <p>Inicia sesión usando tu correo y contraseña</p>

      <form className={styles.form}>
        <div className={styles.formField}>
          <label htmlFor="email">Correo electrónico</label>
          <Input id="email" type="email" placeholder="Tu correo electrónico" />
        </div>

        <div className={styles.formField}>
          <label htmlFor="password">Contraseña</label>
          <InputPassword placeholder="Tu contraseña"/>
          <Link to="/auth/forgot-password" className={styles.links}>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <Button className={styles.submitButton}>Iniciar sesión</Button>

        <p>
          ¿No tienes cuenta?{" "}
          <Link to="/auth/sign-up" className={styles.links}>
            Crear cuenta
          </Link>
        </p>
      </form>
    </div>
  );
}
