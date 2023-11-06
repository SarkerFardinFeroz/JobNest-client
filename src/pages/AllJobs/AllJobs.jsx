
import Banner from "../../components/Banner/Banner";
import PageTransition from "../../components/PageTransition/PageTransition";
const AllJobs = () => {
  const text1 = 'FindJobs'
  const text2 = 'Search your career opportunity through 12,800 jobs'

  return (
    <PageTransition
    >
      <div className="mt-[-68px]">
        <Banner text1={text1} text2={text2} />
      </div>
      This is All Jobs page
    </PageTransition>
  );
};

export default AllJobs;
