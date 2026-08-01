import { Outlet, ScrollRestoration } from "react-router";
import { Footer, Navbar } from "../../ui/index";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
