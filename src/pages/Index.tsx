import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import UseCases from "@/components/UseCases";
import ToolsIntegration from "@/components/ToolsIntegration";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Products />
      <UseCases />
      <ToolsIntegration />
      <Testimonials />
      <Pricing />
      <FAQ />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
