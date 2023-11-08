import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useJobsData from "../../hooks/useJobsData";
import JobsTabsCard from "../JobsTabsCard/JobsTabsCard";
import ReactSkeleton from "../ReactSkeleton/ReactSkeleton";
const JobByCatTabs = () => {
  const { data, isLoading, isFetching } = useJobsData();
  const [isAll, setIsAll] = useState(false);
  const [category, setCategory] = useState([]);
  const [OnSite, setOnSite] = useState([]);
  const [Remote, setRemote] = useState([]);
  const [FullTime, setFullTime] = useState([]);
  const [Hybrid, setHybrid] = useState([]);
  const [PartTime, setPartTime] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (data) {
      const filteredData = data.filter((job) => job?.jobCategory === "Hybrid");
      setHybrid(filteredData);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      const filteredData = data.filter((job) => job.jobCategory === "On Site");
      setOnSite(filteredData);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      const filteredData = data.filter(
        (job) => job?.jobCategory === "Full Time"
      );
      setFullTime(filteredData);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      const filteredData = data.filter((job) => job?.jobCategory === "Remote");
      setRemote(filteredData);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      const filteredData = data.filter(
        (job) => job?.jobCategory === "Part Time"
      );
      setPartTime(filteredData);
    }
  }, [data]);

  const url = "/category";
  useEffect(() => {
    axiosSecure.get(url).then((res) => setCategory(res.data));
  }, [axiosSecure, url]);

  if (isLoading == true || isFetching == true) {
    return (
      <div className="grid  md:grid-cols-3 gap-4 p-3">
        <ReactSkeleton cards={6} />
      </div>
    );
  }

  return (
    <div>
      <Tabs>
        <TabList>
          {category.map((category, idx) => (
            <Tab key={idx}>{`${category.category}`}</Tab>
          ))}
        </TabList>
        <TabPanel>
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
            {isAll
              ? data?.map((job, idx) => <JobsTabsCard key={idx} job={job} />)
              : data?.slice(0, 6).map((job, idx) => <JobsTabsCard key={idx} job={job} />)}
          </div>
          <div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => setIsAll(!isAll)}
                className={`bg-[#794aff]  text-white py-1 md:py-2 px-2 md:px-4 rounded-lg ${
                  data?.length <= 6 ? "hidden" : ""
                }`}
              >
                {isAll ? "Show Less" : "See All"}
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid  md:grid-cols-3 gap-4 p-3">
            {isAll
              ? OnSite?.map((job, idx) => <JobsTabsCard key={idx} job={job} />)
              : OnSite?.slice(0, 6).map((job, idx) => (
                  <JobsTabsCard key={idx} job={job} />
                ))}
          </div>{" "}
          <div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => setIsAll(!isAll)}
                className={`bg-[#794aff]  text-white py-1 md:py-2 px-2 md:px-4 rounded-lg ${
                  OnSite.length <= 6 ? "hidden" : ""
                }`}
              >
                {isAll ? "Show Less" : "See All"}
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid  md:grid-cols-3 gap-4 p-3">
            {isAll
              ? FullTime?.map((job, idx) => (
                  <JobsTabsCard key={idx} job={job} />
                ))
              : FullTime?.slice(0, 6).map((job, idx) => (
                  <JobsTabsCard key={idx} job={job} />
                ))}
          </div>
          <div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => setIsAll(!isAll)}
                className={`bg-[#794aff]  text-white py-1 md:py-2 px-2 md:px-4 rounded-lg ${
                  FullTime.length <= 6 ? "hidden" : ""
                }`}
              >
                {isAll ? "Show Less" : "See All"}
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid  md:grid-cols-3 gap-4 p-3">
            {isAll
              ? Remote?.map((job, idx) => <JobsTabsCard key={idx} job={job} />)
              : Remote?.slice(0, 6).map((job, idx) => (
                  <JobsTabsCard key={idx} job={job} />
                ))}
          </div>
          <div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => setIsAll(!isAll)}
                className={`bg-[#794aff]  text-white py-1 md:py-2 px-2 md:px-4 rounded-lg ${
                  Remote.length <= 6 ? "hidden" : ""
                }`}
              >
                {isAll ? "Show Less" : "See All"}
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid  md:grid-cols-3 gap-4 p-3">
            {isAll
              ? Hybrid?.map((job, idx) => <JobsTabsCard key={idx} job={job} />)
              : Hybrid?.slice(0, 6).map((job, idx) => (
                  <JobsTabsCard key={idx} job={job} />
                ))}
          </div>
          <div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => setIsAll(!isAll)}
                className={`bg-[#794aff]  text-white py-1 md:py-2 px-2 md:px-4 rounded-lg ${
                  Hybrid.length <= 6 ? "hidden" : ""
                }`}
              >
                {isAll ? "Show Less" : "See All"}
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid  md:grid-cols-3 gap-4 p-3">
            {isAll
              ? PartTime?.map((job, idx) => (
                  <JobsTabsCard key={idx} job={job} />
                ))
              : PartTime?.slice(0, 6).map((job, idx) => (
                  <JobsTabsCard key={idx} job={job} />
                ))}
          </div>
          <div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => setIsAll(!isAll)}
                className={`bg-[#794aff]  text-white py-1 md:py-2 px-2 md:px-4 rounded-lg ${
                  PartTime.length <= 6 ? "hidden" : ""
                }`}
              >
                {isAll ? "Show Less" : "See All"}
              </button>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobByCatTabs;
