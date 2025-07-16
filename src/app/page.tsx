import About from "@/components/About";
import Contact from "@/components/Contact";
import EWaste from "@/components/E-Waste"; // Assuming you have an EWaste component
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Home from "@/components/Home";
import Impact from "@/components/Impact";
import NavigationBar from "@/components/NavigationBar";
import Pledge from "@/components/Pledge";
import Quiz from "@/components/Quiz";
import Tips from "@/components/Tips";

import Image from "next/image";

export default function Landing() {
  return (
    <div>
      {/* Background section for navbar and hero only */}
      <div className="relative min-h-screen">
        {/* Background for navbar and hero */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.jpg"
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#006400]/50 to-[#00008B]/50 z-10"></div>
          <div className="absolute inset-0 bg-black/50 z-11"></div>
        </div>

        <div className="relative z-20">
          <NavigationBar />
          <Home />
        </div>
      </div>

      {/* Other sections outside the background container */}
      <About />
      <EWaste />
      <Impact />
      <Tips />
      <Quiz />
      <Gallery />
      <Pledge />
      <Contact />

      {/* Footer outside the background container */}
      <Footer />
    </div>
  );
}
