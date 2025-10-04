import NavBar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar />
      <div className="layout">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
