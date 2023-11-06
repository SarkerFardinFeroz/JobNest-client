import Banner from "../../components/Banner/Banner";
import PageTransition from "../../components/PageTransition/PageTransition";

const MyJobs = () => {
  const text1="My Jobs"
  const text2=""
  return (
    <PageTransition>
      <div className="mt-[-70px]">
        <Banner text1={text1} text2={text2} />
      </div>
      This is MyJobs page
    </PageTransition>
  );
};

export default MyJobs;
