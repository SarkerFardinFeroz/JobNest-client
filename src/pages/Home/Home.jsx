
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import PageTransition from "../../components/PageTransition/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <div className="mt-[-68px]">
        <HomeBanner />
      </div>

      <main className="py-96">This is Home</main>
    </PageTransition>
  );
};

export default Home;
