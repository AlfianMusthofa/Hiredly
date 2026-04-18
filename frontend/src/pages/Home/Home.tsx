import Navbar from "../../components/layout/Navbar";
import Hero from "./components/Hero";
import HomeCategory from "./components/HomeCategory";
import TrustedCompany from "./components/TrustedCompany";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCategory />
      <TrustedCompany />
    </>
  );
};

export default Home;
