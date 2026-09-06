import { useState, type ChangeEvent } from "react";
import styles from "./Account.module.css";
import { Button, Divider } from "../../../../../components/ui";
import "react-datepicker/dist/react-datepicker.css";
import { AccountForm, AccountHeader } from "../components";

export default function Profile() {
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState<User>({
    firstName: "Max Cristofer",
    lastName: "Martinez Saavedra",
    email: "maxmartinez@gmail.com",
    gender: "Masculino",
    dni: "12345678",
    profilePicture: "../../src/assets/profile.jpg",
    phoneNumber: "+51 987654321",
    birthDate: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, profilePicture: imageUrl }));
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Perfil</h2>

      <Divider />

      <AccountHeader
        formData={formData}
        handleImageChange={handleImageChange}
      />

      <AccountForm
        edit={edit}
        formData={formData}
        setFormData={setFormData}
        handleChange={handleChange}
      />

      <div className={styles.buttonsContainer}>
        <Button className={styles.btnEdit} onClick={() => setEdit(!edit)}>
          {edit ? "Guardar" : "Edit"}
        </Button>
        <Button className={styles.btnEdit} onClick={() => setEdit(!edit)}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}
