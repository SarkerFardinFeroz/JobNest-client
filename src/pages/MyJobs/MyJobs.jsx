import { useContext, useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import PageTransition from "../../components/PageTransition/PageTransition";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import MyJobsTabuler from "../../components/MyJobsTabuler/MyJobsTabuler";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const text1 = "My Jobs";
  const text2 = "";
  useEffect(() => {
    axiosSecure(`/my-jobs?email=${user.email}`).then((res) => {
      setJobs(res.data);
    });
  }, [axiosSecure,user.email]);
  console.log(jobs);
  return (
    <PageTransition>
      <div className="mt-[-70px]">
        <Banner text1={text1} text2={text2} />
      </div>
      <div className=" max-w-[500px] lg:max-w-[1760px] pt-7 px-4 mx-auto">
        <div className="overflow-x-auto w-full pt-5 rounded-xl ">
          <table className="table w-full">
            <tbody className="rounded-xl">
              <div className=" flex flex-col gap-4 p-3">
                {jobs?.slice(0, 10).map((job, idx) => (
                  <MyJobsTabuler key={idx} job={job} />
                ))}
              </div>
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-[1304px] py-16 px-4 mx-auto ">
        <NewsLetter />
      </div>
    </PageTransition>
  );
};

export default MyJobs;
