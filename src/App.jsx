import Contact from "./components/content/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/header/Hero";
import Navbar from "./components/header/Navbar";
import Services from "./components/content/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
