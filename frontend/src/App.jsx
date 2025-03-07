//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import FeaturesSection from "./components/home/FeaturesSection";
import IntegrationSection from "./components/home/IntegrationSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection/>
      <FeaturesSection/>
      <IntegrationSection/>
    </div>
  );
}
export default App;
