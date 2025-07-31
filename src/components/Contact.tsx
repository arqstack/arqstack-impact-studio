import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Calendar
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@arqstack.com",
      description: "Get in touch for project inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak with our team directly"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Tech Street, Innovation District",
      description: "San Francisco, CA 94105"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9AM - 6PM PST",
      description: "24/7 support available"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Start Building Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team and let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card className="shadow-glow border-border bg-card animate-slide-in">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <MessageSquare className="h-6 w-6 text-primary mr-3" />
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="john@company.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company</label>
                <Input placeholder="Your Company Name" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Project Type</label>
                <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground">
                  <option>Custom Software Development</option>
                  <option>Mobile App Development</option>
                  <option>Cloud Solutions</option>
                  <option>Data Engineering</option>
                  <option>Product Purchase</option>
                  <option>Consulting</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us about your project, timeline, and requirements..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" className="w-full group">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact information */}
          <div className="space-y-8">
            <div className="grid gap-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-soft transition-all duration-300 border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium mb-1">{info.details}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick actions */}
            <Card className="bg-gradient-hero border-border shadow-soft animate-fade-in" style={{ animationDelay: "400ms" }}>
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Schedule a Free Consultation
                </h3>
                <p className="text-muted-foreground mb-6">
                  Book a 30-minute call to discuss your project requirements and get expert advice.
                </p>
                <Button variant="hero" size="lg" className="w-full">
                  Book a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;