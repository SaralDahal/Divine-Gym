import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Divider from "./components/sections/Divider";

export default function App() {
  return (
    <div
      style={{ fontFamily: "'Iceland', cursive" }}
    >
      <Navbar />
      <Hero />
      {/* <Divider /> */}
    </div>
  );
}
