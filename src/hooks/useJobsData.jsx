import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useJobsData = () => {
  const axiosSecure = useAxiosSecure();
  const { isLoading, isFetching, data,refetch } = useQuery({
    queryKey: ["jobsDataOnTabs"],
    queryFn: async () => {
      try {
        const jobs = await axiosSecure.get("/jobs");
        return jobs.data; // Return the response data
      } catch (error) {
        return { error: "Error fetching data" };
      }
    },
  });
  return { data, isLoading, isFetching,refetch };
};

export default useJobsData;
