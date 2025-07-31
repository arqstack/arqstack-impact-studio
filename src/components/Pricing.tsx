import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, Star, Zap, Crown } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for small projects and startups",
      monthlyPrice: 99,
      annualPrice: 79,
      badge: null,
      popular: false,
      features: [
        "Up to 3 projects",
        "Basic support",
        "Code reviews",
        "Documentation",
        "Email support",
        "1 month warranty"
      ],
      limitations: [
        "No priority support",
        "Limited revisions"
      ]
    },
    {
      name: "Professional",
      icon: Star,
      description: "Most popular choice for growing businesses",
      monthlyPrice: 299,
      annualPrice: 239,
      badge: "Most Popular",
      popular: true,
      features: [
        "Up to 10 projects",
        "Priority support",
        "Advanced code reviews",
        "Technical documentation",
        "Phone & email support",
        "3 months warranty",
        "Performance optimization",
        "Security audit"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      icon: Crown,
      description: "For large organizations with custom needs",
      monthlyPrice: 599,
      annualPrice: 479,
      badge: "Best Value",
      popular: false,
      features: [
        "Unlimited projects",
        "24/7 priority support",
        "Dedicated account manager",
        "Custom architecture",
        "On-site consultation",
        "1 year warranty",
        "Advanced security",
        "Compliance support",
        "Custom integrations",
        "Training sessions"
      ],
      limitations: []
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core features with no hidden fees.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Annual
            </span>
            <Badge variant="secondary" className="ml-2">Save 20%</Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group transition-all duration-500 animate-slide-up ${
                plan.popular 
                  ? 'border-primary shadow-glow scale-105 bg-card' 
                  : 'border-border shadow-card hover:shadow-hover hover:-translate-y-2 bg-card/50 backdrop-blur-sm'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant={plan.popular ? "default" : "secondary"} className="px-4 py-1">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                  plan.popular ? 'bg-primary/20' : 'bg-primary/10'
                }`}>
                  <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-primary' : 'text-primary'}`} />
                </div>
                
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
                
                <div className="mt-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-foreground">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Billed annually (${plan.annualPrice * 12})
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className={`w-full mb-6 group transition-all ${
                    plan.popular ? 'hover:shadow-hover' : 'hover:shadow-card'
                  } hover:scale-105`}
                >
                  Get Started
                </Button>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '600ms'}}>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-soft max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Need something custom?
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer custom enterprise solutions tailored to your specific requirements. 
              Contact us for a personalized quote and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero">Contact Sales</Button>
              <Button variant="outline">Schedule Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;