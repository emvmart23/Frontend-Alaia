import { Button, Input, InputPassword } from "../../../../../components/ui";
import styles from "../../../Auth.module.css"
import localStyles from "./SignUpForm.module.css"

export default function SignUpForm() {
  return (
    <form className={styles.form}>
      <div className={localStyles.formFielGroup}>
        <div className={styles.formField}>
          <label>Nombre</label>
          <Input id="firstName" type="text" placeholder="Tu nombre" />
        </div>
        <div className={styles.formField}>
          <label>Apellido</label>
          <Input id="lastName" type="text" placeholder="Tu apellido" />
        </div>
      </div>
      <div className={styles.formField}>
        <label>Correo electrónico</label>
        <Input id="email" type="email" placeholder="Tu correo electrónico" />
      </div>
      <div className={styles.formField}>
        <label>Contraseña</label>
        <InputPassword />
      </div>
      <div className={styles.formField}>
        <label>Repetir contraseña</label>
        <InputPassword
          placeholder="Confirma tu contraseña"
        />
      </div>
      <Button className={styles.submitButton}>
        Enviar
      </Button>
    </form>
  )
}
