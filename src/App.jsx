import Contact from "./components/content/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/header/Hero";
import Navbar from "./components/header/Navbar";
import Services from "./components/content/Services";
import Blog from "./components/content/Blog";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
