import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="text-[#090909] selection:bg-[#f5f3f2] selection:text-black">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Portfolio/>
      <Services/>
    
      <Contact/>
      <Footer/>
    </div>
  );
}
