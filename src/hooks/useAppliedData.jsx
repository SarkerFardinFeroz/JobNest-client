import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAppliedData = () => {
 
  console.log(user);
  const axiosSecure = useAxiosSecure();
  const { isLoading, isFetching, data,refetch } = useQuery({
    queryKey: ["appliedJobData"],
    enabled: !!user.email,
    queryFn: async () => {
      try {
        const jobs = await axiosSecure.get(`/applied?email=${user.email}`);
        return jobs.data; // Return the response data
      } catch (error) {
        console.log(error);
        return { error: "Error fetching data" };
      }
    },
    
  });
  return { data, isLoading, isFetching,refetch };
};
export default useAppliedData;