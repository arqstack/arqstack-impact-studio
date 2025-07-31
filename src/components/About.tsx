import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We leverage cutting-edge technologies to create solutions that give you a competitive advantage."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We work as an extension of your team to achieve your goals."
    },
    {
      icon: Award,
      title: "Quality Driven",
      description: "We maintain the highest standards in code quality, security, and performance."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support and multi-timezone development."
    }
  ];

  const achievements = [
    "500+ Successful Projects",
    "98% Client Satisfaction",
    "50+ Enterprise Clients",
    "Industry Awards Winner"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transforming Ideas Into Digital Reality
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded with a vision to bridge the gap between innovative ideas and practical solutions, 
                ArqStack has grown into a trusted partner for businesses looking to leverage technology 
                for growth and efficiency.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experienced developers, architects, and consultants work collaboratively 
                to deliver software solutions that not only meet your current needs but also scale 
                with your business.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{achievement}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right content - Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8 animate-fade-in">Our Core Values</h3>
            
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-soft transition-all duration-300 border-border bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-hero rounded-2xl p-12 border border-border">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 animate-fade-in">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              Let's discuss how we can help transform your ideas into impactful software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button variant="hero" size="lg">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;