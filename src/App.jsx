import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Divider from "./components/sections/Divider";
import AboutPage from "./components/sections/AboutPage";

export default function App() {
  return (
    <div
      style={{ fontFamily: "'Iceland', Ireland" }}
    >
      <Navbar />
      <Hero />
      <Divider />
      <AboutPage />
    </div>
  );
}
