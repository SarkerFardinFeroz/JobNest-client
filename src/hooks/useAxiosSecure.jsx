import axios from "axios";



const axiosSecure = axios.create({
  baseURL: "https://job-nest-server-ten.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
// 
  return axiosSecure;
};

export default useAxiosSecure;
