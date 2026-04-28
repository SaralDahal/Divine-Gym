import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Divider from "./components/sections/Divider";
import AboutPage from "./components/sections/AboutPage";
import PricingPage from "./components/sections/PricingPage";
import ImageGallery from "./components/sections/ImageGallery";
import JoinPlan from "./components/sections/JoinPlan";
import ReviewSection from "./components/sections/ReviewSection";
import ImageMarquee from "./components/sections/ImageMarquee";
import PreFooter from "./components/sections/PreFooter";

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
      <ReviewSection />
      <ImageMarquee />
      <PreFooter />
    </div >
  );
}
