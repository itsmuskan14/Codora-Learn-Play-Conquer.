import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Star, 
  Clock, 
  Target, 
  Zap, 
  Award,
  TrendingUp,
  BookOpen,
  Code2,
  CheckCircle,
  PlayCircle
} from "lucide-react";

const userStats = {
  level: 3,
  totalXP: 2850,
  xpToNextLevel: 1150,
  streak: 12,
  completedChallenges: 47,
  totalChallenges: 89,
  skillsLearned: 8,
  averageScore: 87
};

const recentAchievements = [
  {
    id: 1,
    title: "JavaScript Master",
    description: "Completed all JavaScript fundamentals",
    xp: 500,
    date: "2 days ago",
    icon: Code2,
    rarity: "Epic"
  },
  {
    id: 2,
    title: "Week Warrior",
    description: "7-day learning streak",
    xp: 200,
    date: "1 week ago",
    icon: Award,
    rarity: "Rare"
  },
  {
    id: 3,
    title: "Quiz Champion",
    description: "Perfect score on DOM manipulation test",
    xp: 300,
    date: "3 days ago",
    icon: Trophy,
    rarity: "Legendary"
  }
];

const skillProgress = [
  { skill: "HTML/CSS", level: 5, progress: 100, xp: 750 },
  { skill: "JavaScript", level: 4, progress: 85, xp: 680 },
  { skill: "React", level: 2, progress: 45, xp: 270 },
  { skill: "Node.js", level: 1, progress: 20, xp: 100 },
  { skill: "Git/GitHub", level: 3, progress: 70, xp: 420 }
];

const weeklyActivity = [
  { day: "Mon", xp: 120 },
  { day: "Tue", xp: 200 },
  { day: "Wed", xp: 0 },
  { day: "Thu", xp: 350 },
  { day: "Fri", xp: 180 },
  { day: "Sat", xp: 240 },
  { day: "Sun", xp: 90 }
];

const ProgressDashboard = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Learning
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Progress Dashboard
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track your XP, achievements, and skill development. See how you're progressing 
            toward your career goals with detailed analytics.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-primary text-white border-0 shadow-hero">
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">Level {userStats.level}</div>
              <div className="text-white/80">Current Level</div>
              <Progress value={75} className="mt-3 bg-white/20" />
              <div className="text-sm text-white/80 mt-2">
                {userStats.xpToNextLevel} XP to Level 4
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-secondary text-white border-0 shadow-hero">
            <CardContent className="p-6 text-center">
              <Zap className="w-8 h-8 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{userStats.totalXP.toLocaleString()}</div>
              <div className="text-white/80">Total XP Earned</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-hero text-white border-0 shadow-hero">
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{userStats.streak}</div>
              <div className="text-white/80">Day Streak</div>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-card border-0">
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 mx-auto mb-4 text-codora-primary" />
              <div className="text-3xl font-bold mb-2">{userStats.averageScore}%</div>
              <div className="text-muted-foreground">Average Score</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="progress" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="progress">Skill Progress</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="roadmap">Next Steps</TabsTrigger>
          </TabsList>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Skill Progress */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Skill Mastery</CardTitle>
                  <CardDescription>Your progress across different technologies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skillProgress.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.skill}</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">Level {skill.level}</Badge>
                          <span className="text-sm text-muted-foreground">{skill.xp} XP</span>
                        </div>
                      </div>
                      <Progress value={skill.progress} className="h-3" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Challenge Progress */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Challenge Completion</CardTitle>
                  <CardDescription>Your journey through learning challenges</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-codora-primary mb-2">
                      {userStats.completedChallenges}/{userStats.totalChallenges}
                    </div>
                    <div className="text-muted-foreground">Challenges Completed</div>
                    <Progress 
                      value={(userStats.completedChallenges / userStats.totalChallenges) * 100} 
                      className="mt-4 h-4" 
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-codora-success/10 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-codora-success" />
                        <span>Frontend Basics</span>
                      </div>
                      <Badge className="bg-codora-success text-white">Complete</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-codora-primary/10 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <PlayCircle className="w-5 h-5 text-codora-primary" />
                        <span>JavaScript Mastery</span>
                      </div>
                      <Badge className="bg-codora-primary text-white">In Progress</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentAchievements.map((achievement) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={achievement.id} className="shadow-card hover:shadow-hero transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <Badge 
                        className={`mb-3 ${
                          achievement.rarity === 'Legendary' ? 'bg-codora-accent text-black' :
                          achievement.rarity === 'Epic' ? 'bg-codora-secondary text-white' :
                          'bg-codora-success text-white'
                        }`}
                      >
                        {achievement.rarity}
                      </Badge>
                      <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{achievement.description}</p>
                      <div className="flex justify-center items-center space-x-2">
                        <Zap className="w-4 h-4 text-codora-accent" />
                        <span className="font-semibold">+{achievement.xp} XP</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{achievement.date}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>Your XP earned each day this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyActivity.map((day, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 text-sm font-medium">{day.day}</div>
                      <div className="flex-1">
                        <Progress value={(day.xp / 350) * 100} className="h-6" />
                      </div>
                      <div className="w-16 text-sm text-right">{day.xp} XP</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-card rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">This Week Total</div>
                      <div className="text-sm text-muted-foreground">Keep up the momentum!</div>
                    </div>
                    <div className="text-2xl font-bold text-codora-primary">
                      {weeklyActivity.reduce((sum, day) => sum + day.xp, 0)} XP
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roadmap" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Recommended Next Steps</CardTitle>
                  <CardDescription>AI-suggested actions to accelerate your progress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-codora-primary/10 rounded-lg border border-codora-primary/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <BookOpen className="w-5 h-5 text-codora-primary" />
                      <span className="font-medium">Complete DOM Manipulation</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      You're 67% through this module. Finishing it will unlock React fundamentals.
                    </p>
                    <Button variant="game" size="sm">Continue Learning</Button>
                  </div>
                  
                  <div className="p-4 bg-codora-secondary/10 rounded-lg border border-codora-secondary/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <Trophy className="w-5 h-5 text-codora-secondary" />
                      <span className="font-medium">Take Quiz Challenge</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Test your JavaScript skills and earn bonus XP with our weekly challenge.
                    </p>
                    <Button variant="outline" size="sm">Start Challenge</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Career Progress</CardTitle>
                  <CardDescription>How you're tracking toward your Frontend Developer goal</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-codora-primary mb-2">68%</div>
                    <div className="text-muted-foreground">Career Readiness</div>
                    <Progress value={68} className="mt-4 h-4" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Technical Skills</span>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Portfolio Projects</span>
                      <span className="text-sm font-medium">40%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Industry Knowledge</span>
                      <span className="text-sm font-medium">60%</span>
                    </div>
                  </div>

                  <Button variant="hero" className="w-full mt-6">
                    View Full Roadmap
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProgressDashboard;