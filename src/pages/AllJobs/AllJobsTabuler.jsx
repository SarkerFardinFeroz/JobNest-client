import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const AllJobsTabuler = ({ job }) => {
  const {
    _id,
    jobTitle,
    authorName,
    jobCategory,
    minimumSalary,
    maximumSalary,
    jobApplicantsNumber,
    jobApplicationDeadline,
    jobPostingDate,
  } = job || {};
  const date = new Date () > new Date(jobApplicationDeadline)
  return (
    <tr className="bg-[#eeeaff] md:py-2 dark:bg-[#322942] rounded-lg  grid xl:grid-cols-8 text-center lg:text-start ">
      <th className="text-center lg:w-[200px]    text-[#784aff] ">
        <p>{authorName}</p>
      </th>
      <th className=" lg:text-start overflow-hidden">
        <p className="lg:max-w-[280px]  truncate">{jobTitle}</p>
      </th>

      <td className="">
        <p>
          {minimumSalary}-{maximumSalary}$
        </p>
      </td>
      <td className="">Applicants : {jobApplicantsNumber}</td>
      <td className="">Posted on : {jobPostingDate}</td>
      <td className="">Deadline : {jobApplicationDeadline}</td>
      <td className="">
        <div className="lg:flex flex-1   items-center  gap-2">
          <button className=" text-center  py-[2px] px-4 text-sm  bg-[#eadef7] text-[#561284] mr-2 lg:mr-0 lg:w-[100px] rounded-xl">
            {jobCategory}
          </button>
          <button className={`py-[2px]
            ${date === false ? " bg-[#eafee7] text-[#258412]" : "bg-[#832828] text-[#ffd7d7]" }
            ml-2 md:ml-0 px-4 text-center text-sm bg-[#eafee7] text-[#258412] rounded-xl`}>
              {date === false ? "Active" : "Expired" }
            </button>
        </div>
      </td>
      <th className="flex items-center justify-center  ">
        <Link to={`/job-details/${_id}`} >
        <button className="text-center  py-[10px] px-6  lg:py-[2px] lg:px-4 text-sm bg-[#4d1970]  shadow-[#561284] dark:shadow-[#eadef7] shadow-sm text-[#eadef7] rounded-xl font-normal  duration-300 active:scale-95">
          Details
        </button>
        </Link>
      </th>
    </tr>
  );
};
AllJobsTabuler.propTypes = {
  job: PropTypes.object,
};
export default AllJobsTabuler;
