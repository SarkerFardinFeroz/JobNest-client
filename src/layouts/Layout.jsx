import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Lottie from "lottie-react";
import spinner from "../assets/lottie/loading.json";
import { useEffect } from "react";
const Layout = () => {
  const navigation = useNavigation();
  const loc = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = `JobNest`;
    } else {
      document.title = `JobNest${loc.pathname.replace("/", " | ")}`;
    }
    if (loc.state) {
      document.title = `${loc.state}`;
    }
  }, [loc.pathname, loc.state]);

  return (
    <div className="font-Rubik dark:text-white">
      <Header />
      {navigation.state === "loading" ? (
        <div
          className={`  bg-[url('https://i.ibb.co/mX8xbY7/bg-Loading.jpg')] bg-cover bg-no-repeat  flex items-center justify-center h-[70vh] px-4  mx-auto mt-[-70px]`}
        >
          <div className=" w-72 md:w-96">
            <Lottie animationData={spinner} />
          </div>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
