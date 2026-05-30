import { Outlet } from "react-router";
import { Footer, Navbar } from "../../ui/index";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
