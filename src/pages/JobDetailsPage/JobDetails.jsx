import { useQuery } from "@tanstack/react-query";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import JobDetail from "./JobDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const JobDetails = () => {
  const axiosSecure = useAxiosSecure();


  const params = useParams();
  const myJobsData = async () => {
    const response = await axiosSecure.get(`/job-details/${params.id}`);
    return response.data;
  };
  const {
    data: job,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-job"],
    queryFn: myJobsData,
    enabled: !!params.id,
  });
  // console.log(job);
  return (
    <div className=" max-w-[1304px]  px-4 mx-auto">
      <div>
        <JobDetail  job={job} refetch={refetch} />
      </div>
      <div className="py-20">
        <NewsLetter />
      </div>
    </div>
  );
};

export default JobDetails;
