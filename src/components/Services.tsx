import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Workflow,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "End-to-end software solutions tailored to your business needs. From web applications to enterprise systems.",
      features: ["Full-stack development", "API integration", "Legacy system modernization"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android apps", "React Native", "Progressive Web Apps"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud architecture and migration services to boost your business agility.",
      features: ["Cloud migration", "Serverless architecture", "DevOps automation"]
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Transform your data into actionable insights with modern data pipelines and analytics.",
      features: ["Data warehousing", "ETL pipelines", "Business intelligence"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: ["Security audits", "Penetration testing", "Compliance consulting"]
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation and workflow optimization.",
      features: ["RPA implementation", "Workflow design", "Integration services"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 border-border bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="group w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;