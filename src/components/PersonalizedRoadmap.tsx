import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  Circle, 
  Lock, 
  Play, 
  Trophy, 
  Star, 
  Clock, 
  BookOpen, 
  Zap,
  Target,
  Users
} from "lucide-react";

const roadmapData = {
  career: "Frontend Developer",
  totalDuration: "6-8 months",
  currentLevel: 2,
  totalLevels: 8,
  xpEarned: 2850,
  xpToNextLevel: 1150,
  overallProgress: 35
};

const roadmapPhases = [
  {
    id: 1,
    title: "Foundation Phase",
    duration: "4-6 weeks",
    status: "completed",
    xpReward: 500,
    modules: [
      {
        id: 1,
        title: "HTML Fundamentals",
        status: "completed",
        xp: 100,
        challenges: 8,
        completedChallenges: 8,
        timeSpent: "12h"
      },
      {
        id: 2,
        title: "CSS Basics & Styling",
        status: "completed",
        xp: 150,
        challenges: 12,
        completedChallenges: 12,
        timeSpent: "18h"
      },
      {
        id: 3,
        title: "Responsive Design",
        status: "completed",
        xp: 200,
        challenges: 10,
        completedChallenges: 10,
        timeSpent: "15h"
      }
    ]
  },
  {
    id: 2,
    title: "Interactive Web",
    duration: "6-8 weeks",
    status: "current",
    xpReward: 750,
    modules: [
      {
        id: 4,
        title: "JavaScript Fundamentals",
        status: "completed",
        xp: 200,
        challenges: 15,
        completedChallenges: 15,
        timeSpent: "25h"
      },
      {
        id: 5,
        title: "DOM Manipulation",
        status: "current",
        xp: 180,
        challenges: 12,
        completedChallenges: 8,
        timeSpent: "14h"
      },
      {
        id: 6,
        title: "Async JavaScript",
        status: "locked",
        xp: 220,
        challenges: 14,
        completedChallenges: 0,
        timeSpent: "0h"
      }
    ]
  },
  {
    id: 3,
    title: "React Mastery",
    duration: "8-10 weeks",
    status: "locked",
    xpReward: 1000,
    modules: [
      {
        id: 7,
        title: "React Fundamentals",
        status: "locked",
        xp: 250,
        challenges: 16,
        completedChallenges: 0,
        timeSpent: "0h"
      },
      {
        id: 8,
        title: "State Management",
        status: "locked",
        xp: 300,
        challenges: 18,
        completedChallenges: 0,
        timeSpent: "0h"
      }
    ]
  }
];

const PersonalizedRoadmap = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-codora-success" />;
      case "current":
        return <Play className="w-5 h-5 text-codora-primary" />;
      case "locked":
        return <Lock className="w-5 h-5 text-muted-foreground" />;
      default:
        return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-codora-success bg-codora-success/5";
      case "current":
        return "border-codora-primary bg-codora-primary/5";
      case "locked":
        return "border-muted bg-muted/20";
      default:
        return "border-muted";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Personal
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Learning Roadmap
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-curated learning path tailored to your goals. Complete challenges, earn XP, 
            and level up your skills systematically.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-card mb-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Career Info */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{roadmapData.career}</h3>
              <p className="text-muted-foreground">Target Role</p>
            </div>

            {/* Level Progress */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Level {roadmapData.currentLevel}</h3>
              <p className="text-muted-foreground">{roadmapData.xpEarned} XP Earned</p>
              <Progress value={(roadmapData.xpEarned / (roadmapData.xpEarned + roadmapData.xpToNextLevel)) * 100} className="mt-2" />
            </div>

            {/* Time Progress */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{roadmapData.overallProgress}% Complete</h3>
              <p className="text-muted-foreground">{roadmapData.totalDuration} Total</p>
            </div>
          </div>
        </div>

        {/* Roadmap Phases */}
        <div className="space-y-8">
          {roadmapPhases.map((phase, phaseIndex) => (
            <Card key={phase.id} className={`shadow-card border-2 ${getStatusColor(phase.status)} transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(phase.status)}
                    <div>
                      <CardTitle className="text-xl">{phase.title}</CardTitle>
                      <CardDescription className="flex items-center space-x-4 mt-1">
                        <span>{phase.duration}</span>
                        <Badge className="bg-codora-accent/10 text-codora-accent border-codora-accent/20">
                          <Zap className="w-3 h-3 mr-1" />
                          {phase.xpReward} XP
                        </Badge>
                      </CardDescription>
                    </div>
                  </div>
                  {phase.status === "current" && (
                    <Button variant="game" size="sm">
                      Continue Learning
                    </Button>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phase.modules.map((module) => (
                    <Card key={module.id} className={`p-4 ${getStatusColor(module.status)} transition-all duration-300 hover:shadow-button`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(module.status)}
                          <h4 className="font-semibold text-sm">{module.title}</h4>
                        </div>
                        {module.status !== "locked" && (
                          <Badge variant="outline" className="text-xs">
                            {module.xp} XP
                          </Badge>
                        )}
                      </div>

                      {module.status !== "locked" && (
                        <div className="space-y-2 text-xs text-muted-foreground">
                          <div className="flex justify-between">
                            <span>Challenges:</span>
                            <span>{module.completedChallenges}/{module.challenges}</span>
                          </div>
                          <Progress 
                            value={(module.completedChallenges / module.challenges) * 100} 
                            className="h-2"
                          />
                          <div className="flex justify-between">
                            <span>Time Spent:</span>
                            <span>{module.timeSpent}</span>
                          </div>
                        </div>
                      )}

                      <div className="mt-4">
                        {module.status === "current" && (
                          <Button variant="game" size="sm" className="w-full">
                            <Play className="w-3 h-3 mr-2" />
                            Continue
                          </Button>
                        )}
                        {module.status === "completed" && (
                          <Button variant="success" size="sm" className="w-full">
                            <Trophy className="w-3 h-3 mr-2" />
                            Completed
                          </Button>
                        )}
                        {module.status === "locked" && (
                          <Button variant="ghost" size="sm" className="w-full" disabled>
                            <Lock className="w-3 h-3 mr-2" />
                            Locked
                          </Button>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Next Steps */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 shadow-hero max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for Your Next Challenge?
            </h3>
            <p className="text-white/90 mb-6">
              Complete "DOM Manipulation" challenges to unlock the next module and earn bonus XP!
            </p>
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold">
              <BookOpen className="w-4 h-4 mr-2" />
              Take Challenge Test
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedRoadmap;