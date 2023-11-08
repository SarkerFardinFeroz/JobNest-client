import PropTypes from "prop-types";
const AllJobsTabuler = ({ job }) => {
  const {
    jobTitle,
    authorName,
    jobCategory,
    minimumSalary,
    maximumSalary,
    jobApplicantsNumber,
    jobApplicationDeadline,
    jobPostingDate,
  } = job || {};
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
        <div className="lg:flex flex-1   items-center  gap-3">
          <button className=" text-center  py-[2px] px-4 text-sm  bg-[#eadef7] text-[#561284] mr-2 lg:mr-0 lg:w-[100px] rounded-xl">
            {jobCategory}
          </button>
          <button className="py-[2px]  px-4 text-center text-sm bg-[#eafee7] text-[#258412] rounded-xl">
            Active
          </button>
        </div>
      </td>
      <th className="flex items-center justify-center  ">
        <button className="text-center  py-[10px] px-6  lg:py-[2px] lg:px-4 text-sm bg-[#4d1970]  shadow-[#561284] dark:shadow-[#eadef7] shadow-sm text-[#eadef7] rounded-xl font-normal active:scale-95 duration-300">
          Details
        </button>
      </th>
    </tr>
  );
};
AllJobsTabuler.propTypes = {
  job: PropTypes.object,
};
export default AllJobsTabuler;
