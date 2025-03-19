import Footer from "@/components/Footer";
import About from "@/components/Home/About";
import Certifications from "@/components/Home/Certifications";
import Contact from "@/components/Home/Contact";
import Education from "@/components/Home/Education";
import Experience from "@/components/Home/Experience";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import Skills from "@/components/Home/Skills";
import Testimonials from "@/components/Home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <section id="services">
      <Services/>
      </section>
      <section id="about"><About/> </section>
      <section id="education"><Education/> </section>
      <section id="skills"><Skills/> </section>
      <section id="testimonials"><Testimonials/> </section>
      <section id="contact">  <Contact/></section>
      
      
      
     
      <div className="flex justify-center py-12 lg:px-20 px-8">
      </div>
      {/* <Footer/> */}
    </main>
  );
}
