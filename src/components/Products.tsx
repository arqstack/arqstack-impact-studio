import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  TrendingUp, 
  Shield, 
  Zap,
  Star,
  ArrowRight 
} from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Package,
      title: "ArqFlow",
      category: "Workflow Management",
      description: "Intelligent workflow automation platform that streamlines business processes and improves team productivity.",
      features: ["Visual workflow builder", "Real-time analytics", "API integrations", "Team collaboration"],
      pricing: "Starting at $99/month",
      badge: "Popular",
      badgeVariant: "default" as const
    },
    {
      icon: TrendingUp,
      title: "ArqAnalytics",
      category: "Business Intelligence",
      description: "Advanced analytics platform that turns your data into actionable insights with AI-powered recommendations.",
      features: ["Custom dashboards", "Predictive analytics", "Data visualization", "Export capabilities"],
      pricing: "Starting at $149/month",
      badge: "New",
      badgeVariant: "secondary" as const
    },
    {
      icon: Shield,
      title: "ArqSecure",
      category: "Security Suite",
      description: "Comprehensive cybersecurity platform designed to protect your digital infrastructure and sensitive data.",
      features: ["Threat detection", "Compliance monitoring", "Incident response", "Security reporting"],
      pricing: "Starting at $199/month",
      badge: "Enterprise",
      badgeVariant: "outline" as const
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready-to-deploy solutions that solve common business challenges and accelerate growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 border-border bg-card relative animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant={product.badgeVariant}>{product.badge}</Badge>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-accent font-medium">{product.category}</p>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <Zap className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-lg font-semibold text-foreground mb-4">{product.pricing}</p>
                  <div className="space-y-2">
                    <Button variant="hero" className="w-full group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" className="w-full">
                      View Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Product showcase stats */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">Uptime</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-primary mr-2">4.9</span>
                <Star className="h-6 w-6 fill-primary text-primary" />
              </div>
              <p className="text-muted-foreground">User Rating</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;