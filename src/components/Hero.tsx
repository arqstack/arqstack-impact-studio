import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Where Ideas Turn Into{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Impact
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your vision into powerful software solutions. We deliver custom software, 
            on-demand services, and innovative products that drive real business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" className="group">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-soft hover:shadow-glow transition-all duration-300 animate-slide-in">
              <div className="bg-primary/10 rounded-lg p-3 w-fit mx-auto mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Software</h3>
              <p className="text-muted-foreground">Tailored solutions built to solve your unique business challenges</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-soft hover:shadow-glow transition-all duration-300 animate-slide-in [animation-delay:200ms]">
              <div className="bg-accent/10 rounded-lg p-3 w-fit mx-auto mb-4">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">On-Demand Services</h3>
              <p className="text-muted-foreground">Flexible development resources when and where you need them</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-soft hover:shadow-glow transition-all duration-300 animate-slide-in [animation-delay:400ms]">
              <div className="bg-primary/10 rounded-lg p-3 w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Experienced developers and architects dedicated to your success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;