import HomeBanner from "../../components/HomeBanner/HomeBanner";
import JobByCatTabs from "../../components/JobByCatTabs/JobByCatTabs";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import PageTransition from "../../components/PageTransition/PageTransition";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <PageTransition>
      <div className="mt-[-70px] text-center">
        <HomeBanner />
      </div>

      <main className="  py-12 ">
        <div className="max-w-[1304px] px-4 mx-auto ">
          <p className="dark:text-[#c2c2c2] text-lg font-medium underline underline-offset-8 decoration-2">
            Pursue Your Ideal Career
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold mt-4">
            Discover Your Dream Job
          </h2>
          <div className="border border-[#4e4e4e] rounded-xl px-2 py-8 mt-6">
            <JobByCatTabs />
          </div>
        </div>

        <div className="bg-[#45169c] p-12 mt-[100px]  text-center ">
          <h2 className="font-bold text-2xl md:text-3xl mb-4 text-white">
            Why Our Clients Admire Us
          </h2>
          <p className="text-[#96b5d5] text-sm mb-20 ">
            Testimonials that Showcase our Exceptional Service and Dedication
          </p>
          <div className="text-start max-w-[1304px] py-4 mx-auto gap-6">
            <Testimonial />
          </div>
        </div>
        <div className="max-w-[1304px] pt-16 px-4 mx-auto "> 
          <NewsLetter/>
        </div>
      </main>
    </PageTransition>
  );
};

export default Home;
