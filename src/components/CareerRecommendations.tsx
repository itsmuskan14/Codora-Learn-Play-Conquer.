import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Star, Users, Code, Database, Smartphone, Brain, Target, TrendingUp } from "lucide-react";

const careerPaths = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Build beautiful user interfaces and web experiences",
    icon: Code,
    salary: "$75K - $120K",
    growth: "+15%",
    demand: "High",
    difficulty: "Beginner",
    matchScore: 92,
    skills: ["HTML/CSS", "JavaScript", "React", "UI/UX Design"],
    timeToJob: "6-8 months",
    companies: ["Google", "Meta", "Netflix", "Airbnb"],
    color: "codora-primary"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    description: "Master both frontend and backend development",
    icon: Database,
    salary: "$85K - $140K",
    growth: "+22%",
    demand: "Very High",
    difficulty: "Intermediate",
    matchScore: 87,
    skills: ["React", "Node.js", "Databases", "DevOps"],
    timeToJob: "8-12 months",
    companies: ["Amazon", "Microsoft", "Spotify", "Uber"],
    color: "codora-secondary"
  },
  {
    id: 3,
    title: "Data Scientist",
    description: "Extract insights from data using AI and machine learning",
    icon: Brain,
    salary: "$95K - $160K",
    growth: "+35%",
    demand: "Very High",
    difficulty: "Advanced",
    matchScore: 78,
    skills: ["Python", "Machine Learning", "Statistics", "SQL"],
    timeToJob: "10-14 months",
    companies: ["OpenAI", "Tesla", "Apple", "LinkedIn"],
    color: "codora-accent"
  },
  {
    id: 4,
    title: "Mobile App Developer",
    description: "Create mobile applications for iOS and Android",
    icon: Smartphone,
    salary: "$80K - $130K",
    growth: "+19%",
    demand: "High",
    difficulty: "Intermediate",
    matchScore: 84,
    skills: ["React Native", "Swift", "Kotlin", "Mobile UI"],
    timeToJob: "7-10 months",
    companies: ["Instagram", "WhatsApp", "Snapchat", "TikTok"],
    color: "codora-success"
  }
];

const CareerRecommendations = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Personalized
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Career Recommendations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Based on your skills assessment, interests, and market demand, here are the career paths 
            perfectly tailored for you. Each comes with a complete roadmap and gamified learning challenges.
          </p>
        </div>

        {/* Assessment Status */}
        <div className="bg-card rounded-lg p-6 shadow-card mb-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-8 h-8 text-codora-success" />
              <div>
                <h3 className="font-semibold">Career Assessment Complete</h3>
                <p className="text-sm text-muted-foreground">Based on 47 questions about your skills, interests, and goals</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Retake Assessment
            </Button>
          </div>
          <div className="bg-gradient-primary/10 rounded-lg p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Overall Career Readiness</span>
              <span className="font-bold">Level 3 - Intermediate</span>
            </div>
            <Progress value={68} className="mt-2" />
          </div>
        </div>

        {/* Career Paths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {careerPaths.map((path) => {
            const IconComponent = path.icon;
            return (
              <Card key={path.id} className="bg-card shadow-card border-0 hover:shadow-hero transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                {/* Match Score Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-codora-success text-white font-bold">
                    {path.matchScore}% Match
                  </Badge>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-${path.color}/10 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-8 h-8 text-${path.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{path.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mb-3">
                        {path.description}
                      </CardDescription>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Target className="w-4 h-4 text-codora-primary" />
                          <span className="font-semibold">{path.salary}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4 text-codora-success" />
                          <span className="text-codora-success font-medium">{path.growth}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Key Info */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-background rounded-lg p-3">
                      <div className="text-xs text-muted-foreground mb-1">Demand</div>
                      <div className="font-semibold text-sm">{path.demand}</div>
                    </div>
                    <div className="bg-background rounded-lg p-3">
                      <div className="text-xs text-muted-foreground mb-1">Time to Job</div>
                      <div className="font-semibold text-sm">{path.timeToJob}</div>
                    </div>
                    <div className="bg-background rounded-lg p-3">
                      <div className="text-xs text-muted-foreground mb-1">Level</div>
                      <div className="font-semibold text-sm">{path.difficulty}</div>
                    </div>
                  </div>

                  {/* Key Skills */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Key Skills to Master:</div>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Top Companies */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Top Hiring Companies:</div>
                    <div className="text-sm text-muted-foreground">
                      {path.companies.join(" • ")}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="game" className="w-full mt-6">
                    <Target className="w-4 h-4 mr-2" />
                    Start My Roadmap
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-secondary rounded-2xl p-8 shadow-hero max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not Sure About These Paths?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Take our comprehensive career assessment again or explore more career options 
              tailored to your evolving interests and skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-white/90 shadow-button">
                Retake Assessment
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Explore All Careers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerRecommendations;