import PropTypes from "prop-types";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const MyJobsTabuler = (data, handleDelete) => {
  const job = data.job; 
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
  const date = new Date() > new Date(jobApplicationDeadline);

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
      <td className="flex items-center justify-center">
        Applicants : {jobApplicantsNumber}
      </td>
      <td className="flex items-center justify-center">
        Posted on : {jobPostingDate}
      </td>
      <td className="flex items-center justify-center">
        Deadline : {jobApplicationDeadline}
      </td>
      <td className="flex items-center justify-center">
        <div className="lg:flex flex-1   items-center  gap-2">
          <button className=" text-center  py-[6px] px-4 text-sm  bg-[#eadef7] text-[#561284] mr-2 lg:mr-0 lg:w-[100px] rounded-xl">
            {jobCategory}
          </button>
          <button
            className={`py-[6px]
            ${
              date === false
                ? " bg-[#eafee7] text-[#258412]"
                : "bg-[#832828] text-[#ffd7d7]"
            }
            ml-2 md:ml-0 px-4 text-center text-sm bg-[#eafee7] text-[#258412] rounded-xl`}
          >
            {date === false ? "Active" : "Expired"}
          </button>
        </div>
      </td>
      <th className="flex lg:w-[200px]  items-center gap-2 justify-center  ">
        <button
          onClick={()=>handleDelete(_id)}
          className="text-center  py-[10px] px-6  lg:py-[6px] lg:px-4 text-sm  bg-[#c92727] shadow-sm text-[#eadef7] rounded-xl font-normal gap-2 items-center  duration-300 active:scale-95 flex"
        >
          Delete
          <span className="text-lg">
            <AiOutlineDelete />
          </span>
        </button>
        <Link to={`/update-job/${_id}`}>
          <button className="text-center  py-[10px] px-6  lg:py-[6px] lg:px-4 text-sm bg-[#2747ff]  shadow-sm text-[#eadef7] rounded-xl font-normal gap-2 items-center  duration-300 active:scale-95 flex ">
            Update
            <span className="text-lg">
              <FiEdit2 />
            </span>
          </button>
        </Link>
      </th>
    </tr>
  );
};
MyJobsTabuler.propTypes = {
  job: PropTypes.object,
  handleDelete: PropTypes.func,
};
export default MyJobsTabuler;
