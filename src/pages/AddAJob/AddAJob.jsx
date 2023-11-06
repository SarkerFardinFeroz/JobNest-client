
import Banner from "../../components/Banner/Banner";
import PageTransition from "../../components/PageTransition/PageTransition";

const AddAJob = () => {
  const text1 = "Add A Job"
  const text2 = ""
  return (
    <PageTransition
    >
      <div className="mt-[-70px]">
        <Banner text1={text1} text2={text2} />
      </div>
      This is Add A Job page
    </PageTransition>
  );
};

export default AddAJob;
