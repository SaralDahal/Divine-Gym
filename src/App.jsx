import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Divider from "./components/sections/Divider";
import AboutPage from "./components/sections/AboutPage";
import PricingPage from "./components/sections/PricingPage";
import Facility from "./components/sections/Facility";
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
      <Facility />
      <JoinPlan />
      <Testimonial />
      <ImageMarquee />
      <Contact />
      <Footer />
    </div >
  );
}
