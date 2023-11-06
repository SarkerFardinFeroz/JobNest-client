import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { InfinitySpin } from "react-loader-spinner";

const Layout = () => {
  const navigation = useNavigation();

  return (
    <div className="font-Rubik dark:text-white">
      <Header />
      {navigation.state === "loading" ? (
        <div className=" max-w-[1304px] flex items-center justify-center h-[70vh] px-4  mx-auto ">
          <InfinitySpin width="200" color="#24dc7a" />
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
