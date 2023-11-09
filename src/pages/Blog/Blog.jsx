import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import PageTransition from "../../components/PageTransition/PageTransition";
import { MdDateRange } from "react-icons/md";

const Blog = () => {
  const text1 = "Blogs";
  const text2 = "";
  return (
    <PageTransition>
      <div className="mt-[-70px]">
        <Banner text1={text1} text2={text2} />
      </div>
      <div className="max-w-[1304px] py-0   px-4 mx-auto">
        <div className="pb-30 mt-10   p-3 md:p-10  duration-300 ">
          <div>
            <Link to={"/"}>
              <p className="mb-4 font-medium text-blue-700">
                {"<"} Back to Home page
              </p>
            </Link>
          </div>
          <div className=" pb-[60px] relative">
            <img
              className="h-[180px] md:h-[200px] lg:h-[300px] w-full object-cover  rounded-2xl "
              src={
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <div className="bg-[#ffffff]  absolute top-[140px] md:top-[150px] lg:top-[226px] left-[24px] md:left-[40px] lg:left-[50px] p-1 w-max rounded-xl">
              <img
                className="w-16 md:w-20 lg:w-24 rounded-xl "
                src={
                  "https://lh3.googleusercontent.com/a/ACg8ocIT82MoYCzrkPNLTuIcorjxcXXfu7d98SdtRvSukqmFUg=s96-c"
                }
              />
            </div>
          </div>
          <div className="">
            <h2 className=" md:flex items-center gap-3 font-medium md:text-2xl">
              Sarker Fardin Feroz
              <span className="flex duration-200 items-center gap-2 text-[#797979] dark:text-[#c7c7c7] ">
                <MdDateRange /> 2023-08-11
              </span>
            </h2>
            <h3 className="font-semibold md:text-3xl mt-4 ">
              Welcome to my Simple Blog
            </h3>
            <p className="pt-2">
              I'm a passionate <span className="text-purple-700">MERN</span>{" "}
              stack developer, and I'm thrilled to share my thoughts and
              experiences in the world of web development. Join me on this
              exciting journey as we explore the latest trends, valuable tips,
              and insightful tutorials in the MERN stack. Let's learn and grow
              together as we collaboratively build innovative applications.
              Thank you for stopping by and being a part of this journey!"
            </p>

          <div>
          <h3 className="py-5 font-bold md:text-3xl">
              1. What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h3>

            <h4 className="font-semibold">
              Access token
            </h4>
            <p className="pt-2">
              The access token is sensitive, and it should be stored securely on the client side. Commonly, it's stored in memory or in secure storage mechanisms provided by the client platform, such as a browser's sessionStorage for web applications or a secure storage on a mobile device. It should not be exposed to client-side JavaScript to prevent security risks like Cross-Site Scripting (XX)SS attacks.</p>
            <h4 className="font-semibold ">
            Refresh  token
            </h4>
            <p className="pt-2">The refresh token is even more sensitive because it's the key to obtaining new access tokens. It should never be exposed to client-side JavaScript. Instead, it should be securely stored on the server side and only sent to the server when requesting a new access token. For web applications, it's often stored in a secure, HTTP-only cookie, while mobile apps can use secure storage mechanisms.</p>
          </div>
          <div>
          <h3 className="py-5 font-bold  md:text-3xl">
              2. What is express js? What is Nest JS ?
            </h3>

            <h4 className="font-semibold">
            Express.js
            </h4>
            <p className="pt-2">
            Express.js is a web application framework for Node.js that simplifies the process of building web applications and APIs. It's known for its simplicity and speed and is widely used in the Node.js ecosystem for creating web servers and handling HTTP requests.</p>
            <h4 className="font-semibold">
            Nest.js
            </h4>
            <p className="pt-2">Nest.js is a full-featured Node.js framework influenced by Angular, designed for building scalable and maintainable server-side applications. It promotes a structured, modular approach to development, making it suitable for complex projects. It provides features like dependency injection and a powerful CLI for code generation. </p>
          </div>


          </div>
        </div>
      </div>
      <div className="max-w-[1304px] py-16 px-4 mx-auto ">
        <NewsLetter />
      </div>
    </PageTransition>
  );
};

export default Blog;
// ""
