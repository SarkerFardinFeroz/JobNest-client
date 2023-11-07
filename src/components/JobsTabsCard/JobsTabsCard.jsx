import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";
const JobsTabsCard = ({ job }) => {
  const {
    _id,
    picture_url,
    jobTitle,
    authorName,
    jobCategory,
    minimum_salary,
    maximum_salary,
    jobApplicantsNumber,
    jobLocation,
  } = job || {};
  return (
    <div className=" h-[280px] p-3 md:p-6 rounded-lg duration-300 hover:bg-[#7a4aff] bg-[#eeeaff] hover:text-white dark:bg-[#322942] dark:hover:bg-[#7a4aff] ">
      <div>
        <div className="flex flex-col ">
          <div className="flex gap-4 items-center  ">
            <img
              className="w-[60px] h-[60px] rounded-xl object-cover"
              src={picture_url}
            />
            <div>
              <p className="text-sm">{authorName}</p>
              <h3 className="text-xl font-semibold">{jobTitle}</h3>
            </div>
          </div>
          <div className="flex  items-center mt-4 gap-3">
            <button className=" text-center  py-[2px] px-4 text-sm  bg-[#eadef7] text-[#561284] rounded-xl">
              {jobCategory}
            </button>
            <button className="py-[2px] px-4 text-center text-sm bg-[#eafee7] text-[#258412] rounded-xl">
              Active
            </button>
            <button className="py-[2px] justify-center  flex-1 text-center px-4 text-sm  bg-[#fefee7] text-[#847c12] rounded-xl flex items-center gap-1">
              <span className="text-lg">
                <CiLocationOn />
              </span>{" "}
              {jobLocation}
            </button>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium mt-4">
            Job Applicants Number : {jobApplicantsNumber}
          </p>
          <p className="text-sm font-medium mt-1">
            Salary : {`${minimum_salary}-${maximum_salary}`}$
          </p>
          <button className="py-2 mt-4 px-4 rounded-lg  text-white bg-[#561284] flex items-center gap-1">
            Apply Now <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};
JobsTabsCard.propTypes = {
  job: PropTypes.object,
};
export default JobsTabsCard;
