import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Credentials from "@/components/sections/Credentials";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Conditions from "@/components/sections/Conditions";
import Procedures from "@/components/sections/Procedures";
import Research from "@/components/sections/Research";
import PatientEducation from "@/components/sections/PatientEducation";
import Affiliations from "@/components/sections/Affiliations";
import Community from "@/components/sections/Community";
import Appointment from "@/components/sections/Appointment";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Credentials />
      <About />
      <Services />
      <Conditions />
      <Procedures />
      <Research />
      <PatientEducation />
      <Affiliations />
      <Community />
      <Appointment />
      <Contact />
      <Footer />
    </main>
  );
}
