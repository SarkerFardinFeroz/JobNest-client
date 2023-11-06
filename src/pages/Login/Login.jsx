import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
const Login = () => {
  const [isShow, setShow] = useState(false);
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="bg-[url('https://i.imgur.com/MGPsJN7.jpg')] bg-no-repeat bg-cover h-[70vh] flex items-center text-[#f1f1f1]  ">
        <div className=" w-72 md:w-96 mx-auto">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className=" bg-[#2c2c2c7c] border backdrop-blur-md border-gray-700 rounded-xl shadow-sm "
          >
            <div className="p-4 sm:p-7">
              <div className="text-start">
                <h1 className="block text-xl md:text-2xl font-bold  ">
                  Login to your account
                </h1>
                <p className="mt-2 text-sm  ">
                  Enter your email below to login your account
                </p>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  className="w-full py-2 md:py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium dark:text-white  dark:bg-black bg-[#eeeeeee0] backdrop-blur-lg text-sm text-gray-700 shadow-sm align-middle hover:bg-gray-50  border-black  transition-all  "
                >
                  <svg
                    className="w-5 h-auto"
                    width="56"
                    height="57"
                    viewBox="0 0 46 47"
                    fill="none"
                  >
                    <path
                      d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                      fill="#34A853"
                    />
                    <path
                      d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                      fill="#EB4335"
                    />
                  </svg>
                  Login with Google
                </button>

                <div className="py-3 flex items-center text-xs  uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 ">
                  Or
                </div>

                <form>
                  <div className="grid gap-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2 ">
                        Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          className="py-3 px-4 placeholder:text-[#dfdfdf] block w-full text-[#eeeded] bg-[#c6a6f393] backdrop-blur-md border-2 border-gray-100 rounded-md text-sm outline-[#dcc2fd] "
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="password"
                          className="block text-sm mb-2 "
                        >
                          Password
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type={isShow ? "text" : "password"}
                          name="password"
                          className="py-3 px-4  placeholder:text-[#dfdfdf] text-[#eeeded] block w-full bg-[#c6a6f393] backdrop-blur-md border-2 border-gray-200 rounded-md text-sm outline-[#dcc2fd]"
                          placeholder="Enter your password"
                          required
                        />
                        <span
                          onClick={() => setShow(!isShow)}
                          className="text-[#fcfcfc] absolute cursor-pointer  top-1 right-0 z-30 px-3 py-2 rounded-r-lg text-2xl capitalize "
                        >
                          {isShow ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </span>
                      </div>
                      <p className="mt-2 text-sm  ">
                        Dont’t Have An Account ?{" "}
                        <Link
                          to={"/register"}
                          className="text-[#794aff] decoration-2 hover:underline font-medium"
                        >
                          Register
                        </Link>
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="py-1 md:py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#7030f6] text-white duration-300 hover:bg-[#6c41e0]        "
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
