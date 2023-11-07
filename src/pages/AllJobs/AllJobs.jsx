
import Banner from "../../components/Banner/Banner";
import PageTransition from "../../components/PageTransition/PageTransition";
const AllJobs = () => {
  const text1 = 'Find Jobs'
  const text2 = 'Search your career opportunity through 12,800 jobs'

  return (
    <PageTransition
    >
      <div className="mt-[-70px]">
        <Banner text1={text1} text2={text2} />
      </div>
      This is All Jobs page
    </PageTransition>
  );
};

export default AllJobs;
