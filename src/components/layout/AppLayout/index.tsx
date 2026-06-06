import { Outlet } from "react-router";
import { Footer, Navbar } from "../../ui/index";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
