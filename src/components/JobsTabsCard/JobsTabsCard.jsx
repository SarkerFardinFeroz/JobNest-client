import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const JobsTabsCard = ({ job }) => {
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
    jobPostingDate
  } = job || {};
  const date = new Date() > new Date(jobApplicationDeadline);
  return (
    <div className=" lg:h-[340px] p-3 md:p-6 rounded-lg duration-300 hover:bg-[#7a4aff] bg-[#eeeaff] hover:text-white dark:bg-[#322942] dark:hover:bg-[#7a4aff] ">
      <div className="flex flex-col">
        <div className="flex-1 flex flex-col  ">
          <div className="md:flex gap-4 items-center  ">
            <div className="bg-white rounded-xl p-1 w-max">
            <img
              className="w-[60px] h-[60px] rounded-xl object-cover"
              src={logoURL}
            />
            </div>
            <div>
              <p className="text-sm pt-2 lg:pt-0">{authorName}</p>
              <h3 className="text-xl font-semibold truncate overflow-hidden w-[200px]">{jobTitle}</h3>
            </div>
          </div>
          <div className="md:flex flex-1  items-center mt-4 gap-3">
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
           
            <button className="py-[2px] justify-center  flex-1 text-center px-4 text-sm  mt-2 md:mt-0 bg-[#fefee7] text-[#847c12] rounded-xl flex items-center gap-1">
              <span className="text-lg">
                <CiLocationOn />
              </span>
              {jobLocation}
          </button>
          </div>
        </div>
        <div className=" ">
          <p className="text-sm font-medium mt-4">
            Job Applicants Number : {jobApplicantsNumber}
          </p>
          <p className="text-sm font-medium mt-1">
            Posted On : {jobPostingDate}
          </p>
          <p className="text-sm font-medium mt-1">
            Deadline : {jobApplicationDeadline}
          </p>
          <p className="text-sm font-medium mt-1">
            Salary : {`${minimumSalary}-${maximumSalary}`}$
          </p>
          <Link to={`/job-details/${_id}`} >
          <button className="py-2  mt-4 px-4 rounded-lg  text-white bg-[#561284] w-max flex items-center gap-1">
            Apply Now <FaArrowRightLong />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
JobsTabsCard.propTypes = {
  job: PropTypes.object,
};
export default JobsTabsCard;
