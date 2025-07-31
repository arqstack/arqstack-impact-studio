import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Rocket, Users2, TrendingUp } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Rocket,
      title: "Startups & Entrepreneurs",
      description: "Launch your MVP quickly and scale efficiently",
      image: "/api/placeholder/300/200",
      details: [
        "MVP development in 4-8 weeks",
        "Cost-effective solutions",
        "Scalable architecture",
        "Technical consulting"
      ],
      story: "\"ArqStack helped us build and launch our fintech platform in just 6 weeks. Their startup-friendly approach and technical expertise were exactly what we needed.\"",
      author: "Sarah Kim, Founder of PayFlow"
    },
    {
      icon: Building2,
      title: "Enterprise Companies",
      description: "Modernize legacy systems and drive digital transformation",
      image: "/api/placeholder/300/200",
      details: [
        "Legacy system migration",
        "Enterprise security",
        "Compliance & regulations",
        "24/7 enterprise support"
      ],
      story: "\"The migration of our 15-year-old system to a modern cloud platform was seamless. ArqStack's enterprise experience made all the difference.\"",
      author: "Michael Chen, CTO at TechCorp"
    },
    {
      icon: Users2,
      title: "Growing Businesses", 
      description: "Scale your technology as your business grows",
      image: "/api/placeholder/300/200",
      details: [
        "Performance optimization",
        "Team augmentation",
        "Process automation",
        "Growth planning"
      ],
      story: "\"As we scaled from 10 to 100 employees, ArqStack's solutions grew with us. Their proactive approach prevented many potential issues.\"",
      author: "Emily Rodriguez, COO at GrowthCo"
    },
    {
      icon: TrendingUp,
      title: "Digital Agencies",
      description: "White-label development for your clients",
      image: "/api/placeholder/300/200",
      details: [
        "White-label services",
        "Agency partnerships",
        "Client collaboration",
        "Flexible engagement"
      ],
      story: "\"ArqStack became our trusted development partner. They deliver high-quality work that our clients love, allowing us to focus on strategy.\"",
      author: "James Park, Creative Director at PixelAgency"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Work With
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From startups to enterprises, we tailor our approach to meet your unique needs and goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-border bg-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm rounded-lg p-3 group-hover:bg-primary/30 transition-colors">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {useCase.description}
                      </p>
                    </div>

                    {/* Key benefits */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground text-sm">Key Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {useCase.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                      <blockquote className="text-sm italic text-foreground mb-2">
                        {useCase.story}
                      </blockquote>
                      <cite className="text-xs text-muted-foreground font-medium">
                        — {useCase.author}
                      </cite>
                    </div>

                    <Button variant="ghost" className="w-full group justify-between hover:bg-primary/5">
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '800ms'}}>
          <Card className="bg-gradient-hero border-border shadow-soft max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Don't See Your Use Case?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every business is unique. Let's discuss your specific needs and create a custom solution 
                that drives real results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="group">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View All Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UseCases;