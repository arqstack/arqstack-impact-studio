import { Card, CardContent } from "@/components/ui/card";

const ToolsIntegration = () => {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "TypeScript", category: "Language" },
    { name: "Next.js", category: "Framework" },
    { name: "Azure", category: "Cloud" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "GraphQL", category: "API" },
    { name: "Redis", category: "Cache" },
    { name: "Terraform", category: "Infrastructure" },
    { name: "Jest", category: "Testing" },
    { name: "Cypress", category: "Testing" },
    { name: "Stripe", category: "Payment" },
    { name: "Auth0", category: "Authentication" },
    { name: "Supabase", category: "Backend" },
    { name: "Vercel", category: "Deployment" }
  ];

  const integrations = [
    { name: "Slack", category: "Communication" },
    { name: "Jira", category: "Project Management" },
    { name: "GitHub", category: "Version Control" },
    { name: "Figma", category: "Design" },
    { name: "Notion", category: "Documentation" },
    { name: "Zapier", category: "Automation" },
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "Marketing" },
    { name: "Mailchimp", category: "Email" },
    { name: "Twilio", category: "Communication" },
    { name: "SendGrid", category: "Email" },
    { name: "Google Analytics", category: "Analytics" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technologies & Integrations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with cutting-edge technologies and integrate with the tools you already use.
          </p>
        </div>

        {/* Technologies Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center animate-fade-in">
            Technologies We Master
          </h3>
          
          {/* Continuous scroll animation */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8 w-max">
              {[...technologies, ...technologies].map((tech, index) => (
                <Card 
                  key={index}
                  className="flex-shrink-0 group hover:shadow-card transition-all duration-300 border-border bg-card/50 backdrop-blur-sm hover:-translate-y-1"
                >
                  <CardContent className="p-4 text-center min-w-[120px]">
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {tech.category}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Integrations Grid */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center animate-fade-in">
            Popular Integrations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <Card 
                key={index}
                className="group hover:shadow-card transition-all duration-300 border-border bg-card hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <div className="w-6 h-6 bg-primary/60 rounded group-hover:bg-primary transition-colors"></div>
                  </div>
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                    {integration.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {integration.category}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 animate-fade-in" style={{animationDelay: '600ms'}}>
          <Card className="bg-gradient-hero border-border shadow-soft">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Technologies</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <p className="text-muted-foreground">Integrations</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <p className="text-muted-foreground">Uptime</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    </section>
  );
};

export default ToolsIntegration;