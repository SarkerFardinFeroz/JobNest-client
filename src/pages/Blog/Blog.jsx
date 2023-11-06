import Banner from "../../components/Banner/Banner";
import PageTransition from "../../components/PageTransition/PageTransition";

const Blog = () => {
  const text1="Blogs"
  const text2 =""
  return (
    <PageTransition>
      <div className="mt-[-70px]">
        <Banner text1={text1} text2={text2} />
      </div>
      This is MyJobs page
    </PageTransition>
  );
};

export default Blog;
