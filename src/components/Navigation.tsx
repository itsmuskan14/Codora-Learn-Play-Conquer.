import { Button } from "@/components/ui/button";
import { Code, Trophy, BookOpen, User } from "lucide-react";
import logo from "@/assets/logo2.png"; // adjust path if needed


const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-card/50 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Codora Logo" className="w-8 h-8" />
        <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Codora
        </span>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <a
          href="#courses"
          className="text-muted-foreground hover:text-foreground transition-smooth"
        >
          Courses
        </a>
        <a
          href="#practice"
          className="text-muted-foreground hover:text-foreground transition-smooth"
        >
          Practice
        </a>
        <a
          href="#career"
          className="text-muted-foreground hover:text-foreground transition-smooth"
        >
          Career
        </a>
        <a
          href="#community"
          className="text-muted-foreground hover:text-foreground transition-smooth"
        >
          Community
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Trophy className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="w-5 h-5" />
        </Button>
        <Button variant="hero" size="sm">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
