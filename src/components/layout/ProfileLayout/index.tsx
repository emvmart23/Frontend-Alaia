import { Outlet } from "react-router";
import SubNavbar from "../../ui/SubNavbar";
import styles from "../AppLayout/AppLayout.module.css"

export default function ProfileLayout() {
  return (
   <>
      <SubNavbar/>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
