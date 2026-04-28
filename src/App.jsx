import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Divider from "./components/sections/Divider";
import AboutPage from "./components/sections/AboutPage";
import PricingPage from "./components/sections/PricingPage";
import ImageGallery from "./components/sections/ImageGallery";
import JoinPlan from "./components/sections/JoinPlan";
import Testimonial from "./components/sections/Testimonial";
import ImageMarquee from "./components/sections/ImageMarquee";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Divider />
      <AboutPage />
      <PricingPage />
      <ImageGallery />
      <JoinPlan />
      <Testimonial />
      <ImageMarquee />
      <Contact />
      <Footer />
    </div >
  );
}
