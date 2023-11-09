import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BsPerson } from "react-icons/bs";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
const JobDetail = ({ job, refetch }) => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    logoURL,
    pictureUrl,
    jobTitle,
    authorName,
    jobDescription,
    jobCategory,
    minimumSalary,
    maximumSalary,
    jobApplicantsNumber,
    jobApplicationDeadline,
    jobLocation,
    jobPostingDate,
    email,
  } = job || {};

  const date = new Date() > new Date(jobApplicationDeadline);
  const isValid = email === user.email;
  const handleApply = () => {
    if (isValid) {
      return toast.error("You can't apply to your own job post.");
    }

    Swal.fire({
      title: "Enter a URL",
      input: "url",
      inputPlaceholder: "Enter URL",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "URL is required";
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const application = {
          user: user.uid,
          name: user.displayName,
          email: user.email,
          job: {
            _id,
            logoURL,
            jobTitle,
            jobLocation,
            authorName,
            jobCategory,
            minimumSalary,
            maximumSalary,
            jobPostingDate,
            jobApplicationDeadline,
            jobApplicantsNumber,
          },
          resume: result.value,
        };
        axiosSecure.post(`/applied/${_id}`, application).then((res) => {
          if (res.data.message == "Already applied") {
            return toast.error("Already applied for this job");
          }
          axiosSecure.put(`/apply/${_id}`).then((res) => console.log(res));
          toast.success("Applied successfully Email has been sent");
          emailjs
            .send(
              "service_ubspfst",
              "template_r62juyi",
              application,
              "BTts6gnwmcVb2CYW3"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
          refetch();
        });
      }
    });
  };

  return (
    <div className="pb-30 pt-10">
      <div className=" pb-[80px] relative">
        <img
          className="h-[180px] md:h-[200px] lg:h-[300px] w-full object-cover  rounded-2xl "
          src={pictureUrl}
        />
        <div className="bg-[#ffffff]  absolute top-[140px] md:top-[150px] lg:top-[226px] left-[24px] md:left-[40px] lg:left-[50px] p-1 w-max rounded-xl">
          <img className="w-16 md:w-20 lg:w-24 rounded-xl " src={logoURL} />
        </div>
      </div>

      <div className="md:flex justify-between">
        <div>
          <p className="font-medium md:text-xl text-[#7d8fa8]">{authorName}</p>
          <h3 className="font-semibold text-xl md:text-3xl mt-3">{jobTitle}</h3>
          <div className="md:flex flex-1 w-max items-center mt-4 gap-3">
            <button className=" text-center  py-[2px] px-4 text-sm  bg-[#eadef7] text-[#561284] rounded-xl">
              {jobCategory}
            </button>
            <button
              className={`py-[2px] 
             ${
               date === false
                 ? " bg-[#eafee7] text-[#258412]"
                 : "bg-[#832828] text-[#ffd7d7]"
             }
            ml-2 md:ml-0 px-4 text-center text-sm rounded-xl`}
            >
              {date === false ? "Active" : "Expired"}
            </button>
            <button className="py-[2px]   justify-center   text-center px-4 text-sm  mt-2 md:mt-0 bg-[#fefee7] text-[#847c12] rounded-xl flex items-center gap-1">
              <span className="text-lg ">
                <CiLocationOn />
              </span>
              {jobLocation}
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 mt-3 md:mt-0">
              <div className="bg-white rounded-full p-2 md:p-3 border text-xl text-black">
                <AiOutlineHeart />
              </div>
              <div className="bg-white rounded-full  p-2 md:p-3 border text-xl text-black ">
                <AiOutlineShareAlt />
              </div>
            </div>
            <div className=" hidden md:flex">
              {date === false ? (
                isValid ? (
                  <button
                    onClick={handleApply}
                    className={`bg-[#ff3535] text-white py-1 md:py-2 px-5 md:px-10 rounded-lg flex items-center gap-3 active:scale-95 duration-200`}
                  >
                    <span className="text-xl font-bold">
                      <RxCross2 />
                    </span>{" "}
                    cant
                  </button>
                ) : (
                  <button
                    onClick={handleApply}
                    className={`bg-[#7a4affd7] text-white py-1 md:py-2 px-5 md:px-10 rounded-lg active:scale-95 duration-200`}
                  >
                    Apply
                  </button>
                )
              ) : (
                <button
                  onClick={() => {
                    toast.error("This job post has concluded.");
                  }}
                  className="text-[#bebebe] bg-[#5e2a2a] dark:text-[#bc0000] duration-200 dark:bg-[#3d0303]  py-1 md:py-2 px-5 md:px-10 rounded-lg"
                >
                  Expired
                </button>
              )}
            </div>
          </div>
          <p className="text-sm mt-2 text-[#7d8fa8] md:text-end">
            {jobPostingDate}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-3">
          <h3 className="font-semibold md:text-xl"> Applicants number : </h3>
          <p className="text-[#7d8fa8] flex  gap-2 font-normal text-base">
            {jobApplicantsNumber}{" "}
            <span className="text-xl mt-[1px]">
              <BsPerson />
            </span>
          </p>
        </div>
        <div className="flex items-center mt-3 gap-3">
          <h3 className="font-semibold md:text-xl"> Salary :</h3>
          <p className="text-[#7d8fa8]  font-normal text-base">
            {minimumSalary}-{maximumSalary}
            <span className="text-lg">$</span>
          </p>
        </div>
        <div className="flex items-center mt-3 gap-3">
          <h3 className="font-semibold md:text-xl"> Posted Date : </h3>
          <p className="text-[#7d8fa8]  font-normal text-base">
            {jobPostingDate}
          </p>
        </div>
        <div className="flex items-center mt-3 gap-3">
          <h3 className="font-semibold md:text-xl"> Application Deadline : </h3>
          <p className="text-[#7d8fa8]  font-normal text-base">
            {jobApplicationDeadline}
          </p>
        </div>
        <div>
          <h3 className="font-semibold mt-3 md:text-xl">Description :</h3>
          <p className="text-[#7d8fa8]  mt-2">{jobDescription}</p>
        </div>
        <div className=" mt-6  flex md:hidden">
          {date === false ? (
            isValid ? (
              <button
                onClick={handleApply}
                className={`bg-[#ff3535] text-white py-1 md:py-2 px-5 md:px-10 rounded-lg flex items-center gap-3 active:scale-95 duration-200`}
              >
                <span className="text-xl font-bold">
                  <RxCross2 />
                </span>{" "}
                cant
              </button>
            ) : (
              <button
                onClick={handleApply}
                className={`bg-[#7a4affd7] text-white py-1 md:py-2 px-5 md:px-10 rounded-lg active:scale-95 duration-200`}
              >
                Apply
              </button>
            )
          ) : (
            <button
              onClick={() => {
                toast.error("This job post has concluded.");
              }}
              className="text-[#bebebe] bg-[#5e2a2a] dark:text-[#bc0000] duration-200 dark:bg-[#3d0303]  py-1 md:py-2 px-5 md:px-10 rounded-lg"
            >
              Expired
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
JobDetail.propTypes = {
  job: PropTypes.object,
};
export default JobDetail;
