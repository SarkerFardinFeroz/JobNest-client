import NewsLetter from "../../components/NewsLetter/NewsLetter";
import JobDetail from "./JobDetail";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData()
  
  return (
    <div className=" max-w-[1304px]  px-4 mx-auto">
      <div>
       <JobDetail job={job}/>
      </div>
      <div className="py-20">
        <NewsLetter/>
      </div>
    </div>
  );
};

export default JobDetails;
