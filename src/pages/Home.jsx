import About from "../components/Home/About";
import Footer from "../components/shared/Footer";
import Research from "../components/Home/Research";
import News from "../components/Home/News";
import NavBar from "../components/shared/Navbar";
import Slider from "../components/Home/Slider";

function Home() {
  return (
    <>
      <NavBar />
      <About />
      <News />
      <Slider />
      <Research />
      <Footer />
    </>
  );
}

export default Home;
