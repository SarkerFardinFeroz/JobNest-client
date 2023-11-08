import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import PageTransition from "../../components/PageTransition/PageTransition";
import useJobsData from "../../hooks/useJobsData";
import AllJobsTabuler from "./AllJobsTabuler";
import { FiSearch } from 'react-icons/fi';
const AllJobs = () => {
  const { data, isLoading, isFetching } = useJobsData();
  const [isAll, setIsAll] = useState(false);
  const text1 = "Find Jobs";
  const text2 = "Search your career opportunity through 12,800 jobs";
  if (isLoading == true || isFetching == true) {
    return (
      <div className="grid  md:grid-cols-3 gap-4 p-3">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  console.log(data);
  return (
    <PageTransition>
      <div className="mt-[-70px]">
        <Banner text1={text1} text2={text2} />
        
      </div>
      <div className="max-w-[1760px]  px-4 mx-auto">
        <div>
        <div className="bg-zinc-900  mx-auto  rounded-lg flex gap-2 md:gap-4 py-1 md:py-2 px-1 w-[200px]   relative">
            <input type="text" className=" w-40 md:w-full py-1 md:py-2 px-1 md:px-3 text-white bg-transparent outline-none  rounded-lg placeholder:text-white  " placeholder="Search"/>
            <button className="bg-[#794aff] absolute right-0  top-0 text-white py-1 md:py-5 px-3 md:px-8 rounded-lg rounded-l-none">
                <FiSearch/>
              </button>
        </div>
          <div className="overflow-x-auto w-full rounded-xl ">
            <table className="table w-full">
              {/* head */}

              <tbody className="rounded-xl">
                <div className=" flex flex-col gap-4 p-3">
                  {isAll
                    ? data?.map((job, idx) => (
                        <AllJobsTabuler key={idx} job={job} />
                      ))
                    : data
                        ?.slice(0, 10)
                        .map((job, idx) => (
                          <AllJobsTabuler key={idx} job={job} />
                        ))}
                </div>
              </tbody>
              <div className="mt-4">
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => setIsAll(!isAll)}
                    className={`bg-[#794aff]  text-white py-1 md:py-2 px-2 md:px-4 rounded-lg ${
                      data.length <= 10 ? "hidden" : ""
                    }`}
                  >
                    {isAll ? "Show Less" : "See All"}
                  </button>
                </div>
              </div>
            </table>
          </div>
        </div>
      </div>
      <div className="max-w-[1304px] py-16 px-4 mx-auto ">
        <NewsLetter />
      </div>
    </PageTransition>
  );
};

export default AllJobs;
