import { useForm } from "react-hook-form";
import { Button, Input, InputPassword } from "../../../../../components/ui";
import styles from "../../../Auth.module.css";
import localStyles from "./SignUpForm.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { SignUpSchema } from "../../../../../lib/validators/auth";

type RegistrationData = z.infer<typeof SignUpSchema>;

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: RegistrationData) => {
    console.log("Registration Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={localStyles.formFielGroup}>
        <div className={styles.formField}>
          <label>Nombre</label>
          <Input
            {...register("firstName")}
            type="text"
            placeholder="Tu nombre"
          />
          {errors.firstName && <p className={styles.error}>{errors.firstName?.message}</p>}
        </div>
        <div className={styles.formField}>
          <label>Apellido</label>
          <Input
            {...register("lastName")}
            type="text"
            placeholder="Tu apellido"
          />
          {errors.lastName && <p className={styles.error}>{errors.lastName?.message}</p>}
        </div>
      </div>
      <div className={styles.formField}>
        <label>Correo electrónico</label>
        <Input
          {...register("email")}
          type="email"
          placeholder="Tu correo electrónico"
        />
          {errors.email && <p className={styles.error}>{errors.email?.message}</p>}
      </div>
      <div className={styles.formField}>
        <label>Contraseña</label>
        <InputPassword {...register("password")} />
        {errors.password && <p className={styles.error}>{errors.password?.message}</p>}
      </div>
      <div className={styles.formField}>
        <label>Repetir contraseña</label>
        <InputPassword
          placeholder="Confirmar contraseña"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword?.message}</p>}
      </div>
      <Button type="submit" className={styles.submitButton}>Enviar</Button>
    </form>
  );
}
