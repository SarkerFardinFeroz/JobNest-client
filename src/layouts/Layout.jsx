import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Lottie from "lottie-react";
import spinner from "../assets/lottie/loading.json";
const Layout = () => {
  const navigation = useNavigation();

  return (
    <div className="font-Rubik dark:text-white">
      <Header />
      {navigation.state === "loading" ? (
        <div className=" max-w-[1304px] flex items-center justify-center h-[70vh] px-4  mx-auto ">
         <div className=" w-72 md:w-96">
          <Lottie animationData={spinner} />
        </div>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
      <Toaster/>
    </div>
  );
};

export default Layout;
