import Banner from "../../components/Banner/Banner";
import PageTransition from "../../components/PageTransition/PageTransition";


const AppliedJobs = () => {
  const text1="Applied Jobs"
  const text2=""
    return (
        <PageTransition
    >
      <div className="mt-[-70px]">
        <Banner text1={text1} text2={text2} />
      </div>
      This is Applied Jobs page
    </PageTransition>
    );
};

export default AppliedJobs;