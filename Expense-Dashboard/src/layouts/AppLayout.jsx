import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
