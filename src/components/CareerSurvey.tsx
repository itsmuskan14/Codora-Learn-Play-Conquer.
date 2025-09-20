import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, Brain, Clock, Users } from "lucide-react";
import { useState } from "react";

const surveyQuestions = [
  {
    id: 1,
    category: "Skills Assessment",
    question: "How would you rate your current programming experience?",
    options: [
      { value: "beginner", label: "Complete beginner - No programming experience", weight: 1 },
      { value: "some_basics", label: "Some basics - HTML/CSS or simple scripts", weight: 2 },
      { value: "intermediate", label: "Intermediate - Can build small projects", weight: 3 },
      { value: "advanced", label: "Advanced - Professional development experience", weight: 4 }
    ]
  },
  {
    id: 2,
    category: "Interest Areas",
    question: "What type of technology problems excite you most?",
    options: [
      { value: "visual_design", label: "Creating beautiful user interfaces and experiences", weight: 1 },
      { value: "data_analysis", label: "Analyzing data to find patterns and insights", weight: 2 },
      { value: "system_building", label: "Building robust systems and infrastructure", weight: 3 },
      { value: "mobile_apps", label: "Developing mobile applications", weight: 4 }
    ]
  },
  {
    id: 3,
    category: "Work Style",
    question: "Which work environment appeals to you most?",
    options: [
      { value: "creative_team", label: "Creative team working on user-facing products", weight: 1 },
      { value: "research_focused", label: "Research-focused environment with data and AI", weight: 2 },
      { value: "fast_paced", label: "Fast-paced startup building scalable systems", weight: 3 },
      { value: "enterprise", label: "Large enterprise with established processes", weight: 4 }
    ]
  },
  {
    id: 4,
    category: "Learning Style",
    question: "How do you prefer to learn new skills?",
    options: [
      { value: "hands_on", label: "Hands-on projects and building things immediately", weight: 1 },
      { value: "theory_first", label: "Understanding theory and concepts before practice", weight: 2 },
      { value: "collaborative", label: "Learning with others and peer collaboration", weight: 3 },
      { value: "self_paced", label: "Self-paced with detailed documentation", weight: 4 }
    ]
  },
  {
    id: 5,
    category: "Career Goals",
    question: "What's your primary career objective?",
    options: [
      { value: "career_change", label: "Complete career change to tech industry", weight: 1 },
      { value: "skill_upgrade", label: "Upgrade skills in current tech role", weight: 2 },
      { value: "freelance", label: "Start freelancing or consulting", weight: 3 },
      { value: "startup", label: "Join a startup or build my own company", weight: 4 }
    ]
  }
];

const CareerSurvey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const progress = (Object.keys(answers).length / surveyQuestions.length) * 100;

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const canProceed = answers[surveyQuestions[currentQuestion]?.id];

  if (isComplete) {
    return (
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Assessment Complete!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our AI is analyzing your responses to create personalized career recommendations...
            </p>
            
            <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Brain className="w-8 h-8 text-codora-primary animate-pulse" />
                <span className="text-lg font-semibold">AI Analysis in Progress</span>
              </div>
              <Progress value={87} className="mb-4" />
              <p className="text-sm text-muted-foreground">
                Analyzing skills, interests, and market trends...
              </p>
            </div>

            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              View My Career Recommendations
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const question = surveyQuestions[currentQuestion];

  return (
    <section className="py-20 bg-gradient-card min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Career Assessment
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Answer a few questions about your skills, interests, and goals. 
            Our AI will analyze your responses to recommend the perfect career path.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium">Question {currentQuestion + 1} of {surveyQuestions.length}</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* Question Card */}
        <Card className="bg-card shadow-hero border-0 mb-8">
          <CardHeader>
            <Badge className="w-fit mb-4 bg-codora-primary/10 text-codora-primary">
              {question.category}
            </Badge>
            <CardTitle className="text-2xl leading-relaxed">
              {question.question}
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <RadioGroup 
              value={answers[question.id] || ""} 
              onValueChange={(value) => handleAnswer(question.id, value)}
              className="space-y-4"
            >
              {question.options.map((option) => (
                <div key={option.value} className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer text-base leading-relaxed">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>~2 minutes remaining</span>
          </div>
          
          <Button 
            variant="hero" 
            onClick={handleNext}
            disabled={!canProceed}
            className="min-w-32"
          >
            {currentQuestion === surveyQuestions.length - 1 ? "Complete Assessment" : "Next"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 text-center">
          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>50K+ assessments completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-codora-success" />
              <span>89% accuracy rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSurvey;