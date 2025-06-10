import Hero from "../components/Hero";
import BestSeller from "../components/BestSeller";
import CenterStage from "../components/CenterStage";
import TopCategory from "../components/TopCategory";
import NewArrivals from "../components/NewArrivals";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <section className="min-h-screen ">
      <Hero />
      <BestSeller />
      <CenterStage />
      <TopCategory />
      <NewArrivals />
      <AboutUs />
    </section>
  );
};

export default Home;
