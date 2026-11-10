
import Hero from '../components/home/Hero';
import ProjectsSection from '../components/home/ProjectsSection';
import TrustSection from '../components/home/TrustSection';
import AboutSection from '../components/home/AboutSection';
import CalculatorPromo from '../components/home/CalculatorPromo';
import VisitCTA from '../components/home/VisitCTA';
import ContactSection from '../components/home/ContactSection';
import GallerySection from '../components/home/GallerySection';

const Home = () => {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <TrustSection />
      <GallerySection />
      <AboutSection />
      <CalculatorPromo />
      <ContactSection />
      <VisitCTA />
    </main>
  );
};

export default Home;
