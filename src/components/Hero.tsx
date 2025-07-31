import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Users, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-animated bg-[400%_400%] animate-gradient-shift opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-accent/40 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Where Ideas Turn Into{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">
              Impact
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.3s'}}>
            Transform your vision into powerful software solutions. We deliver custom software, 
            on-demand services, and innovative products that drive real business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Button variant="hero" size="lg" className="group hover:shadow-hover transform hover:scale-105 transition-all">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="hover:shadow-card transform hover:scale-105 transition-all">
              View Our Work
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce" style={{animationDelay: '1s'}}>
            <button 
              onClick={scrollToServices}
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-sm mb-2">Discover More</span>
              <ChevronDown className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
            <div className="group bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-soft hover:shadow-hover hover:-translate-y-2 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.9s'}}>
              <div className="bg-primary/10 rounded-lg p-3 w-fit mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Code className="h-6 w-6 text-primary group-hover:animate-bounce-in" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Custom Software</h3>
              <p className="text-muted-foreground">Tailored solutions built to solve your unique business challenges</p>
            </div>
            
            <div className="group bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-soft hover:shadow-hover hover:-translate-y-2 transition-all duration-500 animate-slide-up" style={{animationDelay: '1.1s'}}>
              <div className="bg-accent/10 rounded-lg p-3 w-fit mx-auto mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <Zap className="h-6 w-6 text-accent group-hover:animate-bounce-in" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">On-Demand Services</h3>
              <p className="text-muted-foreground">Flexible development resources when and where you need them</p>
            </div>
            
            <div className="group bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-soft hover:shadow-hover hover:-translate-y-2 transition-all duration-500 animate-slide-up" style={{animationDelay: '1.3s'}}>
              <div className="bg-primary/10 rounded-lg p-3 w-fit mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Users className="h-6 w-6 text-primary group-hover:animate-bounce-in" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Expert Team</h3>
              <p className="text-muted-foreground">Experienced developers and architects dedicated to your success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;