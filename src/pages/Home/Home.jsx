
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import JobByCatTabs from "../../components/JobByCatTabs/JobByCatTabs";
import PageTransition from "../../components/PageTransition/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <div className="mt-[-70px] text-center">
        <HomeBanner />
      </div>
      
      <main className=" max-w-[1304px] py-12 px-4 mx-auto">
        <div>
          <p className="dark:text-[#c2c2c2] text-lg font-medium underline underline-offset-8 decoration-2">
          Pursue Your Ideal Career
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold mt-4">
          Discover Your Dream Job
          </h2>
        <div className="border border-[#4e4e4e] rounded-xl px-2 py-8 mt-6">
        <JobByCatTabs/>
        </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Home;
