import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="font-Rubik dark:text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
