import { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import PageTransition from "../../components/PageTransition/PageTransition";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import MyJobsTabuler from "../../components/MyJobsTabuler/MyJobsTabuler";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import SkeletonAllJobPage from "../../components/SkeletonAllJobPage/SkeletonAllJobPage";
import Lottie from "lottie-react";
import emptyData from "../../assets/lottie/Empthydata.json";

const MyJobs = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const text1 = "My Jobs";
  const text2 = "";

  const myJobsData = async () => {
    const response = await axiosSecure.get(`/my-jobs?email=${user.email}`);
    return response.data;
  };
  const {
    data,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-job"],
    queryFn: myJobsData,
    enabled: !!user.email,
  });

  const handleDeleteJob = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2747ff",
      cancelButtonColor: "#c92727",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        refetch();
        axiosSecure.delete(`/jobs/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            toast.success("Successfully job deleted");
          }
        });
      }
    });
  };

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
                {isLoading === true ? (
                  <div>
                    <SkeletonAllJobPage cards={10} />
                  </div>
                ) : data?.length === 0 ? (
                  <div className="w-96 mx-auto">
                    <Lottie animationData={emptyData} />
                    <p className="text-center">Post jobs to see data here.</p>
                  </div>
                ) : (
                  data?.map((job, idx) => (
                    <MyJobsTabuler
                      key={idx}
                      job={job}
                      handleDeleteJob={handleDeleteJob}
                    />
                  ))
                )}
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
