//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import FeaturesSection from "./components/home/FeaturesSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection/>
      <FeaturesSection/>
    </div>
  );
}

export default App;
