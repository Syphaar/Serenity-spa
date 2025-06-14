import Navbar from "../../navbar/Navbar";
import Carousel from "./Carousel";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

const Home = () => {
  return (
    <>
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Carousel />
    </>
  );
};

export default Home;