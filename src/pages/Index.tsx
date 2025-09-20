import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CareerSurvey from "@/components/CareerSurvey";
import CareerRecommendations from "@/components/CareerRecommendations";
import PersonalizedRoadmap from "@/components/PersonalizedRoadmap";
import ProgressDashboard from "@/components/ProgressDashboard";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CareerSurvey />
      <CareerRecommendations />
      <PersonalizedRoadmap />
      <ProgressDashboard />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
