import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Divider from "./components/sections/Divider";
import AboutPage from "./components/sections/AboutPage";
import PricingPage from "./components/sections/PricingPage";
import ImageGallery from "./components/sections/ImageGallery";

export default function App() {
  return (
    <div
      style={{ fontFamily: "'Iceland', Ireland" }
      }
    >
      <Navbar />
      <Hero />
      <Divider />
      <AboutPage />
      <PricingPage />
      <ImageGallery />
    </div >
  );
}
