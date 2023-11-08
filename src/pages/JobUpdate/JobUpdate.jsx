import Lottie from "lottie-react";
import Banner from "../../components/Banner/Banner";
import PageTransition from "../../components/PageTransition/PageTransition";
import { format } from "date-fns";
import updateForm from "../../assets/lottie/update.json";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../hooks/useAxiosSecure";

import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const JobUpdate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [deadline, setDeadline] = useState(new Date());
  const loadedData = useLoaderData();
  const [data, setData] = useState(loadedData);
  console.log(data);
  const {
    _id,
    logoURL,
    pictureUrl,
    jobTitle,
    authorName,
    jobDescription,
    jobCategory,
    minimumSalary,
    maximumSalary,
    jobApplicantsNumber,
    jobApplicationDeadline,
    jobLocation,
    jobPostingDate,
  } = data || {};

  const [cat, setCat] = useState("");
  const axiosSecure = useAxiosSecure();

  const text1 = "Post A Job";
  const text2 = "";
  const handleCatChange = (e) => {
    setCat(e.target.value);
  };

  const handlePostJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const pictureUrl = form.pictureUrl.value;
    const logoURL = form.logoURL.value;
    const jobTitle = form.jobTitle.value;
    const jobLocation = form.jobLocation.value;
    const authorName = form.authorName.value;
    const jobCategory = cat;
    const minimumSalaryString = form.minimumSalary.value;
    const maximumSalaryString = form.maximumSalary.value;
    const jobDescription = form.jobDescription.value;
    const postingDate = startDate;
    const applicationDeadline = deadline;
    const jobApplicantsNumberString = form.jobApplicantsNumber.value;
    const minimumSalary = parseInt(minimumSalaryString);
    const maximumSalary = parseInt(maximumSalaryString);
    const jobApplicantsNumber = parseInt(jobApplicantsNumberString);

    const jobPostingDate = format(new Date(postingDate), "yyyy-MM-dd");
    const jobApplicationDeadline = format(
      new Date(applicationDeadline),
      "yyyy-MM-dd"
    );

    if (logoURL === "") {
      return toast.error("Please provide company logo");
    }
    if (pictureUrl === "") {
      return toast.error("Please provide picture url");
    }
    if (jobTitle === "") {
      return toast.error("Please job title");
    }
    if (jobLocation === "") {
      return toast.error("Please provide job location");
    }
    if (authorName === "") {
      return toast.error("Please provide author name ");
    }
    if (jobCategory === "") {
      return toast.error("Please provide jobCategory");
    }
    if (minimumSalaryString === "") {
      return toast.error("Please provide minimum salary");
    }
    if (minimumSalary <= 0) {
      return toast.error("Salary must be greater than or equal to 0");
    }
    if (maximumSalaryString === "") {
      return toast.error("Please provide maximum salary");
    }
    if (maximumSalary <= 0) {
      return toast.error("Salary must be greater than or equal to 0");
    }
    if (jobDescription === "") {
      return toast.error("Please provide job description");
    }
    if (jobApplicantsNumber === "") {
      return toast.error("Please provide job applicants number");
    }
    if (jobPostingDate === "") {
      return toast.error("Please provide job posting date");
    }
    if (jobApplicationDeadline === "") {
      return toast.error("Please provide job application deadline");
    }
    const updatedJob = {
      _id,
      pictureUrl,
      logoURL,
      jobTitle,
      jobLocation,
      authorName,
      jobCategory,
      minimumSalary,
      maximumSalary,
      jobPostingDate,
      jobApplicationDeadline,
      jobApplicantsNumber,
      jobDescription,
    };
    axiosSecure.put(`/jobs/${_id}`, updatedJob).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Product Updated Successfully");
        setData(updatedJob);
      }
    });
  };

  return (
    <PageTransition>
      <div className="mt-[-70px]">
        <Banner text1={text1} text2={text2} />
      </div>
      <div className="max-w-[1304px] py-10 lg:flex gap-5 md:gap-20 items-center  px-4 mx-auto">
        <div className="w-full duration-300 bg-[#6c24b8] text-[#f1f1f1] dark:text-white dark:bg-[#2d1073] rounded-xl">
          <div className=" shadow-xl  p-3 rounded-xl md:p-16">
            <form onSubmit={handlePostJob}>
              <div className="w-full py-2">
                <p className="text-lg font-medium mb-2">Company Logo</p>
                <input
                  type="text"
                  name="logoURL"
                  defaultValue={logoURL}
                  className="py-2 w-full border rounded-lg px-4 bg-transparent text-[#e6e6e6] placeholder:text-[#e6e6e6]"
                />
              </div>
              <div className="md:flex gap-8 justify-between">
                <div className="w-full">
                  <div className="w-full">
                    <p className="text-lg font-medium mb-2">Picture Url</p>
                    <input
                      type="text"
                      name="pictureUrl"
                      defaultValue={pictureUrl}
                      className="py-2 w-full border rounded-lg px-4 bg-transparent placeholder:text-[#e6e6e6]"
                    />
                  </div>
                  <div className="w-full mt-4">
                    <p className="text-lg font-medium mb-2">Author Name</p>
                    <input
                      type="text"
                      name="authorName"
                      defaultValue={authorName}
                      disabled
                      placeholder="Write author name"
                      className="py-2 w-full border rounded-lg px-4 bg-transparent disabled:bg-[#8f8f8f73] dark:disabled:bg-[#8f8f8f1c] placeholder:text-[#e6e6e6]"
                    />
                  </div>
                  <div>
                    <div className="w-full mt-4">
                      <p className="text-lg font-medium mb-2">Salary range</p>
                      <div className="flex items-center justify-center gap-3">
                        <input
                          type="text"
                          name="minimumSalary"
                          defaultValue={minimumSalary}
                          className="py-2 w-full border rounded-lg px-4 bg-transparent placeholder:text-[#e6e6e6]"
                        />
                        <input
                          type="text"
                          name="maximumSalary"
                          defaultValue={maximumSalary}
                          className="py-2 w-full border rounded-lg px-4 bg-transparent placeholder:text-[#e6e6e6]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-4">
                    <p className="text-lg font-medium mb-2">Job Deadline</p>
                    <DatePicker
                      selected={deadline}
                      defaultValue={maximumSalary}
                      onChange={(date) => setDeadline(date)}
                      className="py-2  w-[264px] lg:w-[370px] border rounded-lg px-4 bg-transparent placeholder:text-[#e6e6e6]"
                    />
                  </div>
                </div>

                <div className=" w-full">
                  <div className=" w-full">
                    <p className="text-lg font-medium mb-2">Job Title </p>
                    <input
                      type="text"
                      name="jobTitle"
                      defaultValue={jobTitle}
                      className="py-2  w-full border rounded-lg px-4 bg-transparent placeholder:text-[#e6e6e6]"
                    />
                  </div>
                  <div className="w-full mt-4">
                    <p className="text-lg font-medium mb-2">Job Category</p>
                    <select
                      onChange={handleCatChange}
                      name="jobCategory"
                      className="input w-full h-[40px]  px-4 input-bordered  bg-[#18181be3]   border-white "
                    >
                      <option disabled>{jobCategory}</option>
                      <option>On Site</option>
                      <option>Full Time</option>
                      <option>Remote</option>
                      <option>Hybrid</option>
                      <option>Part Time</option>
                    </select>
                  </div>
                  <div className=" w-full mt-4">
                    <p className="text-lg font-medium mb-2">Post Date </p>

                    <DatePicker
                      className="py-2  w-[264px] lg:w-[370px] border rounded-lg px-4 bg-transparent placeholder:text-[#e6e6e6]"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  <div className=" w-full mt-4">
                    <p className="text-lg font-medium mb-2">
                      Job Applicants Number
                    </p>
                    <input
                      type="text"
                      name="jobApplicantsNumber"
                      disabled
                      defaultValue={jobApplicantsNumber}
                      className="py-2  w-full border rounded-lg px-4 bg-transparent placeholder:text-[#e6e6e6]"
                    />
                  </div>
                </div>
              </div>
              <div className=" w-full mt-4">
                <p className="text-lg font-medium mb-2">Job Location</p>
                <input
                  type="text"
                  name="jobLocation"
                  defaultValue={jobLocation}
                  className="py-2  w-full border rounded-lg px-4 bg-transparent placeholder:text-[#e6e6e6]"
                />
              </div>
              <div className=" w-full mt-4">
                <p className="text-lg font-medium mb-2">Job Description </p>
                <textarea
                  name="jobDescription"
                  defaultValue={jobDescription}
                  className="py-2 w-full h-32 border rounded-lg px-4 bg-transparent placeholder:text-[#e6e6e6]"
                ></textarea>
              </div>
              <div className=" w-full mt-5">
                <button
                  type="submit"
                  className="py-2 px-4 bg-white text-black rounded-xl duration-300 active:scale-95 font-semibold w-full"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" w-full md:w-1/3 mx-auto ">
          <div className=" mx-auto">
            <Lottie animationData={updateForm} />
          </div>
          <h3 className="text-lg font-bold mt-4 ">
            Fill all the information carefully.
          </h3>
        </div>
      </div>
    </PageTransition>
  );
};

export default JobUpdate;
