import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const AppliedJob = ({ job }) => {
  const jobData = job.job;
  const {
    _id,
    logoURL,
    jobTitle,
    authorName,
    jobCategory,
    minimumSalary,
    maximumSalary,
    jobApplicantsNumber,
    jobApplicationDeadline,
    jobLocation,
    jobPostingDate,
  } = jobData || {};
  const date = new Date() > new Date(jobApplicationDeadline);
  return (
    <div className=" p-3 lg:p-6 rounded-lg duration-300  bg-[#eeeaff]  dark:bg-[#322942]  my-5">
      <div className="lg:flex gap-4 text-center lg:text-start justify-between  ">
        <div className=" bg-white rounded-xl   p-1 h-full">
          <img
            className="w-16 md:w-[150px] lg:w-24 rounded-xl object-cover mx-auto "
            src={logoURL}
          />
        </div>
        <div className="flex-col  flex justify-center items-center lg:items-start ">
          <div className="lg:flex flex-1 w-max items-center  mt-4 lg:mt-0 gap-3">
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
            ml-2 lg:ml-0 px-4 text-center text-sm rounded-xl`}
            >
              {date === false ? "Active" : "Expired"}
            </button>
            <button className="py-[2px]   justify-center   text-center px-4 text-sm  mt-2 lg:mt-0 bg-[#fefee7] text-[#847c12] rounded-xl flex items-center gap-1">
              <span className="text-lg ">
                <CiLocationOn />
              </span>
              {jobLocation}
            </button>
          </div>
          <div className="mt-2 ">
            <h3>{authorName}</h3>
            <h3 className="font-bold text-lg">{jobTitle}</h3>
          </div>
        </div>

        <div className=" flex gap-4 flex-col lg:items-start justify-center ">
          <h4 className="font-semibold">
            Salary : {minimumSalary}-{maximumSalary}$
          </h4>
          <h4 className="font-semibold">
            Posted On : {jobPostingDate}
          </h4>
          <h4 className="font-semibold">
            Dead Line : {jobApplicationDeadline}
          </h4>
        </div>
        <div className="flex items-center justify-center lg:justify-start">
          <h4 className="font-semibold">Applicants: {jobApplicantsNumber}</h4>
        </div>

        <div className="flex items-center justify-center lg:justify-start">
          <Link to={`/job-details/${_id}`}>
            <button className="py-2  mt-4 px-4 rounded-lg  text-white bg-[#561284] w-max flex items-center gap-1">
              View Details <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
AppliedJob.propTypes = {
  job: PropTypes.object,
};
export default AppliedJob;
