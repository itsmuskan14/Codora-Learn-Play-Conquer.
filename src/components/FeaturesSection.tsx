import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Gamepad2, Trophy, FileText, Users, Target } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "AI Career Assessment",
    description: "Take comprehensive surveys analyzed by AI to discover your perfect career path based on skills, interests, and market demand.",
    color: "codora-primary"
  },
  {
    icon: Bot,
    title: "Personalized Roadmaps",
    description: "Get custom learning roadmaps with AI-curated challenges tailored to your career goals and current skill level.",
    color: "codora-secondary"
  },
  {
    icon: Gamepad2,
    title: "Gamified Learning Tests",
    description: "Complete challenges and take skill tests to earn XP, unlock achievements, and track your progress in real-time.",
    color: "codora-accent"
  },
  {
    icon: Trophy,
    title: "XP & Level System",
    description: "Gain experience points for every completed challenge and test. Level up your skills and compete with peers.",
    color: "codora-success"
  },
  {
    icon: FileText,
    title: "Smart Progress Tracking",
    description: "AI monitors your learning journey, identifies knowledge gaps, and adjusts your roadmap for optimal career preparation.",
    color: "codora-primary"
  },
  {
    icon: Users,
    title: "Career Guidance",
    description: "Get AI-powered career advice, interview preparation, and industry insights to land your dream job faster.",
    color: "codora-secondary"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered Career
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Guidance System
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover your ideal career path through intelligent assessments, get personalized roadmaps, 
            and master skills through gamified challenges with XP tracking.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-${feature.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 shadow-hero">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Discover Your Perfect Career?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Take our AI-powered career assessment and get your personalized roadmap 
              to success. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors shadow-button">
                Take Career Assessment
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                View Sample Roadmap
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;