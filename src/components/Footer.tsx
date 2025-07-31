import { Button } from "@/components/ui/button";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ArqStack
            </h3>
            <p className="text-background/70 leading-relaxed">
              Transforming ideas into impactful software solutions. Your trusted partner for digital innovation.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-background/70 hover:text-background transition-colors">Custom Development</a></li>
              <li><a href="#services" className="text-background/70 hover:text-background transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="text-background/70 hover:text-background transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="text-background/70 hover:text-background transition-colors">Data Engineering</a></li>
              <li><a href="#services" className="text-background/70 hover:text-background transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Products</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-background/70 hover:text-background transition-colors">ArqFlow</a></li>
              <li><a href="#products" className="text-background/70 hover:text-background transition-colors">ArqAnalytics</a></li>
              <li><a href="#products" className="text-background/70 hover:text-background transition-colors">ArqSecure</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Enterprise Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-background/70 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/70 mb-4 md:mb-0">
              © 2024 ArqStack. All rights reserved.
            </p>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToTop}
              className="text-background/70 hover:text-background hover:bg-background/10 group"
            >
              Back to top
              <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;