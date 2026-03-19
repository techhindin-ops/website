import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import SocialProof from "./components/SocialProof";
import Stats from "./components/Stats";
import Features from "./components/Features";
import WhyTechHind from "./components/WhyTechHind";
import ProcessFlow from "./components/ProcessFlow";
import ValueProposition from "./components/ValueProposition";
import UseCases from "./components/UseCases";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Highlights />
      <SocialProof />
      <Stats />
      <Features />
      <WhyTechHind />
      <ProcessFlow />
      <ValueProposition />
      <UseCases />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
