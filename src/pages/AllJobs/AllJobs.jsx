import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import PageTransition from "../../components/PageTransition/PageTransition";
import useJobsData from "../../hooks/useJobsData";
import AllJobsTabuler from "./AllJobsTabuler";
import { FiSearch } from "react-icons/fi";
import SkeletonAllJobPage from "../../components/SkeletonAllJobPage/SkeletonAllJobPage";

import emptyData from "../../assets/lottie/Empthydata.json";
import Lottie from "lottie-react";
const AllJobs = () => {
  const { data, isLoading, isFetching } = useJobsData();
  const [isAll, setIsAll] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [searchText, setSearchText] = useState("");
  const text1 = "Find Jobs";
  const text2 = "Search your career opportunity through 12,800 jobs";

  const filterJobs = () => {
    const filteredJobs = data?.filter((job) =>
      job.jobTitle
        .toLowerCase()
        .replace(" ", "")
        .includes(searchText.toLowerCase().replace(" ", ""))
    );
    setFilteredData(filteredJobs);
  };
  useEffect(() => {
    filterJobs();
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterJobs();
  };

  return (
    <PageTransition>
      <div className="duration-0  ">
        <div className="mt-[-70px] bg-[#2110]">
          <Banner text1={text1} text2={text2} />
        </div>
        <div className=" max-w-[500px] lg:max-w-[1760px] pt-7 px-4 mx-auto">
          <div>
            <div className="bg-zinc-800 dark:bg-[#232324]  mx-auto  rounded-lg flex gap-2 lg:gap-4 py-1 md:py-2 px-2 lg:w-[500px]   relative duration-200 ">
              <form className="w-[80%] lg:w-[85%]" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="  lg:w-full py-1 md:py-2 px-1 md:px-3 text-white bg-transparent outline-none  rounded-lg placeholder:text-white  "
                  placeholder="Search here"
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-[#794aff] dark:bg-[#6944cf] absolute right-0  top-0 text-white py-3 md:py-5 px-5 md:px-8 rounded-lg rounded-l-none duration-300 active:scale-95 "
                >
                  <FiSearch />
                </button>
              </form>
            </div>
            <div className="overflow-x-auto w-full pt-5 rounded-xl ">
              <table className="table w-full">
                <tbody className="rounded-xl">
                  <div className=" flex flex-col gap-4 p-3">
                    {isLoading === true || isFetching === true ? (
                      <div>
                        <SkeletonAllJobPage cards={10} />
                      </div>
                    ) : filteredData?.length === 0 ? (
                      <div className="w-96 mx-auto">
                        <Lottie animationData={emptyData} />
                        <p className="text-center">
                          No results found. Please refine your search.
                        </p>
                      </div>
                    ) : (
                      filteredData
                        ?.slice(0, 10)
                        .map((job, idx) => (
                          <AllJobsTabuler key={idx} job={job} />
                        ))
                    )}
                  </div>
                </tbody>
                <div className="mt-4">
                  <div className="flex justify-center items-center">
                    <button
                      onClick={() => setIsAll(!isAll)}
                      className={`bg-[#794aff]  text-white py-1 md:py-2 px-2 md:px-4 rounded-lg ${
                        data?.length <= 10 ? "hidden" : ""
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
      </div>
    </PageTransition>
  );
};

export default AllJobs;
