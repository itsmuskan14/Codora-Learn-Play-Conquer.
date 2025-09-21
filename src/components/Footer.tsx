import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo2.png"; // adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Codora Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Codora
              </span>
            </div>
            <p className="text-muted-foreground">
              Empowering the next generation of developers through gamified,
              AI-powered learning experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Learning */}
          <div className="space-y-4">
            <h4 className="font-semibold">Learning</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Individual Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Career */}
          <div className="space-y-4">
            <h4 className="font-semibold">Career</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Interview Prep
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Job Placement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Career Guidance
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; 2024 Codora. All rights reserved. Built for learners, by
            learners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;