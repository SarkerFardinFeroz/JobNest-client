import Banner from "../../components/Banner/Banner";
import PageTransition from "../../components/PageTransition/PageTransition";

const AddAJob = () => {
  const text1 = "Add A Job";
  const text2 = "";
  return (
    <PageTransition>
      <div className="mt-[-70px]">
        <Banner text1={text1} text2={text2} />
      </div>
      <div className="max-w-[1304px] px-4 mx-auto">
        <div className="bg">
          <form ></form>
        </div>
      </div>
    </PageTransition>
  );
};

export default AddAJob;
