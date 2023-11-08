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
        <div className="pb-30 mt-10 dark:hover:bg-[#45169c] border hover:bg-[#45169c] bg-[#eeeaff] hover:text-white dark:bg-[#322942]  rounded-2xl p-3 md:p-10 dark:border-zinc-800 duration-300 ">
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
              <span className="flex items-center gap-2 text-[#c7c7c7] ">
                <MdDateRange /> 2023-08-11
              </span>
            </h2>
            <h3 className="font-semibold md:text-3xl mt-4 ">
              What is an access token and refresh token? How do they work and
              where should we store them on the client side?
            </h3>
            <h4 className="md:text-xl mt-5">Answer :</h4>
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
