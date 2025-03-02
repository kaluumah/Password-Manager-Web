import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import BlogPresentation from "../components/home/BlogPresentation";
import FAQsSection from "../components/home/FAQsSection";
import IntegrationSection from "../components/home/IntegrationSection";
import PricingSection from "../components/home/PricingSection";
import TestimonialSection from "../components/home/TestimonialSection";
import FeaturesSection from "../components/home/FeaturesSection";

function Home () {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <IntegrationSection />
      <PricingSection />
      <TestimonialSection />
      <FAQsSection />
      <BlogPresentation />
    </div>
  );
};

export default Home;