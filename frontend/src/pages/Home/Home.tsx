import Navbar from "../../components/layout/Navbar";
import Hero from "./components/Hero";
import HomeCategory from "./components/HomeCategory";
import TrustedCompany from "./components/TrustedCompany";
import IndonesiaMap from "../../assets/indonesia.png";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCategory />
      <TrustedCompany />
      <div className="max-w-257.25 mx-auto text-center py-8 mt-4">
        <h1 className="text-[21px] font-bold tracking-wide">
          Find opportunities in big cities or your local area
        </h1>
        <img src={IndonesiaMap} alt="" loading="lazy" className="mt-10" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
