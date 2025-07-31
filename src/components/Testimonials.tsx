import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      image: "/api/placeholder/64/64",
      rating: 5,
      content: "ArqStack transformed our legacy system into a modern, scalable platform. Their expertise in cloud migration and API development exceeded our expectations. The team was professional, responsive, and delivered on time."
    },
    {
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      company: "DataVision Analytics",
      image: "/api/placeholder/64/64",
      rating: 5,
      content: "Working with ArqStack was a game-changer for our startup. They built our mobile app and analytics dashboard from scratch. The quality of code and attention to detail is outstanding. Highly recommended!"
    },
    {
      name: "Emily Watson",
      role: "Head of Digital",
      company: "RetailMax Corp",
      image: "/api/placeholder/64/64", 
      rating: 5,
      content: "ArqStack's team integrated seamlessly with our internal developers. Their custom e-commerce solution increased our conversion rates by 40%. The ongoing support and maintenance have been exceptional."
    },
    {
      name: "James Park",
      role: "VP Engineering",
      company: "FinanceFirst",
      image: "/api/placeholder/64/64",
      rating: 5,
      content: "Security and compliance were our top priorities. ArqStack delivered a robust banking platform that meets all regulatory requirements. Their cybersecurity expertise gave us complete confidence."
    },
    {
      name: "Lisa Thompson",
      role: "Product Manager", 
      company: "HealthTech Innovations",
      image: "/api/placeholder/64/64",
      rating: 5,
      content: "ArqStack helped us modernize our healthcare platform with HIPAA-compliant features. The user experience improvements they implemented have significantly increased patient engagement."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with ArqStack.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <Card className="shadow-hover border-border bg-card relative overflow-hidden animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-primary/20 mb-6" />
              
              <div className="space-y-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div className="flex items-center space-x-4 pt-6 border-t border-border">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 hover:border-primary/40 transition-colors"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 fill-white text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-sm text-accent font-medium">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="hover:shadow-card transition-all hover:scale-110"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="hover:shadow-card transition-all hover:scale-110"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {testimonial.company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;