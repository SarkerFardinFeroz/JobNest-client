import { Link, NavLink } from "react-router-dom";
import DarkMode from "../../components/DarkMode/DarkMode";
import logo from "../../../public/images/logo.png";
import "./Header.css";
import { useEffect, useState } from "react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60); 
    };

    window.addEventListener("scroll" , handleScroll);

    return () => {
      window.removeEventListener("scroll"  , handleScroll);
    };
  }, []);


  const navLinks = (
    <>
      {" "}
      <li className="py-1 border-b lg:border-none focus:bg-transparent">
        <div className="hover:bg-transparent p-0 dark:hover:text-white ">
          <NavLink to={"/"}>Home</NavLink>
        </div>
      </li>
      <li className="py-1 border-b lg:border-none focus:bg-transparent">
        <div className="hover:bg-transparent p-0 dark:hover:text-white ">
          <NavLink to={"/all-jobs"}>All Jobs</NavLink>
        </div>
      </li>
      <li className="py-1 border-b lg:border-none focus:bg-transparent">
        <div className="hover:bg-transparent  p-0 dark:hover:text-white ">
          <NavLink to={"/applied-jobs "}>Applied Jobs</NavLink>
        </div>
      </li>
      <li className="py-1 border-b lg:border-none focus:bg-transparent">
        <div className="hover:bg-transparent p-0 dark:hover:text-white ">
          <NavLink to={"/add-job"}>Add A Job</NavLink>
        </div>
      </li>
      <li className="py-1 border-b lg:border-none focus:bg-transparent">
        <div className="hover:bg-transparent p-0 dark:hover:text-white ">
          <NavLink to={"/my-jobs"}>My Jobs</NavLink>
        </div>
      </li>
      <li className="py-1 border-b lg:border-none focus:bg-transparent">
        <div className="hover:bg-transparent p-0 dark:hover:text-white ">
          <NavLink to={"/blogs"}>Blogs</NavLink>
        </div>
      </li>
      <li className="focus:bg-transparent lg:hidden ">
        <div className="hover:bg-transparent p-0 dark:hover:text-white ">
          <DarkMode />
        </div>
      </li>
    </>
  );
 const user = true
  return (
    <header className={`  duration-500 z-50 sticky top-0  ${isScrolled ? ' bg-white dark:bg-[#00000086]  shadow-md backdrop-blur-xl text-back ' : ' text-white  '} `}>
      <nav className="navbar max-w-[1304px] py-0  px-4 mx-auto">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar flex items-center justify-between ">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="text-xl md:text-3xl font-bold flex items-center  gap-2">
                <img className="w-7 md:w-9" src={logo} />
                <p>
                  Job<span className="text-[#794aff]">Nest</span>
                </p>
              </div>
              <div className="flex-none hidden  lg:block">
                <ul className="menu menu-horizontal items-center gap-6 text-lg">{navLinks}</ul>
              </div>
              <div className="flex items-center gap-5">
                <Link to={"/login"}>
                  <button className="bg-[#794aff]  text-white py-1 md:py-2 px-2 md:px-4 rounded-lg">
                    Login
                  </button>
                </Link>
                <div className=" hidden lg:flex ">
                  <DarkMode />
                </div>
              </div>
            </div>
          </div>
          <div className="drawer-side z-50  ">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay "
            ></label>
            <ul className="menu p-4 md:w-80 min-h-full  gap-4  bg-[#00000093]  text-white  backdrop-blur-sm  ">
              {navLinks}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
