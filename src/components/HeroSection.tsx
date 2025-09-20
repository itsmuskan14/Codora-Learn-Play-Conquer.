import { Button } from "@/components/ui/button";
import { Play, Star, Users, Code2 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border/50 mb-8">
            <Star className="w-4 h-4 text-codora-accent mr-2" />
            <span className="text-sm font-medium">AI-Powered Learning Experience</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Perfect Career Path
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Take our AI-powered career assessment, get personalized roadmaps, and master skills through 
            gamified challenges. Track your progress with XP and level up your career!
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
              <Play className="w-5 h-5 mr-2" />
              Take Career Assessment
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              <Code2 className="w-5 h-5 mr-2" />
              View Sample Roadmap
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-codora-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Career Assessments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-codora-secondary mb-2">200+</div>
              <div className="text-muted-foreground">Career Paths</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-codora-accent mb-2">89%</div>
              <div className="text-muted-foreground">Career Success Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-codora-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-codora-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-codora-accent/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;