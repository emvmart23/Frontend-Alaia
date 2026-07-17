import { Link } from "react-router";
import { Button, Input, InputPassword } from "../../../../components/ui";
import styles from "../../Auth.module.css";
import { ArrowLeftIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
export default function SignIn() {
  const {register, handleSubmit  , formState:{ errors }} = useForm({
    resolver:zodResolver({})
  })
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/" className={styles.backLink} aria-label="Volver al inicio">
          <ArrowLeftIcon size={20} />
        </Link>
        <h2>Iniciar sesion</h2>
      </div>
      <p>Inicia sesión usando tu correo y contraseña</p>
      <form className={styles.form}>
        <div className={styles.formField}>
          <label htmlFor="email">Correo electrónico</label>
          <Input id="email" type="email" placeholder="Tu correo electrónico" />
        </div>

        <div className={styles.formField}>
          <label htmlFor="password">Contraseña</label>
          <InputPassword placeholder="Tu contraseña" />
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
