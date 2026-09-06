import { Outlet } from "react-router";
import SubNavbar from "../../ui/SubNavbar";
import styles from "../ProfileLayout/ProfileLayout.module.css"

export default function ProfileLayout() {
  return (
   <>
      <SubNavbar/>
      <section className={styles.section}>
        <Outlet />
      </section>
    </>
  );
};
