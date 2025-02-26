//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection/>
    </div>
  );
}

export default App;
