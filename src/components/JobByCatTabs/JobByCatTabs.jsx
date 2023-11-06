import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
const JobByCatTabs = () => {
  const [category, setCategory] = useState([]);
  const axiosSecure = useAxiosSecure();
  const url = "/category";
  useEffect(() => {
    axiosSecure.get(url).then((res) => setCategory(res.data));
  }, [axiosSecure, url]);

  return (
    <div>
      <Tabs>
        <TabList>
          {category.map((category, idx) => (
            <Tab key={idx}>{`${category.category}`}</Tab>
          ))}
        </TabList>

        <TabPanel>
          <div className="p-10 rounded-lg duration-300 hover:bg-[#7a4aff] bg-[#eeeaff] dark:bg-[#322942] ">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Engineering</p>
                <h3 className="text-xl font-semibold">
                  Senior Full Stack Backend Engineer
                </h3>
                <div className="flex items-center mt-2 gap-3">
                  <button className="py-[2px] px-4 bg-[#f2e7fe] text-[#561284] rounded-xl">
                    Full-time
                  </button>
                  <button className="py-[2px] px-4 bg-[#eafee7] text-[#258412] rounded-xl">
                    Active
                  </button>
                  <button className="py-[2px] px-4 bg-[#fefee7] text-[#847c12] rounded-xl flex items-center gap-1">
                    <CiLocationOn /> USA, New York
                  </button>
                </div>
              </div>
              <button className="py-2 px-4 rounded-lg bg-[#784aff] text-white dark:bg-[#561284] flex items-center gap-1">
                Apply Now <FaArrowRightLong />
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobByCatTabs;
