import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of software projects do you specialize in?",
      answer: "We specialize in custom web applications, mobile apps (iOS/Android), cloud solutions, data engineering, e-commerce platforms, and enterprise software. Our expertise spans across various industries including fintech, healthcare, e-commerce, and SaaS platforms."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. Simple projects typically take 4-8 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements. Our support plans range from basic maintenance to 24/7 enterprise support."
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile development methodology with regular sprints and client feedback loops. Our process includes discovery, planning, design, development, testing, deployment, and ongoing support. You'll have full visibility into progress with regular updates and demos."
    },
    {
      question: "Can you work with our existing development team?",
      answer: "Absolutely! We often work as an extension of existing teams. Whether you need additional developers, specialized expertise, or full project takeover, we can adapt to your preferred collaboration model and integrate seamlessly with your workflow."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Node.js, Python, .NET, AWS, Azure, Docker, Kubernetes, and many more. We choose the best technology stack based on your project requirements, scalability needs, and existing infrastructure."
    },
    {
      question: "How do you ensure code quality and security?",
      answer: "We follow industry best practices including code reviews, automated testing, security audits, and compliance standards. All code goes through rigorous quality assurance, and we implement security measures at every level of development."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project complexity, timeline, and resource requirements. We provide detailed proposals with transparent pricing after understanding your needs."
    },
    {
      question: "Do you sign NDAs and handle sensitive data?",
      answer: "Yes, we understand the importance of confidentiality and data security. We're happy to sign NDAs and have experience handling sensitive data across various industries. We follow strict security protocols and compliance requirements."
    },
    {
      question: "Can you help migrate legacy systems?",
      answer: "Yes, legacy system modernization is one of our specialties. We can help migrate old systems to modern platforms, improve performance, enhance security, and ensure minimal disruption to your business operations during the transition."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Find out more about our services, process, and how we can help your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
          <Card className="shadow-soft border-border bg-card/50 backdrop-blur-sm animate-slide-up">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:text-primary transition-colors hover:no-underline group">
                      <span className="font-medium group-hover:translate-x-1 transition-transform">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact section */}
          <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '400ms'}}>
            <Card className="bg-gradient-hero border-border shadow-soft">
              <CardContent className="p-8">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Still have questions?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Can't find the answer you're looking for? Our team is here to help. 
                  Get in touch and we'll respond within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" className="group">
                    Contact Support
                    <MessageCircle className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button variant="outline">
                    Schedule a Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;