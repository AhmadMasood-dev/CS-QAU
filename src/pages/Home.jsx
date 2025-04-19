import About from "../components/Home/About";
import Footer from "../components/shared/Footer";
import Research from "../components/Home/Research";
import NavBar from "../components/shared/Navbar";

function Home() {
  return (
    <>
      <NavBar />
      <About />
      <Research />
      <Footer />
    </>
  );
}

export default Home;
