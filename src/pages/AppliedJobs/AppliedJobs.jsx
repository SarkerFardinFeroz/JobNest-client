import { useContext, useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import PageTransition from "../../components/PageTransition/PageTransition";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import AppliedJob from "./AppliedJob";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import emptyData from "../../assets/lottie/Empthydata.json";
const AppliedJobs = () => {
  const text1 = "Applied Jobs";
  const text2 = "";
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const myAppliedJobs = async () => {
    const response = await axiosSecure.get(`/applied?email=${user.email}`);
    return response.data;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["my-job"],
    queryFn: myAppliedJobs,
    enabled: !!user.email,
  });

  const [category, setCategory] = useState([]);
  const [All, setAll] = useState([]);
  const [FullTime, setFullTime] = useState([]);
  const [Hybrid, setHybrid] = useState([]);
  const [OnSite, setOnSite] = useState([]);
  const [Remote, setRemote] = useState([]);
  const [PartTime, setPartTime] = useState([]);

  // console.log(data);
  useEffect(() => {
    axiosSecure.get(`/category`).then((res) => setCategory(res.data));
  }, [axiosSecure]);
  useEffect(() => {
    if (data) {
      setAll(data);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      const filteredData = data?.filter(
        (job) => job?.job?.jobCategory === "Hybrid"
      );
      setHybrid(filteredData);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      const filteredData = data.filter(
        (job) => job?.job?.jobCategory === "Hybrid"
      );
      setHybrid(filteredData);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      const filteredData = data.filter(
        (job) => job?.job?.jobCategory === "On Site"
      );
      setOnSite(filteredData);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      const filteredData = data.filter(
        (job) => job?.job?.jobCategory === "Full Time"
      );
      setFullTime(filteredData);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      const filteredData = data.filter(
        (job) => job?.job?.jobCategory === "Remote"
      );
      setRemote(filteredData);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      const filteredData = data.filter(
        (job) => job?.job?.jobCategory === "Part Time"
      );
      setPartTime(filteredData);
    }
  }, [data]);

  return (
    <PageTransition>
      <div className="duration-0  ">
        <div className="mt-[-70px] bg-[#2110]">
          <Banner text1={text1} text2={text2} />
        </div>
        <div className="max-w-[1604px] py-10  px-4 mx-auto ">
          <div>
            <p className="dark:text-[#c2c2c2] text-sm font-medium underline underline-offset-8 decoration-2">
              Unlock the path to your dream career
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 mt-4">
              Filter Job by category
            </h2>
            <Tabs>
              <TabList>
                {category.map((category, idx) => (
                  <Tab key={idx}>{`${category.category}`}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <div className=" grid lg:flex md:grid-cols-2 flex-col  gap-6 lg:gap-0 p-3">
                  {!All.length == 0 ? (
                    All?.map((job, idx) => <AppliedJob key={idx} job={job} />)
                  ) : (
                    <div className="w-96 mx-auto">
                      <Lottie animationData={emptyData} />
                      <p className="text-center">
                        No applied jobs to display at the moment. Start applying
                        for jobs to populate this page.
                      </p>
                    </div>
                  )}
                </div>
              </TabPanel>
              <TabPanel>
                {" "}
                <div className="grid lg:flex md:grid-cols-2 flex-col  gap-6 lg:gap-0 p-3">
                  {!OnSite.length == 0 ? (
                    OnSite?.map((job, idx) => (
                      <AppliedJob key={idx} job={job} />
                    ))
                  ) : (
                    <div className="w-96 mx-auto">
                      <Lottie animationData={emptyData} />
                      <p className="text-center">
                        No applied jobs to display at the moment. Start applying
                        for jobs to populate this page.
                      </p>
                    </div>
                  )}
                </div>{" "}
              </TabPanel>
              <TabPanel>
                {" "}
                <div className="grid lg:flex md:grid-cols-2 flex-col  gap-6 lg:gap-0 p-3">
                  {!FullTime.length == 0 ? (
                    FullTime?.map((job, idx) => (
                      <AppliedJob key={idx} job={job} />
                    ))
                  ) : (
                    <div className="w-96 mx-auto">
                      <Lottie animationData={emptyData} />
                      <p className="text-center">
                        No applied jobs to display at the moment. Start applying
                        for jobs to populate this page.
                      </p>
                    </div>
                  )}
                </div>
              </TabPanel>
              <TabPanel>
                {" "}
                <div className="grid lg:flex md:grid-cols-2 flex-col  gap-6 lg:gap-0 p-3">
                  {!Remote.length == 0 ? (
                    Remote?.map((job, idx) => (
                      <AppliedJob key={idx} job={job} />
                    ))
                  ) : (
                    <div className="w-96 mx-auto">
                      <Lottie animationData={emptyData} />
                      <p className="text-center">
                        No applied jobs to display at the moment. Start applying
                        for jobs to populate this page.
                      </p>
                    </div>
                  )}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid lg:flex md:grid-cols-2 flex-col  gap-6 lg:gap-0 p-3">
                  {!Hybrid.length == 0 ? (
                    Hybrid?.map((job, idx) => (
                      <AppliedJob key={idx} job={job} />
                    ))
                  ) : (
                    <div className="w-96 mx-auto">
                      <Lottie animationData={emptyData} />
                      <p className="text-center">
                        No applied jobs to display at the moment. Start applying
                        for jobs to populate this page.
                      </p>
                    </div>
                  )}
                </div>
              </TabPanel>
              <TabPanel>
                {" "}
                <div className="grid lg:flex md:grid-cols-2 flex-col  gap-6 lg:gap-0 p-3">
                  {!PartTime.length == 0 ? (
                    PartTime?.map((job, idx) => (
                      <AppliedJob key={idx} job={job} />
                    ))
                  ) : (
                    <div className="w-96 mx-auto">
                      <Lottie animationData={emptyData} />
                      <p className="text-center">
                        No applied jobs to display at the moment. Start applying
                        for jobs to populate this page.
                      </p>
                    </div>
                  )}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <div className="max-w-[1304px] py-16 px-4 mx-auto ">
          <NewsLetter />
        </div>
      </div>
    </PageTransition>
  );
};

export default AppliedJobs;
